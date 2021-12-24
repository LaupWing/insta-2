import { useEffect, useState } from "react"
import Post from "./Post"
import {collection, onSnapshot, orderBy, query} from 'firebase/firestore'
import { db } from "../firebase"

// const posts = [
//    {
//       id: '123',
//       username: 'sssssangha',
//       userImg: 'https://avatars.githubusercontent.com/u/499550?v=4',
//       img: 'https://avatars.githubusercontent.com/u/499550?v=4',
//       caption: 'This is DOPE!'
//    },
//    {
//       id: '12',
//       username: 'sssssangha',
//       userImg: 'https://avatars.githubusercontent.com/u/499550?v=4',
//       img: 'https://avatars.githubusercontent.com/u/499550?v=4',
//       caption: 'This is DOPE!'
//    },
// ]

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot =>{
            setPosts(snapshot.docs)
        })
    }, [db])
    return (
        <div>
            {posts.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                />
            ))

            }
        </div>
    )
}

export default Posts
