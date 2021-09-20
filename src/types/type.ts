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

export type Video = {
    duration: string;
    id: string;
    categoryId: string;
    channelTitle: string;
    publishedAt: string;
    tags: string[];
    thumbnails: string;
    title: string;
    viewCount: string;
};

export type PageProps = {
    trendingVideos: Item[];
};

export type CardProps = {
    video: Video;
    handleOpen: () => void;
};

export type ClosableDrawerProps = {
    open: boolean;
    onClose: (isOpen: boolean, event?: React.KeyboardEvent) => void;
};

export type VideoDetailProps = {
    open: boolean;
    handleClose: () => void;
};

declare module 'querystring' {
    interface ParsedUrlQuery {
        id?: string;
        search?: string;
        sort?: string;
    }
}
