import "./App.css";
import { Bell } from "./assets/svg/bell";
import { Logout } from "./assets/svg/logout";
import { Support } from "./assets/svg/support";
import CreateOffer from "./components/CreateOffer";

import ShowOffer from "./components/ShowOffer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex w-full">
        <div className="w-[20%]  bg-primary ">
          <Sidebar />
        </div>
        <div className="w-[80%] flex flex-col gap-8 p-5">
          <div className="w-full flex  justify-between items-end">
            <div className="w-full">
              <p>Create A Custom Offer</p>
            </div>
            <div className="w-full">
              <p>Manage Offer</p>
            </div>
            <div className="w-full flex items-end justify-end gap-3">
              <Bell />
              <Support />
              <Support />
            </div>
          </div>

          <div className="w-full flex gap-10 bg-secondary p-6 ">
            <CreateOffer />
            <ShowOffer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
