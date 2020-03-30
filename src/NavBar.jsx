import React from 'react'
import MyTheme from './MyTheme';
import { fade, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";

import { BrowserRouter as Router, Route} from "react-router-dom";

const responseGoogle = (response) => {
  console.log(response);
}

const images = [
  {url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"},
  {url: "https://images.unsplash.com/photo-1562184647-5772b5348713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2295&q=80"},
  {url: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1824&q=80"},
  {url: "https://images.unsplash.com/photo-1524103416206-a67f05a8154b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"},
  {url: "https://images.unsplash.com/photo-1527359443443-84a48aec73d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"}, 
];

// Resources for AppBar and Card
const useStyles = makeStyles(theme => ({
    
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
}));

// mongodb+srv://SetSpaceDevs:ssd@cluster0-mw8uo.mongodb.net/test?retryWrites=true&w=majority


const NavBar = () => {
    const classes = useStyles(); // Using resources
    return(
        <div>
                {/* The style prop to override default color palette */}
                <AppBar position="static" style={MyTheme.palette.appBar}>
                    <Toolbar>
                        {/* Logo/MainTitle */}
                        <Typography variant="title" color="inherit">
                            SETSPACE
                        </Typography>

                        {/* Search */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'Search' }}
                            />
                        </div>
                    <div className={classes.grow} />

                    {/* AppBar Nav Buttons */}
                    <Button color="inherit">Explore</Button>
                    <Button color="inherit">About</Button>
                    <Button href="/login" color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                

          </div>
    )
}
export default NavBar;