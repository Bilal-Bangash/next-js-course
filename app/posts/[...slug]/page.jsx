import { getAllPosts, getPostBySlug } from '@/lib/posts'

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
        <header className='rounded bg-gray-100 p-8'>
          <h1 className='font-serif text-3xl'>{frontmatter.title}</h1>
          <p className='uppercase4 text-sm font-light leading-3'>
            {frontmatter.author}
          </p>
        </header>
        <main className='prose mt-12'>{content}</main>
      </div>
    </section>
  )
}

export default Page
