import Image from 'next/image';
import { useRouter } from 'next/router'
import { CgSearch } from "react-icons/cg";
import { FiUser } from "react-icons/fi"
import { HiPlusSm } from 'react-icons/hi'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"



function Header() {

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('pressed button for search')
    }
    const router = useRouter();
    const { data: session } = useSession();


    return (
        <div className="w-full shadow-sm border-b bg-white sticky top-0 z-50">
            <div className='w-full flex flex-col-reverse md:flex-row lg:flex-row lg:justify-evenly pt-2'>
                <div className="w-full lg:w-1/4 flex flex-row items-center justify-center md:mr-14 lg:mr-0 ">
                    <div className='mr-8'>
                        <svg onClick={() => router.push('/')} width="250" height="79.5622902734368" viewBox="0 0 320 56.202942356511656" className="css-1j8o68f cursor-pointer"><defs id="SvgjsDefs2707"></defs><g id="SvgjsG2708" featurekey="symbolFeature-0" transform="matrix(2.5000197888987046,0,0,2.5000197888987046,-10.437143209732668,-30.05773733064637)" fill="#000000"><g xmlns="http://www.w3.org/2000/svg"><path d="M44.139,18.234c-0.306-1.215-2.564-1.814-5.987-1.834v-1.9c0-1.37-1.107-2.477-2.478-2.477H14.017   c-1.367,0-2.475,1.107-2.475,2.477v7.909c-4.796,2.116-7.725,4.324-7.332,5.89c0.652,2.592,10.122,2.439,21.149-0.34   C36.386,25.179,44.791,20.824,44.139,18.234z M12.952,14.431c0-0.477,0.385-0.862,0.858-0.862h22.415   c0.476,0,0.855,0.385,0.855,0.862v8.341c-3.029,1.516-7.22,3.037-11.963,4.232c-0.061,0.016-0.119,0.028-0.179,0.043H13.811   c-0.474,0-0.858-0.386-0.858-0.859V14.431z M6.12,27.309c-0.32-1.275,1.813-3.026,5.422-4.755v5.97c0,0.153,0.032,0.296,0.06,0.439   C8.465,28.954,6.398,28.41,6.12,27.309z M38.151,22.209v-5.536c2.2,0.171,3.613,0.696,3.836,1.593   C42.259,19.341,40.78,20.754,38.151,22.209z"></path><path d="M13.947,14.085c0,0-0.412,0-0.412,0.827v9.55c0.192-6.008,4.55-10.376,4.55-10.376H13.947z"></path><path d="M37.081,26.188c0,0.474-0.38,0.859-0.855,0.859h-5.329c-1.744,0.561-3.553,1.088-5.377,1.549   c-0.117,0.029-0.23,0.053-0.348,0.082c0.134,0.102,0.225,0.252,0.225,0.428c0,0.306-0.246,0.552-0.551,0.552   c-0.306,0-0.552-0.246-0.552-0.552c0-0.082,0.021-0.16,0.06-0.229c-4.146,0.984-8.101,1.616-11.474,1.835   C13.222,30.888,13.604,31,14.017,31h7.527v1.563l3.853,0.535h-3.93c-0.072,0.171-0.2,0.32-0.369,0.417l-1.822,0.989h11.14   l-1.819-0.989c-0.278-0.152-0.449-0.444-0.449-0.76V31h7.527c1.37,0,2.478-1.107,2.478-2.477v-4.286   c-0.348,0.166-0.701,0.327-1.07,0.487V26.188z"></path><path d="M13.535,24.462c0,0.088,0,0.145,0,0.145s0.008-0.045,0.024-0.128C13.551,24.473,13.54,24.467,13.535,24.462z"></path></g></g><g id="SvgjsG2709" featurekey="nameFeature-0" transform="matrix(0.7508430600979203,0,0,0.7508430600979203,118.69465960925822,9.272368474719425)" fill="#000000"><path d="M14.551 27.344 l-2.9297 12.734 l-9.8828 0 l2.9297 -12.734 l-1.9922 0 l3.8281 -16.484 l9.8633 0 l-3.7891 16.484 l1.9727 0 z M33.8674375 26.719 l-2.9688 13.359 l-9.9023 0 l3.0469 -13.359 l-1.7773 0 l1.9727 -8.5547 l-7.8125 0 l1.7188 -7.4023 l25.352 0 l-1.6602 7.4023 l-7.793 0 l-1.9141 8.5547 l1.7383 0 z M56.95284375 26.836 l-1.1328 4.9609 l-16.25 0 l1.1328 -4.9609 l-2.168 0 l0.80078 -3.5156 l16.25 0 l-0.78125 3.5156 l2.1484 0 z M60.01956875 27.266 l-2.2461 0 l9.1797 -16.387 l9.7461 0 l1.582 16.387 l2.1875 0 l1.2305 12.715 l-10.059 0 l-0.41016 -5.4883 l-5.5664 0 c-0.97656 1.8164 -1.8945 3.6523 -2.8711 5.4883 l-9.8828 0 z M70.97646875 27.676000000000002 l0 -0.41016 l-2.1289 0 l0.039063 -6.4844 l-2.6172 6.4844 l2.168 0 l-0.15625 0.41016 l2.6953 0 z M102.148375 26.719 l-7.5 13.359 l-9.4336 0 l-1.3867 -13.359 l-1.7969 0 l-1.6797 -15.957 l10.215 0 l1.1914 14.082 c2.6367 -4.6289 5.0195 -9.4727 7.6367 -14.082 l9.9609 0 l-8.9648 15.957 l1.7578 0 z M107.988275 27.344 l-1.9922 0 l3.8281 -16.484 l20.918 0 l-1.6797 7.4023 l-11.152 0 l-0.58594 2.5 l10.254 0 l-1.5039 6.582 l1.9922 0 l-0.17578 0.78125 l-10.273 0 l-1.0352 4.5703 l11.113 0 l-1.6797 7.3828 l-20.957 0 z M157.676 27.266 l-2.9102 12.715 l-9.082 0 l-3.8672 -12.715 l-0.44922 0 l-2.9492 12.715 l-9.1992 0 l2.9492 -12.715 l-1.7773 0 l3.7695 -16.367 l10.723 0 l3.1641 10.273 l2.4023 -10.273 l9.2383 0 l-3.7891 16.367 l1.7773 0 z M160.56641875 27.578 l-2.0703 0 c1.1719 -6.7578 6.4453 -13.926 12.695 -16.094 c6.4258 -2.2461 11.738 -1.1523 17.363 1.8945 l-1.875 8.0664 l-3.0859 0 c-0.44922 -1.0938 -0.15625 -3.2422 -4.6875 -3.6328 c-6.4453 -0.56641 -10.684 5.0781 -11.445 9.7656 l2.0703 0 c-0.39063 2.4414 0.13672 4.6484 1.7969 5.5469 c1.0938 0.58594 2.6758 0.85938 5.0195 0.58594 l0.039063 0 l0.72266 -3.1641 l-4.6484 0 l0.68359 -2.9688 l-2.1094 0 l1.0156 -4.375 l14.336 0 l-0.99609 4.375 l2.0898 0 l-2.4805 10.762 c-0.99609 0.41016 -2.0313 0.74219 -3.0664 1.0938 c-4.6484 1.4258 -10.605 2.3828 -15.234 0.52734 c-5.4883 -2.1484 -7.0313 -7.1484 -6.1328 -12.383 z M191.17186875 27.344 l-1.9922 0 l3.8281 -16.484 l20.918 0 l-1.6797 7.4023 l-11.152 0 l-0.58594 2.5 l10.254 0 l-1.5039 6.582 l1.9922 0 l-0.17578 0.78125 l-10.273 0 l-1.0352 4.5703 l11.113 0 l-1.6797 7.3828 l-20.957 0 z M215.15629375 26.719 l-1.7773 0 l3.6328 -15.957 c3.3984 0 9.5313 -0.33203 14.375 0.3125 c4.2773 0.625 8.418 2.207 7.6953 7.3438 c-0.41016 3.1055 -2.793 6.2891 -5.3711 8.3008 l1.7578 0 c-0.46875 0.35156 -0.9375 0.72266 -1.4453 0.97656 l6.6797 12.383 l-11.719 0 l-4.8828 -9.5508 l-2.168 9.5508 l-9.8438 0 z M225.23459375 17.988 l-1.1914 5.0391 c4.707 0 7.3438 -5.0391 1.1914 -5.0391 z M266.9728125 26.719 c1.1328 4.1016 -2.2656 8.9453 -5.4102 11.074 c-6.1719 4.043 -14.316 3.3984 -20.625 0.15625 l1.8359 -8.125 l3.0273 0 c0.39063 4.1992 9.7852 5.9375 10.742 1.7969 c0.46875 -2.0508 -6.8945 -2.6172 -9.3555 -4.5508 c-0.13672 -0.11719 -0.29297 -0.23438 -0.41016 -0.35156 l-1.7969 0 c-1.9531 -1.8359 -2.1289 -4.2773 -1.5625 -6.8164 c2.3828 -10.41 16.523 -11.445 24.688 -7.3242 l-1.8164 7.9102 l-3.0469 0 c0.19531 -2.9688 -8.7891 -5 -9.6289 -1.4258 c-0.56641 2.7734 8.5352 1.9531 11.055 6.3477 c0.21484 0.39063 0.39063 0.85938 0.50781 1.3086 l1.7969 0 z"></path></g></svg>
                    </div>
                    <div className='ml-8 pt-2'>
                        <Image className='cursor-pointer' onClick={() => router.push('/')} src={require('../images/logo-large-charcoal.png')} />
                    </div>
                </div>
                <div className='w-full lg:w-2/4 flex flex-row items-center justify-between '>
                    <form className="m-4 flex group" onSubmit={submitHandler}>
                        <input className="w-44 h-10 rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none" placeholder="search..." />
                        <button className="h-10 w-14 rounded-r-lg bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold  uppercase border-yellow-500 border-t border-b border-r"><CgSearch size={20} className='mx-auto group-hover:scale-110 transition ease-in-out' /></button>
                    </form>
                    <div className="flex flex-row items-center space-x-8 pr-8">
                        {!session ?
                            <button className="w-32 p-2 bg-[#0a8019] hover:bg-green-400 rounded-md mx-4 cursor-pointer text-md text-white" onClick={signIn}>Sign In</button>
                            :
                            <>
                                <HiPlusSm className='hover:scale-110 transition ease-in-out cursor-pointer border-[0.5px] border-[#64748B] rounded-lg p-[0.5px]' size={30} color="#04012e" />
                                <Link href="/profile">
                                    <img className=" w-8 h-8 rounded-full cursor-pointer" src={session.user.image} alt="profile pic" />
                                </Link>

                                {/* <FiUser className='hover:scale-125 transition ease-in-out cursor-pointer p-2' size={40} color="#04012e" /> */}

                            </>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;
