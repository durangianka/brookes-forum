import Header from '../components/Header';
import Posts from '../components/Posts';
import { useSession } from "next-auth/react"


export default function Home() {

  const { data: session } = useSession();


  return (
    <div>
      <Header />
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
