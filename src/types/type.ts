export type Item = {
    contentDetails: {
        duration: string;
    };
    id: string;
    snippet: {
        categoryId: string;
        channelTitle: string;
        publishedAt: string;
        tags: string[];
        thumbnails: { high: { url: string } };
        title: string;
    };
    statistics: {
        viewCount: string;
    };
};

export type FetchVideos = {
    items: Item[];
};

export type PageProps = {
    trendingVideos: Item[];
};

export type CardProps = {
    id: string;
    title: string;
    channelTitle: string;
    thumbnails: string;
    duration: string;
    viewCount: string;
    publishedAt: string;
};

declare module 'querystring' {
    interface ParsedUrlQuery {
        search?: string;
        sort?: string;
    }
}
