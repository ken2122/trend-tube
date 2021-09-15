import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    })
);

export default function SelectMenus(): JSX.Element {
    const classes = useStyles();
    const router = useRouter();

    let { id } = router.query;
    if (id === undefined) {
        id = '';
    }

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        router.push('/' + id + '?sort=' + event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="uncontrolled-native">並び順</InputLabel>
                <NativeSelect
                    defaultValue={'popular'}
                    inputProps={{
                        name: 'name',
                        id: 'uncontrolled-native',
                    }}
                    onChange={handleChange}
                >
                    <option value={'popular'}>人気順</option>
                    <option value={'new'}>新着順</option>
                    <option value={'viewCount'}>視聴回数</option>
                </NativeSelect>
            </FormControl>
        </div>
    );
}
