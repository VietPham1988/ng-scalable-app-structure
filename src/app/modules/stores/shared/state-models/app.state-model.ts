
// the interface for IAppState
export class AppState {
  token: string;
}

// initial AppState
export function initAppState(): AppState {
  return {
    token: ''
  } as AppState;
}
