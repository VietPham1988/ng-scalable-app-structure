import { Observable } from 'rxjs';

export abstract class AppQueries {
  abstract token$: Observable<any>;
}
