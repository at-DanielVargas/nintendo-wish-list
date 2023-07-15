import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface IHttpServiceProps<T = any> {
  endpoint: string;
  query?: Record<string, string>;
  body?: T | FormData | any;
  options?: {
    headers?:
      | HttpHeaders
      | {
          [header: string]: string | string[];
        };
    context?: HttpContext;
    observe?: 'body';
    params?:
      | HttpParams
      | {
          [param: string]:
            | string
            | number
            | boolean
            | ReadonlyArray<string | number | boolean>;
        };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  };
}
