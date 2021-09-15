import { useState, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from 'next/router';
import SelectMenus from './SelectMenus';

const Header = (): JSX.Element => {
    const router = useRouter();

    let { id } = router.query;
    if (id === undefined) {
        id = '';
    }

    const [keyword, setKeyword] = useState('');

    const inputKeyword = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setKeyword(event.target.value);
        },
        [setKeyword]
    );

    return (
        <div>
            <AppBar position="fixed" className={'bg-white'}>
                <Toolbar
                    className={
                        'max-w-screen-lg w-full my-0 mx-auto h-16 justify-between'
                    }
                >
                    <img
                        alt="Logo"
                        src={'/logo.png'}
                        width="128px"
                        onClick={() => router.push('/')}
                        role="button"
                    />
                    <div className={'flex items-end'}>
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
                                if (keyword !== '') {
                                    router.push(
                                        '/' + id + '?search=' + keyword
                                    );
                                }
                            }}
                        >
                            <SearchIcon />
                        </IconButton>
                    </div>
                    <SelectMenus />
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Header;
