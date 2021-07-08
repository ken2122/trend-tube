import { GetStaticProps } from 'next';
import { fetchVideos } from '../src/components/videos/fetchVideos';
import VideoCard from '../src/components/videos/VideoCard';
import { PageProps } from '../src/types/type';

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const trendingVideos = await fetchVideos('0');

    return {
        props: { trendingVideos },
        revalidate: 1800,
    };
};

const Index = ({ trendingVideos }: PageProps): JSX.Element => {
    return (
        <div className={'flex flex-wrap'}>
            {trendingVideos.map((data) => (
                <VideoCard
                    key={data.id}
                    id={data.id}
                    title={data.snippet.title}
                    channelTitle={data.snippet.channelTitle}
                    thumbnails={data.snippet.thumbnails.high.url}
                    duration={data.contentDetails.duration}
                    viewCount={data.statistics.viewCount}
                    publishedAt={data.snippet.publishedAt}
                />
            ))}
        </div>
    );
};

export default Index;
