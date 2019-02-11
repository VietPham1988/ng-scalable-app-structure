import { Observable } from 'rxjs';

export abstract class AuthQueries {
  abstract token$: Observable<string>;
}
