import { Reducer } from 'react';

export const combineReducers =
  (...reducers: Reducer<any, any>[]): Reducer<any, any> =>
  (state: any, action: any) => {
    for (const reducer of reducers) {
      const nextState = reducer(state, action);

      if (nextState) {
        return nextState;
      }
    }
  };
