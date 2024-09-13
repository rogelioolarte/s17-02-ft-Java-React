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
import CustomDateRangeFormField from '../pure/CustomDateRangeFormField';
import { CustomChip } from '../pure/CustomChip';
import { format } from 'date-fns';
import { useEffect } from 'react';

interface ScheduleConfigFormValues {
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  startRestTime: string;
  endRestTime: string;
  timeBooking: number;
  timeBookingRest: number;
  selectedDays: string[];
}

const scheduleConfigSchema = Yup.object().shape({
  startDate: Yup.date()
    .min(new Date(), 'La fecha inicial debe ser después de hoy')
    .required('La fecha inicial es obligatoria'),
  endDate: Yup.date()
    .min(Yup.ref('startDate'), 'La fecha final debe ser posterior a la inicial')
    .required('La fecha final es obligatoria'),
  startTime: Yup.string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'La hora debe estar en formato HH:mm')
    .test('min-start-time', 'La hora de inicio debe ser al menos 00:00', value => {
      return value ? new Date(`1970-01-01T${value}:00`) >= new Date('1970-01-01T00:00:00') : false;
    })
    .required('La hora inicial es obligatoria'),
  endTime: Yup.string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'La hora debe estar en formato HH:mm')
    .test('max-end-time', 'La hora de fin debe ser máximo a las 24:00', value => {
      return value ? new Date(`1970-01-01T${value}:00`) <= new Date('1970-01-01T24:00:00') : false;
    })
    .test('is-after-start-time', 'La hora de fin debe ser después de la hora de inicio', function (value) {
      const { startTime } = this.parent;
      return startTime && value ? new Date(`1970-01-01T${value}:00`) > new Date(`1970-01-01T${startTime}:00`) : false;
    })
    .required('La hora final es obligatoria'),
  startRestTime: Yup.string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'La hora debe estar en formato HH:mm')
    .test('is-after-start-time', 'La hora de descanso debe ser después de la hora de inicio de trabajo', function (value) {
      const { startTime } = this.parent;
      return startTime && value ? new Date(`1970-01-01T${value}:00`) > new Date(`1970-01-01T${startTime}:00`) : false;
    })
    .required('La hora de inicio de descanso es obligatoria'),
  endRestTime: Yup.string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'La hora debe estar en formato HH:mm')
    .test('is-after-start-rest-time', 'La hora de fin de descanso debe ser después de la hora de inicio de descanso', function (value) {
      const { startRestTime } = this.parent;
      return startRestTime && value ? new Date(`1970-01-01T${value}:00`) > new Date(`1970-01-01T${startRestTime}:00`) : false;
    })
    .test('is-before-end-time', 'La hora de fin de descanso debe ser antes de la hora de fin de trabajo', function (value) {
      const { endTime } = this.parent;
      return endTime && value ? new Date(`1970-01-01T${value}:00`) < new Date(`1970-01-01T${endTime}:00`) : false;
    })
    .required('La hora de fin de descanso es obligatoria'),
  timeBooking: Yup.number()
    .positive('La duración de trabajo debe ser positiva')
    .required('La duración de trabajo es obligatoria'),
  timeBookingRest: Yup.number()
    .positive('La duración del descanso debe ser positiva')
    .required('La duración del descanso es obligatoria'),
  selectedDays: Yup.array()
    .of(Yup.string())
    .min(1, 'Debes seleccionar al menos un día')
    .required('Debes seleccionar al menos un día'),
});

const days = [
  { name: 'Lunes', value: 'MONDAY' },
  { name: 'Martes', value: 'TUESDAY' },
  { name: 'Miércoles', value: 'WEDNESDAY' },
  { name: 'Jueves', value: 'THURSDAY' },
  { name: 'Viernes', value: 'FRIDAY' },
  { name: 'Sábado', value: 'SATURDAY' },
  { name: 'Domingo', value: 'SUNDAY' },
];

const formatDay = (date: Date) => format(date, 'yyyy-MM-dd');
/* const formattedTime = (date: Date) => format(date, 'HH:mm:ss'); */

const formattedValues = ({
  startDate,
  endDate,
  startTime,
  endTime,
  startRestTime,
  endRestTime,
  timeBooking,
  timeBookingRest,
  selectedDays,
}: ScheduleConfigFormValues) => {
  return {
    startDate: formatDay(startDate),
    endDate: formatDay(endDate),
    startTime: (startTime).concat(':00'),
    endTime: (endTime).concat(':00'),
    startRestTime: (startRestTime).concat(':00'),
    endRestTime: (endRestTime).concat(':00'),
    timeBooking,
    timeBookingRest,
    selectedDays,
  };
};

export default function ScheduleFormik() {
  const initialCredentials: ScheduleConfigFormValues = {
    startDate: new Date(),
    endDate: new Date(),
    startTime: "00:00:00",
    endTime: "00:00:00",
    startRestTime: "00:00:00",
    endRestTime: "00:00:00",
    timeBooking: 0,
    timeBookingRest: 0,
    selectedDays: [],
  };

  const handleSubmit = async (
    values: ScheduleConfigFormValues,
    { setSubmitting }: FormikHelpers<ScheduleConfigFormValues>
  ) => {
    setSubmitting(false);
    console.log(formattedValues(values));
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
        {({ touched, errors, values, setFieldValue }) => {
          useEffect(() => {
            console.log((values));
          }, [values]);

          return (<Form className="w-full grid justify-items-center mt-5">
            <Card shadow={false} className=" bg-white w-full">
              <CardBody className="flex flex-col gap-4">
                {/* Campo Fecha Inicial y Final de Trabajo  */}
                <CustomDateRangeFormField
                  values={{ from: values.startDate, to: values.endDate }}
                  setFieldValue={setFieldValue}
                  touched={touched}
                  errors={errors}
                  fieldNameFrom="startDate"
                  fieldNameTo="endDate"
                  placeholderFrom="Fecha de Inicio"
                  placeholderTo="Fecha de Fin de trabajo"
                  labelFrom="Fecha de Inicio"
                  labelTo="Fecha de Fin de trabajo"
                  disabled={{ before: new Date() }}
                />

                {/* Campo Hora Inicial y Fin de trabajo */}
                <div className="flex flex-row gap-2 place-content-center">
                  <Field
                    name="startTime"
                    component={CustomFormField}
                    placeholder="Hora de Inicio de trabajo"
                    label="Hora de Inicio de trabajo"
                    type="time"
                  />
                  <Field
                    name="endTime"
                    component={CustomFormField}
                    placeholder="Hora de Fin de trabajo"
                    label="Hora de Fin de trabajo"
                    type="time"
                  />
                </div>
                {/* Campo Hora Inicial y Fin de descanso */}
                <div className="flex flex-row gap-2 place-content-center">
                  <Field
                    name="startRestTime"
                    component={CustomFormField}
                    placeholder="Hora de Inicio de descanso"
                    label="Hora de Inicio de descanso"
                    type="time"
                  />
                  <Field
                    name="endRestTime"
                    component={CustomFormField}
                    placeholder="Hora de Fin de descanso"
                    label="Hora de Fin de descanso"
                    type="time"
                  />
                </div>

                {/* Campo Duración de trabajo y descanso */}
                <div className="flex flex-row gap-2 place-content-center">
                  <Field
                    name="timeBooking"
                    component={CustomFormField}
                    placeholder="Duración trabajo (min)"
                    label="Duración de trabajo (min)"
                    type="number"
                  />
                  <Field
                    name="timeBookingRest"
                    component={CustomFormField}
                    placeholder="Duración descanso (min)"
                    label="Duración de descanso (min)"
                    type="number"
                  />
                </div>

                {/* Campo de días de trabajo */}
                <Typography className="-mb-3">Selecciona los días de trabajo</Typography>
                <div className="flex flex-row gap-2 place-content-center">
                  {days.map((day) => (
                    <CustomChip
                      key={day.value}
                      value={day}
                      setFieldValue={setFieldValue}
                      selectedDays={values.selectedDays}
                    />
                  ))}
                </div>

              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  variant="gradient"
                  fullWidth
                  type="submit"
                  className="mb-4"
                >
                  Establer horario de trabajo
                </Button>
              </CardFooter>
            </Card>
          </Form>)
        }}
      </Formik>
    </div>
  );
}
