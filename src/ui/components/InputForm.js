import {
  FormControl,
  Paper,
  Input,
  Button,
  MenuItem,
  InputLabel,
  Select,
  Grid,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, updateDisplayNotes } from '../../store/slices/dataSlice';
import LocalizedStrings from 'react-localization';
import index_loc from '../../localization/index_loc';

const InputForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(1);
  const lang = useSelector((state) => state.settings.lang);
  const dispatch = useDispatch();

  const strings = new LocalizedStrings(index_loc);
  strings.setLanguage(lang);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content !== '') {
      const newNote = {
        title: title,
        content: content,
        category: category,
      };
      dispatch(addNote(newNote));
      setTitle('');
      setContent('');
      dispatch(updateDisplayNotes());
    }
  };

  return (
    <Box
      component='form'
      onSubmit={(e) => handleSubmit(e)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        variant='outlined'
        sx={{
          boxShadow: '2px 3px 10px #000',
          padding: '.5rem .7rem',
          minWidth: '35rem',
          maxWidth: '50%',
          borderRadius: '10px',
        }}
      >
        <FormControl
          fullWidth
          sx={{
            marginBottom: '.5rem',
          }}
        >
          <Input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            disableUnderline
            placeholder={strings.noteTitle}
          />
        </FormControl>
        <FormControl
          fullWidth
          sx={{
            marginBottom: '1rem',
          }}
        >
          <Input
            onChange={(e) => setContent(e.target.value)}
            value={content}
            required
            disableUnderline
            multiline
            placeholder={strings.notePlaceholder}
          />
        </FormControl>
        <Grid container justifyContent='space-between'>
          <FormControl component='div'>
            <InputLabel id='select-category-label'>
              {strings.category}
            </InputLabel>
            <Select
              label='Category'
              variant='outlined'
              labelId='select-category-label'
              id='select-category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={2}>{strings.categories[2]}</MenuItem>
              <MenuItem value={3}>{strings.categories[3]}</MenuItem>
              <MenuItem value={4}>{strings.categories[4]}</MenuItem>
              <MenuItem value={1}>{strings.categories[1]}</MenuItem>
            </Select>
          </FormControl>
          <Button type='submit'>{strings.submitBtn}</Button>
        </Grid>
      </Paper>
    </Box>
  );
};

export default InputForm;
