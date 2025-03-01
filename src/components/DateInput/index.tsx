import { IDateInput } from "./types";

const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="date" id={label} name={label} {...props} />
    </div>
  );
};

export default DateInput;
