import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Auth = () => {
  return (
    <div className="w-full flex items-center justify-center h-[calc(100vh-34px)] overflow-hidden gap-16 z-20 relative">
      <div className="a-left flex items-center justify-center gap-2">
        <img src={Logo} alt="" className="w-20" />
        <div>
          <h3 className="text_linear font-bold">Bah Media</h3>
          <p>Explore the ideas throughout the world</p>
        </div>
      </div>

      {/* <SignUP /> */}
      <LogIn />
    </div>
  );
};

export default Auth;

function LogIn() {
  return (
    <div className="bg-cardColor rounded-2xl p-4">
      <form className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold my-5 text-xl">Log In</h1>
        <div className="w-full">
          <input
            type="text"
            placeholder="Usernames"
            className="outline-none bg-inputColor p-5 rounded-lg w-full"
            name="usernames"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Password"
            className="outline-none bg-inputColor p-5 rounded-lg w-full"
            name="password"
          />
        </div>
        <div className="flex items-center justify-between gap-5">
          <div className="text-sm">
            <Link to="/signup">
              <span>Don't have an account. Sign up</span>
            </Link>
          </div>
          <button className="btnbg px-5 py-2 tracking-wider" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
function SignUP() {
  return (
    <div className="bg-cardColor rounded-2xl p-4">
      <form className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold my-5 text-xl">Sign up</h1>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="First Name"
            className="outline-none bg-inputColor p-5 rounded-lg"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="outline-none bg-inputColor p-5 rounded-lg"
            name="lasttname"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Usernames"
            className="outline-none bg-inputColor p-5 rounded-lg w-full"
            name="usernames"
          />
        </div>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Password"
            className="outline-none bg-inputColor p-5 rounded-lg"
            name="password"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="outline-none bg-inputColor p-5 rounded-lg"
            name="confirmpassword"
          />
        </div>
        <div className="text-sm my-2">
          <Link to="/signin">
            <span>Already have an account. Login!</span>
          </Link>
        </div>
        <button className="btnbg px-5 py-2 self-end mt-3 tracking-wider" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
