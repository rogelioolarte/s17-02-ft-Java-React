import { Typography, Button } from "@material-tailwind/react";
import { FlagIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
      <div className="h-screen mx-auto grid place-items-center text-center px-8">
        <div>
          <FlagIcon className="w-20 h-20 mx-auto" />
          <Typography
            variant="h1"
            color="blue-gray"
            className="mt-10 !text-3xl !leading-snug md:!text-4xl"
          >
            Error 404 <br /> Parece que algo salió mal.
          </Typography>
          <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          No te preocupes, nuestro equipo ya está trabajando en ello. Intenta actualizar
          la página o vuelve más tarde.
          </Typography>
          <Link to="/">
            <Button color="gray" className="w-full px-4 md:w-[10rem]">
              De vuelta al inicio
            </Button>
          </Link>
        </div>
      </div>
  );
}

export default NotFoundPage;