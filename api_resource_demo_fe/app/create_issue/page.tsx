'use client';

import LoadingScreen from '@/utils/common/components/loading';
import NavBar from '@/utils/common/components/navbar/navBar';
import Title from '@/utils/common/components/title';
import { Container } from '@/utils/theme/muiLib';
import { useSession } from 'next-auth/react';
import { notFound } from 'next/navigation';
import CreateIssueForm from './components/createIssueForm';

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
            <Title title='Create Issue' />
            <CreateIssueForm />
        </Container>
    )
}
