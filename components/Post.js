import {
   BookmarkIcon,
   ChatIcon,
   DotsHorizontalIcon,
   EmojiHappyIcon,
   HeartIcon,
   PaperAirplaneIcon
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useState } from 'react/cjs/react.production.min'
import { db } from '../firebase'
import Moment from 'react-moment'

const Post = ({ id, username, userImg, img, caption }) => {
   const { data: session } = useSession()
   const [comment, setComment] = useState([])
   const [comments, setComments] = useState([])
   const [likes, setLikes] = useState([])

   useEffect(() => {
      return onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), snapshot => setComments(snapshot.docs))
   }, [db])

   const sendComment = async e => {
      e.preventDefault()

      const commentToSend = comment
      setComment('')

      await addDoc(collection(db, 'posts', id, 'comments'), {
         comment: commentToSend,
         username: session.user.username,
         userImage: session.user.image,
         timestamp: serverTimestamp()
      })
   }

   return (
      <div className='bg-white my-7 border rounded-sm'>
         <div className='flex items-center p-5'>
            <img src={userImg} className='rounded-full h-12 w-12 border p-1 mr-3 object-contain' alt="" />
            <p className='flex-1 font-bold'>{username}</p>
            <DotsHorizontalIcon className='h-5' />
         </div>
         <img
            src={img}
            alt="image"
            className='object-cover w-full'
         />
         {session && (
            <div className='flex justify-between px-4 pt-4'>
               <div className='flex space-x-4'>
                  <HeartIcon className='btn' />
                  <ChatIcon className='btn' />
                  <PaperAirplaneIcon className='btn' />
               </div>
               <BookmarkIcon className='btn' />
            </div>
         )}
         <p className='p-5 truncate'>
            <span className='font-bold mr-1'>{username} </span> {caption}
         </p>
         {comments.length > 0 && (
            <div className='ml-10 h-20 overflow-y-scroll scrollbar-track-black scrollbar-thin'>
               {comments.map(comment => (
                  <div key={comment.id} className='flex items-center space-x-2 mb-3'>
                     <img className='h-7 rounded-full' src={comment.data().userImage} alt="user image" />
                     <p className='text-sm flex-1'> <span className='font-bold'>{comment.data().username}</span> {comment.data().comment}</p>
                     <Moment fromNow className='pr-5 text-xs'>
                        {comment.data().timestamp.toDate()}
                     </Moment>
                  </div>
               ))}
            </div>
         )}

         {session && (
            <form className='flex items-center p-4'>
               <EmojiHappyIcon className='h-7' />
               <input
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  type="text"
                  placeholder='Add a comment...'
                  className='border-none flex-1 focus:ring-0'
               />
               <button
                  type='submit'
                  disabled={!comment.trim()}
                  className='font-semibold text-blue-400'
                  onClick={sendComment}
               >
                  Post
               </button>
            </form>
         )}
      </div>
   )
}

export default Post
