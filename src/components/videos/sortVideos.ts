import { convertDate } from './convertDate';
import { Item } from '../../types/type';

export const sortVideos = (sort: string, searchedVideos: Item[]): Item[] => {
    let sortedVideos: Item[];

    switch (sort) {
        case 'viewCount':
            sortedVideos = searchedVideos.sort(
                (a, b) =>
                    Number(b.statistics.viewCount) -
                    Number(a.statistics.viewCount)
            );
            break;
        case 'new':
            sortedVideos = searchedVideos.sort(
                (a, b) =>
                    Number(convertDate(b.snippet.publishedAt)) -
                    Number(convertDate(a.snippet.publishedAt))
            );
            break;
        default:
            sortedVideos = searchedVideos;
    }
    return sortedVideos;
};
