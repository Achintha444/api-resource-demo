import { Box, Button, Grid, Stack } from "@/utils/theme/muiLib";

export default function Home() {
    return (
        <Stack className='main-gradient sub-item' spacing={2} justifyContent="center" alignItems="center">
            <Box>
                <h1>Item Management Dashboard</h1>
            </Box>
            <Button variant="contained" size="large" >
                Sign in
            </Button>
        </Stack>
    )
}
