import { IEstate } from './estate';

export interface IPagination {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: IEstate[];
}
