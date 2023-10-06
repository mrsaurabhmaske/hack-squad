import { LeftArrow } from "../Components/LeftArrow";
import { DashBoardIcon } from "../Components/DashBoardIcon";
import { GameIcon } from "../Components/GameIcon";
import { HomeIcon } from "../Components/HomeIcon";
import { PlaylistIcon } from "../Components/PlaylistIcon";
import { PlaneIcon } from "../Components/PlaneIcon";
import { UserIcon } from "../Components/UserIcon";
import { HelpIcon } from "../Components/HelpIcon";

export function Homepage() {
  return (
    <main className="bg-black h-screen flex ">
      <aside className="bg-gray-800 h-100 w-1/6 box-border transition-all ease-in-out delay-150">
        <div className=" p-3 h-20 flex items-center justify-around">
          <h1 className="text-4xl text-white font-bold px-2 w-3/4">
            Hack Squad
          </h1>
          <LeftArrow />
        </div>

        <div className="w-100 h-3/5 flex p-2">
          <div className="w-20 h-full flex flex-col items-center gap-4 my-5">
            <HomeIcon />
            <DashBoardIcon />
            <PlaylistIcon />
            <GameIcon />
            <PlaneIcon />
          </div>

          <div className="w-3/4 h-full flex flex-col  gap-4 my-5">
            <h3 className="h-10 text-white font-bold text-xl p-2 text-left">
              Home
            </h3>
            <h3 className="h-10 text-white font-bold text-xl p-2 text-left">
              Dashboard
            </h3>
            <h3 className="h-10 text-white font-bold text-xl p-2 text-left">
              Library
            </h3>
            <h3 className="h-10 text-white font-bold text-xl p-2 text-left">
              Games
            </h3>
            <h3 className="h-10 text-white font-bold text-xl p-2 text-left">
              Refer a Friend
            </h3>
          </div>
        </div>

        <div className="w-full h-1/7 bg-gray-700 border-y-2 border-orange-500 mt-28 flex">
          <div className="w-20 h-full flex flex-col items-center gap-6 my-5">
            <UserIcon />
            <HelpIcon />
          </div>

          <div className="w-3/4 h-full flex flex-col  gap-4 my-5">
            <h3 className="h-10 text-white font-bold text-xl p-2 text-left">
              Home
            </h3>
            <h3 className="h-10 text-white  text-xl p-1 text-left">Help</h3>
          </div>
        </div>
      </aside>
      <section className="bg-orange-600 h-100 w-5/6"></section>
    </main>
  );
}
