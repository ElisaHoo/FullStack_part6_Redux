import { createContext, useReducer, useContext } from 'react'

const notificationReducer = (state, action) => {
    switch (action.type) {
      case "SHOW":
        return action.payload
      case "HIDE":
        return null
      default:
        return null
    }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
    const [notif, notifDispatch] = useReducer(notificationReducer, null)

    return (
        <NotificationContext.Provider value={[ notif, notifDispatch ]}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export const useNotificationValue = () => {
    const valueAndDispatch = useContext(NotificationContext)
    return valueAndDispatch[0]  // = notif
}

export const useNotificationDispatch = () => {
    const valueAndDispatch = useContext(NotificationContext)
    return valueAndDispatch[1]  // = notifDispatch
} 


export default NotificationContext