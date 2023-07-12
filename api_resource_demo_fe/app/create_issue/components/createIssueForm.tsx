import { Box, Button, Card, CardActions, CardContent, Container, Grid, Stack, TextField, Typography } from '@/utils/theme/muiLib';

export default function CreateIssueForm() {
    return (
        <Card variant='outlined' sx={{ width: '100%', height: '30vh' }}>
            <CardContent className='issue-card-content'>
                <Stack className='issue-card-content' alignItems='flex-end' justifyContent="space-between">
                    <Stack spacing={2} className='issue-card-content'>
                        <TextField
                            required
                            fullWidth
                            id='filled-required'
                            label='Issue Name'
                            placeholder='Enter the issue name'
                            variant='filled'
                        />
                        <TextField
                            required
                            fullWidth
                            multiline
                            maxRows={4}
                            id='filled-required'
                            label='Issue Description'
                            placeholder='Enter the issue description'
                            variant='filled'
                        />
                    </Stack>
                    <Stack direction='row-reverse' spacing={2} >
                        <Button variant='contained'>Create Issue</Button>
                        <Button>Cancel</Button>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}
