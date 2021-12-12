import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
   return (
      <div className="">
         <Head>
            <title>Instagram 2.0</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Header/>
         <h1>This is the Instagram 2 build</h1>
      </div>
   )
}
