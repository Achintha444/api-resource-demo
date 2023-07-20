'use client';

import { signInDataSave } from '@/redux/features/auth';
import { AppDispatch, RootState } from '@/redux/store';
import LoadingScreen from '@/utils/common/components/loading';
import NavBar from '@/utils/common/components/navbar/navBar';
import { navBarItems } from '@/utils/common/components/navbar/navBarItems';
import Title from '@/utils/common/components/title';
import { NavBarItem } from '@/utils/common/models/navBar';
import { icons } from '@/utils/theme/icons';
import { Container, Grid } from '@/utils/theme/muiLib';
import { useSession } from 'next-auth/react';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBarItemCard from './components/navBarItemCard';

export default function Home() {

    const dispatch = useDispatch<AppDispatch>();

    const session = useSession();
    const allowedScopes = useSelector((state: RootState) => state.authReducer.allowedScopes);

    useEffect(() => {
        if (session.status === 'authenticated' && !allowedScopes) {
            dispatch(signInDataSave({ allowedScopes: session.data.scopes }));
        }
    }, [ session, allowedScopes, dispatch ]);

    switch (session.status) {
        case 'authenticated':
            break;
        case 'loading':
            return <LoadingScreen />;
        case 'unauthenticated':
            notFound();
    }

    return (
        <Container className='sub-item'>
            <NavBar />
            <Title title='Getting Started' />
            <Grid container spacing={2}>
                {
                    navBarItems.map((item: NavBarItem) => {
                        const Icon = icons[item.icon];
                        return item.key !== 'getting_started' && (
                            <Grid key={item.key} item xs={6}>
                                <NavBarItemCard
                                    allowedScopes={session.data?.scopes as string[]}
                                    requiredScopes={item.requiredScopes}
                                    title={item.name}
                                    description={item.description}
                                    path={item.path}
                                    Icon={Icon}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}
