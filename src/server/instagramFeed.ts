import { createServerFn } from "@tanstack/react-start";

type InstagramPost = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

type FeedResponse = {
  data: InstagramPost[];
};

let cache: { data: FeedResponse; ts: number } | null = null;
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes

export const fetchFeed = createServerFn({ method: "GET" }).handler(async () => {
  const userId = process.env.INSTAGRAM_USER_ID;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!userId || !accessToken) {
    throw new Error(
      "Instagram User ID and Access Token must be set in environment variables."
    );
  }

  if (cache && Date.now() - cache.ts < CACHE_TTL) {
    return cache.data;
  }

  const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
  const response = await fetch(
    `https://graph.instagram.com/${userId}/media?fields=${fields}&access_token=${accessToken}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Instagram feed: ${response.statusText}`);
  }

  const json = (await response.json()) as FeedResponse & {
    error?: { message: string };
  };

  if (json.error) {
    throw new Error(`Instagram API error: ${json.error.message}`);
  }

  cache = { data: json, ts: Date.now() };

  return json;
});