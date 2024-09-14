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
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useSpecialtyActions } from '../../hooks/useSpecialtyActions';
import { registerSpecialist } from '../../services/specialistService';

interface SpecialistFormValues {
  specialistCode: string;
  specialtyId: number;
  bookingPrice: number;
}

// Esquema de validación usando Yup
const specialistSchema = Yup.object().shape({
  specialistCode: Yup.string()
    .required('El código de especialista es obligatorio')
    .min(5, 'El código debe tener al menos 5 caracteres')
    .max(25, 'El código no puede tener más de 25 caracteres'),
  specialtyId: Yup.number().required('Debes seleccionar una especialidad'),
  bookingPrice: Yup.number()
    .min(1, 'El precio de consulta no puede ser menos a 1')
    .max(9999999999, 'El precio de consulta no puede ser mayor a 9999999999')
    .required('El precio de consulta es obligatorio')
    .positive('El precio debe ser positivo'),
});

export default function SpecialistFormik() {
  const { specialties } = useSpecialtyActions()
  const navigate = useNavigate();

  const initialCredentials: SpecialistFormValues = {
    specialistCode: '',
    specialtyId: specialties[0]?.specialtyId || 0,
    bookingPrice: 0,
  };

  const handleSubmit = async (
    values: SpecialistFormValues,
    { setSubmitting }: FormikHelpers<SpecialistFormValues>
  ) => {
    setSubmitting(false);
    console.log('valores antes de enviar al backend' + values)
    toast.success('Registrando especialista...', { duration: 2000, closeButton: true });
    const response = await registerSpecialist(values.specialistCode,
      values.specialtyId, values.bookingPrice, 0)
    console.log(response)
    navigate("/home")
  };

  return (
    <div className="w-full md:w-3/4 max-h-screen grid justify-items-center px-4 py-8 mt-5">
      <Typography className="text-center" variant="h4" color="black">
        { location.pathname === "/specialist" ? "Edita tus datos de Especialista" :
            "Regístrate como Especialista" } 
      </Typography>
      <Formik
        initialValues={initialCredentials}
        validationSchema={specialistSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="w-full grid justify-items-center mt-5">
            <Card shadow={false} className="bg-white w-full">
              <CardBody className="flex flex-col gap-4">
                {/* Campo Código de Especialista */}
                <div className="flex flex-col gap-2">
                  <Field
                    name="specialistCode"
                    component={CustomFormField}
                    placeholder="Código de Especialista"
                    label="Código de Especialista"
                    type="text"
                  />
                </div>

                {/* Campo Especialidad */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="specialtyId" className="text-gray-700">Especialidad</label>
                  <Field
                    as="select"
                    name="specialtyId"
                    className="border border-gray-300 rounded p-2 mb-8"
                    value={values.specialtyId}
                    onChange={() => setFieldValue('specialtyId', values.specialtyId, true)}
                  >
                    {specialties.map((specialty) => (
                      <option key={specialty.specialtyId} value={specialty.specialtyId}>
                        {specialty.specialtyName}
                      </option>
                    ))}
                  </Field>
                </div>

                {/* Campo Precio de Consulta */}
                <div className="flex flex-col gap-2">
                  <Field
                    name="bookingPrice"
                    component={CustomFormField}
                    placeholder="Precio de Consulta"
                    label="Precio de Consulta"
                    type="number"
                  />
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
