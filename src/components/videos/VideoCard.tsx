import { convertDate } from './convertDate';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { CardProps } from '../../types/type';

const VideoCard = (props: CardProps): JSX.Element => {
    const fmt = new Intl.NumberFormat('ja-JP', {
        notation: 'compact',
    });

    const now = new Date();
    const publishedDate = convertDate(props.publishedAt);
    const diffMillisecond = Number(now) - Number(publishedDate);
    const diffDate = new Date(diffMillisecond - 32400000);

    const date = [
        diffDate.getFullYear() - 1970,
        diffDate.getMonth(),
        diffDate.getDate() - 1,
        diffDate.getHours(),
        diffDate.getMinutes(),
    ];

    let i: number;
    let publishedAt: string;

    for (i = 0; i < 5; i++) {
        if (date[i] > 0) break;
    }
    switch (i) {
        case 0:
            publishedAt = date[i] + '年前';
            break;
        case 1:
            publishedAt = date[i] + 'ヶ月前';
            break;
        case 2:
            publishedAt = date[i] + '日前';
            break;
        case 3:
            publishedAt = date[i] + '時間前';
            break;
        default:
            publishedAt = date[i] + '分前';
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
            <div className={'relative cursor-pointer'}>
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
                <div>
                    <Typography
                        component="p"
                        className={'truncate cursor-pointer'}
                        onClick={() =>
                            window.open(
                                'https://www.youtube.com/watch?v=' + props.id,
                                '_blank',
                                'noreferrer'
                            )
                        }
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        component="p"
                        className={'truncate'}
                    >
                        {props.channelTitle}
                    </Typography>

                    <div className={'flex justify-between items-center'}>
                        <Typography color="textSecondary" component="p">
                            {fmt.format(Number(props.viewCount))}
                        </Typography>
                        <div className={'flex items-center'}>
                            <Typography color="textSecondary" component="p">
                                {publishedAt}
                            </Typography>
                            <Button
                                variant="contained"
                                size="small"
                                className={'p-0 ml-1'}
                                onClick={() => props.handleOpen()}
                            >
                                詳細
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
export default VideoCard;
