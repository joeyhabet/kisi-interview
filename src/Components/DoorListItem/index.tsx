import { useDispatch } from 'react-redux'
import { DoorsAsyncActions } from 'Store/Actions/Doors'
import { ListItem, ListItemButton, ListItemText, Button } from '@mui/material'


const DoorListItem: React.FC<{
  door: any
}> = ({
  door
}) => {
  const dispatch = useDispatch()

  const handleDeleteDoor = () => {
    dispatch(DoorsAsyncActions.DeleteGroupLock.Actions.REQUEST(door.id))
  }

  return (
    <ListItem
      key={door.id}
      secondaryAction={
        <Button variant="text" onClick={handleDeleteDoor}>Delete</Button>
      }
      disablePadding>
      <ListItemButton>
        <ListItemText primary={door?.lock?.name} secondary={ door?.lock?.description ? door?.lock?.description : 'No description' }/>
      </ListItemButton>
    </ListItem>
  )
}

export default DoorListItem