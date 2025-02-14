import { useState } from "react";
import DateInput from "./DateInput";

const DateRange = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <form onSubmit={({ preventDefault }) => preventDefault()}>
      <DateInput
        label="Data inicial"
        value={startDate}
        onChange={({ target }) => setStartDate(target.value)}
      />
      <DateInput
        label="Data final"
        value={endDate}
        onChange={({ target }) => setEndDate(target.value)}
      />
    </form>
  );
};

export default DateRange;
