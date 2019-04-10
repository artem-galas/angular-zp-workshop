export interface IResponse<T> {
  data: T;
  meta?: IMeta;
}

export interface IMeta {
  total?: number;
  message?: string;
}