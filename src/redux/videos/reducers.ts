import * as Actions from './actions';
import initialState from '../store/initialState';
import { VideosAction } from '../../types/reduxType';
import { Video } from '../../types/type';

export const VideosReducer = (
    state = initialState.videos,
    action: VideosAction
): { video: Video } => {
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
