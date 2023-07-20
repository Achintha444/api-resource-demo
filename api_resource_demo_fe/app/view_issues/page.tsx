'use client';

import LoadingScreen from '@/utils/common/components/loading';
import NavBar from '@/utils/common/components/navbar/navBar';
import Title from '@/utils/common/components/title';
import { Box, Card, CardContent, Container, Stack, Typography } from '@/utils/theme/muiLib';
import { useSession } from 'next-auth/react';
import { notFound } from 'next/navigation';

export default function Home() {

    const session = useSession();

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
            <Title title='View Issues' />
            <Card className='issue-card'>
                <CardContent className='issue-card-content'>
                    <Stack justifyContent="space-between"  className='issue-card-content'>
                        <Box>
                            <Typography variant="h5" component="div" gutterBottom>
                                Issue Title
                            </Typography>
                            <Typography color="text.secondary">
                                well meaning and kindly.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" color="text.secondary">
                                Issue ID: 
                            </Typography>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    )
}
