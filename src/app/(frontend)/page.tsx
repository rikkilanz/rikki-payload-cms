import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'

import PostCard from './components/PostCard'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    // <div className="home">
    //   <div className="content">
    //     <picture>
    //       <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
    //       <Image
    //         alt="Payload Logo"
    //         height={65}
    //         src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
    //         width={65}
    //       />
    //     </picture>
    //     {!user && <h1>Welcome to your new project.</h1>}
    //     {user && <h1>Welcome back, {user.email}</h1>}
    //     <div className="links">
    //       <a
    //         className="admin"
    //         href={payloadConfig.routes.admin}
    //         rel="noopener noreferrer"
    //         target="_blank"
    //       >
    //         Go to admin panel
    //       </a>
    //       <a
    //         className="docs"
    //         href="https://payloadcms.com/docs"
    //         rel="noopener noreferrer"
    //         target="_blank"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </div>
    //   <div className="footer">
    //     <p>Update this page by editing</p>
    //     <a className="codeLink" href={fileURL}>
    //       <code>app/(frontend)/page.tsx</code>
    //     </a>
    //   </div>
    // </div>
    <div className="bg-black">
      <div className="links">
        <a
          className="admin"
          href={payloadConfig.routes.admin}
          rel="noopener noreferrer"
          target="_blank"
        >
          Go to admin panel
        </a>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 gap-4">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  )
}
