import { Outlet } from "react-router-dom";
import RequireAuth from "./components/container/RequireAuth";
import Sidebar from "./components/container/Sidebar";

export default function Appp() {
  return (
    <div>
      <RequireAuth>
        <div className="">
          <Sidebar />
          <Outlet/>
        </div>
      </RequireAuth>
    </div>
    
  )
}
