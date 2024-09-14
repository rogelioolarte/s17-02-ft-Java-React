import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import CustomFormField from '../pure/CustomFormField';
import { useLocationActions } from '../../hooks/useLocationActions';
import { useState } from 'react';
import { City, Department } from '../../models/type';
import { useLocation } from 'react-router-dom';
import { useUserActions } from '../../hooks/useUserActions';

// Definir tipos para los valores del formulario
interface ProfileFormValues {
  profileName: string;
  profileLastname: string;
  documentNumber: string;
  birth: string;
  address: string;
  departmentId: number;
  cityId: number;
}

const profileSchema = Yup.object().shape({
  profileName: Yup.string()
    .min(2, 'El nombre no puede tener menos de 2 caracteres')
    .max(25, 'El nombre no puede tener más de 25 caracteres')
    .required('El nombre es obligatorio'),
  profileLastname: Yup.string()
    .min(2, 'El apellido no puede tener menos de 2 caracteres')
    .max(25, 'El apellido no puede tener más de 25 caracteres')
    .required('El apellido es obligatorio'),
  documentNumber: Yup.string()
    .matches(/^\d+$/, 'El número de documento debe ser un número')
    .min(8, 'El número de documento no puede tener menos de 8 dígitos')
    .max(25, 'El número de documento no puede tener más de 25 dígitos')
    .required('El número de documento es obligatorio'),
  birth: Yup.date()
    .max(new Date(new Date().setFullYear(new Date().getFullYear() - 150)),
      'La fecha de nacimiento no puede ser hace más de 150 años')
    .required('La fecha de nacimiento es obligatoria'),
  address: Yup.string()
    .max(30, 'La dirección no puede tener más de 30 caracteres')
    .required('La dirección es obligatoria'),
  departmentId: Yup.number()
    .required('El departamento es obligatorio'),
  cityId: Yup.number()
    .required('La ciudad es obligatoria'),
});

export default function ProfileFormik() {
  const location = useLocation()
  const { locations } = useLocationActions();
  const { user }  = useUserActions()
  const [cities, setCities] = useState(locations.length > 0 ? locations[0].cities : []);

  const initialCredentials: ProfileFormValues = {
    profileName: '',
    profileLastname: '',
    documentNumber: '',
    birth: '',
    address: '',
    departmentId: locations.length > 0 ? locations[0].departmentId : 0,
    cityId: locations.length > 0 ? locations[0].cities[0].cityId : 0,
  };

  // Función para manejar cambios en el departamento seleccionado
  const handleDepartmentChange = (departmentId: number) => {
    const selectedDepartment = locations.find(
      (location) => location.departmentId === departmentId
    );
    if (selectedDepartment) {
      setCities(selectedDepartment.cities);
    }
  };

  const handleSubmit = (values: ProfileFormValues, { setSubmitting }: FormikHelpers<ProfileFormValues>) => {
    const profileData = {
      profileName: values.profileName,
      profileLastname: values.profileLastname,
      documentType: 'DNI',
      documentNumber: values.documentNumber,
      avatarUrl: '', 
      birth: values.birth,
      address: values.address,
      city: {
        cityId: values.cityId,
      },
      user : { userId: user.userId }
    };

    console.log(profileData);
    setSubmitting(false);
  };

  return (
    <div className="w-full md:w-3/4 max-h-screen grid justify-items-center mt-5">
      <Typography className="text-center" variant="h4" color="black">
        { location.pathname === "/profile" ? "Edita tu Perfil" : "Registro de Perfil" } 
      </Typography>
      <Formik
        initialValues={initialCredentials}
        validationSchema={profileSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="w-full grid justify-items-center mt-2">
            <Card shadow={false} className="bg-white w-full">
              <CardBody className="flex flex-row gap-4 w-full">
                <div className='flex flex-col w-full'>
                  {/* Campo Nombre */}
                  <div className="flex flex-col gap-2">
                    <Field name="profileName" component={CustomFormField}
                      placeholder="Nombre" label="Nombre" />
                  </div>

                  {/* Campo Apellido */}
                  <div className="flex flex-col gap-2">
                    <Field name="profileLastname" component={CustomFormField} placeholder="Apellido" label="Apellido" />
                  </div>

                  {/* Campo Número de Documento */}
                  <div className="flex flex-col gap-2">
                    <Field name="documentNumber" component={CustomFormField}
                      placeholder="Número de Documento" label="Número de Documento"
                      />
                  </div>
                </div>

                <div className='flex flex-col w-full'>
                    {/* Campo Fecha de Nacimiento */}
                  <div className="flex flex-col gap-2">
                    <Field name="birth" component={CustomFormField} placeholder="Fecha de Nacimiento" label="Fecha de Nacimiento" type="date" />
                  </div>

                  {/* Campo Dirección */}
                  <div className="flex flex-col gap-2">
                    <Field name="address" component={CustomFormField} placeholder="Dirección" label="Dirección" />
                  </div>

                  {/* Campo Departamento */}
                  <div className="flex flex-col gap-2 mb-4">
                    <Field
                      as="select"
                      name="departmentId"
                      className="border p-2 "
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        const departmentId = parseInt(e.target.value);
                        setFieldValue('departmentId', departmentId);
                        handleDepartmentChange(departmentId);
                        setFieldValue('cityId', cities[0]?.cityId || 0);
                      }}
                    >
                      {locations.map((department: Department) => (
                        <option key={department.departmentId} value={department.departmentId}>
                          {department.departmentName}
                        </option>
                      ))}
                    </Field>
                  </div>

                  {/* Campo Ciudad */}
                  <div className="flex flex-col gap-2">
                    <Field as="select" name="cityId" className="border p-2">
                      {cities.map((city: City) => (
                        <option key={city.cityId} value={city.cityId}>
                          {city.cityName}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>

              </CardBody>
              <CardFooter className="pt-0">
                <Button type="submit" variant="filled" fullWidth color="black">
                  Registrarse
                </Button>
              </CardFooter>
            </Card>
          </Form>
        )}
      </Formik>
    </div>
  );
}
