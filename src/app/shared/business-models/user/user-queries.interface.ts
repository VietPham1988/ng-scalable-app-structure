import { Observable } from 'rxjs';

export abstract class UserQueries {
  abstract users$: Observable<any>;
}
