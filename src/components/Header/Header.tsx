import { useState, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { useRouter } from 'next/router';

const Header = (): JSX.Element => {
    const router = useRouter();
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
                <Toolbar className={'max-w-screen-lg w-full my-0 mx-auto h-16'}>
                    <img
                        alt="Logo"
                        src={'/logo.png'}
                        width="128px"
                        onClick={() => router.push('/')}
                        role="button"
                    />
                    <TextField
                        fullWidth={false}
                        label="検索"
                        margin="dense"
                        multiline={false}
                        required={false}
                        rows={1}
                        value={keyword}
                        type="text"
                        onChange={inputKeyword}
                    />
                    <IconButton
                        onClick={() => router.push('?search=' + keyword)}
                    >
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Header;
