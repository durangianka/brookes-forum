import Router from "next/router";

function Post({ username, content, date, comments, likes, forum, image, id }) {

    // const post = {
    //     user: {
    //         username: 'theRollerBlooder12_22',
    //         img: 'https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk='
    //     },
    //     forum: 'COMP5004: C++',
    //     content: 'C++ how does headers work when using OOP',
    //     date: '24-4-2019',
    //     likes: 20,
    //     id: 1,
    // }
    return (
        <div className="flex bg-white shadow-lg rounded-lg mx-auto my-10 max-w-md md:max-w-2xl">
            <div className="w-full flex items-start px-4 py-6">
                <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={image} alt="avatar" />
                <div className="w-full">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900 -mt-1">{username} </h2>
                        <small className="text-sm text-gray-700">{date}</small>
                    </div>
                    <p className="mt-3 text-gray-700 text-sm">
                        {content}
                    </p>
                    <div className="mt-4 flex items-center">
                        <div className="flex text-gray-700 text-sm mr-3">
                            <svg className="post-like w-4 h-4 mr-1 cursor-pointer hover:scale-125 transition ease-in-out  " id="like-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span id="like-num">{likes}</span>
                        </div>
                        <div className="flex text-gray-700 text-sm mr-8">
                            <svg className="w-4 h-4 mr-1 cursor-pointer hover:scale-125 transition ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg>
                            <span> {comments ? comments : 0}</span>
                            <u onClick={() => Router.push(`/post/${id}`)} className="ml-4 cursor-pointer"><span>{forum}</span></u>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
