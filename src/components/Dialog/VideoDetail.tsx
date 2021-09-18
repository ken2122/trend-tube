import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { VideoDetailProps } from '../../types/type';

const VideoDetail = (props: VideoDetailProps): JSX.Element => {
    return (
        <Dialog open={props.open} onClose={() => props.handleClose()}>
            <DialogTitle>動画詳細</DialogTitle>
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
