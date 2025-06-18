import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCards = createAsyncThunk('card/fetchCards', async () => {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');
  return response.data.meals;
});

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [],
    savedCards: [],
    loading: false,
  },
  reducers: {
    addCardToSaved: (state, action) => {
      const exists = state.savedCards.find(c => c.idMeal === action.payload.idMeal);
      if (!exists) state.savedCards.push(action.payload);
    },
    removeCardFromSaved: (state, action) => {
      state.savedCards = state.savedCards.filter(c => c.idMeal !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCards.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, state => {
        state.loading = false;
      });
  },
});

export const { addCardToSaved, removeCardFromSaved } = cardSlice.actions;
export default cardSlice.reducer;