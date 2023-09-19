import {getSortedPostsData} from '@/lib/posts'
import ListItem from './ListItem'



export default function Posts() {
  const posts = getSortedPostsData()
  return (
    <section className=''>
        <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
            {
                posts.map((post) => ( 
                    <ListItem key= {post.id} post={post} />
                ))
            }
        </ul>
    </section>
  )
}
