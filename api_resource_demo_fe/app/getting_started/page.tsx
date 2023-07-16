import NavBar from '@/utils/common/components/navbar/navBar';
import { navBarItems } from '@/utils/common/components/navbar/navBarItems';
import Title from '@/utils/common/components/title';
import { NavBarItem } from '@/utils/common/models/navBar';
import { Container, Grid } from '@/utils/theme/muiLib';
import { icons } from '@/utils/theme/icons';
import { Session, getServerSession } from 'next-auth';
import { notFound } from 'next/navigation'
import { asgardeoProviderOptions } from '@/utils/auth/authOptions';
import NavBarItemCard from './components/navBarItemCard';

export async function getSession(): Promise<Session | null> {
    const session = await getServerSession(asgardeoProviderOptions);
    console.log("session", session);
    return session;
}

export default async function Home() {

    const session = await getSession();

    // Redirect to not found page if session is not available
    if (!session) {
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
