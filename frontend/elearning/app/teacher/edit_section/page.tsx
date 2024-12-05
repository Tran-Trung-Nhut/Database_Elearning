'use client';
import { ChangeEvent, useState } from "react";
import Header from "../teacher_components/header"
import Sidebar from "../teacher_components/sidebar"
import { Button } from '@/components/ui/button';



  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    // 👇 Uploading the file using the fetch API to the server
    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: file,
      // 👇 Set headers manually for single file upload
      headers: {
        'content-type': file.type,
        'content-length': `${file.size}`, // 👈 Headers need to be a string
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

const editSectionPage = () => {
    const [file, setFile] = useState<File>();
    const documents = [
        {name: "doc1"},
        {name: "doc2"},
        {name: "doc3"},
    ]
    return (
        <div className="grid grid-rows-12 grid-cols-12 gap-4 bg-black">
            <Header></Header>
            <Sidebar></Sidebar>
            {/* Header */}
            <div className="bg-hcmutLightBlue col-start-3 col-span-10 row-span-1ß rounded-xl text-3xl text-white font-semibold uppercase items-center p-5 flex justify-center">
                
                <h1 className="self-center">section title</h1>
            </div>
            {/* document content */}
            <div className="bg-white col-span-5 row-span-9 mb-4 rounded-xl">
                <h1 className="bg-green-600 rounded-t-xl text-center p-2 text-2xl text-white font-semibold uppercase">Document</h1>
                <div className="grid grid-rows-8">
                    <div className="row-start-1 self-center flex justify-center">
                        <input type="file" onChange={handleFileChange} />
                        <Button onClick={handleUploadClick} className="bg-green-600">Add Document</Button>
                    </div>
                    <ul className="p-4 border-2">
                    {/* Render list of documents here */}
                    {documents.map((doc, index) => (
                        <li key={index} className="mb-2">
                            {doc.name}
                        </li>
                    ))}
                    </ul>
                </div>
                
            </div>
            {/* quiz content */}
            <div className="bg-white col-start-8 col-span-5 row-span-9 mb-4 rounded-xl">
                <h1 className="bg-pink-600 rounded-t-xl text-center p-2 text-2xl text-white font-semibold uppercase">Quiz</h1>
                <div className="grid grid-rows-8">
                    <div className="row-start-1 self-center flex justify-center">
                        <Button className="bg-pink-600">Add Quiz</Button>
                    </div>
                    <ul className="p-4 border-2">
                    {/* Render list of documents here */}
                    {documents.map((doc, index) => (
                        <li key={index} className="mb-2">
                            {doc.name}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default editSectionPage