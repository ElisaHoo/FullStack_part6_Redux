import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        createNotification(state, action) {
            return action.payload  // includes notification message
        }
    }
})

export const { createNotification } = notificationSlice.actions

export const setNotification = (message, duration) => {
    return async dispatch => {
        let time = duration * 1000
        setTimeout(() => {
            dispatch(createNotification(message))
        }, time)
    }
}

export default notificationSlice.reducer