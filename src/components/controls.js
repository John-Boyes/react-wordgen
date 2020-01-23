import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import PlayArrow from '@material-ui/icons/PlayArrow';
import TimerIcon from '@material-ui/icons/Timer';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    width: 500,
  },
});

export default function Controls() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');
  const [startTime, setTimer] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (

    <div className={classes.root}>
      <div className={classes.timer}>
        <Typography id="timer-display" variant="h2">
          Timer: {startTime}
        </Typography>
      </div>
        

      <div>
        <form className={classes.container} noValidate>
          <TextField
            id="startTime"
            label="Timer"
            type="number"
            className={classes.textField}
            value={startTime}
            onChange={ e => setTimer(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 15, // seconds
            }}
            />
        <Button
          onClick={ () => setTimer(30)}>
            OK
        </Button>
          </form>
      </div>
          
      <div>
        <BottomNavigation value={value} onChange={handleChange} className={classes.controls} showLabels>
        <BottomNavigationAction label="History" value="history" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Set Timer" value="set" icon={<TimerIcon />} />
        <BottomNavigationAction label="Start Timer" value="start" icon={<PlayArrow />} />
        <BottomNavigationAction label="Stop Timer" value="stop" icon={<TimerOffIcon />} />
        </BottomNavigation>
      </div>
    </div>
  );
}