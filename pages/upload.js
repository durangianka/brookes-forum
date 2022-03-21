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
            <div className="flex flex-col items-center justify-center w-full border ">
                <input className="my-4" type="file" name="file" onChange={changeHandler} accept="image/gif, image/jpeg, image/png" />
                <div className="my-4">
                    {image ? (
                        <div>
                            {/* <p>Filename: {selectedFile.name}</p>
                            <p>Filetype: {selectedFile.type}</p>
                            <p>Size in bytes: {selectedFile.size}</p>
                            <p>
                                lastModifiedDate:{' '}
                                {selectedFile.lastModifiedDate.toLocaleDateString()}
                            </p> */}
                            <img src={image} alt="" />
                        </div>
                    ) : (
                        <p>Select a file to show details</p>
                    )}
                </div>
                <button className="p-2 bg-white border border-red-500 rounded-xl hover:bg-red-500 hover:text-white" onClick={() => setImage(null)}>Delete Image</button>

            </div>
        </>
    )
}

export default Upload;