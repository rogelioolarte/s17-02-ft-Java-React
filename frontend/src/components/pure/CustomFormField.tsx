import { Input } from "@material-tailwind/react";
import { ErrorMessage, FieldProps } from "formik";

const CustomFormField = ({ field, form: { errors, touched }, ...props }: FieldProps) => (
    <div>
        <Input
            {...field}
            {...props}
            color="black"
            size="lg"
            crossOrigin={undefined}
            className="!border-blue-gray-200 focus:!border-gray-900
            text-black placeholder-black"
        />
        {touched[field.name] && errors[field.name] ? (
            <ErrorMessage className="ml-2 text-xs text-red-300" name={field.name} component="div" />
        ) : (
            <div className='h-5' />
        )}
    </div>
);

export default CustomFormField;
