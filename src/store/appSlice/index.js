import { createSlice } from '@reduxjs/toolkit';
import { getList } from '@/api/app.js';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        permission:[]
    },
    reducers:{
        setState: (state, action) => {
            return {...state, ...action.payload}
        }
    }
})

export const fetchPermission = params => async (dispatch, getState) => {
    const res = await getList(params);
    dispatch(setState({permission:res.data.data}));
    return res.data.data;
    // console.log(res.data.data, 'dddd')
}

// export const fetchPosts = createAsyncThunk('app/getPermission', async (params) => {
//     const res = await getList(params);
//     console.log(res.data.data, 'res.data.data');
//     // console.log()
//     return res.data.data;
// });

export const { setState } = appSlice.actions;
export default appSlice.reducer;
