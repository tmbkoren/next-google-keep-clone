import Head from 'next/head';
import { Grid, Toolbar, CssBaseline, Box } from '@mui/material';
import Navbar from '../ui/components/Navbar';
import { ThemeProvider } from '@emotion/react';
import Masonry from '@mui/lab/Masonry';
import { useSelector } from 'react-redux';
import LocalizedStrings from 'react-localization';
import index_loc from '../localization/index_loc';
import Notecard from '../ui/components/Notecard';
import InputForm from '../ui/components/InputForm';

const Home = () => {
  const theme = useSelector((state) => state.settings.theme);
  const lang = useSelector((state) => state.settings.lang);
  const notes = useSelector((state) => state.data.notes);
  console.log(notes);
  if (!notes) {
    notes = [];
  }
  const notesToDisplay = useSelector((state) => state.data.notesToDisplay);
  if (!notesToDisplay) {
    notesToDisplay = [];
  }
  const strings = new LocalizedStrings(index_loc);
  strings.setLanguage(lang);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>{strings.title}</title>
        <meta name='viewport' content='initial-scale=0.5, maximum-scale=0.5' />
      </Head>
      <Navbar>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <InputForm />
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Masonry columns={{ xs: 1, md: 4 }} spacing={2}>
                {notesToDisplay.map((item) => (
                  <Notecard key={item.id} {...item} />
                ))}
              </Masonry>
            </Box>
          </Grid>
        </Grid>
      </Navbar>
      <Toolbar />
    </ThemeProvider>
  );
};

export default Home;
