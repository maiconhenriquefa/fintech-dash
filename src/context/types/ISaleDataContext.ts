import { ISaleData } from "./ISaleData";

export interface ISaleDataContext {
  loading: boolean;
  error: string | null;
  data: ISaleData[] | null;
}
