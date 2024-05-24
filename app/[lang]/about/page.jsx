import { getDictionary } from '@/lib/dictionary'
const About = async ({ params }) => {
  const { page } = await getDictionary(params.lang)
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>{page.about.title}</h1>
        <p className='text-gray-500'>{page.about.description}</p>
      </div>
    </section>
  )
}

export default About
