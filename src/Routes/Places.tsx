import PlaceCard from "Components/Cards/Place"
import AppContainer from "Containers/App"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PlacesAsyncActions } from "Store/Actions/Places"
import { getPlaces } from "Store/Selectors/Places"

const Places = () => {
  const dispatch = useDispatch()
  const places = useSelector(getPlaces)

  const list = places ? places.data : []

  useEffect(() => {
    dispatch(PlacesAsyncActions.FetchList.Actions.REQUEST())
  }, [dispatch])

  return (
    <AppContainer>
      {list.map((place: any) => <PlaceCard key={place.id} place={place}/>)}
    </AppContainer>
  )
}

export default Places