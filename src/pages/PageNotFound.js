import { Link } from "react-router-dom";
import { TextCounterHeader } from "../components/TextCounterHeader";
import Image404 from "../assets/images/404.svg";
export const PageNotFound = () => {

  return (
    <>
      <TextCounterHeader />
      <main>
        <section className="max-w-xl m-auto text-center my-6">
          <img src={Image404} alt="Page Not Found" className="block" />
          <Link to="/" className="bg-blue-600 hover:bg-blue-500 text-gray-100 text-lg py-2 px-6 rounded-md">Go Back Home</Link>
        </section>
      </main>
    </>
  )
}
