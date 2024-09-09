import { useParams } from "react-router-dom";
import RegisterFormik from "../components/forms/RegisterFormik";

export default function RegisterPage() {
    const { type } = useParams();

    return (
      <div className="flex justify-center w-full">
        <RegisterFormik type={ type ?? "" } />
      </div>
    )
}
