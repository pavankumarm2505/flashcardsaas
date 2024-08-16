import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import Head from 'next/head';
export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard Saas</title>
        <meta name="description" content="Create Flashcard from your text" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>Flashcard Saas</Typography>
          <SignedOut>
            <Button color="inherit" hfref="/sign-in"> Login</Button>
            <Button color="inherit" hfref="/sign-in">Signup</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

        </Toolbar>
      </AppBar>
      <Box sx={{
        textAlign: 'center',
        my: 4
      }}>
        <Typography variant="h5" gutterBottom >Welcome to Flashcard Saas</Typography>
        <Typography variant="h5" gutterBottom>{''} The easiest way to make flashcards from you text</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>Get Started</Button>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant=" h4" components="h2" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant='h6' gutterBottom>
              Easy Text Input
            </Typography>
            <Typography >
              {''}
              Simply input the text and our model will create the flashcards for you to learn easily.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='h6' gutterBottom>
              Smart Flashcards
            </Typography>
            <Typography>
              {''}
              AI breaks down your text into concise flashcards
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} gutterBottom>
            <Typography variant='h6'>
              Accessible Anywhere
            </Typography>
            <Typography>
              {''}
              Access your flashcards from anywhere, from any device, any time, and study with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" components="h2" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2 }}>

              <Typography variant="h5" gutterBottom>Basic</Typography>
              <Typography variant="h5" gutterBottom>$5 / month</Typography>
              <Typography variant="h5">{''} Access to basic flashcard features and limited storage</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>Choose Basic</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2 }}>

              <Typography variant="h5" gutterBottom>Pro</Typography>
              <Typography variant="h5" gutterBottom>$10 / month</Typography>
              <Typography variant="h5">{''} Unlimited flashcards and storage, with priority support</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>Choose Basic</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
