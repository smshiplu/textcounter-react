import { AiOutlineEnter } from "react-icons/ai";
import { BiSpaceBar } from "react-icons/bi";

export const CharacterCard = ({item}) => {
  return (
    <>
      {item.length > 0 && 
        <p className="flex items-center gap-1 my-1">
          {item.name === "Enter" && <AiOutlineEnter className="inline-block border w-6 h-6 bg-gray-50 dark:bg-gray-300 rounded-md"/>}

          {item.name === "Space" && <BiSpaceBar className="inline-block border w-6 h-6 bg-gray-50 dark:bg-gray-300 rounded-md"/>}

          {item.name !== "Enter" && item.name !=="Space" && <span className="inline-flex items-center justify-center border text-xl w-6 h-6 text-center bg-gray-50 dark:bg-gray-300 rounded-md">{item.character}</span> } 

          <span className="inline-block border py-px px-2 bg-gray-50 dark:bg-gray-300 rounded-md line-clamp-1 whitespace-nowrap text-ellipsis">
          {item.name}: {item.length}
          </span>
        </p>
      }
    </>
  )
}
