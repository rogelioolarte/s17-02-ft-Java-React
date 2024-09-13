export interface User {
    token: string,
    roleName: string,
    roleId: string,
    userId: string,
    username: string
}

export interface Department {
    departmentId: number,
    departmentName: string,
    cities: City[]
}

export interface City {
    cityId: number,
    cityName: string
}

import { variant } from "@material-tailwind/react/types/components/button";

export interface NavButtonProps {
    linkTo?: string;
    textButton: string;
    variantButton: variant;
    classNameButton?: string;
    onClicked?: function;
}
