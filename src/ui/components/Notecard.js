import {
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
  Grid,
} from '@mui/material';
import LocalizedStrings from 'react-localization';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../../store/slices/dataSlice';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import index_loc from '../../localization/index_loc';

const Notecard = (props) => {
  const dispatch = useDispatch();

  const { title, content, category, id } = props;
  const lang = useSelector((state) => state.settings.lang);
  const strings = new LocalizedStrings(index_loc);
  strings.setLanguage(lang);

  return (
    <Box>
      <Card
        variant='outlined'
        sx={{
          borderRadius: '10px',
        }}
      >
        <CardContent
          sx={{
            '&:last-child': {
              paddingBottom: 0,
            },
          }}
        >
          {title && (
            <Typography variant='h6' color='text.primary' gutterBottom>
              {title}
            </Typography>
          )}
          <Typography
            variant='string'
            color='text.primary'
            sx={{
              marginBottom: '.5rem',
            }}
          >
            {content}
          </Typography>
          <Box
            sx={{
              margin: '.3rem .1rem',
            }}
          >
            <Grid container justifyContent='space-between' alignItems='center'>
              <Grid item>
                <Typography variant='subtitle2' color='text.secondary'>
                  {strings.categories[category]}
                </Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={() => dispatch(deleteNote(id))}>
                  <DeleteForeverIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Notecard;
