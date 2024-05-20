import { wait } from '@/lib/posts'

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random()
      if (random > 0.5) {
        reject('Failed to get data')
      } else {
        resolve('Success')
      }
    }, 3000)
  })
}

const About = async () => {
  // await getData()
  return <div>About</div>
}

export default About
