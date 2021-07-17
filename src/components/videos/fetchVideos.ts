import { FetchVideos, Item } from '../../types/type';

export const fetchVideos = async (categoryId: string): Promise<Item[]> => {
    const response = await fetch(
        'https://www.googleapis.com/youtube/v3/videos?&key=' +
            process.env.NEXT_PUBLIC_API_KEY +
            '&part=id,snippet,contentDetails,statistics&fields=items(id,snippet/categoryId,snippet/publishedAt,snippet/thumbnails/high/url,snippet/title,snippet/channelTitle,snippet/publishedAt,snippet/tags,contentDetails/duration,statistics/viewCount)&regionCode=jp&chart=mostPopular&maxResults=50&videoCategoryId=' +
            categoryId
    );

    const data: FetchVideos = await response.json();
    const items = data.items;

    return items;
};
