import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

export default function SelectMenus(): JSX.Element {
    const router = useRouter();

    let { id } = router.query;
    if (id === undefined) {
        id = '';
    }

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            router.push('/' + id + '?sort=' + event.target.value);
        },
        []
    );

    return (
        <FormControl>
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
    );
}
