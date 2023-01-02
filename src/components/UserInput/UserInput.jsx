import { FiSearch } from "react-icons/fi";

function UserInput() {
  return (
    <form className="flex">
      <input type="text" className="text-shadedBlue" />
      <button className="bg-shadedBlue p-3 rounded-r-full text-bgLighterBlue">
        Search
      </button>
      {/* <FiSearch className="-translate-y-8 translate-x-4 text-xl text-shadedBlue" /> */}
    </form>
  );
}

export default UserInput;
