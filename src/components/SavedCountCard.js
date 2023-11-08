import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BsTrash, BsBoxArrowInLeft } from "react-icons/bs";
import { deleteCount } from "../services/dataService";

export const SavedCountCard = ({count, getSavedCounts, enableCountUpdate}) => {

  const [title, setTitle] = useState([]);
  useEffect(() => {
    const textArr = count.text.split("");

    const first10Character = [];

    for (let index = 0; index < 30; index++) {
      first10Character.push(textArr[index]);
      setTitle(first10Character);
    }
  }, [count]);

  async function handleDelete(id) {
    if(window.confirm("Are you sure to delete?")) {
      try {
        await deleteCount(id);
        getSavedCounts();
      } catch(error) {
        toast.error(error.message)
      }
    }
  }

  return (
    <p className="w-full p-1 bg-gray-800 flex flex-col gap-2 rounded">
      <span className="line-clamp-1">{title}</span>
      <span className="flex items-center justify-between">
        <span className={`text-xs ${count.update_time ? "text-blue-300" : "text-blue-500"}`}>{count.update_time ? count.update_time : count.creation_time}</span>
        
        <span>
          <button onClick={() => enableCountUpdate(count.id)} className="p-1 hover:bg-gray-700 rounded-full"><BsBoxArrowInLeft size={"18px"} color="rgb(34, 197, 94, 1)" /></button>
          <button onClick={() => handleDelete(count.id)} className="p-1 hover:bg-gray-700 rounded-full"><BsTrash size={"16px"} color="rgba(225, 29, 72, 1)"/></button>
        </span>
      </span>
    </p>
  )
}
