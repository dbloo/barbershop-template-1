import { fetchFeed } from "@/server/instagramFeed";
import { useQuery } from "@tanstack/react-query";

type InstagramPost = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

export default function InstagramFeed() {
const { data, error, isLoading } = useQuery({
  queryKey: ["instagram-feed"],
  queryFn: () => fetchFeed(),
  staleTime: 15 * 60 * 1000,
});
  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-0.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="aspect-square bg-gray-100 animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-sm text-white p-4">
        Sorry, we couldn't load our Instagram feed right now. Please check back later!
      </div>
    );
  }

  if (!data?.data?.length) {
    return <div className="text-sm text-gray-400 p-4">No posts found.</div>;
  }

  return (
    <div className="lg:w-6xl w-full lg:grid lg:grid-cols-3 flex flex-col gap-4 ">
      {data.data.map((post: InstagramPost) => {
        const src =
          post.media_type === "VIDEO"
            ? post.thumbnail_url ?? post.media_url
            : post.media_url;

        return (
            <div>
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square block overflow-hidden group"
          >
            {post.media_type === "VIDEO" ?(
                <video src={src} className=" rounded-2xl w-full border border-white/10 h-full object-cover transition-transform duration-300 group-hover:scale-105" autoPlay muted loop playsInline poster={post.thumbnail_url }></video>
              
            ):(
              <img
              src={src}
              alt={post.caption?.slice(0, 80) ?? "Instagram post"}
              className="w-full h-full rounded-2xl border border-white/50 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            )}
            {/* <img
              src={src}
              alt={post.caption?.slice(0, 80) ?? "Instagram post"}
              className="w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
            /> */}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              {post.media_type === "VIDEO" && (
                <svg className="w-8 h-8 text-white rounded-2xl" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
              {post.media_type === "CAROUSEL_ALBUM" && (
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="15" height="15" rx="2" />
                  <path d="M17 3h2a2 2 0 0 1 2 2v13" />
                </svg>
              )}
              
            </div>
            

            
          </a>
      </div>
        );
      })}
    </div>
  );
}
