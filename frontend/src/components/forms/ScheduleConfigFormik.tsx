import { Button, Checkbox } from '@material-tailwind/react';
import { format } from 'date-fns';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // eliminar libreria
import 'react-datepicker/dist/react-datepicker.css';

const DAYS_OF_WEEK = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
];

export default function ScheduleConfigFormik() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [startRest, setStartRest] = useState<Date | null>(null);
  const [endRest, setEndRest] = useState<Date | null>(null);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [timeBooking, setTimeBooking] = useState<string | null>(null);
  const [timeBookingRest, setTimeBookingRest] = useState<string | null>(null);
  const today = new Date();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedDays((prev) =>
      prev.includes(value)
        ? prev.filter((day) => day !== value)
        : [...prev, value]
    );
  };
  /// revisar
  const formatDay = (date: Date) => (date ? format(date, 'yyyy-MM-dd') : '');

  const formattedTime = (date: Date) => format(date, 'HH:mm:ss');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = [
      startDate,
      endDate,
      startTime,
      endTime,
      startRest,
      endRest,
      timeBooking,
      timeBookingRest,
    ].every(Boolean);

    if (isValid) {
      const schedulesConfig = {
        schedulesDayStart: formatDay(startDate!),
        schedulesDayEnd: formatDay(endDate!),
        schedulesStart: formattedTime(startTime!),
        schedulesEnd: formattedTime(endTime!),
        schedulesStartRest: formattedTime(startRest!),
        schedulesEndRest: formattedTime(endRest!),
        schedulesDuration: timeBooking,
        schedulesRest: timeBookingRest,
        days: selectedDays,
      };

      console.log(schedulesConfig);
    }
  };
  return (
    <div className='max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg'>
      <h2 className='text-xl font-semibold mb-4'>Configuración de Horarios</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            htmlFor='schedulesDayStart'
            className='block text-sm font-medium text-gray-700'>
            Fecha de Inicio
          </label>
          {endDate ? (
            <>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={today}
                maxDate={endDate}
                dateFormat='yyyy-MM-dd'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
              />
            </>
          ) : (
            <>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={today}
                dateFormat='yyyy-MM-dd'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
              />
            </>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='schedulesDayEnd'
            className='block text-sm font-medium text-gray-700'>
            Fecha de Fin
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            minDate={startDate ? startDate : today}
            dateFormat='yyyy-MM-dd'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='schedulesStart'
            className='block text-sm font-medium text-gray-700'>
            Hora de Inicio
          </label>
          <DatePicker
            selected={startTime}
            onChange={(date) => setStartTime(date!)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption='Time'
            dateFormat='h:mm aa'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='schedulesEnd'
            className='block text-sm font-medium text-gray-700'>
            Hora de Fin
          </label>
          <DatePicker
            selected={endTime}
            onChange={(date) => setEndTime(date!)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption='Time'
            dateFormat='h:mm aa'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='schedulesStartRest'
            className='block text-sm font-medium text-gray-700'>
            Hora de Inicio Descanso
          </label>
          <DatePicker
            selected={startRest}
            onChange={(date) => setStartRest(date!)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            timeCaption='Time'
            dateFormat='h:mm aa'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='schedulesEndRest'
            className='block text-sm font-medium text-gray-700'>
            Hora de Fin Descanso
          </label>
          <DatePicker
            selected={endRest}
            onChange={(date) => setEndRest(date!)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            timeCaption='Time'
            dateFormat='h:mm aa'
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='schedulesDuration'
            className='block text-sm font-medium text-gray-700'>
            Duración (minutos)
          </label>
          <input
            type='number'
            id='schedulesDuration'
            value={timeBooking ? timeBooking : ''}
            onChange={(e) => setTimeBooking(e.target.value)}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='schedulesRest'
            className='block text-sm font-medium text-gray-700'>
            Descanso (minutos)
          </label>
          <input
            type='number'
            id='schedulesRest'
            value={timeBookingRest ? timeBookingRest : ''}
            onChange={(e) => setTimeBookingRest(e.target.value)}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Días
          </label>
          <div className='flex flex-wrap space-x-4'>
            {DAYS_OF_WEEK.map((day) => (
              <label key={day}>
                <Checkbox
                  crossOrigin=''
                  value={day}
                  checked={selectedDays.includes(day)}
                  onChange={handleCheckboxChange}
                />
                {day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()}
              </label>
            ))}
          </div>
        </div>
        <Button
          type='submit'
          className='w-full bg-blue-500 text-white hover:bg-blue-600'>
          Guardar
        </Button>
      </form>
    </div>
  );
}
