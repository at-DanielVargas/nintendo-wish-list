import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHttpServiceProps } from '@maxi/shared-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService {
  private baseUrl = process.env['NG_APP_URL'];

  constructor(private http: HttpClient) {}

  protected get<T>(props: IHttpServiceProps): Observable<T> {
    return this.http.get<T>(
      this.apiUrl(props.endpoint, props.query),
      props.options
    );
  }
  protected post<T, K = any>(props: IHttpServiceProps<K>): Observable<T> {
    return this.http.post<T>(
      this.apiUrl(props.endpoint, props.query),
      props.body,
      props.options
    );
  }
  protected put<T, K>(props: IHttpServiceProps<K>): Observable<T> {
    return this.http.put<T>(
      this.apiUrl(props.endpoint, props.query),
      props.body,
      props.options
    );
  }
  protected patch<T, K>(props: IHttpServiceProps<K>): Observable<T> {
    return this.http.patch<T>(
      this.apiUrl(props.endpoint, props.query),
      props.body,
      props.options
    );
  }
  protected delete<T>(props: IHttpServiceProps): Observable<T> {
    return this.http.delete<T>(
      this.apiUrl(props.endpoint, props.query),
      props.options
    );
  }

  private apiUrl(endpoint: string, query?: any) {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    const params = { ...query };
    for (const key in params) {
      // eslint-disable-next-line no-prototype-builtins
      if (params.hasOwnProperty(key)) {
        const value = params[key];
        url.searchParams.append(key, value);
      }
    }
    return url.toString();
  }
}
