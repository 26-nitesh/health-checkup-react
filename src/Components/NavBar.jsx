// // import React from 'react';
// // import { makeStyles } from '@material-ui/core/styles';
// // import { AppBar, Toolbar, Typography, Button, Link } from '@material-ui/core';

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     flexGrow: 1,
// //   },
// //   menuButton: {
// //     marginRight: theme.spacing(2),
// //   },
// //   title: {
// //     flexGrow: 1,
// //   },
// //   appBar: {
// //     position: 'fixed',
// //     top: 0,
// //     zIndex: theme.zIndex.appBar,
// //     background: `linear-gradient(to right, #1565c0, #1565c0)`

// //     // background: 'linear-gradient(90deg,  #000000 30%, #03a9f4 90%)',
// //   },
// //   navButton: {
// //     fontWeight: 'bold',
// //     color: 'inherit',
// //     '&:hover': {
// //       backgroundColor: '#fff',
// //       color: '#000',
// //     },
// //   }
// // }));

// // export default function NavBar() {
// //   const classes = useStyles();

// //   return (
// //     <div className={classes.root}>
// //       <AppBar position="static" className={classes.appBar}>
// //         <Toolbar>
// //           <Typography variant="h6" className={classes.title}>
// //             My App
// //           </Typography>
// //           <Button  className={classes.navButton} color="inherit">Login</Button>
// //           {/* <Button className={classes.navButton} color="inherit">About</Button>
// //           <Button className={classes.navButton} color="inherit">Contact</Button> */}
// //         </Toolbar>
// //       </AppBar>
// //     </div>
// //   );
// // }

// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { AppBar, Toolbar, Typography, Button, Link, Dialog, DialogTitle, DialogContent, TextField, FormControl, InputLabel, Select, MenuItem, DialogActions } from '@material-ui/core';
// import Login from './Login';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   appBar: {
//     position: 'fixed',
//     top: 0,
//     zIndex: theme.zIndex.appBar,
//     background: `linear-gradient(to right, #1565c0, #1565c0)`
//   },
//   navButton: {
//     fontWeight: 'bold',
//     color: 'inherit',
//     '&:hover': {
//       backgroundColor: '#fff',
//       color: '#000',
//     },
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   }
// }));

// export default function NavBar() {
//   const classes = useStyles();
//   const [openDialog, setOpenDialog] = useState(false);
//   const [loginType, setLoginType] = useState('');

//   const handleOpenDialog = () => {
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleLoginTypeChange = (event) => {
//     setLoginType(event.target.value);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" className={classes.appBar}>
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//             My App
//           </Typography>
//           <Button className={classes.navButton} color="inherit" onClick={handleOpenDialog}>
//             Login
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>Login</DialogTitle>
        
//           <Login></Login>
//       </Dialog>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Link, Dialog, DialogTitle, DialogContent, TextField, FormControl, InputLabel, Select, MenuItem, DialogActions } from '@material-ui/core';
import Login from './Login';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '10',
    width: '100%',
    overflow: 'hidden'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    position: 'fixed',
    top: 0,
    zIndex: theme.zIndex.appBar,
    background: `linear-gradient(to right, #1565c0, #1565c0)`
  },
  navButton: {
    fontWeight: 'bold',
    color: 'inherit',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [loginType, setLoginType] = useState('');

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleLoginTypeChange = (event) => {
    setLoginType(event.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          <Button className={classes.navButton} color="inherit" onClick={handleOpenDialog}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog style={{width:1200}} open={openDialog} onClose={handleCloseDialog}>

        <Login></Login>
      </Dialog>
    </div>
  );
}

