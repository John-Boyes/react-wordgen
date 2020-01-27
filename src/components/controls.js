import React, { useState, useEffect } from 'react';
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 50
  },
  container: {
    flex: 1
  },
  controls: {
    width: 500,
  },
});



export default function Controls() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');
  const [startTime, setTimer] = useState(30);
  const [showSettings, toggleSettings] = useState(false);
  const [time, currentTime] = useState(startTime);
  const [active, isActive] = useState(false);
  
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  
  function resetTimer() {
    currentTime(startTime)
    toggleSettings(false)
  }

  function countdown() {
    let seconds 
    if (active === true) {
      if (time >= 0) {
        seconds = time - 1
        currentTime(seconds)
      }
      else {
        isActive(false)
      }
    }
  }

  useEffect (() => {
    setInterval(()=> {
      countdown()
    },1000)
  })
    
  function startTimer() {
    isActive(true)
  }
  
  function stopTimer() {
    isActive(false)
  }



  return (

    <div className={classes.root}>
      <div className={classes.timer}>
        <Typography id="timer-display" variant="h2">
          { time === -1 ? <span>Time's Up!</span> : time }
        </Typography>
      </div>
        

      { showSettings ? (        
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
          </form>
        <Button
          onClick={resetTimer}>
            OK
        </Button>
      </div>
          ) : null
        }
          
      <div>
        <BottomNavigation value={value} onChange={handleChange} className={classes.controls} showLabels>
          <BottomNavigationAction label="History" value="history" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Set Timer" value="set" icon={<TimerIcon />} onClick={() => toggleSettings(true)} />
          <BottomNavigationAction label="Start Timer" value="start" icon={<PlayArrow />} onClick={startTimer} />
          <BottomNavigationAction label="Stop Timer" value="stop" icon={<TimerOffIcon />} onclick={stopTimer} />
        </BottomNavigation>
      </div>
    </div>
  );
}