import Image from 'next/image'
import {
   SearchIcon,
   PlusCircleIcon,
   UserGroupIcon,
   HeartIcon,
   PaperAirplaneIcon,
   MenuIcon
} from '@heroicons/react/outline'
import {
   HomeIcon
} from '@heroicons/react/solid'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Header() {
   const {data: session}  = useSession()
   const [open, setOpen] = useRecoilState(modalState)
   const router = useRouter()

   return (
      <div className='shadow-sm sticky border-b bg-white top-0 z-50'>
         <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
            <div 
               className='relative hidden lg:inline-grid w-24 cursor-pointer'
               onClick={()=> router.push('/')}
            >
               <Image
                  src='https://links.papareact.com/ocw'
                  layout='fill'
                  objectFit='contain'
               />
            </div>
            <div 
               className='relative lg:hidden w-10 flex-shrink-0 cursor-pointer'
               onClick={()=> router.push('/')}
            >
               <Image
                  src='https://links.papareact.com/jjm'
                  layout='fill'
                  objectFit='contain'
               />
            </div>
            <div className='max-w-xs'>
               <div className='mt-1 relative p-3 rounded-md'>
                  <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                     <SearchIcon className='h-5 w-5 text-gray-500'/>
                  </div>
                  <input className='bg-gray-50 block w-full pl-10 sm:text-sm border border-gray-300 rounded-md focus:ring-black focus:border-black' type="text" placeholder='Search'/>
               </div>
            </div>
            <div className='flex items-center justify-end space-x-4'>
               <HomeIcon 
                  className='navBtn'
                  onClick={()=> router.push('/')}
               />
               <MenuIcon className='h-6 md:hidden cursor-pointer'/>
               {session ? (
                  <>
                     <div className="relative navBtn">
                        <PaperAirplaneIcon className='navBtn rotate-45'/>
                        <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center animate-pulse'>3</div>
                     </div>
                     <PlusCircleIcon onClick={()=>setOpen(true)} className='navBtn'/>
                     <UserGroupIcon className='navBtn'/>
                     <HeartIcon className='navBtn'/>

                     <img 
                        src={session.user?.image} 
                        alt="profile picture" 
                        className='h-10 w-10 object-fill rounded-full'
                     />
                  </>
               ) : (
                  <button onClick={signIn}>Sign in</button>
               )}
            </div>
         </div>
      </div>
   )
}

export default Header
