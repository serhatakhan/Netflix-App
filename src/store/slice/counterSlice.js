import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { 
    value: 0,  // başlangıç değeri 0 olan state tanımladık
  },
  reducers: {
    increment: (state)=> {
        state.value += 1
    },
    decrement: (state)=> {
        state.value -= 1
    },
    // dışardan bir değer geldiğinde state'in nasıl değiştiğini görmek için
    incrementByAmount: (state, action)=> {
        state.value += action.payload
    }
  }
});

// * Redux Toolkit, reducers'lara karşılık gelen action creator'ları otomatik olarak 
// oluşturur. Bu action creator'lar, reducers'ın çalışması için gerekli olan action'ları 
// dispatch etmek için kullanılır. Bunları actions altından export ediyoruz.
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// slice'ın içinden gelen reducer'ı export et
export default counterSlice.reducer