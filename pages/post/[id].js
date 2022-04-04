import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"
import { useRouter } from 'next/router'


function Detail({ posts }) {

    const [post, setPost] = useState(null)

    const router = useRouter();

    const { id } = router.query


    useEffect(async () => {
        getDocs(collection(db, 'posts'))
            .then((snapshot) => {
                let docs = []
                snapshot.docs.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                });
                const post = docs.filter(doc => doc.id === id)
                setPost(post[0])
                console.log(post)
            })
            .catch(err => console.error(err.message));
    }, [])
    return (
        <div>
            <Header />

            {post && (
                <div className="w-full flex flex-col items-center justify-center space-y-6 font-bold mt-4">
                    <p>{post.post.user.username} </p>
                    <img className="w-64 h-64 object-cover" src={post.post.user.img} alt="" />
                    <p className="text-xs font-medium">{post.post.date}</p>
                    <p>{post.post.content}</p>
                </div>
            )}



        </div>
    )
}

export default Detail
