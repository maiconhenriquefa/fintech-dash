import React from "react";
import useFetch from "../hooks/useFetch";
import { ISaleData, ISaleDataContext } from "./types";

export const SaleDataContext = React.createContext<ISaleDataContext | null>(
  null
);

export const SaleDataContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<ISaleData[]>(
    "https://data.origamid.dev/vendas/"
  );

  return (
    <SaleDataContext.Provider value={{ data, loading, error }}>
      {children}
    </SaleDataContext.Provider>
  );
};
