import { useNotificationValue, useNotificationDispatch } from "../NotificationContext"

const Notification = () => {  
  const notifValue = useNotificationValue()
  const dispatch = useNotificationDispatch()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (typeof notifValue !== "string") {
    return null
  } else {
    setTimeout(() => dispatch({ type: "HIDE" }), 5000)
  }

  return (
    <div style={style}>
      {notifValue}
    </div>
  )

}

export default Notification
