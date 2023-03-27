import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(state => {
    return state.notification
  })
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  console.log('notification :>> ', notification);
  if (notification === '') {
    return <div></div>
  } else {
    return (
      <div style={style}>
        { notification }
      </div>
    )
  }
}

export default Notification