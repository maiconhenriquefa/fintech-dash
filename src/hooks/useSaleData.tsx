import React from "react";
import { SaleDataContext } from "../context/DataContext";

export const useSaleData = () => {
  const context = React.useContext(SaleDataContext);
  if (!context) {
    throw new Error("useData must be used within a DataContextProvider");
  }
  return context;
};
