import { Outlet } from "react-router-dom";
import RequireAuth from "./components/container/RequireAuth";
import Sidebar from "./components/container/Sidebar";

export default function Appp() {
  return (
      <RequireAuth>
        <div className="min-h-full min-w-full flex justify-center">
          <Sidebar />
          <Outlet/>
        </div>
      </RequireAuth>
  )
}
