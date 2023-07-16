import NavBar from '@/utils/common/components/navbar/navBar';
import Title from '@/utils/common/components/title';
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from '@/utils/theme/muiLib';
import ArticleIcon from '@mui/icons-material/Article';

export default function Home() {
    return (
        <Container className='sub-item'>
            <NavBar />
            <Title title='Getting Started' />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Card className='issue-card'>
                        <CardContent className='issue-card-content'>
                            <Stack 
                                justifyContent="center" 
                                alignContent="center" 
                                textAlign="center" 
                                className='issue-card-content'
                                spacing={2}
                            >
                                <Container maxWidth="xl">
                                    <ArticleIcon/>
                                </Container>
                                <Container>
                                    <Typography variant="h5" component="div" gutterBottom>
                                        View Issue
                                    </Typography>
                                    <Typography color="text.secondary">
                                        View all issues
                                    </Typography>
                                </Container>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className='issue-card'>
                        <CardContent className='issue-card-content'>
                            <Stack justifyContent="space-between" className='issue-card-content'>
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
                </Grid>
            </Grid>
        </Container>
    )
}
