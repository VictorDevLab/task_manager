import { IoMdSunny } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdOutlineInbox } from "react-icons/md";

export function Sidebar() {
  return (
    <div className="sidebar">
      <a href="/">
        <MdOutlineInbox />
        Inbox
      </a>
      <a href="/" className="active">
        {" "}
        <IoMdSunny />
        Today
      </a>
      <a href="/">
        <SlCalender />
        Upcoming
      </a>
    </div>
  );
}
