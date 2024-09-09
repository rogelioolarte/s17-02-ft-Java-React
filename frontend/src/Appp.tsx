import { Outlet } from "react-router-dom";
import RequireAuth from "./components/container/RequireAuth";

export default function Appp() {
  return (
    <div>
      <RequireAuth>
        <Outlet/>
      </RequireAuth>
    </div>
    
  )
}
