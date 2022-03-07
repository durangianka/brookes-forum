import { useSession, signOut } from "next-auth/react"
import Image from "next/image";
import Header from '../components/Header';


function Profile() {

    const { data: session } = useSession();

    return (
        <div className="w-screen">
            <Header />

            {session ? <>
                <div className="w-screen items-center justify-center mt-28">
                    <div className="w-8/12 mx-auto z-30">
                        <div className="w-full">
                            <div className="w-full h-48 bg-blue-600 rounded-t-lg"></div>
                            <div className="w-full absolute -mt-16">
                                <img className="h-40 w-40 sm:w-32 sm:h-32 rounded-full ml-8 hover:cursor-pointer" src={session?.user.image} onClick={signOut} />
                            </div>
                        </div>
                        <div className=" bg-yellow-400 border border-primary rounded-b-lg flex flex-col shadow-xl">
                            <div className="my-24 pl-8">
                                <p className="font-bold text-2xl">{session.user.name}</p>
                                <p className="text-xs">{session.user.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </> :
                <>
                    <div className="h-96 flex items-center justify-center my-auto">
                        <h1 className="text-3xl">Please Sign In to access to the content</h1>
                    </div>
                </>
            }
        </div>
    );
}


export default Profile;