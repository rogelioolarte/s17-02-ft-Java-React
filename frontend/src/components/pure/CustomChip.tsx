/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, Chip } from "@material-tailwind/react";
import { FormikErrors } from "formik";

interface CustomChipProps {
  selectedDays: string[],
  value: { name: string, value: string },
  setFieldValue: (field: string, value: string[], shouldValidate?: boolean) => 
    Promise<void | FormikErrors<any>>,
}

export const CustomChip = ({ setFieldValue, selectedDays, value }: CustomChipProps) => {

  return (
    <Chip
      value={value.name}
      color={selectedDays.includes(value.value) ? 'teal' : 'gray'}
      variant="outlined"
      icon={
        <Checkbox
          crossOrigin=""
          color="green"
          onClick={() => {
            const newSelectedDays = selectedDays.includes(value.value)
              ? selectedDays.filter(d => d !== value.name) 
              : [...selectedDays, value.value]; 
            setFieldValue('selectedDays', newSelectedDays); 
          }}
          ripple={false}
          containerProps={{ className: "p-0" }}
          className="-ml-px border-2 border-teal-900 before:hidden 
                  checked:border-teal-900 checked:bg-teal-900"
        />
      }
    />
  );
};
