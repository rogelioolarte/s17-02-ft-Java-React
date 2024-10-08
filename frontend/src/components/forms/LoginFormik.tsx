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
import { login } from '../../services/authService';
import { useUserActions } from '../../hooks/useUserActions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface LoginFormValues {
  email: string;
  password: string;
}

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Formato de correo inválido')
    .min(7, 'El correo electrónico no puede tener menos de 7 caracteres')
    .max(40, 'El correo electrónico no puede tener más de 40 caracteres')
    .required('El correo electrónico es obligatorio'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(40, 'El contraseña no puede tener más de 50 caracteres')
    .matches(/[a-zA-Z]/, "La contraseña debe contener letras")
    .matches(/[0-9]/, "La contraseña debe contener números"),
});

export default function LoginFormik() {
  const { useUpdateUser, useSetUserState } = useUserActions();
  const navigate = useNavigate()

  const initialCredentials: LoginFormValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values: LoginFormValues, 
      { setSubmitting }: FormikHelpers<LoginFormValues>) => {
    setSubmitting(false);
    toast.success('Iniciando sesión...', { duration: 2000, closeButton: true })
    const response = await login(values.email, values.password);
    if (response.token !== "") {
      useUpdateUser(response)
      useSetUserState("final")
      navigate("/home")
    }
  };

  return (
    <div className="w-full md:w-1/2 max-h-screen grid justify-items-center px-4 py-8 mt-5">
      <Typography className="text-center" variant="h4" color="black">
        Iniciar Sesión
      </Typography>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="w-full grid justify-items-center mt-5">
            <Card shadow={false} className=" bg-white w-full">
              <CardBody className="flex flex-col gap-4">
                {/* Campo Email */}
                <div className="flex flex-col gap-2" >
                  <Field name="email" component={CustomFormField} 
                    placeholder="Correo Electrónico" label="Correo Electrónico" type="email" />
                </div>

                {/* Campo Contraseña */}
                <div className="flex flex-col gap-[2px]">
                  <Field name="password" component={CustomFormField} placeholder="Contraseña"
                    label="Contraseña" type="password" />
                </div>

              </CardBody>
              <CardFooter className="pt-0">
                <Button type="submit" variant="filled" fullWidth color="black">
                  Iniciar Sesión
                </Button>
              </CardFooter>
            </Card>
          </Form>
        )}
      </Formik>
    </div>
  );
}
