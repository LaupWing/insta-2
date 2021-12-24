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

const Post = ({ id, username, userImg, img, caption }) => {
   const {data:session} = useSession()
   const [comment, setComment] = useState([])
   const [comments, setComments] = useState([])

   useEffect(()=>{
      return onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), snapshot => setComments(snapshot.docs))
   },[db])

   const sendComment = async e =>{
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
