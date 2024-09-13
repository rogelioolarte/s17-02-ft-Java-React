import { Input } from "@material-tailwind/react";
import { format } from "date-fns";
import { ErrorMessage, FieldProps } from "formik";

interface CustomFormField extends FieldProps {
  className?: string;
}

const CustomFormField = ({ className, field, form: { errors, touched }, ...props }: CustomFormField) => {
  const formatTimeValue = (value: string | Date) => {
    if (value instanceof Date) {
      return format(value, 'HH:mm:ss')
    }
    return value
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <Input
        {...field}
        {...props}
        size="lg"
        crossOrigin={undefined}
        value={formatTimeValue(field.value)}
        className={`${className}`}
      />
      {touched[field.name] && errors[field.name] ? (
        <ErrorMessage className="ml-2 text-xs text-red-300" name={field.name} component="div" />
      ) : (
        <div className="h-6" />
      )}
    </div>
  );
};

export default CustomFormField;
