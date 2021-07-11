import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useRouter } from 'next/router';

const Header = (): JSX.Element => {
    const router = useRouter();

    return (
        <div>
            <AppBar position="fixed" className={'bg-white'}>
                <Toolbar className={'max-w-screen-lg w-full my-0 mx-auto'}>
                    <img
                        alt="Logo"
                        src={'/logo.png'}
                        width="128px"
                        onClick={() => router.push('/')}
                        role="button"
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Header;
