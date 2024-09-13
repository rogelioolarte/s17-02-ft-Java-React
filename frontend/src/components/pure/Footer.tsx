import { Typography } from "@material-tailwind/react";


export default function Footer() {
  return (
    <footer className="flex w-full h-[5%] fixed bottom-[1%] left-0 z-50 flex-row flex-wrap items-center justify-center gap-y-2 gap-x-12 px-2 py-2 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2024 Hey Doc!
      </Typography>
    </footer>
  )
}
