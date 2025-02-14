import { useSaleData } from "../hooks";
import DateRange from "./DateRange";

const Header = () => {
  const { data } = useSaleData();

  return (
    <div>
      <DateRange />
    </div>
  );
};

export default Header;
