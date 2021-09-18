import { useState, useCallback } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { fetchVideos } from '../src/components/videos/fetchVideos';
import { searchVideos } from '../src/components/videos/searchVideos';
import { sortVideos } from '../src/components/videos/sortVideos';
import VideoCard from '../src/components/videos/VideoCard';
import VideoDetail from '../src/components/Dialog/VideoDetail';
import { PageProps } from '../src/types/type';

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const trendingVideos = await fetchVideos('0');

    return {
        props: { trendingVideos },
        revalidate: 1800,
    };
};

const Index = ({ trendingVideos }: PageProps): JSX.Element => {
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, [setOpen]);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const router = useRouter();
    const search = router.query.search;
    const sort = router.query.sort;

    const searchedVideos = searchVideos(search, trendingVideos);
    const sortedVideos = sortVideos(sort, searchedVideos);

    return (
        <div className={'flex flex-wrap'}>
            {sortedVideos.map((data) => (
                <VideoCard
                    key={data.id}
                    id={data.id}
                    title={data.snippet.title}
                    channelTitle={data.snippet.channelTitle}
                    thumbnails={data.snippet.thumbnails.high.url}
                    duration={data.contentDetails.duration}
                    viewCount={data.statistics.viewCount}
                    publishedAt={data.snippet.publishedAt}
                    handleOpen={handleOpen}
                />
            ))}
            <VideoDetail open={open} handleClose={handleClose} />
        </div>
    );
};

export default Index;
