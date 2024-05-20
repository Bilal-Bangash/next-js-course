import { getAllPosts } from '@/lib/posts'
import NavLink from '../components/ui/NavLink'

const Posts = async () => {
  const posts = await getAllPosts()
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>All blog posts</h1>
        <ul className='mt-12'>
          {posts.map(post => (
            <li
              className='pt-4 hover:text-cyan-500 hover:underline'
              key={post.slug}
            >
              <NavLink href={`/posts/${post.slug}`}>
                <h4 className='text-lg font-medium'>
                  {post.frontmatter.title}
                </h4>
                <p className='text-sm text-gray-500'>
                  {post.frontmatter.author}
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Posts
