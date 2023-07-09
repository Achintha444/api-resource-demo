import { Box, Button, Grid, Stack, Typography } from '@/utils/theme/muiLib';

export default function Home() {
    return (
        <Grid className='main-gradient sub-item' container>
            <Grid container item xs={12} alignItems='flex-end' justifyContent='center'>
                <Box>
                    <Stack spacing={4} justifyContent='center' alignItems='center'>
                        <Box>
                            <Typography variant='h2' color='text.primary' align='center'>
                                <b>Item Management Dashboard</b>
                            </Typography>
                        </Box>
                        <Button variant='contained' size='large' >
                            Sign in
                        </Button>
                    </Stack>

                </Box>
            </Grid>
            <Grid container item xs={12} justifyContent='center' alignItems='flex-end'>
                <Box>
                    <p>
                        A sample application to demo the use of
                        <a href='https://wso2.com/asgardeo/docs/guides/api-authorization/#how-it-works'> API Resources </a>
                        in Asgardeo.
                    </p>
                </Box>
            </Grid>
        </Grid>
    )
}
