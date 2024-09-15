import { Typography } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";


export default function Footer() {
  const location = useLocation()

  return (
    <footer className="flex w-full h-[5%] fixed bottom-[1%] flex-row flex-wrap items-center justify-center gap-y-2 gap-x-12 px-2 py-2 text-center md:justify-start">
      { location.pathname === "/" ? (<Typography color="blue-gray" className="font-normal">
        &copy; 2024 Hey Doc!
      </Typography>) : null}
    </footer>
  )
}
