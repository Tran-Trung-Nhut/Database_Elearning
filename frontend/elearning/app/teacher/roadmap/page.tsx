'use client';
import { useEffect } from "react";
import Header from "../teacher_components/header";
import Sidebar from "../teacher_components/sidebar";
import { useRecoilState } from "recoil";
import { userLoginState } from "@/state";

const RoadMapPage = () => {
    const [userLogin, setUserLogin] = useRecoilState(userLoginState)

    useEffect(() => {
        const userFromSessionRaw = sessionStorage.getItem('userLogin')
        if(!userFromSessionRaw) return
        setUserLogin(JSON.parse(userFromSessionRaw))  
    }, [])
  return (
    <div className="bg-black">
      <div className="grid grid-cols-12 grid-rows-12 min-h-screen gap-4">
        {Header(userLogin.lastName + ' ' + userLogin.firstName)}
        {Sidebar(userLogin.firstName, userLogin.lastName)}
        <div className="bg-white col-span-10 row-span-10 mb-4 rounded-xl">
            <h1 className="bg-yellow-600 h-20 rounded-t-xl text-center text-xl text-white">CREATE ROADMAP</h1>
        </div>
      </div>
    </div>
  );
}
export default RoadMapPage;