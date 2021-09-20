import { videoDetailAction } from './actions';
import { Dispatch } from 'redux';

export const videoDetailInState = (video) => {
    return async (dispatch: Dispatch): Promise<void> => {
        dispatch(videoDetailAction(video));
    };
};
