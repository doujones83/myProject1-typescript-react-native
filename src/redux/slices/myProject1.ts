import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import { Project1, Project1State } from '../../interfaces'




const initialState: Project1State = {
  isLoading: false,
  data: [],
};

export const project1Slice = createSlice({
  name: 'project1',
  initialState,
  reducers: {
    getProject1: (state, actions : PayloadAction<Project1[]>) => {
        const data = [...actions.payload]
        state.data = data.sort((a, b) => a.firstName.localeCompare((b.firstName)))
    }
  },
})

export const {actions: project1Actions, reducer: project1Reducer} = project1Slice