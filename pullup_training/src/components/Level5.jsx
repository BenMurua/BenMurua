import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../style/style.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f0f0f0',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));



export const Level5=() => {
  return <div>
      <Grid container spacing={6}>
        <Grid size={1}></Grid>
        <Grid size={5}>
          <FormControlLabel  control={<Checkbox/>} label="DAY 1" />
          <Item>
            <p className="exercise"> 80% of maximum pull ups</p>
            <p className="rest"> 2 minutes rest</p>
            <p className="exercise"> maximum pull ups</p>
            <p className="rest"> 2 minutes rest</p>
            <p className="exercise"> 80% of maximum pull ups</p>
            <p className="rest"> 2 minutes rest</p>
            <p className="exercise"> maximum pull ups</p>
          </Item>
          <p className="rest"> 1 day rest</p>
          <FormControlLabel  control={<Checkbox/>} label="DAY 2" />
          <Item>
          <p className="exercise"> 70% of maximum pull ups</p>
            <p className="rest"> 1,5 minutes rest</p>
            <p className="exercise"> 70% of maximum pull ups</p>
            <p className="rest"> 1,5 minutes rest</p>
            <p className="exercise"> 70% of maximum pull ups</p>
            <p className="rest"> 1,5 minutes rest</p>
            <p className="exercise"> maximum pull ups</p>
          </Item>
          <p className="rest"> 1 day rest</p>
          <FormControlLabel  control={<Checkbox/>} label="DAY 3" />
          <Item>
          <p className="exercise"> 60% of maximum pull ups</p>
            <p className="rest"> 1 minutes rest</p>
            <p className="exercise"> maximum pull ups</p>
            <p className="rest"> 1 minutes rest</p>
            <p className="exercise"> maximum pull ups</p>
            <p className="rest"> 1 minutes rest</p>
            <p className="exercise"> maximum pull ups</p>
          </Item>
          <p className="rest"> 1 day rest</p>
        </Grid>
        <Grid size={5}>
        <FormControlLabel  control={<Checkbox/>} label="DAY 4" />
          <Item>
            <p className="exercise"> 80% of maximum pull ups</p>
            <p className="rest"> 2 minutes rest</p>
            <p className="exercise"> maximum pull ups</p>
            <p className="rest"> 2 minutes rest</p>
            <p className="exercise"> 80% of maximum pull ups</p>
            <p className="rest"> 2 minutes rest</p>
            <p className="exercise"> maximum pull ups</p>
          </Item>
          <p className="rest"> 1 day rest</p>
          <FormControlLabel  control={<Checkbox/>} label="DAY 5" />
          <Item>
          <p className="exercise"> 80% of maximum pull ups</p>
            <p className="rest"> 2 minutes rest</p>
            <p className="exercise"> maximum pull ups</p>
            <p className="rest"> 2 minutes rest</p>
            <p className="exercise"> 80% of maximum pull ups</p>
            <p className="rest"> 2 minutes rest</p>
            <p className="exercise"> maximum pull ups</p>
          </Item>
          <p className="rest"> 1 day rest</p>
          <FormControlLabel  control={<Checkbox/>} label="DAY 6" />
          <Item>
          <p className="exercise"> 80% of maximum pull ups</p>
            <p className="rest"> 2 minutes rest</p>
            <p className="exercise"> maximum pull ups</p>
            <p className="rest"> 2 minutes rest</p>
            <p className="exercise"> 80% of maximum pull ups</p>
            <p className="rest"> 2 minutes rest</p>
            <p className="exercise"> maximum pull ups</p>
          </Item>
          <p className="rest"> END of the cycle. 2 days rest and repeat the test to define your level</p>
        </Grid>
      </Grid>
  </div>

}