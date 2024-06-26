import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import Newsletter from '@/app/components/Newsletter'
import rehypePrettyCode from 'rehype-pretty-code'
import { cache } from 'react'

const prettyCodeOptions = {
  theme: 'one-dark-pro',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['highlighted', 'word']
  }
}

const rootDirectory = path.join(process.cwd(), 'content')

const components = {
  h1: props => (
    <h1 {...props} className='text-emerald-400'>
      {props.children}
    </h1>
  ),
  Newsletter: Newsletter
}

export const getPostBySlug = cache(async slug => {
  const realSlug = slug.replace(/\.mdx$/, '')

  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })

  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
      }
    }
  })

  return { content, frontmatter, slug: realSlug }
})

export async function getAllPosts() {
  const files = fs.readdirSync(rootDirectory)
  let posts = []
  for (let file of files) {
    const post = await getPostBySlug(file)
    posts.push(post)
  }
  await wait(2000)
  return posts
  //   const posts = files
  //     .filter(file => file.endsWith('.mdx'))
  //     .map(file => getPostBySlug(file))

  //   return Promise.all(posts)
}

export async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
