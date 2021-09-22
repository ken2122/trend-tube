import { Video } from './type';

export type InitialState = {
    videos: {
        video: Video;
    };
};

export type VideosAction = { type: 'VIDEO_DETAIL'; payload: { video: Video } };

declare module 'react-redux' {
    interface DefaultRootState extends InitialState {}
}
