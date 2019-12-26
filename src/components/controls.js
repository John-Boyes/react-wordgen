import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import PlayArrow from '@material-ui/icons/PlayArrow';
import TimerIcon from '@material-ui/icons/Timer';
import TimerOffIcon from '@material-ui/icons/TimerOff';


const useStyles = makeStyles({
  root: {
    display: 'flex',
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <BottomNavigation value={value} onChange={handleChange} className={classes.controls} showLabels>
        <BottomNavigationAction label="History" value="history" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Set Timer" value="set" icon={<TimerIcon />} />
        <BottomNavigationAction label="Start Timer" value="start" icon={<PlayArrow />} />
        <BottomNavigationAction label="Stop Timer" value="stop" icon={<TimerOffIcon />} />
        </BottomNavigation>
    </div>
  );
}