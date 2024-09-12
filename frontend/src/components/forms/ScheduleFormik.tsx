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
import { ScheduleConfigFormValues } from '../../models/type';
import CustomDateRangeFormField from '../pure/CustomDateRangeFormField';
import { CustomChip } from '../pure/CustomChip';

const scheduleConfigSchema = Yup.object().shape({
    startDate: Yup.date().required('La fecha inicial es obligatoria'),
    endDate: Yup.date().required('La fecha final es obligatoria'),
    startTime: Yup.string().required('La hora inicial es obligatoria'),
    endTime: Yup.string().required('La hora final es obligatoria'),
    startRestTime: Yup.string().required('La hora de inicio de descanso es obligatoria'),
    endRestTime: Yup.string().required('La hora de fin de descanso es obligatoria'),
    timeBooking: Yup.string().required('La duración es obligatoria'),
    timeBookingRest: Yup.string().required('La duración del descanso es obligatoria'),
    selectedDays: Yup.array().of(Yup.string()).min(1, 'Debes seleccionar al menos un día').required('Debes seleccionar al menos un día'),
  });

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];


export default function ScheduleFormik() {
  const initialCredentials: ScheduleConfigFormValues = {
    startDate: new Date(),
    endDate: new Date(),
    startTime: "",
    endTime: "",
    startRestTime: "",
    endRestTime: "",
    selectedDays: [],
    timeBooking: "",
    timeBookingRest: "",
  };

  const handleSubmit = async (values: ScheduleConfigFormValues, 
      { setSubmitting }: FormikHelpers<ScheduleConfigFormValues>) => {
    setSubmitting(false);
    console.log(values)
  };

  return (
    <div className="w-full md:w-1/2 max-h-[50%] grid justify-items-center px-4 py-8 mt-5">
      <Typography className="text-center" variant="h4" color="black">
        Configura tu Horario
      </Typography>
      <Formik
        initialValues={initialCredentials}
        validationSchema={scheduleConfigSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, values, setFieldValue }) => (
          <Form className="w-full grid justify-items-center mt-5">
            <Card shadow={false} className=" bg-white w-full">
              <CardBody className="flex flex-col gap-4">

                {/* Campo Fecha Inicial y Final de Trabajo  */}
                <CustomDateRangeFormField 
                  values={{from: values.startDate, to: values.endDate}} 
                  setFieldValue={setFieldValue} touched={touched} errors={errors}
                  fieldNameFrom='startDate' fieldNameTo='endDate'
                  placeholderFrom='Fecha de Inicio' placeholderTo='Fecha de Fin de trabajo'
                  labelFrom='Fecha de Inicio' labelTo='Fecha de Fin de trabajo' 
                  disabled={{ before: new Date() }}
                />

                {/* Campo Hora Inicial y Fin de trabajo */}
                <div className="flex flex-row gap-2 place-content-center">
                  <Field name="startTime" component={CustomFormField} 
                    placeholder="Hora de Inicio de trabajo"
                    label="Hora de Inicio de trabajo" type="time" className="w-full" />
                    <Field name="endTime" component={CustomFormField} 
                    placeholder="Hora de Fin de trabajo"
                    label="Hora de Fin de trabajo" type="time"/>
                </div>

                {/* Campo Hora Inicial y Fin de descanso */}
                <div className="flex flex-row gap-2 place-content-center">
                  <Field name="startRestTime" component={CustomFormField} 
                    placeholder="Hora de Inicio de trabajo"
                    label="Hora de Inicio de descanso" type="time" className="w-full" />
                    <Field name="endRestTime" component={CustomFormField} 
                    placeholder="Hora de Fin de trabajo"
                    label="Hora de Fin de descanso" type="time"/>
                </div>

                {/* Campo Horas de Trabajo y descanso*/}
                <div className="flex flex-row gap-2 place-content-center">
                  <Field name="startRestTime" component={CustomFormField} 
                    placeholder="Horas de Trabajo"
                    label="Horas de Trabajo" type="number" className="w-full" />
                    <Field name="endRestTime" component={CustomFormField} 
                    placeholder="Horas de Decanso"
                    label="Horas de Decanso" type="number"/>
                </div>

                { /* Campo de dias de trabajo */ }
                <Typography className='-mb-3' >Selecciona los dias de trabajo</Typography>
                <div className='flex flex-row gap-2 place-content-center'>
                  {days.map(day => (
                    <CustomChip day={day} setFieldValue={setFieldValue} 
                      key={day} selectedDays={values.selectedDays} />
                  ))}
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
