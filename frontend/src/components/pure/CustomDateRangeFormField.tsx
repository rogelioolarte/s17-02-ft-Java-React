/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Input,
    Popover,
    PopoverHandler,
    PopoverContent,
  } from "@material-tailwind/react";
  import { format } from "date-fns";
  import { ErrorMessage, FormikErrors, FormikTouched } from "formik";
  import { DateRange, DayPicker, Matcher } from "react-day-picker";
  import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
  
  interface CustomDateRangeFormFieldProps {
    values: DateRange;
    setFieldValue: (
      field: string,
      value: Date,
      shouldValidate?: boolean
    ) => Promise<void | FormikErrors<any>>;
    touched: FormikTouched<any>;
    errors: FormikErrors<any>;
    fieldNameFrom: string;
    fieldNameTo: string;
    labelFrom: string;
    labelTo: string;
    placeholderFrom?: string;
    placeholderTo?: string;
    disabled: Matcher | Matcher[] | undefined
  }
  
  export default function CustomDateRangeFormField({
    values,
    setFieldValue,
    touched,
    errors,
    fieldNameFrom,
    fieldNameTo,
    labelFrom,
    labelTo,
    placeholderFrom = "",
    placeholderTo = "",
    disabled
  }: CustomDateRangeFormFieldProps) {
    return (
      <div className="flex flex-col gap-2 w-full self-center">
          <Popover placement="bottom">
            <PopoverHandler className="min-w-[100px]">
              <Input
                name={fieldNameFrom.concat(' - ').concat(fieldNameTo)}
                onChange={() => null}
                size="lg"
                crossOrigin={undefined}

                value={
                  values.from
                    ? format(values.from, "yyyy-MM-dd").concat(" - ").concat(
                        format(values.to ?? new Date(), "yyyy-MM-dd")
                      )
                    : ""
                }
                placeholder={placeholderFrom.concat(' - ').concat(placeholderTo)}
                label={labelFrom.concat(' - ').concat(labelTo)}
              />
            </PopoverHandler>
            <PopoverContent>
              <DayPicker
                mode="range"
                selected={{ from: values.from, to: values.to }}
                onSelect={(selected) => {
                  setFieldValue(fieldNameFrom, selected?.from ?? new Date(), true);
                  setFieldValue(fieldNameTo, selected?.to ?? new Date(), true);
                }}
                showOutsideDays
                required
                excludeDisabled
                disabled={disabled}
                className="border-0"
                classNames={{
                  month_caption: "flex justify-center -mt-2 pb-2 mb-4 relative items-center",
                  caption_label: "text-sm font-medium text-gray-900",
                  nav: "flex items-center pt-2",
                  button_previous: "absolute left-2 size-9 bg-transparent hover:bg-blue-gray-50 rounded-md transition-colors duration-300",
                  button_next: "absolute right-2 size-9 bg-transparent hover:bg-blue-gray-50 rounded-md transition-colors duration-300",
                  month_grid: "w-full border-collapse",
                  weekdays: "flex font-medium text-gray-900",
                  weekday: "m-0.5 w-9 font-normal text-sm",
                  week: "flex w-full mt-2",
                  day: "h-9 w-9 p-0 font-normal text-gray-600 rounded-md h-9 w-9 place-content-center text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  range_end: "day-range-end",
                  selected:
                    "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                  today: "rounded-md bg-gray-200 text-gray-900",
                  outside:
                    "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                  disabled: "text-gray-500 opacity-50",
                  hidden: "invisible",
                }}
                components={{
                  Chevron: (props: {
                    className?: string;
                    size?: number;
                    disabled?: boolean;
                    orientation?: "up" | "down" | "left" | "right";
                  }) => {
                    const { size = 24, orientation = "left", className } = props;
                    return (
                      <svg
                        className={className}
                        width={size}
                        height={size}
                        viewBox="0 0 24 24"
                      >
                        {orientation === "left" && (
                          <ChevronLeftIcon className="h-4 w-4 stroke-4" />
                        )}
                        {orientation === "right" && (
                          <ChevronRightIcon className="h-4 w-4 stroke-4" />
                        )}
                      </svg>
                    );
                  },
                }}
              />
            </PopoverContent>
          </Popover>

        {/* Error de fecha desde */}
        {touched[fieldNameFrom] && errors[fieldNameFrom] && 
        touched[fieldNameTo] && errors[fieldNameTo] ? (
          <div className="h-6">
            <ErrorMessage
            className="ml-2 text-xs text-red-300"
            name={fieldNameFrom}
            component="div"
            />
            <ErrorMessage
            className="ml-2 text-xs text-red-300"
            name={fieldNameTo}
            component="div"
          />
          </div>
        ) : (
          <div className="h-6" />
        )}
      </div>
    );
  }
  