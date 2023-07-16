import NavBar from '@/utils/common/components/navbar/navBar';
import { navBarItems } from '@/utils/common/components/navbar/navBarItems';
import Title from '@/utils/common/components/title';
import { NavBarItem } from '@/utils/common/models/navBar';
import { Container, Grid } from '@/utils/theme/muiLib';
import NavBarItemCard from './components/navBarItem';
import { icons } from '@/utils/theme/icons';

export default function Home() {
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
