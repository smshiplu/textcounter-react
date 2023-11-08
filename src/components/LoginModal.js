import { useRef } from "react";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import { login } from "../services/authService";

export const LoginModal = ({setToggleLoginModal, setToggleRegistrationModal}) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const authValue = {
        email: emailRef.current.value.trim(),
        password: passwordRef.current.value.trim(),
      }
      const data = await login(authValue);
      if(!data.accessToken) {
        toast.error("Can not be logged in!")
      }
      setToggleLoginModal(false);

    } catch (error) {
      toast.error(error.message);
    }
  }
  async function handleGuestLogin() {
    try {
      emailRef.current.value = process.env.REACT_APP_GUEST_EMAIL;
      passwordRef.current.value = process.env.REACT_APP_GUEST_PASSWORD;

      const authValue = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      const data = await login(authValue);
      if(!data.accessToken) {
        toast.error("Can not be logged in!")
      }
      setToggleLoginModal(false);

    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleRegisterModalView = () => {
    setToggleLoginModal(false);
    setToggleRegistrationModal(true);
  }

  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 ">
      <div className="max-w-2xl block absolute top-1/2 left-1/2 right-0 -translate-x-1/2 -translate-y-1/2 my-0 mx-auto bg-gray-100 dark:bg-gray-700 px-4 py-6 border border-gray-400 rounded-lg">
        <div className="flex items-center justify-between text-gray-800 dark:text-gray-100 mb-6 pb-2 border-b border-gray-400">
          <h4 className="text-2xl">Login</h4>
          <span className="inline-block text-xs text-right p-1"><FaTimes onClick={() => setToggleLoginModal(false)} className="cursor-pointer" size="20px"/></span>
        </div>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1 text-gray-800 dark:text-gray-100 text-sm">
            <label htmlFor="email" className="font-bold">Your Email:</label>
            <input ref={emailRef} type="text" name="email" id="email" placeholder="nasir@example.com" autoComplete="off" className="bg-gray-100 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 p-2 rounded-lg "/>
          </div>
          <div className="flex flex-col gap-1 text-gray-800 dark:text-gray-100 text-sm">
            <label htmlFor="password" className="font-bold">Your Password:</label>
            <input ref={passwordRef} type="password" name="password" id="password" autoComplete="off" className="bg-gray-100 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 p-2 rounded-lg "/>
          </div>
          <div className="flex flex-col items-start justify-start gap-3 mt-5">
            <button type="submit" className="text-sm bg-blue-600 hover:bg-blue-500 focus:outline-none text-white py-2 px-4 rounded-lg">Login</button>
            <div className="text-gray-800 dark:text-gray-100 flex flex-col  gap-1 text-sm  ">
              <p>Or <button onClick={handleGuestLogin} className="underline decoration-blue-500 hover:decoration-blue-300 underline-offset-4">Login as Guest</button></p>
              <p>Don't Have an Account? <button onClick={handleRegisterModalView} className="underline decoration-blue-500 hover:decoration-blue-300 underline-offset-4">Register Now</button></p>
            </div>
          </div>
        </form>
      </div>

    </section>
  )
}
