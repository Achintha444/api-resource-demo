import NavBar from '@/utils/common/components/navbar/navBar';
import { navBarItems } from '@/utils/common/components/navbar/navBarItems';
import Title from '@/utils/common/components/title';
import { NavBarItem } from '@/utils/common/models/navBar';
import { icons } from '@/utils/theme/icons';
import { Container, Grid } from '@/utils/theme/muiLib';
import NavBarItemCard from './components/navBarItemCard';
import SessionCheckComponent from '@/utils/common/components/sessionCheckComponent';

export default function Home() {

    return (
        <SessionCheckComponent requiredScopes={[]}>
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
        </SessionCheckComponent>
    )
}
