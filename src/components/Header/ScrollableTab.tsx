import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useRouter } from 'next/router';

const a11yProps = (id: string) => {
    return {
        id: `scrollable-auto-tab-${id}`,
        'aria-controls': `scrollable-auto-tabpanel-${id}`,
    };
};

const ScrollableTab = (): JSX.Element => {
    const router = useRouter();
    const [value, setValue] = useState(0);

    const handleChange = (
        event: React.ChangeEvent<HTMLButtonElement>,
        newValue: number
    ) => {
        setValue(newValue);
    };

    const selectMenu = (path: string) => {
        router.push(path);
    };

    const menus = [
        {
            func: selectMenu,
            label: '総合',
            id: 'all',
            value: '/',
        },
        {
            func: selectMenu,
            label: 'アニメ',
            id: 'anime',
            value: '/anime',
        },
        {
            func: selectMenu,
            label: '乗り物',
            id: 'car',
            value: '/car',
        },
        {
            func: selectMenu,
            label: '音楽',
            id: 'music',
            value: '/music',
        },
        {
            func: selectMenu,
            label: '動物',
            id: 'pet',
            value: '/pet',
        },
        {
            func: selectMenu,
            label: 'ゲーム',
            id: 'game',
            value: '/game',
        },
        {
            func: selectMenu,
            label: 'エンタメ',
            id: 'entertainment',
            value: '/entertainment',
        },
        {
            func: selectMenu,
            label: 'ニュース',
            id: 'news',
            value: '/news',
        },
    ];

    return (
        <div>
            <AppBar
                position="fixed"
                className={
                    'flex-grow w-full bg-gray-200 h-12 mt-auto bottom-0 md:mt-16'
                }
            >
                <Divider />
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs"
                    className={'xl:mx-auto'}
                >
                    {menus.map((menu) => (
                        //
                        <Tab
                            key={menu.id}
                            label={menu.label}
                            {...a11yProps(menu.id)}
                            onClick={() => menu.func(menu.value)}
                        />
                    ))}
                </Tabs>
            </AppBar>
        </div>
    );
};

export default ScrollableTab;
