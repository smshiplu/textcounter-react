import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

import { useToken } from "../hooks/useToken";

import { getUser } from "../services/dataService";
import { OffcanvasLoggedIn } from "./OffcanvasLoggedIn";
import { OffcanvasLoggedOut } from "./OffcanvasLoggedOut";

export const TextCounterHeader = ({enableCountUpdate, getSavedCounts, countList, setCountList, setToggleLoginModal, setToggleRegistrationModal}) => {
  const token  = JSON.parse(sessionStorage.getItem("token"));
  const tcid = JSON.parse(sessionStorage.getItem("tcid"));
  const isTokenExpired = useToken();
  

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("textCounter-darkMode")) || false);
  const [offCanvasToggle, setOffCanvasToggle] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-slate-800");
      localStorage.setItem("textCounter-darkMode", JSON.stringify(darkMode));
    } else {
      document.documentElement.removeAttribute("class");
      document.body.removeAttribute("class");
      localStorage.setItem("textCounter-darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode]);

  useEffect(() => {
    async function fetchUser() {
      if(token && !isTokenExpired) {
        try {
          const data = await getUser();
          data ? setUserInfo(data) : toast.error(data);
        } catch (error) {
          toast.error(error.message);
        }
      }
    }
    fetchUser();
  }, [token, isTokenExpired]); 

  return (
    <header className="bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-100 p-4 border-b border-gray-100 dark:border-gray-600 mb-10">
      <section className="w-full block text-center">
        <h1 className="text-3xl font-bold ">Text Counter</h1>
        <small className="text-lg">Online Free Text Count Tool</small>
      </section>
      
      <section className="flex items-center justify-end gap-5 text-gray-800 dark:text-gray-100">
        <button onClick={() => setOffCanvasToggle(!offCanvasToggle)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 flex items-center justify-center w-8 h-8 p-1 rounded-md"><BsThreeDotsVertical/></button>
      </section>
      {offCanvasToggle && 
        <section className="w-60 h-full bg-gray-900 text-white fixed top-0 right-0 p-3 overflow-hidden border-l border-gray-600 transition-transform">
          <button onClick={() => setOffCanvasToggle(!offCanvasToggle)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-gray-700 bg-opacity-50 rounded-lg"><FaTimes size="20px" /></button>

          {token && !isTokenExpired && userInfo.id === tcid ? 
          <OffcanvasLoggedIn enableCountUpdate={enableCountUpdate} userInfo={userInfo} getSavedCounts={getSavedCounts} countList={countList} setOffCanvasToggle={setOffCanvasToggle} darkMode={darkMode} setDarkMode={setDarkMode} /> : <OffcanvasLoggedOut darkMode={darkMode} setDarkMode={setDarkMode} setToggleLoginModal={setToggleLoginModal} setToggleRegistrationModal={setToggleRegistrationModal} />}
        </section>
      }
      
    </header>
  )
}
