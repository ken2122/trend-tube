import { createSelector } from 'reselect';
import { DefaultRootState } from 'react-redux';

const VideosSelector = (state: DefaultRootState) => state.videos;

export const getVideo = createSelector(
    [VideosSelector],
    (state) => state.video
);
