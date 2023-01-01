import { FiSearch } from "react-icons/fi";

function UserInput() {
  return (
    <form>
      <input type="text" className="text-shadedBlue" />
      <FiSearch className="-translate-y-8 translate-x-4 text-xl text-shadedBlue" />
    </form>
  );
}

export default UserInput;
