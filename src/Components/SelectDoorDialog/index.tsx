import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dialog, DialogTitle, DialogContent, Autocomplete, TextField, DialogActions, Button, DialogContentText } from '@mui/material'
import { DoorsAsyncActions } from 'Store/Actions/Doors'
import { useParams } from 'react-router-dom'
import { getPlaceLocks } from 'Store/Selectors/Doors'

const SelectDoorDialog: React.FC<{
  isOpen: boolean
  onClose: () => void
}> = ({
  isOpen,
  onClose
}) => {
  const { placeId, groupId } = useParams()
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState('')
  const [selectedDoor, setDoor] = useState<any>(undefined)

  const placeLocks = useSelector(getPlaceLocks)
  const options = placeLocks ? placeLocks.data : []

  const { isLoaded: isAddedLock, isLoading: isAddingLock } = useSelector(DoorsAsyncActions.CreateGroupLock.StatusSelector())

  useEffect(() => {
    if (isAddedLock) {
      closeDialog()
    }
  }, [isAddedLock])

  useEffect(() => {
    dispatch(DoorsAsyncActions.FetchPlaceLocks.Actions.REQUEST(placeId, keyword))
  }, [keyword])

  const onInputChange = (event: any, newInputValue: string) => {
    setKeyword(newInputValue)
  }

  const onChangeValue = (event: any, newValue: any) => {
    if (newValue) {
      setDoor(newValue)
    }
  }

  const handleAddDoor = () => {
    if (selectedDoor) {
      dispatch(DoorsAsyncActions.CreateGroupLock.Actions.REQUEST(groupId, selectedDoor.id))
    }
  }

  const closeDialog = () => {
    setDoor(undefined)
    onClose()
  }

  return (
    <Dialog 
      open={isOpen}
      fullWidth
      maxWidth={'sm'}
      >
      <DialogTitle>Add Doors</DialogTitle>
      <DialogContent>
        {isAddingLock && (
          <DialogContentText>
            {`${selectedDoor.name} is being added now.`}
          </DialogContentText>
        )}
        {!isAddingLock && (
          <Autocomplete
            disableClearable
            options={options}
            value={selectedDoor}
            getOptionLabel={(option: any) => option.name}
            isOptionEqualToValue={(option, value) => value && option.id === value.id}
            sx={{ margin: 2 }}
            onInputChange={onInputChange}
            onChange={onChangeValue}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Doors"
                InputProps={{
                  ...params.InputProps,
                  type: 'search'
                }}/>
            )}/>
        )}
      </DialogContent>
      {!isAddingLock && (
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button disabled={!selectedDoor} onClick={handleAddDoor}>Add</Button>
        </DialogActions>
      )}
    </Dialog>
  )
}

export default SelectDoorDialog