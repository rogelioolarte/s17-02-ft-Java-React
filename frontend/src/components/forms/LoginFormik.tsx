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
import { login } from '../../services/authService'; // Suponiendo que existe un servicio para login
import { useUserActions } from '../../hooks/useUserActions';
import { isValidUser } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';

// Definir tipos para los valores del formulario
interface LoginFormValues {
  email: string;
  password: string;
}

// Esquema de validación usando Yup
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Formato de correo inválido')
    .required('El correo electrónico es obligatorio'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/[a-zA-Z]/, "La contraseña debe contener letras")
    .matches(/[0-9]/, "La contraseña debe contener números"),
});

export default function LoginFormik() {
  const { useSetUser } = useUserActions();
  const navigate = useNavigate()

  const initialCredentials: LoginFormValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values: LoginFormValues, 
      { setSubmitting }: FormikHelpers<LoginFormValues>) => {
    setSubmitting(false);
    const response = await login(values.email, values.password);
    console.log("handle submit: " + JSON.stringify(response));
    if (isValidUser(response)) {
      console.log('valid response')
      useSetUser(response);
      navigate("/")
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
