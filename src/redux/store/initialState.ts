import { InitialState } from '../../types/reduxType';

const initialState: InitialState = {
    videos: {
        video: {
            id: '',
            categoryId: '',
            title: ',',
            channelTitle: '',
            thumbnails: '',
            duration: '',
            viewCount: '',
            publishedAt: '',
            tags: [],
        },
    },
};

export default initialState;
