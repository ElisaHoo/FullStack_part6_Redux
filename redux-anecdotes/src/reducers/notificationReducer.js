import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        createNotification(state, action) {
            return action.payload  // includes notification message
        },
        noNotification(state, action) {
            return ''
        }
    }
})

export const { createNotification, noNotification } = notificationSlice.actions
export default notificationSlice.reducer