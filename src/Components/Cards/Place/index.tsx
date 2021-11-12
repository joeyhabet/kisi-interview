import * as React from 'react';
import { CardActionArea, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'

const PlaceCard: React.FC<{
  place: any
}> = ({
  place
}) => {
  const navigate = useNavigate()
  const { id, headerImageUrl, name,  address, description, locksCount, membersCount } = place

  const handleGoToDashboard = () => {
    navigate(`${id}`)
  }

  return (
    <Card onClick={handleGoToDashboard} sx={{ maxWidth: 512, my: 1, mx: 'auto', boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)', borderRadius: 4 }}>
      <CardActionArea>
        {headerImageUrl && <CardMedia
          component="img"
          height="140"
          image={headerImageUrl}
        />}
        {!headerImageUrl && <Box sx={{ height: 120, width: '100%', background: '#8C94A9' }}/>}
        <CardContent>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {address}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  { description ? description : 'No description.' }
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                {`${locksCount} Doors, ${membersCount} Members`}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PlaceCard