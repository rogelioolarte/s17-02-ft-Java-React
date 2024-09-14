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
import { register } from '../../services/authService';
import { useUserActions } from '../../hooks/useUserActions';
import { isValidUser } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Definir tipos para los valores del formulario
interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

// Esquema de validación usando Yup
const registerSchema = Yup.object().shape({
  email: Yup.string()
    .min(7, 'El correo electrónico no puede tener menos de 7 caracteres')
    .max(40, 'El correo electrónico no puede tener más de 40 caracteres')
    .email('Formato de correo inválido')
    .required('El correo electrónico es obligatorio'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(40, 'El contraseña no puede tener más de 50 caracteres')
    .matches(/[a-zA-Z]/, "La contraseña debe contener letras")
    .matches(/[0-9]/, "La contraseña debe contener números"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Las contraseñas deben coincidir')
    .required('Debes confirmar la contraseña'),
});



export default function RegisterFormik({ type }: { type: string }) {
  const { useSetUser } = useUserActions()
  const navigate = useNavigate()

  const initialCredentials: RegisterFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = async(values: RegisterFormValues, 
      { setSubmitting }: FormikHelpers<RegisterFormValues>) => {
    setSubmitting(false)
    toast.success('Registrandose...', { duration: 2000, closeButton: true })
    const response = await register(values.email, values.password, type)
    if(isValidUser(response)){
      useSetUser(response)
      if(response.token !== ""){
        navigate("/register/profile", { state: { fromRegister: type }} )
      }
    }
  };

  return (
    <div className="w-full md:w-1/2 max-h-screen grid justify-items-center px-4 py-8 mt-5">
      <Typography className="text-center" variant="h4" color="black">
        Regístrate como { type === "specialist" ? "Especialista" : 
          type === "user" ? "Paciente" : null }
      </Typography>
      <Formik
        initialValues={initialCredentials}
        validationSchema={registerSchema}
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

                {/* Campo Confirmar Contraseña */}
                <div className="flex flex-col gap-[2px]">
                  <Field name="confirmPassword" component={CustomFormField} placeholder="Confirmar Contraseña"
                    label="Confirmar Contraseña" type="password"  />
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
