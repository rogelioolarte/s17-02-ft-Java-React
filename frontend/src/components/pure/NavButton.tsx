import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { variant } from "@material-tailwind/react/types/components/button";
import { MouseEventHandler } from "react";

interface NavButtonProps {
  linkTo?: string;
  textButton: string;
  variantButton: variant;
  classNameButton?: string;
  onClicked?: MouseEventHandler<HTMLButtonElement>;
}

export default function NavButton({
  linkTo = "",
  textButton,
  variantButton = "filled",
  classNameButton = "",
  onClicked
}: NavButtonProps) {
  return (
    <Link to={linkTo} >
      <Button variant={variantButton} onClick={onClicked} size="sm" fullWidth className={classNameButton}>
        <Typography variant="small" className="px-1 font-medium">
          <span className="flex items-center">{textButton}</span>
        </Typography>
      </Button>
    </Link>
  );
}
