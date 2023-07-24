'use client';

import { FeatureConfig } from '@/feature_config/featureConfig';
import { Alert, Button, Card, CardContent, Snackbar, Stack, TextField } from '@/utils/theme/muiLib';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function CreateIssueForm() {

    const session = useSession();

    const [issueName, setIssueName] = useState<string | null>(null);
    const [issueDescription, setIssueDescription] = useState<string | null>(null);
    const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
    const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);

    const addIssue = () => {
        fetch(`${FeatureConfig.getBackendUrl()}/issues`, {
            method: 'POST',
            body: JSON.stringify({
                name: issueName,
                description: issueDescription,
            }),
            headers: {
                Authorization: `Bearer ${session?.data?.accessToken}`,
                'content-type': 'application/json',
            },
        })
            .then(() => {
                resetForm();
                setSuccessSnackbarOpen(true);
            })
            .catch((e) => {
                setErrorSnackbarOpen(true);
                console.log(e);
            });
    };

    const disableCreateIssueButton = () =>
        (!issueName || issueName === '') || (!issueDescription || issueDescription === '');

    const disableCancelButton = () =>
        (!issueName || issueName === '') && (!issueDescription || issueDescription === '');

    const resetForm = () => {
        setIssueName('');
        setIssueDescription('');
    }

    const handleSuccessSnackbarClose = () => {
        setSuccessSnackbarOpen(false);
    }

    const handleErrorSnackbarClose = () => {
        setErrorSnackbarOpen(false);
    }

    return (
        <Card variant='outlined' sx={{ width: '100%', height: '30vh' }}>
            <Snackbar open={successSnackbarOpen} autoHideDuration={2000} onClose={handleSuccessSnackbarClose}>
                <Alert onClose={handleSuccessSnackbarClose} severity='success'>
                    Issue added successfully
                </Alert>
            </Snackbar>
            <Snackbar open={errorSnackbarOpen} autoHideDuration={2000} onClose={handleErrorSnackbarClose}>
                <Alert onClose={handleErrorSnackbarClose} severity='error'>
                    Failure occured when adding the issue Added Successfully
                </Alert>
            </Snackbar>
            <CardContent className='issue-card-content'>
                <Stack className='issue-card-content' alignItems='flex-end' justifyContent='space-between'>
                    <Stack spacing={2} className='issue-card-content'>
                        <TextField
                            required
                            fullWidth
                            id='filled-required'
                            label='Issue Name'
                            placeholder='Enter the issue name'
                            variant='filled'
                            value={issueName}
                            onChange={(e) => setIssueName(e.target.value)}
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
                            value={issueDescription}
                            onChange={(e) => setIssueDescription(e.target.value)}
                        />
                    </Stack>
                    <Stack direction='row-reverse' spacing={2} >
                        <Button variant='contained' disabled={disableCreateIssueButton()} onClick={addIssue}>
                            Create Issue
                        </Button>
                        <Button disabled={disableCancelButton()} onClick={resetForm}>
                            Cancel
                        </Button>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}
