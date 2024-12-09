'use client';
import { ChangeEvent, useEffect, useState } from "react";
import Header from "../../teacher_components/header"
import Sidebar from "../../teacher_components/sidebar"
import { Button } from '@/components/ui/button';
import { useRecoilState } from "recoil";
import { userLoginState } from "@/state";
import * as request from '@/app/axios/axios'



const editSectionPage = ({ params }: { params: Promise<{ sectionId: string }> }) => {
    const [rtnParams, setRtnParams] = useState<{ sectionId: string }>({ sectionId: "" });
    const loadParams = async () => {
        const unwrappedParams = await params;
        return { sectionId: unwrappedParams.sectionId };
    }

    /////////////////////////////////////////////////////////////////////////// File handle
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          setFile(e.target.files[0]);
        }
      };
    
      const [file, setFile] = useState<File>();
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


    ///////////////////////////////////////////////////////////////////////////

    // get section info
    const [section, setSection] = useState<any>({});
    // get quiz info
    const [quiz, setQuiz] = useState<any[]>([]);
    // get lecture info
    const [lecture, setLecture] = useState<any[]>([]);
    const [userLogin, setUserLogin] = useRecoilState(userLoginState)
    const documents = [
        {name: "doc1"},
        {name: "doc2"},
        {name: "doc3"},
    ]
    useEffect(() => {
        loadParams().then((res) => setRtnParams(res));
        const userFromSessionRaw = sessionStorage.getItem('userLogin')
        if(!userFromSessionRaw) return
        setUserLogin(JSON.parse(userFromSessionRaw))  
    }, [])
    
    useEffect(() => {
        if (!rtnParams.sectionId) return;
        const fetchSection = async () => {
            try {
                let response = await request.get(`/section/id/${rtnParams.sectionId}`);
                if (response.status === 200){
                    setSection(response.data[0]);
                }
            } catch (error) {
                console.log("Failed to fetch sections");
            }
        }

        const fetchQuiz = async () => {
            try {
                let response = await request.get(`quiz/section/${rtnParams.sectionId}`);
                setQuiz(response);
            } catch (error) {
                console.log("Failed to fetch quiz");
            }
        }

        const fetchLecture = async () => {
            try {
                let response = await request.get(`lecture/section/${rtnParams.sectionId}`);
                setLecture(response.data);                
            } catch (error) {
                console.log("Failed to fetch lecture");
            }
        }
        // fetch data
        fetchSection();
        fetchQuiz();    
        fetchLecture();

    }, [rtnParams]);
    return (
        <div className="grid grid-rows-12 grid-cols-12 gap-4 bg-black">
            {Header(userLogin.lastName + ' ' + userLogin.firstName)}
            {Sidebar(userLogin.firstName, userLogin.lastName)}
            {/* Header */}
            <div className="bg-hcmutLightBlue col-start-3 col-span-10 row-span-1ß rounded-xl text-3xl text-white font-semibold uppercase items-center p-5 flex justify-center">
                
                <h1 className="self-center">{section.name}</h1>
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
                    {lecture.map((doc, index) => (
                        <li key={doc.id} className="mb-2">
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
                    {quiz.map((doc, index) => (
                        <li key={doc.id} className="mb-2" onClick={(()=> {
                            window.open(`/teacher/edit_quiz/${doc.id}`, '_blank')
                        })}>
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