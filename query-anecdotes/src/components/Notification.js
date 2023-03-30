import { useNotificationValue } from "../NotificationContext"

const Notification = () => {  
  const notifValue = useNotificationValue()
  console.log('notifvalue :>> ', notifValue);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (typeof notifValue === "string") {
    return (
      <div style={style}>
        {notifValue}
      </div>
    )
  }

  return null

}

export default Notification
