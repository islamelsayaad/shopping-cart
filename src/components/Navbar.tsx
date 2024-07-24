import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="py-4">
      <div className="flex items-center justify-between w-full">
        <Link to={"/"} className="text-2xl">
          gogo
        </Link>
        <Link to={"/cart"} className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            fill="#000"
          >
            <path d="M186.67-80q-27.5 0-47.09-19.58Q120-119.17 120-146.67V-660q0-27.5 19.58-47.08 19.59-19.59 47.09-19.59h100q0-79.66 55.16-136.5Q397-920 476.67-920q81.61 0 139.14 56.17 57.52 56.16 57.52 137.16h100q27.5 0 47.09 19.59Q840-687.5 840-660v513.33q0 27.5-19.58 47.09Q800.83-80 773.33-80H186.67Zm0-66.67h586.66V-660H186.67v513.33ZM480-420q80.33 0 138.5-58.17 58.17-58.16 58.17-138.5H610q0 53.34-38.33 91.67-38.34 38.33-91.67 38.33T388.33-525Q350-563.33 350-616.67h-66.67q0 80.34 58.17 138.5Q399.67-420 480-420ZM353.33-726.67h253.34q0-53.33-36.67-90-36.67-36.66-90-36.66t-90 36.66q-36.67 36.67-36.67 90Zm-166.66 580V-660v513.33Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;