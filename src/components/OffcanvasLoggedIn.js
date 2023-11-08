import { useState, useEffect } from "react";
import { BsFillPersonFill, BsSun, BsMoonStars} from "react-icons/bs";
import { BiSolidSave, BiArrowBack, BiLogOutCircle } from "react-icons/bi";
import { logout } from "../services/authService";
import { SavedCountCard } from "./SavedCountCard";

export const OffcanvasLoggedIn = ({enableCountUpdate, userInfo, getSavedCounts, countList, setOffCanvasToggle, darkMode, setDarkMode}) => {

  const [secondLvlMenu, setSecondLvlMenu] = useState(false);
  const [savedCountList, setSavedCountListList] = useState([]);

  useEffect(() => {
    setSavedCountListList(countList);
  }, [countList]);

  const handleLogOut = () => {
    logout();
    setOffCanvasToggle(false);
  }

  return (
      <div className="text-sm mt-16 flex flex-col divide-y divide-gray-700">
        <div>
          <p className="flex items-center justify-center gap-1 py-3">
            <BsFillPersonFill size={"20px"}/>
            <span className="line-clamp-1 whitespace-nowrap text-ellipsis w-full">{userInfo.email}</span>
          </p>
        </div>

        <div>
        {!secondLvlMenu &&
          <p onClick={() => setSecondLvlMenu(!secondLvlMenu)} className="flex items-center justify-start gap-1 py-4 hover:bg-gray-800 cursor-pointer">
          <BiSolidSave size={"20px"}/>
          <span className="line-clamp-1">Saved Item</span>
          </p>
        }
        {secondLvlMenu && 
          <div>
            <p onClick={() => setSecondLvlMenu(!secondLvlMenu)} className="flex items-center justify-start gap-1 py-4 hover:bg-gray-800 cursor-pointer">
              <BiArrowBack size={"20px"}/>
              <span className="line-clamp-1">Saved Item</span>
            </p>
            <div className="flex flex-col gap-2 items-baseline justify-baseline h-96 divide-y divide-gray-600 mt-5 overflow-x-hidden overflow-y-auto">
              {savedCountList.map(count => (
                <SavedCountCard key={count.id} count={count} getSavedCounts={getSavedCounts} enableCountUpdate={enableCountUpdate} />
              ))}
              {!savedCountList.length && 
                <span className="text-rose-500 text-xs block w-full text-center">No Item!</span>
              }
           </div>
          </div>
        }
        </div>
        <div>
        {!secondLvlMenu &&
          <p onClick={handleLogOut} className="flex items-center justify-start gap-1 py-4 hover:bg-gray-800 cursor-pointer">
            <BiLogOutCircle size={"20px"}/>
            <span className="line-clamp-1">Logout</span>
          </p>
        }
        </div>
        <div>
        {!secondLvlMenu && !darkMode &&
        <p onClick={() => setDarkMode(!darkMode)} className="flex items-center justify-start gap-1 py-4 hover:bg-gray-800 cursor-pointer">
          <BsMoonStars size={"20px"}/>
          <span className="line-clamp-1">Dark Mode Off</span>
        </p>
        }
        {!secondLvlMenu && darkMode &&
          <p onClick={() => setDarkMode(!darkMode)} className="flex items-center justify-start gap-1 py-4 hover:bg-gray-800 cursor-pointer">
            <BsSun size={"20px"}/>
            <span className="line-clamp-1">Dark Mode On</span>
          </p>
        }
        </div>
    </div>
  )
}
