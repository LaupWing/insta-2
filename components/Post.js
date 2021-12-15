import {
   BookOpenIcon,
   ChatIcon,
   DotsHorizontalIcon,
   EmojiHappyIcon,
   HeartIcon,
   PaperAirplaneIcon
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

const Post = ({id, username, userImg, img, caption}) => {
   return (
      <div className='bg-white my-7 border rounded-sm'>
         <div className='flex items-center p-5'>
            <img src={userImg} className='rounded-full h-12 w-12 border p-1 mr-3 object-contain' alt="" />
            <p className='flex-1 font-bold'>{username}</p>
            <DotsHorizontalIcon className='h-5'/>
         </div>
      </div>
   )
}

export default Post