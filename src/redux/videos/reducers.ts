import * as Actions from './actions';
import initialState from '../store/initialState';

export const VideosReducer = (state = initialState.videos, action) => {
    switch (action.type) {
        case Actions.VIDEO_DETAIL:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
