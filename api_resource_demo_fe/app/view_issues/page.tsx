import NavBar from '@/utils/common/navbar/navBar';
import Title from '@/utils/common/title';
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from '@/utils/theme/muiLib';

export default function Home() {
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
