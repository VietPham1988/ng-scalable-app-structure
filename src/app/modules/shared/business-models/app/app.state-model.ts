
// the interface for AppState
export class AppState {
  token: string;
}

// initial AppState
export function initAppState(): AppState {
  return {
    token: ''
  } as AppState;
}
