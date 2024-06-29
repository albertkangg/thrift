import React, { useState, useEffect } from 'react';
import { Container, CssBaseline, TextField, Button, Box, Typography, Link, Grid, Divider, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <CssBaseline />
    <Fade in={fadeIn} timeout={1000}>
      <Box
        component="div"
        sx={{
          width: "80%",
          marginTop: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <img src='/logo.png' alt='logo' style={{ display: 'block', margin: '0 auto' }} />
        <Typography component="h1" variant="h5" sx={{ mt: 2, fontWeight: '1000', fontFamily: "Roboto" }}>
          Sign up
        </Typography>
        <Grid item sx={{ mt: 2 }}>
          <Link variant="body2" onClick={() => navigate('/login')}>
            {"Already have an account? Sign in"}
          </Link>
        </Grid>
      
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            backgroundColor: '#4285F4',
            color: 'white',
            textTransform: 'none',
            ':hover': {
              backgroundColor: '#357ae8',
            },
          }}
        >
          Continue with Google (Coming Soon)
        </Button>
      
        <Divider sx={{ width: '100%', mt: 2, mb: 2 }}>or</Divider>
      
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
          <Typography variant="body1" sx={{ mt: 0, mb: -1, fontFamily: "Roboto", fontWeight: "800" }}>
            Email Address
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Typography variant="body1" sx={{ mt: 0, mb: -1, fontFamily: "Roboto", fontWeight: "800" }}>
            Password
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              mb: 2,
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid black',
              textTransform: 'none',
              padding: '10px 0',
              ':hover': {
                backgroundColor: 'lightgray',
              },
            }}
          >
            Sign up
          </Button>
        </Box>
      </Box>
    </Fade>
  </Container>
  );
}
