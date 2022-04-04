import { useState } from 'react';
import { ref } from "firebase/storage";
import Header from "../components/Header";

const Upload = () => {

    const [image, setImage] = useState(null)

    const changeHandler = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };


    return (
        <>
            <Header />
            <div className="flex flex-row items-center justify-between w-full border ">
                <div className=" w-2/4 flex flex-col space-y-4 pl-24">
                    <input className="my-4" type="file" name="file" onChange={changeHandler} accept="image/gif, image/jpeg, image/png" />
                    <label>Post Title</label>
                    <input className="w-2/4 outline-none border-b border-b-green-500" type="text" name="post-title" />
                    <label>Post Content</label>
                    <input className="w-2/4 outline-none border-b border-b-green-500 mb-4" type="text" name="post-content" />
                    <button className="w-32 p-2 bg-white border border-green-500 rounded-xl hover:bg-green-500 hover:text-white" onClick={() => setImage(null)}>Upload Post</button>

                </div>
                {image ? (
                    <div className=" w-2/4 flex flex-col space-y-4  pr-24">
                        {/* <p>Filename: {selectedFile.name}</p>
                            <p>Filetype: {selectedFile.type}</p>
                            <p>Size in bytes: {selectedFile.size}</p>
                            <p>
                                lastModifiedDate:{' '}
                                {selectedFile.lastModifiedDate.toLocaleDateString()}
                            </p> */}

                        <img className="w-64 h-38" src={image} alt="" />
                        <button className="w-32 p-2 bg-white border border-red-500 rounded-xl hover:bg-red-500 hover:text-white" onClick={() => setImage(null)}>Delete Image</button>

                    </div>
                ) : (
                    <p className="pr-24">Select a file to show details</p>
                )}
            </div>
        </>
    )
}

export default Upload;