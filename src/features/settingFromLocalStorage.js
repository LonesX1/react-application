import { createSlice } from "@reduxjs/toolkit";

export const settingFromLocalStorage = createSlice({
    name: 'setting',
    initialState: {
        value: {
            itemPerPage: 10,
            sortingName: 'Id',
            sortingValue: 'Asc',
            checkedField: '',
            fields: [{id: 1, checked: false, name: "Field 1"}, {id: 2, checked: false, name: "Field 2"}, {id: 3, checked: false, name: "Field 3"}, {id: 4, checked: false, name: "Field 4"},  {id: 5, checked: false, name: "Field 5"},  {id: 6, checked: false, name: "Field 6"},  {id: 7, checked: false, name: "Field 7"},  {id: 8, checked: false, name: "Field 8"},  {id: 9, checked: false, name: "Field 9"},  {id: 10, checked: false, name: "Field 10"} ],
        },
    },
    reducers: {
        addSetting: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { addSetting } = settingFromLocalStorage.actions; 
export default settingFromLocalStorage.reducer;