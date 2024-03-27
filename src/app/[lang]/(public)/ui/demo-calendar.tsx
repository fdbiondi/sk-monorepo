'use client';

import * as React from 'react';

import { TimePicker } from '@/components/time-picker/time-picker';
import { Calendar } from '@/components/ui/calendar';

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  React.useEffect(() => {
    console.log('calendar demo -> ' + date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <div className="flex flex-col">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        captionLayout="dropdown-buttons"
        fromYear={1960}
        toYear={2030}
      />

      <div className="p-3 border-t border-border">
        <TimePicker setDate={setDate} date={date} />
      </div>
    </div>
  );
}
