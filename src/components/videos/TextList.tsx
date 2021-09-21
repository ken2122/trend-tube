import Typography from '@material-ui/core/Typography';

const TextList = (props: { text1: string; text2: string }): JSX.Element => {
    return (
        <Typography
            component="li"
            className={'flex flex-nowrap 380px-max:text-xs'}
        >
            <Typography component="span" className={'380px-max:text-xs'}>
                {props.text1}：
            </Typography>
            <Typography component="span" className={'380px-max:text-xs'}>
                {props.text2}
            </Typography>
        </Typography>
    );
};

export default TextList;
