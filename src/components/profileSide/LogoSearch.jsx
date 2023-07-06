import Logo from "../../assets/logo.png";
import { BsSearch } from 'react-icons/bs';

const LogoSearch = () => {
  return (
    <div className="flex items-center justify-between gap-3">
      <img src={Logo} alt="" width={30} className="cursor-pointer"/>
      <div className="search flex items-center bg-inputColor rounded-xl p-1">
        <input type="text" placeholder="#Explore" className="outline-none bg-transparent" />
        <div className="bg__gradient rounded-md cursor-pointer flex items-center justify-center p-2 text-white">
          <BsSearch className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
