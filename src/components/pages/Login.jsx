import '../../styles/Content.scss';

import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { CommonSlice } from '../../redux/slices';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { useGoogleLogin } from 'react-google-login';

export default function SignIn() {
  const dispatch = useDispatch();
  const clientId = window.SERVER_CONFIG.GOOGLE_CLIENT_ID;
  const handleSuccessResponse = (response) => {
    if (response) {
      dispatch(
        CommonSlice.setGoogleResponse({
          success: true,
          ...response,
        }),
      );
    }
  };
  const handleFailureResponse = (response) => {
    dispatch(
      CommonSlice.setGoogleResponse({
        success: false,
        ...response,
      }),
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  useEffect(() => {
    dispatch(CommonSlice.setTitle('Login'));
  }, []);
  const { signIn, loaded } = useGoogleLogin({
    clientId,
    autoLoad: false,
    isSignedIn: true,
    fetchBasicProfile: true,
    onSuccess: handleSuccessResponse,
    onFailure: handleFailureResponse,
    onAutoLoadFinished: handleSuccessResponse,
    // onRequest: handleGoogleResponse("onRequest"),
  });
  return (
    <>
      <div className="container-fluid login-screen">
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            pb: 1,
            background: '#FFFFFF',
          }}
        >
          <Box
            sx={{
              mt: 8,
              mb: 5,
              pt: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Typography
                variant="caption"
                gutterBottom
                component="div"
                sx={{ textAlign: 'center', fontSize: 20 }}
              >
                or
              </Typography>
              <Button
                variant="outlined"
                fullWidth
                sx={{ fontSize: 14 }}
                startIcon={
                  <Avatar
                    src={'/img/google_logo.png'}
                    sx={{ width: 40, heigh: 40 }}
                  />
                }
                onClick={signIn}
              >
                Continue with Google
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}
