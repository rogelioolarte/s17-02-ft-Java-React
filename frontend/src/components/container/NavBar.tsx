import { IconButton, Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import NavButton from "../pure/NavButton";

function NavList() {

  return (
    <div className="my-2 flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
      <NavButton
          linkTo="/register/specialist"
          textButton="Registro de Especialista"
          variantButton="outlined"
          classNameButton="border-[#128e8f] rounded-1 bg-[#cef9f4] text-[#128e8f] font-bold"
        />
        <NavButton
          linkTo="/register/user"
          textButton="Registro de Paciente"
          variantButton="filled"
          classNameButton="rounded-1 bg-[#34cdc8] font-bold"
        />
        <NavButton
          linkTo="/login"
          textButton="Iniciar Sesión"
          variantButton="outlined"
          classNameButton="border-[#128e8f] rounded-1 bg-[#cef9f4] text-[#128e8f] font-bold"
        />
    </div>
  );
}

export default function NavBar() {
  return (
    <Navbar shadow={false} blurred={false} className="flex mx-auto py-1 border-b-2 rounded-none h-[5%]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full text-blue-gray-900">
        <Link to="/" className="mx-4">
          <Typography variant="h5" className=" flex gap-2 place-items-center cursor-pointer py-1.5 px-10 border border-[#34cdc8] rounded-lg">
            <IconButton size="md"  className="h-9 w-9 p-0" variant="text">
              <Typography variant="h5" className="p-0">H</Typography>
            </IconButton>
            HeyDoc!
          </Typography>
        </Link>
        <NavList />
      </div>
    </Navbar>
  );
}
