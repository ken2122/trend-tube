import { useSelector } from 'react-redux';
import { getVideo } from '../../redux/videos/selectors';
import { convertDate } from '../videos/convertDate';
import { convertCategory } from '../videos/convertCategory';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import TextList from '../videos/TextList';
import { VideoDetailProps } from '../../types/type';

const VideoDetail = (props: VideoDetailProps): JSX.Element => {
    const selector = useSelector((state) => state);
    const video = getVideo(selector);

    const date = convertDate(video.publishedAt);
    const publishedTime =
        date.getFullYear() +
        '年' +
        (date.getMonth() + 1) +
        '月' +
        date.getDate() +
        '日' +
        date.getHours() +
        '時' +
        date.getMinutes() +
        '分';

    return (
        <Dialog
            className={'md-800px:w-800px w-full m-auto'}
            open={props.open}
            onClose={() => props.handleClose()}
        >
            <DialogTitle>{video.title}</DialogTitle>
            <DialogContent>
                <Typography component="ul">
                    <TextList text1="投稿日時" text2={publishedTime} />
                    <TextList
                        text1="カテゴリ"
                        text2={convertCategory(video.categoryId)}
                    />
                    {video.tags && (
                        <Typography
                            component="li"
                            className={'flex 380px-max:text-xs'}
                        >
                            タグ ：
                            <Typography component="ul">
                                {video.tags.map((tag) => (
                                    <Typography
                                        key={tag}
                                        component="li"
                                        className={'380px-max:text-xs'}
                                    >
                                        {tag}
                                    </Typography>
                                ))}
                            </Typography>
                        </Typography>
                    )}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.handleClose()} color="primary">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default VideoDetail;
