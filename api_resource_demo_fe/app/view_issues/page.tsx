import { Box, Card, CardContent, Grid, Stack, Typography } from '@/utils/theme/muiLib';

export default function Home() {
    return (
        <Grid className='sub-item' container>
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
        </Grid>
    )
}
