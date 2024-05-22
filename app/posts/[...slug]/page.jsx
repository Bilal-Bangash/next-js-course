import { Suspense } from 'react'
import house from '@/public/images/house.jpg'
import PageViews from '@/app/components/PageViews'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import Image from 'next/image'
import BlogHeaderImage from '@/app/components/BlogHeaderImage'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(post => ({
    slug: [post.slug]
  }))
}

const Page = async ({ params }) => {
  const { slug } = params
  const { content, frontmatter } = await getPostBySlug(slug[0])

  return (
    <section className='py-24'>
      <div className='container'>
        {/* Local Image */}
        {/* <Image src={house} alt='House' className='h-96 object-cover' /> */}
        {/* Remote Image */}
        <BlogHeaderImage />
        <header className='rounded bg-gray-100 p-8 dark:bg-slate-800'>
          <h1 className='font-serif text-3xl'>{frontmatter.title}</h1>
          <p className='uppercase4 mb-6 text-sm font-light leading-3'>
            {frontmatter.author}
          </p>
          <Suspense fallback={<div>Loading view count...</div>}>
            <PageViews slug={slug} />
          </Suspense>
        </header>
        <main className='prose mt-12'>{content}</main>
      </div>
    </section>
  )
}

export default Page
