import { Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import NavButton from "../pure/NavButton";
import { useUserActions } from "../../hooks/useUserActions";

function NavList() {
  const { user, useResetUser } = useUserActions();

  return (
    <div className="my-2 flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
      <NavButton
          linkTo="/register/specialist"
          textButton="Registro Especialista"
          variantButton="outlined"
          classNameButton="border-[#128e8f] rounded-1 bg-[#cef9f4] text-[#128e8f] font-bold"
        />
        <NavButton
          linkTo="register/user"
          textButton="Registra Paciente"
          variantButton="filled"
          classNameButton="rounded-1 bg-[#34cdc8] font-bold"
        />
      {user.token === "" ? (
        <NavButton
          linkTo="/login"
          textButton="Login"
          variantButton="outlined"
          classNameButton="border-[#128e8f] rounded-1 bg-[#cef9f4] text-[#128e8f] font-bold"
        />
        ) :(
        <NavButton
          linkTo=""
          textButton="Logout"
          variantButton="outlined"
          onClicked={() => useResetUser()}
          classNameButton="border-[#128e8f] rounded-1 bg-[#cef9f4] text-[#128e8f] font-bold"
        />
      )}
    </div>
  );
}

export default function NavBar() {
  return (
    <Navbar shadow={false} blurred={false} className="flex mx-auto py-3 border-b-2 rounded-none">
      <div className="flex flex-col md:flex-row items-center justify-between w-full text-blue-gray-900">
        <Link to="/" className="mx-4">
          <Typography variant="h5" className="cursor-pointer py-1.5 px-10 bg-[#d9d9d9] rounded">
            Hey Doc!
          </Typography>
        </Link>
        <NavList />
      </div>
    </Navbar>
  );
}
