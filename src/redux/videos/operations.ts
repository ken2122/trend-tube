import { videoDetailAction } from './actions';
import { Dispatch } from 'redux';
import { Video } from '../../types/type';

export const videoDetailInState = (video: Video) => {
    return async (dispatch: Dispatch): Promise<void> => {
        dispatch(videoDetailAction(video));
    };
};
