import { Box, Card, CardContent, Grid, Stack, Typography } from '@/utils/theme/muiLib';

interface IssueCardProps {
    gridItem?: boolean;
    issueTitle: string;
    issueDescription: string;
    issueId: string;
}

export default function IssueCard(props: IssueCardProps) {

    const { gridItem, issueTitle, issueDescription, issueId } = props;

    return (
        gridItem 
            ? (
                <Grid className='issue-card-grid' item>
                    <Card className='issue-card'>
                        <CardContent className='issue-card-content'>
                            <Stack justifyContent="space-between" className='issue-card-content'>
                                <Box>
                                    <Typography variant="h5" component="div" gutterBottom>
                                        {issueTitle}
                                    </Typography>
                                    <Typography color="text.secondary">
                                        {issueDescription}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Issue ID: {issueId}
                                    </Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            )
            : (
                <Card className='issue-card'>
                    <CardContent className='issue-card-content'>
                        <Stack justifyContent="space-between" className='issue-card-content'>
                            <Box>
                                <Typography variant="h5" component="div" gutterBottom>
                                    {issueTitle}
                                </Typography>
                                <Typography color="text.secondary">
                                    {issueDescription}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2" color="text.secondary">
                                    Issue ID: {issueId}
                                </Typography>
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>
            )

    )
}
