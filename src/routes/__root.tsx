import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
// import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
// import { TanStackDevtools } from '@tanstack/react-devtools'
import {Navbar } from '@/components/ui/navbar'
import { Footer } from '#/components/ui/footer'
import {title, location, keywords} from '@/siteinfo'
import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query"

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: `${title} - ${location}\'s Premier Barbershop`,
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {

  const queryClient = new QueryClient();
  return (
    <html lang="en"  className='scroll-smooth' >
      <head>
        <HeadContent />
      </head>
      <QueryClientProvider client={queryClient}>
       <Navbar/>
      <body>
       
        {children}
        {/* <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        /> */}

       
        <Scripts />
      </body>
               <Footer/>
               </QueryClientProvider>

    </html>
  )
}
