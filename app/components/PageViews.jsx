import { wait } from '@/lib/posts'

const PageViews = async ({ slug }) => {
  //   const views = getPageView(slug)
  await wait(2000)
  return <div>Views: 100</div>
}

export default PageViews
