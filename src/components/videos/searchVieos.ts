import { Item } from '../../types/type';

export const searchVideos = (search: string, trendVideos: Item[]): Item[] => {
    let searchedVideos: Item[];

    if (search) {
        searchedVideos = trendVideos.filter(
            (item) =>
                item.snippet.title.indexOf(search) > -1 ||
                item.snippet.channelTitle.indexOf(search) > -1
        );
    } else {
        searchedVideos = trendVideos;
    }
    return searchedVideos;
};
