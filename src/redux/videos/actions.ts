import { Video } from '../../types/type';

export const VIDEO_DETAIL = 'VIDEO_DETAIL';
export const videoDetailAction = (
    videoState: Video
): { type: 'VIDEO_DETAIL'; payload } => {
    return {
        type: 'VIDEO_DETAIL',
        payload: {
            video: videoState,
        },
    };
};
