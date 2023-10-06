import { useNavigate } from "react-router-dom";

export function Interviews() {
  const navigate = useNavigate();
  return (
    <div className="w-5/6 p-5">
      <h1 className="text-white text-5xl font-bold w-full text-center">
        Interviews
      </h1>
      <div className="p-10 bg-orange-500 mt-20  rounded-lg">
        <h1 className="text-orange-100   text-3xl font-bold w-full text-center">
          Please choose a category to continue...
        </h1>
        <div className="flex justify-center gap-10 p-5 mt-5">
          <div
            className="p-6 bg-orange-200 rounded-lg w-1/3 text-orange-500 hover:text-black hover:scale-105 hover:bg-orange-300 transition ease-in-out duration-300"
            onClick={() => navigate("/interview/coding")}
          >
            <h1 className="text-3xl font-bold  text-center">Coding Round</h1>
          </div>
          <div
            className="p-6 bg-orange-200 rounded-lg w-1/3 text-orange-500 hover:text-black hover:scale-105 hover:bg-orange-300 transition ease-in-out duration-300"
            onClick={() => navigate("/interview/dsa")}
          >
            <h1 className="text-3xl font-bold text-center">DSA Round</h1>
          </div>
          <div
            className="p-6 bg-orange-200 rounded-lg w-1/3 text-orange-500 hover:text-black hover:scale-105 hover:bg-orange-300 transition ease-in-out duration-300"
            onClick={() => navigate("/interview/behavioral")}
          >
            <h1 className="text-3xl font-bold  text-center">
              Behavioral Round
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
