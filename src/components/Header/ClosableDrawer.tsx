import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import SearchBox from './SearchBox';
import SelectMenus from './SelectMenus';
import { ClosableDrawerProps } from '../../types/type';

const ClosableDrawer = (props: ClosableDrawerProps): JSX.Element => {
    return (
        <nav aria-label="mailbox folders">
            <Drawer
                variant="temporary"
                anchor={'right'}
                open={props.open}
                onClose={() => props.onClose(false)}
                classes={{
                    paper: 'w-44',
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <div onKeyDown={(e) => props.onClose(false, e)}>
                    <Divider />
                    <List className={'ml-2'}>
                        <SearchBox />
                        <SelectMenus />
                    </List>
                </div>
            </Drawer>
        </nav>
    );
};

export default ClosableDrawer;
