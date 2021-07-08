import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { fetchVideos } from '../src/components/videos/fetchVideos';
import VideoCard from '../src/components/videos/VideoCard';
import { PageProps, Item } from '../src/types/type';

interface Params extends ParsedUrlQuery {
    id: string;
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async ({
    params,
}) => {
    const fetchVideoData = async (
        categoryId: string,
        tagCategory1: string,
        tagCategory2: string
    ) => {
        const videoData = await fetchVideos(categoryId);

        const filterTags = (tags: string[]) => {
            if (tags !== undefined) {
                const filteredTags = tags.filter(
                    (tag) => tag === tagCategory1 || tag === tagCategory2
                );
                if (filteredTags.length > 0) {
                    return true;
                }
            }
        };

        const filteredVideos = videoData.filter(
            (item) =>
                item.snippet.categoryId === categoryId ||
                filterTags(item.snippet.tags) === true
        );
        return filteredVideos;
    };

    const id = params.id;
    let trendingVideos: Item[];

    switch (id) {
        case 'anime':
            trendingVideos = await fetchVideoData('1', 'アニメ', '映画');
            break;
        case 'car':
            trendingVideos = await fetchVideoData('2', '車', '乗り物');
            break;
        case 'music':
            trendingVideos = await fetchVideoData('10', '音楽', 'ミュージック');
            break;
        case 'pet':
            trendingVideos = await fetchVideoData('15', 'ペット', '動物');
            break;
        case 'sport':
            trendingVideos = await fetchVideoData(
                '17',
                'スポーツ',
                'アスリート'
            );
            break;
        case 'game':
            trendingVideos = await fetchVideoData('20', 'ゲーム', 'game');
            break;
        case 'entertainment':
            trendingVideos = await fetchVideoData('24', 'エンタメ', 'YouTuber');
            break;
        case 'news':
            trendingVideos = await fetchVideoData('25', 'ニュース', '政治');
    }

    return {
        props: { trendingVideos },
        revalidate: 1800,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        { params: { id: 'anime' } },
        { params: { id: 'car' } },
        { params: { id: 'music' } },
        { params: { id: 'pet' } },
        { params: { id: 'sport' } },
        { params: { id: 'game' } },
        { params: { id: 'entertainment' } },
        { params: { id: 'news' } },
    ];
    return {
        paths,
        fallback: false,
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