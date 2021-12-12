import Image from 'next/image'

function Header() {
   return (
      <div>
         <div className='flex justify-between'>
            <div className='relative w-24'>
               <Image
                  src='https://links.papareact.com/ocw'
                  layout='fill'
               />
            </div>
         </div>
      </div>
   )
}

export default Header
