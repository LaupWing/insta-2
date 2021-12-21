import {signOut, useSession} from 'next-auth/react'

const MiniProfile = () => {
   const {data: session} = useSession()

   console.log(session)
   return (
      <div className="flex items-center justify-between mt-14 ml-10">
         <img 
            src="https://avatars.githubusercontent.com/u/499550?v=4" 
            alt="profile" 
            className="rounded-full border p-[2px] w-16 h-16"
         />

         <div className="flex-1 mx-4">
            <h2 className="font-bold">LaupWIng</h2>
            <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
         </div>

         <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
      </div>
   )
}

export default MiniProfile
