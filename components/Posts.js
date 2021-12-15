import Post from "./Post"

const posts = [
   {
      id: '123',
      username: 'sssssangha',
      userImg: 'https://avatars.githubusercontent.com/u/499550?v=4',
      img: 'https://avatars.githubusercontent.com/u/499550?v=4',
      caption: 'This is DOPE!'
   },
   {
      id: '12',
      username: 'sssssangha',
      userImg: 'https://avatars.githubusercontent.com/u/499550?v=4',
      img: 'https://avatars.githubusercontent.com/u/499550?v=4',
      caption: 'This is DOPE!'
   },
]

const Posts = () => {
   return (
      <div>
         {posts.map(post=>(
            <Post
               key={post.id}
               id={post.id}
               username={post.username}
               userImg={post.userImg}
               img={post.img}
               caption={post.caption}
            />     
         ))

         }
      </div>
   )
}

export default Posts
