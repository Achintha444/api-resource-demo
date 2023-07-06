import { Box, Grid } from "@/utils/theme/muiLib";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          xs=8
        </Grid>
        <Grid item xs={4}>
          xs=4
        </Grid>
        <Grid item xs={4}>
          xs=4
        </Grid>
        <Grid item xs={8}>
          xs=8
        </Grid>
      </Grid>
    </Box>
  )
}
