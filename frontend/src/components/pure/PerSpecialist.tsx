import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import { Specialist } from "../../models/type";

export default function PerSpecialist({ 
    specialistLastname, specialistName, 
    specialtyName} : Specialist) {
  return (
    <Card className="flex flex-row my-2 w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <Typography color="blue-gray" className="mt-2 text-[20px] font-bold" >
                { `${specialistName  ?? "Nombre"} ${specialistLastname ?? "Apellido"} ` }
            </Typography>
            <Typography variant="small" className="font-normal text-gray-600">
                { `${specialtyName ?? "Especialidad"}`}
            </Typography>
          </CardHeader>
          <CardBody className="px-4 flex justify-center justify-items-center-">
            {""}
          </CardBody>
          <CardFooter className="px-2 ml-auto">
            <Button variant="gradient" >Obtener un turno</Button>
          </CardFooter>
        </Card>
  )
}
