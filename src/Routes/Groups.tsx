import { useEffect, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AppContainer from "Containers/App"
import { useDispatch, useSelector } from 'react-redux'
import { GroupsAsyncActions } from 'Store/Actions/Groups'
import { getGroups } from 'Store/Selectors/Groups'
import { Box, Grid, List, Typography, Divider, Button } from '@mui/material'
import GroupListItem from 'Components/GroupListItem'

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id: placeId } = useParams()
  const groups = useSelector(getGroups)
  
  const [currentPage, totalPage, limit, data] = useMemo(() => {
    if (groups && groups.data.length > 0) {
      const { pagination: { offset, limit, count }, data } = groups
      return [offset / limit + 1, Math.ceil(count / limit), limit, data]
    }
    return [0, 0, 0, []]
  }, [groups])

  useEffect(() => {
    dispatch(GroupsAsyncActions.FetchList.Actions.REQUEST(placeId))
  }, [])

  const handleNextPage = () => {
    dispatch(GroupsAsyncActions.FetchList.Actions.REQUEST(placeId, currentPage * limit, limit))
  }

  const handlePrevPage = () => {
    dispatch(GroupsAsyncActions.FetchList.Actions.REQUEST(placeId, (currentPage - 2) * limit, limit))
  }

  return (
    <AppContainer>
      <Box sx={{ maxWidth: 512, maxHeight: '80vh', my: 1, mx: 'auto', boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)', borderRadius: 4 }}>
        <List dense>
          {data.map((group: any) => <GroupListItem group={group}/>)}
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
    </AppContainer>
  )
}

export default Dashboard