import { Input } from "@material-tailwind/react";
import { ErrorMessage, FieldProps } from "formik";

interface CustomFormField extends FieldProps {
    className?: string
}

const CustomFormField = ({ className, field, form: { errors, touched }, ...props }: CustomFormField) => (
    <div className="flex flex-col gap-2 w-full">
        <Input
            {...field}
            {...props}
            size="lg"
            crossOrigin={undefined}
            className={`${className}`}
        />
        {touched[field.name] && errors[field.name] ? (
            <ErrorMessage className="ml-2 text-xs text-red-300" name={field.name} component="div" />
        ) : (
            <div className='h-6' />
        )}
    </div>
);

export default CustomFormField;
