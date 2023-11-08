import { BsSun, BsMoonStars, BsPersonCircle} from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";

export const OffcanvasLoggedOut = ({darkMode, setDarkMode, setToggleLoginModal, setToggleRegistrationModal}) => {
  
  return (
    <div className="text-sm mt-16 flex flex-col divide-y divide-gray-700">
      <div>
        <p onClick={() => setToggleRegistrationModal(true)} className="flex items-center justify-start gap-1 py-4 hover:bg-gray-800 cursor-pointer">
          <BsPersonCircle size={"20px"}/>
          <span className="line-clamp-1">Register</span>
        </p>
      </div>
      <div>
        <p onClick={() => setToggleLoginModal(true)} className="flex items-center justify-start gap-1 py-4 hover:bg-gray-800 cursor-pointer">
          <BiLogInCircle size={"20px"}/>
          <span className="line-clamp-1">Login</span>
        </p>
      </div>
      <div>
        {!darkMode &&
          <p onClick={() => setDarkMode(!darkMode)} className="flex items-center justify-start gap-1 py-4 hover:bg-gray-800 cursor-pointer">
            <BsMoonStars size={"20px"}/>
            <span className="line-clamp-1">Dark Mode Off</span>
          </p>
        }
        {darkMode &&
          <p onClick={() => setDarkMode(!darkMode)} className="flex items-center justify-start gap-1 py-4 hover:bg-gray-800 cursor-pointer">
            <BsSun size={"20px"}/>
            <span className="line-clamp-1">Dark Mode On</span>
          </p>
        }
      </div>
    </div>
  )
}
