
// the interface for UserState
export class UserState {
  users: [];
}

// initial HomeState
export function initUserState(): UserState {
  return {
    users: []
  } as UserState;
}
