import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles} from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Button, Typography, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RestoreIcon from '@material-ui/icons/Restore';


import Controls from './components/controls';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <img src={logo} className="App-logo" alt="logo" />
      <Divider />
      <List>
          <ListItem button>
            <ListItemIcon><ShuffleIcon /></ListItemIcon>
            <ListItemText primary="Word Generator" />
          </ListItem>
          <ListItem>
            <ListItemIcon><RestoreIcon /></ListItemIcon>
            <ListItemText primary="Word History" />
          </ListItem>
      </List>
    </div>
  );
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div className="App">
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" onClick={toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Word Generator
            </Typography>
            <Button color="inherit" onClick={refreshPage}>Reload</Button>
          </Toolbar>

          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>{fullList('left')}</Drawer>
        </AppBar>
      </div>
      
      <Controls />

    </div>
  );
}

export default App;
