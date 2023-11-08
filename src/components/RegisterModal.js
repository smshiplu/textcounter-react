import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { register } from "../services/authService";

export const RegisterModal = ({setToggleLoginModal, setToggleRegistrationModal}) => {

  const handleLoginModalView = () => {
    setToggleLoginModal(true);
    setToggleRegistrationModal(false);
  }

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const authValue = {
        name: e.target.name.value.trim(),
        email: e.target.email.value.trim(),
        password: e.target.password.value.trim()
      }
      const data = await register(authValue);
      if(data.accessToken ) {
        e.target.reset();
        setToggleLoginModal(true);
        setToggleRegistrationModal(false);
        toast.success("Registration successful! Login now.")
      } else {
        toast.error(data);
      }
    } catch(error) {
      toast.error(error.message);
    }
  }

  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 ">
      <div className="max-w-2xl block absolute top-1/2 left-1/2 right-0 -translate-x-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-700 px-4 py-6  border border-gray-400 rounded-lg">
        <div className="flex items-center justify-between text-gray-800 dark:text-gray-100 mb-6 pb-2 border-b border-gray-400">
          <h4 className="text-2xl">Register</h4>
          <span className="inline-block text-xs text-right p-1">
            <FaTimes onClick={() => setToggleRegistrationModal(false)} className="cursor-pointer" size="20px"/>
          </span>
        </div>
        
        <form onSubmit={handleRegister} className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1 text-gray-800 dark:text-gray-100 text-sm">
            <label htmlFor="name" className="font-bold">Your Name:</label>
            <input type="text" name="name" id="name" placeholder="Nasir Uddin" autoComplete="off" className="bg-gray-100 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 p-2 rounded-lg "/>
          </div>
          <div className="flex flex-col gap-1 text-gray-800 dark:text-gray-100 text-sm">
            <label htmlFor="email" className="font-bold">Your Email:</label>
            <input type="text" name="email" id="email" placeholder="nasir@example.com" autoComplete="off" className="bg-gray-100 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 p-2 rounded-lg "/>
          </div>
          <div className="flex flex-col gap-1 text-gray-800 dark:text-gray-100 text-sm">
            <label htmlFor="password" className="font-bold">Your Password:</label>
            <input type="password" name="password" id="password" autoComplete="off" className="bg-gray-100 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 p-2 rounded-lg "/>
          </div>
          <div className="flex flex-col items-start justify-start gap-3 mt-5">
            <button type="submit" className="text-sm bg-blue-600 hover:bg-blue-500 focus:outline-none text-white py-2 px-4 rounded-lg">Register</button>
            <div className="text-gray-800 dark:text-gray-100 flex flex-col  gap-1 text-sm  ">
              <p>Or Already Have an Account? <button onClick={handleLoginModalView} className="underline decoration-blue-500 hover:decoration-blue-300 underline-offset-4">Login Now</button></p>
            </div>
          </div>
        </form>
      </div>

    </section>
  )
}
