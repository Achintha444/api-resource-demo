"use client";

import { signInDataSave } from '@/redux/features/auth';
import { AuthController } from '@/utils/controller/authController';
import { Box, Button, Grid, Snackbar, Stack, Typography } from '@/utils/theme/muiLib';
import { signIn, signOut } from "next-auth/react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Home() {

    //const dispatch = useDispatch();

    const [ isSignInSuccessSnackbarOpen, setIsSignInSuccessSnackbarOpen ] = useState(false);
    const [ isSignInErrorSnackbarOpen, setIsSignInErrorSnackbarOpen ] = useState(false);

    const signInHandler = () => {
        AuthController.signIn().then((response) => {
            //dispatch(signInDataSave(response));
            setIsSignInSuccessSnackbarOpen(true);
        }).catch((error) => {
            setIsSignInErrorSnackbarOpen(true);
            console.log(error);
        });
    }

    return (
        <>
            <Grid className='main-gradient sub-item' container>
                <Grid container item xs={12} alignItems='flex-end' justifyContent='center'>
                    <Box>
                        <Stack spacing={4} justifyContent='center' alignItems='center'>
                            <Box>
                                <Typography variant='h2' color='text.primary' align='center'>
                                    <b>Item Management Dashboard</b>
                                </Typography>
                            </Box>
                            <Button variant='contained' size='large' onClick={signInHandler} >
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

            <Snackbar
                open={isSignInSuccessSnackbarOpen}
                message="User sign in successfully"
            />

            <Snackbar
                open={isSignInErrorSnackbarOpen}
                message="Something went wrong while signing in"
            />
        </>
    )
}
