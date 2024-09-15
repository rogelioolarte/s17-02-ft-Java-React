import { useParams } from "react-router-dom";
import RegisterFormik from "../components/forms/RegisterFormik";
import ProfileFormik from "../components/forms/ProfileFormik";
import SpecialistFormik from "../components/forms/SpecialistFormik";
import NotFoundPage from "./NotFoundPage";

export default function RegisterPage() {
    const { type } = useParams(); 

  return (<div className="flex justify-center h-full w-full">
    { type === "profile" ? <ProfileFormik type="register" /> :
      type === "check" ? <SpecialistFormik /> :
      type === "specialist" || type === "user" ?
      (<RegisterFormik type={ type } />) : <NotFoundPage />
    }
  </div>)
}
