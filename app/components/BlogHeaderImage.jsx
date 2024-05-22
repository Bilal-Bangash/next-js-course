'use client'

import Image from 'next/image'

const imageLoader = ({ src, width, quality }) => {
  return `https://fastly.picsum.photos/id/${src}/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o`
}

const BlogHeaderImage = () => {
  return (
    <div className='relative h-96'>
      <Image
        src='7'
        alt='writing-hands'
        // width={800}
        // height={400}
        fill
        loader={imageLoader}
        className='rounded object-cover'
      />
    </div>
  )
}

export default BlogHeaderImage
