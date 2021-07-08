import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardProps } from '../../types/type';

const VideoCard = (props: CardProps): JSX.Element => {
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
                    {props.duration}
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
                            {props.viewCount}
                        </Typography>
                        <Typography color="textSecondary" component="p">
                            {props.publishedAt}
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
export default VideoCard;
