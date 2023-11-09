import { BiLoaderCircle } from "react-icons/bi";

export const Loading = () => {
  return (
    <div className="showLoading fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50">
      <span className="w-96 absolute top-1/2 left-1/2 m-auto"><BiLoaderCircle  className="animate-spin" size={"30px"} color="white"/></span>
    </div>
  )
}
