import Logo from "../../assets/logo.png";
import { Analytics } from "../../assets/svg/analytics";
import { Custom } from "../../assets/svg/custom";
import { Member } from "../../assets/svg/member";
import { Seat } from "../../assets/svg/seat";

const menuItems = [
  {
    item: "Seats",
    isSelected: false,
    icon: <Seat />,
  },
  {
    item: "Sales Member",
    isSelected: false,
    icon: <Member />,
  },
  {
    item: "Analytics",
    isSelected: false,
    icon: <Analytics />,
  },
  {
    item: "Custom",
    isSelected: true,
    icon: <Custom />,
  },
];

const Sidebar = () => {
  return (
    <>
      <nav className="sticky w-[90%] top-0 bottom-0 h-screen rounded-md bg-custom-gradient">
        <div className="flex flex-column w-full justify-center items-center h-[150px]">
          <div className="w-[112px] h-[30px]">
            <img src={Logo} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 justify-end items-center">
          {menuItems?.map((item, ind) => (
            <div
              className={`menu gap-2 items-center ${
                item.isSelected ? "bg-primary text-primary  " : "bg-transparent"
              }`}
              key={ind}
            >
              {item.icon}
              {item.item}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
