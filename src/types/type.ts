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
