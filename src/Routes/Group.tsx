import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppContainer from "Containers/App"
import { useDispatch, useSelector } from 'react-redux'
import { Box, Grid, List, Typography, Divider, Button } from '@mui/material'
import { DoorsAsyncActions } from 'Store/Actions/Doors'
import { getDoors } from 'Store/Selectors/Doors'
import DoorListItem from 'Components/DoorListItem'
import SelectDoorDialog from 'Components/SelectDoorDialog'

const Group = () => {
  const dispatch = useDispatch()
  const { groupId } = useParams()
  const doors = useSelector(getDoors)
  const [isOpenAddLockDialog, openAddLockDialog] = useState(false)

  const { isLoaded: isDeleted } = useSelector(DoorsAsyncActions.DeleteGroupLock.StatusSelector())
  const { isLoaded: isAdded } = useSelector(DoorsAsyncActions.CreateGroupLock.StatusSelector())
  
  const [currentPage, totalPage, limit, data] = useMemo(() => {
    if (doors && doors.data.length > 0) {
      const { pagination: { offset, limit, count }, data } = doors
      return [offset / limit + 1, Math.ceil(count / limit), limit, data]
    }
    return [0, 0, 0, []]
  }, [doors])

  useEffect(() => {
    if (isDeleted) {
      dispatch(DoorsAsyncActions.FetchList.Actions.REQUEST(groupId))
    }
  }, [isDeleted])

  useEffect(() => {
    dispatch(DoorsAsyncActions.FetchList.Actions.REQUEST(groupId))
  }, [isAdded])

  useEffect(() => {
    dispatch(DoorsAsyncActions.FetchList.Actions.REQUEST(groupId))
  }, [])

  const handleNextPage = () => {
    dispatch(DoorsAsyncActions.FetchList.Actions.REQUEST(groupId, currentPage * limit, limit))
  }

  const handlePrevPage = () => {
    dispatch(DoorsAsyncActions.FetchList.Actions.REQUEST(groupId, (currentPage - 2) * limit, limit))
  }

  const handleAddLock = () => {
    openAddLockDialog(true)
  }

  const closeAddLockDialog = () => {
    openAddLockDialog(false)
    dispatch(DoorsAsyncActions.CreateGroupLock.Actions.RESET())
    dispatch(DoorsAsyncActions.FetchPlaceLocks.Actions.RESET())
  }

  return (
    <AppContainer>
      <Box sx={{ maxWidth: 512, maxHeight: '80vh', my: 1, mx: 'auto', boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)', borderRadius: 4 }}>
        <Grid container justifyContent='flex-end' sx={{ p: 2 }}><Button variant="contained" onClick={handleAddLock}>Add</Button></Grid>
        <List dense>
          {data.map((door: any) => (<DoorListItem door={door}/>))}
        </List>
        <Divider/>
        <Grid container sx={{ height: 80, p: 2 }} justifyContent="space-between" alignItems="center">
          <Grid item>
            <Button variant="text" disabled={currentPage <= 1} onClick={handlePrevPage}>Previous</Button>
          </Grid>
          <Grid item>
            <Typography component="div" variant="subtitle2">{`Page ${currentPage} of ${totalPage}`}</Typography>
          </Grid>
          <Grid item>
          <Button variant="text" disabled={currentPage === totalPage} onClick={handleNextPage}>Next Page</Button>
          </Grid>
        </Grid>
      </Box>
      <SelectDoorDialog isOpen={isOpenAddLockDialog} onClose={closeAddLockDialog}/>
    </AppContainer>
  )
}

export default Group