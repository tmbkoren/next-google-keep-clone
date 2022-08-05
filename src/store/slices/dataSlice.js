import { createSlice } from '@reduxjs/toolkit';
import { store } from '../store';

const initialState = {
  notes: [],
  categoryToDisplay: 0,
  notesToDisplay: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    hydrate: (state, action) => {
      return action.payload.data;
    },
    addNote: (state, { payload }) => {
      const id = 0;
      try {
        id = state.notes[state.notes.length - 1].id + 1;
      } catch (e) {
        console.log(e);
        id = 0;
      }
      const newNote = {
        id: id,
        ...payload,
      };
      state.notes.push(newNote);
    },
    changeCategory: (state, action) => {
      state.categoryToDisplay = action.payload;
      dataSlice.caseReducers.updateDisplayNotes(state);
    },
    updateDisplayNotes: (state) => {
      if (state.categoryToDisplay === 0) {
        state.notesToDisplay = state.notes;
      } else {
        state.notesToDisplay = state.notes.filter((item) => {
          if (item.category === state.categoryToDisplay) {
            return item;
          }
        });
      }
    },
    deleteNote: (state, { payload }) => {
      //payload - note id
      const newNotes = state.notes.filter((item) => {
        if (item.id !== payload) {
          return item;
        }
      });
      state.notes = newNotes;
      dataSlice.caseReducers.updateDisplayNotes(state);
    },
  },
});

export const {
  changeCategory,
  addNote,
  updateDisplayNotes,
  deleteNote,
  hydrate,
} = dataSlice.actions;

export default dataSlice.reducer;
