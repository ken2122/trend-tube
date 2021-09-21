import { Video } from './type';

export type InitialState = {
    videos: {
        video: Video;
    };
};

declare module 'react-redux' {
    interface DefaultRootState extends InitialState {}
}
