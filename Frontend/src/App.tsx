import { Sidebar } from "./Components/Sidebar";
import { AllRoutes } from "./Routes/AllRoutes";

export default function App() {
  return (
    <main className="bg-orange-600 h-screen flex w-full">
      <Sidebar />
      <AllRoutes />
    </main>
  );
}
