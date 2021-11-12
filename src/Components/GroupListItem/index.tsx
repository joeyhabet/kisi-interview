import { useNavigate } from 'react-router-dom'
import { ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'


const GroupListItem: React.FC<{
  group: any
}> = ({
  group
}) => {
  const navigate = useNavigate()

  const handleOpenGroup = () => {
    navigate(`groups/${group.id}`)
  }

  return (
    <ListItem
      key={group.id}>
      <ListItemButton onClick={handleOpenGroup}>
        <ListItemText primary={group.name} secondary={ group.description ? group.description : 'No description' }/>
        <Typography component="div" variant="subtitle2">{`${group.locksCount} Doors, ${group.membersCount} Members`}</Typography>
      </ListItemButton>
    </ListItem>
  )
}

export default GroupListItem