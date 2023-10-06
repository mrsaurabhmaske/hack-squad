import { DashBoardIcon } from "./DashBoardIcon";
import { GameIcon } from "./GameIcon";
import { HelpIcon } from "./HelpIcon";
import { HomeIcon } from "./HomeIcon";
import { LeftArrow } from "./LeftArrow";
import { PlaneIcon } from "./PlaneIcon";
import { PlaylistIcon } from "./PlaylistIcon";
import { UserIcon } from "./UserIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const [panelopen, setPanelopen] = useState<boolean>(true);

  const navigate = useNavigate();

  return (
    <aside
      className={`bg-gray-800 h-100 ${
        panelopen ? "w-1/6" : "w-1/12"
      } box-border transition-all ease-in-out transition-all ease-in-out duration-300`}
    >
      {panelopen ? (
        <div className=" p-3 h-20 flex items-center justify-around">
          <h2 className="text-white text-3xl font-bold  w-3/4">Hack Squad</h2>
          <LeftArrow toggle={() => setPanelopen(!panelopen)} />
        </div>
      ) : (
        <div
          className="p-5 h-20 flex items-center cursor-pointer"
          onClick={() => setPanelopen(!panelopen)}
        >
          <h1 className={`text-white text-3xl font-bold`}>HS</h1>
        </div>
      )}

      <div className="w-100 h-3/5 flex p-2 my-6">
        <div className={`w-20 h-full flex flex-col items-center gap-4`}>
          <HomeIcon />
          <DashBoardIcon />
          <PlaylistIcon />
          <GameIcon />
          <PlaneIcon />
        </div>

        <div
          className={`w-3/4 h-full flex flex-col  gap-4 ${
            !panelopen && "hidden"
          }`}
        >
          <h3
            className="h-10 text-white font-bold text-xl p-2 text-left hover:text-orange-200"
            onClick={() => navigate("/")}
          >
            Home
          </h3>
          <h3
            className="h-10 text-white font-bold text-xl p-2 text-left hover:text-orange-200"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </h3>
          <h3
            className="h-10 text-white font-bold text-xl p-2 text-left hover:text-orange-200"
            onClick={() => navigate("/interviews")}
          >
            Interviews
          </h3>
          <h3
            className="h-10 text-white font-bold text-xl p-2 text-left hover:text-orange-200"
            onClick={() => navigate("/")}
          >
            Games
          </h3>
          <h3
            className="h-10 text-white font-bold text-xl p-2 text-left hover:text-orange-200"
            onClick={() => navigate("/")}
          >
            Refer a Friend
          </h3>
        </div>
      </div>

      <div className="w-full h-1/8 bg-gray-700 border-y-2 border-orange-500 mt-15 flex">
        <div className="w-20 h-full flex flex-col items-center gap-6 my-5">
          <UserIcon />
          <HelpIcon />
        </div>

        <div
          className={`w-3/4 h-full flex flex-col  gap-4 my-5 ${
            !panelopen && "hidden"
          }`}
        >
          <h3 className="h-10 text-white font-bold text-xl p-2 text-left hover:text-orange-200 cursor-pointer">
            Profile
          </h3>
          <h3 className="h-10 text-white  text-xl p-1 text-left hover:text-orange-200 cursor-pointer">
            Help
          </h3>
        </div>
      </div>
    </aside>
  );
}
