/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, FormikErrors, FormikTouched } from "formik";
import DatePicker from "react-datepicker";
  
  interface CustomTimeFormFieldProps {
    values: Date;
    setFieldValue: (field: string, value: Date, shouldValidate?: boolean) => 
        Promise<void | FormikErrors<any>>;
    touched: FormikTouched<any>,
    errors: FormikErrors<any>,
    fieldName: string,
    labelName?: string,
    labelTo?: string,
    placeholderName?: string,
  }
  
  export default function CustomTimeFormField({
    values,
    setFieldValue,
    touched,
    errors,
    fieldName,
    placeholderName = "",
  }: CustomTimeFormFieldProps) {
    return (
      <div className="flex flex-col gap-2 w-full self-center">
          <DatePicker
            selected={values}
            onChange={(value)=>setFieldValue(fieldName, value ?? new Date(), true)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            popperPlacement="bottom"
            placeholderText={placeholderName}
            timeCaption='Time'
            dateFormat='HH:mm'
            className='mt-1 block w-full px-3 py-2 border 
            border-gray rounded-md shadow-sm focus:outline-none 
            focus:ring focus:ring-opacity-50'
          />

        {/* Error de fecha desde */}
        {touched[fieldName] && errors[fieldName] ? (
          <div className="h-6">
            <ErrorMessage
            className="ml-2 text-xs text-red-300"
            name={fieldName}
            component="div"
            />
          </div>
        ) : (
          <div className="h-6" />
        )}
      </div>
    );
  }
  