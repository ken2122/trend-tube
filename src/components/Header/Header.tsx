import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBox from './SearchBox';
import SelectMenus from './SelectMenus';
import ClosableDrawer from './ClosableDrawer';

const Header = (): JSX.Element => {
    const router = useRouter();

    const [sideBarOpen, setSideBarOpen] = useState(false);

    const handleDrawerToggle = useCallback(
        (isOpen: boolean, event?: React.KeyboardEvent) => {
            if (event) {
                if (event.type === 'keydown') {
                    return;
                }
            }
            setSideBarOpen(isOpen);
        },
        [setSideBarOpen]
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
                        <div className={'sm-max:hidden'}>
                            <SearchBox />{' '}
                        </div>
                        <div className={'sm-max:hidden mb-1'}>
                            <SelectMenus />
                        </div>
                        <IconButton
                            aria-label="Menu Items"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => handleDrawerToggle(true)}
                            color="inherit"
                            className={'sm:hidden'}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <ClosableDrawer open={sideBarOpen} onClose={handleDrawerToggle} />
        </div>
    );
};
export default Header;
