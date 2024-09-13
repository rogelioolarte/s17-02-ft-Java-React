import {
  List,
  Card,
  ListItem,
  Typography,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  HomeIcon,
  AdjustmentsHorizontalIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function SidebarLight() {
  const LIST_ITEM_STYLES =
    "select-none hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 data-[selected=true]:text-gray-900";

  return (
    <Card className="max-w-[17rem] min-h-full mx-auto p-6 shadow-md">
      <Link to ="/home">
        <div className="mb-2 flex items-center gap-4 p-4">
          <HomeIcon className="h-5 w-5" />
          <Typography color="blue-gray" className="text-lg font-bold">
            Home
          </Typography>
        </div>
      </Link>
      <hr className="my-2 border-gray-200" />
      <List>
        <Link to="/dashboard">
          <ListItem className={LIST_ITEM_STYLES}>
            <ListItemPrefix>
              <AdjustmentsHorizontalIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
        <Link to="/">
          <ListItem className={LIST_ITEM_STYLES}>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Pacientes
          </ListItem>
        </Link>
        <Link to="/schedule">
          <ListItem className={LIST_ITEM_STYLES}>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Configura tu Horario
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}

export function Sidebar() {
  return (
    <section className="flex place-items-center h-full">
      <SidebarLight />
    </section>
  );
}

export default Sidebar;