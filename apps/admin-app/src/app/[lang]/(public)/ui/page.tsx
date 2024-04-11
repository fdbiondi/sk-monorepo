import { CalendarDemo } from './demo-calendar';
import { DatePickerDemo } from './demo-date-picker';
import { DateTimePickerDemo } from './demo-datetime-picker';
import { DayMonthYearPicker } from './demo-day-month-year-picker';

export default function Page() {
  return (
    <>
      <div className="container flex-1 items-start">
        <main className="relative py-6">
          <div className="mx-auto w-full min-w-0">
            <h2 className="scroll-m-20 text-2xl font-bold tracking-tight">
              Date Time Picker
            </h2>

            <div className="flex">
              <section className="preview flex min-h-[350px] w-full justify-center p-10 items-center">
                <DatePickerDemo />
              </section>

              <section className="preview flex min-h-[350px] w-full justify-center p-10 items-center">
                <DayMonthYearPicker />
              </section>

              <section className="preview flex min-h-[350px] w-full justify-center p-10 items-center">
                <DateTimePickerDemo />
              </section>
            </div>
          </div>

          <div className="mx-auto w-full min-w-0">
            <h2 className="scroll-m-20 text-2xl font-bold tracking-tight">
              Calendar
            </h2>
            <section className="preview flex min-h-[350px] w-full justify-center p-10 items-center">
              <CalendarDemo />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
