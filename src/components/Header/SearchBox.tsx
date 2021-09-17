import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchBox = ({
    onclose,
}: {
    onclose?: (isOpen: boolean, event?: React.KeyboardEvent<Element>) => void;
}): JSX.Element => {
    const router = useRouter();

    const [keyword, setKeyword] = useState('');

    const inputKeyword = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setKeyword(event.target.value);
        },
        [setKeyword]
    );

    let id = router.query.id;
    if (!id) {
        id = '';
    }

    const sort = router.query.sort;

    const drawerClose = (bool: boolean) => {
        if (onclose) {
            return onclose(bool);
        }
    };

    return (
        <div className={'mr-4 flex items-end'}>
            <TextField
                fullWidth={false}
                label="検索フィルタ"
                margin="dense"
                multiline={false}
                required={false}
                rows={1}
                value={keyword}
                type="text"
                onChange={inputKeyword}
            />
            <IconButton
                onClick={() => {
                    if (keyword) {
                        if (sort) {
                            router.push(
                                '/' +
                                    id +
                                    '?search=' +
                                    keyword +
                                    '&sort=' +
                                    sort
                            );
                        } else {
                            router.push('/' + id + '?search=' + keyword);
                        }
                        drawerClose(false);
                    }
                }}
            >
                <SearchIcon />
            </IconButton>
        </div>
    );
};

export default SearchBox;
