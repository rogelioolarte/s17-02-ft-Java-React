import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { NavButtonProps } from "../../models/type";

export default function NavButton({
  linkTo = "",
  textButton,
  variantButton = "filled",
  classNameButton = "",
  onClicked
}: NavButtonProps) {
  return (
    <Link to={linkTo} >
      <Button variant={variantButton} onClick={onClicked} size="sm" className={classNameButton}>
        <Typography variant="small" className="px-1 font-medium">
          <span className="flex items-center">{textButton}</span>
        </Typography>
      </Button>
    </Link>
  );
}
