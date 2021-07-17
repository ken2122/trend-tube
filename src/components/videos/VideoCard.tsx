import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardProps } from '../../types/type';

const VideoCard = (props: CardProps): JSX.Element => {
    const fmt = new Intl.NumberFormat('ja-JP', {
        notation: 'compact',
    });

    const date1 = new Date();
    const date2 = [
        date1.getFullYear(),
        date1.getMonth() + 1,
        date1.getDate(),
        date1.getHours(),
        date1.getMinutes(),
    ];

    const time = props.publishedAt.split(/-|T|:/);
    const time2 = time.map((date) => Number(date));
    let i: number;
    let j: number;
    let publishedAt: string;

    for (i = 0; i < 5; i++) {
        j = date2[i] - time2[i];
        if (j > 0) break;
    }
    switch (i) {
        case 0:
            publishedAt = j + '年前';
            break;
        case 1:
            publishedAt = j + 'ヶ月前';
            break;
        case 2:
            publishedAt = j + '日前';
            break;
        case 3:
            publishedAt = j + '時間前';
            break;
        default:
            publishedAt = j + '分前';
    }

    const duration = props.duration.split(/PT|H|M|S/);
    let newDuration: string;

    const add0 = (time: string) => {
        if (time === '' || !time) {
            return '00';
        } else if (Number(time) < 10) {
            return '0' + time;
        } else {
            return time;
        }
    };

    switch (props.duration.indexOf('M')) {
        case -1:
            if (props.duration.indexOf('H') > 0) {
                newDuration = duration[1] + ':00:' + add0(duration[2]);
            } else {
                newDuration = '0:' + add0(duration[1]);
            }
            break;
        case 3:
        case 4:
            newDuration = duration[1] + ':' + add0(duration[2]);
            break;
        default:
            newDuration =
                duration[1] + ':' + add0(duration[2]) + ':' + add0(duration[3]);
    }

    return (
        <Card className={'m-1 w-100%-2 md:m-2 md:w-1/2-4 xl:m-4 xl:w-1/3-8'}>
            <div className={'relative'}>
                <CardMedia
                    component="img"
                    alt={props.title}
                    image={props.thumbnails}
                    className={'bg-contain'}
                    title={props.title}
                    onClick={() =>
                        window.open(
                            'https://www.youtube.com/watch?v=' + props.id,
                            '_blank',
                            'noreferrer'
                        )
                    }
                />
                <Typography
                    component="span"
                    className={'absolute bottom-0 right-1 text-white bg-black'}
                >
                    {newDuration}
                </Typography>
            </div>
            <CardContent className={'text-left'}>
                <div
                    onClick={() =>
                        window.open(
                            'https://www.youtube.com/watch?v=' + props.id,
                            '_blank',
                            'noreferrer'
                        )
                    }
                >
                    <Typography component="p" className={'truncate'}>
                        {props.title}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        component="p"
                        className={'truncate'}
                    >
                        {props.channelTitle}
                    </Typography>

                    <div className={'flex justify-between'}>
                        <Typography color="textSecondary" component="p">
                            {fmt.format(Number(props.viewCount))}
                        </Typography>
                        <Typography color="textSecondary" component="p">
                            {publishedAt}
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
export default VideoCard;
