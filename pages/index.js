import Header from '../components/Header';
import Posts from '../components/Posts';
import { useSession } from "next-auth/react"


export default function Home() {

  const { data: session } = useSession();


  return (
    <div className="relative">
      <Header />
      <div className="w-full h-32 bg-gradient-to-t from-white block fixed inset-x-0 bottom-0 z-10 "></div>
      {session ? <Posts /> : (
        <>
          <div className="h-96 flex items-center justify-center my-auto">
            <h1 className="text-3xl">Please Sign In to access to the content</h1>
          </div>
        </>
      )}
    </div>
  )
}
