import { useSelector } from 'react-redux';
import { getVideo } from '../../redux/videos/selectors';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { VideoDetailProps } from '../../types/type';

const VideoDetail = (props: VideoDetailProps): JSX.Element => {
    const selector = useSelector((state) => state);
    const video = getVideo(selector);

    return (
        <Dialog open={props.open} onClose={() => props.handleClose()}>
            <DialogTitle>{video.title}</DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
                <Button onClick={() => props.handleClose()} color="primary">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default VideoDetail;
