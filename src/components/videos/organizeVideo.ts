import { Item, Video } from '../../types/type';

export const organizeVideo = (data: Item): Video => {
    const video = {
        id: data.id,
        categoryId: data.snippet.categoryId,
        title: data.snippet.title,
        channelTitle: data.snippet.channelTitle,
        thumbnails: data.snippet.thumbnails.high.url,
        duration: data.contentDetails.duration,
        viewCount: data.statistics.viewCount,
        publishedAt: data.snippet.publishedAt,
        tags: data.snippet.tags,
    };
    return video;
};
