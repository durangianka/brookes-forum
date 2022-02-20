import { useSession, signOut } from "next-auth/react"
import Image from "next/image";
import Header from '../components/Header';



function Profile() {

    const { data: session } = useSession();

    return (
        <div className="w-screen h-screen flex items-center justify-center ">
            <div className="w-8/12 mx-auto">
                <div className="w-full">
                    <div className="w-full bg-blue-600 h-48 rounded-t-lg"></div>
                    <div className="w-full absolute -mt-16">
                        <img className="h-40 w-40 sm:w-32 sm:h-32 rounded-full ml-8" src={session?.user.image} />
                    </div>
                </div>


                <div className="bg-primary border border-primary rounded-b-lg p-5 pt-20 flex flex-col shadow-xl">
                    <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-40"></div>
                    <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-96"></div>
                    <div className="text-sm mt-2 text-gray-200">
                        <div className="flex flex-row ml-auto space-x-2 items-center">
                            <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                            <div className="bg-blue-200 rounded-full h-1 w-1"></div>
                            <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                        </div>
                    </div>

                    <div className="pt-8 flex gap-8">
                        <div className="flex flex-col">
                            <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                            <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                        </div>
                        <div className="flex flex-col">
                            <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                            <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                        </div>
                        <div className="flex flex-col">
                            <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                            <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                        </div>
                        <div className="flex flex-col">
                            <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                            <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                        </div>
                    </div>
                    <div className="py-5 break-all bbcode">
                        <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-44"></div>
                        <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-full h-40"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Profile;