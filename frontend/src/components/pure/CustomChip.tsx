/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, Chip } from "@material-tailwind/react";
import { FormikErrors } from "formik";

interface CustomChipProps {
    selectedDays: string[],
    day: string,
    setFieldValue: (field: string, value: string[], shouldValidate?: boolean) => Promise<void | FormikErrors<any>>,

}

export const CustomChip = ({ setFieldValue, selectedDays, day }: CustomChipProps) => {
  return (
    <Chip
        key={day}
        value={day}
        color={selectedDays.includes(day) ? 'teal' : 'gray'}
        variant="outlined"
        icon={
        <Checkbox
            crossOrigin=""
            color="green"
            onClick={() => {
            const newSelectedDays = selectedDays.includes(day)
                ? selectedDays.filter(d => d !== day)
                : [...selectedDays, day];
            setFieldValue('selectedDays', newSelectedDays);
            }}
            ripple={false}
            containerProps={{ className: "p-0" }}
            className="-ml-px border-2 border-teal-900 before:hidden 
            checked:border-teal-900 checked:bg-teal-900"
        />
        }
    />
  )
}
