'use client';

import { AppBar, Avatar, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography } from '@/utils/theme/muiLib';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import NavBarItems from './components/navBarItems';
import ProfileItems from './components/profileItems';

const settings = ['Logout'];

export default function NavBar(): React.ReactNode {

    //const allowedScopes = useSelector((state: RootState) => state.authReducer.allowedScopes);

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    return (
        <AppBar position='static' elevation={0}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                        variant='h6'
                        color='secondary'
                    >
                        <b>IMD</b>
                    </Typography>
                    <Container maxWidth='xl'>
                        <Stack direction='row' justifyContent='space-between'>
                            <Stack direction='row' spacing={2}>
                                <NavBarItems allowedScopes={[]} />
                            </Stack>
                            <Stack direction='row'>
                                <ProfileItems />
                            </Stack>
                        </Stack>
                    </Container>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
