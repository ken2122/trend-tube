import { createStore as reduxCreateStore, applyMiddleware, Store } from 'redux';
import { VideosReducer } from '../videos/reducers';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import { useMemo } from 'react';

function initStore() {
    return reduxCreateStore(
        combineReducers({
            videos: VideosReducer,
        }),
        applyMiddleware(thunkMiddleware)
    );
}

export function useStore(): Store {
    const store = useMemo(() => initStore(), []);
    return store;
}
