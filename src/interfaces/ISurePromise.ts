export interface ISurePromise<T> {
  success: boolean;
  data: T;
  status: number;
  headers?: Header;
  blob?: Blob;
}

interface Header {
  status: number;
  message: string;
}
