import faker from '../helpers/faker'
import { useEffect, useState } from 'react'
import Story from './Story'
import { useSession } from 'next-auth/react'

function Stories() {
   const [suggestions, setSuggestions] = useState([])
   const {data:session} = useSession()

   useEffect(async () => {
      const suggestions = await faker(20)
      setSuggestions(suggestions)
   }, [])

   return (
      <div className='flex space-x-2 p-6 mt-8 border-gray-200 border rounded-sm overflow-x-scroll bg-white scrollbar-thin scrollbar-thumb-black'>
         {session && (
            <Story 
               img={session.user.image}
               username={session.user.username}
            />
         )}
         {suggestions.map(profile=>(
            <Story 
               key={profile.id}
               img={profile.avatar}
               username={profile.username}
            />
         ))}
      </div>
   )
}

export default Stories
