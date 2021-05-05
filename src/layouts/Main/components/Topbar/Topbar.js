import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { InputOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {},
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  listItem: {
    cursor: 'pointer',
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemText: {
    flex: '0 0 auto',
    letterSpacing: 0.8,
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    '&:active': {
      color: theme.palette.primary.main,
    },
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  iconButton: {
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  logoContainer: {
    width: 100,
    height: 28,
    fontWeight: '400',
    letterSpacing: 5.76,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
}));

const Topbar = (props) => {
  const { onSidebarOpen, pages, ...rest } = props;

  const classes = useStyles();

  const userInfo = () => {
    if (localStorage.getItem('user') == null || undefined) {
      return (
        <ListItem className={classes.listItem}>
          <Typography
            variant='body1'
            color='textSecondary'
            className={classes.listItemText}
            component='a'
            href='/signup'
          >
            SIGNIN
          </Typography>
        </ListItem>
      );
    } else {
      let { userName } = JSON.parse(localStorage.getItem('user'));
      const logout = () => {
        if (localStorage.getItem('user')) {
          localStorage.removeItem('user');
          localStorage.removeItem('ID');
          localStorage.removeItem('club');
          localStorage.removeItem('comments');
          window.location.replace('/signup');
        }
      };
      return (
        <>
          <ListItem className={classes.listItem}>
            <Typography
              variant='h6'
              color='textSecondary'
              className={classes.listItemText}
              component='a'
              href='/home'
            >
              {userName.toUpperCase()}
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Tooltip title='Logout'>
              <IconButton
                onClick={(e) => logout()}
                className={classes.listItemButton}
              >
                <InputOutlined />
              </IconButton>
            </Tooltip>
          </ListItem>
        </>
      );
    }
  };

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <a href='/' title='BookClub'>
          <Typography component='h1' variant='inherit' color='textSecondary'>
            BOOKCLUBZ
          </Typography>
        </a>
      </div>
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List className={classes.navigationContainer}>
          <ListItem className={classes.listItem}>
            <Typography
              variant='body1'
              color='textSecondary'
              className={classes.listItemText}
              component='a'
              href='/home'
            >
              MY CLUBZ
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant='body1'
              color='textSecondary'
              className={classes.listItemText}
              component='a'
              href='/signup-simple'
            >
              MY PROFILE
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant='body1'
              color='textSecondary'
              className={classes.listItemText}
              component='a'
              href='/signup-simple'
            >
              JOIN A BOOK CLUB
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant='body1'
              color='textSecondary'
              className={classes.listItemText}
              component='a'
              href='/signup-simple'
            >
              ABOUT
            </Typography>
          </ListItem>
          {userInfo()}
          {/* {userInfo ? (
            <>
              <ListItem className={classes.listItem}>
                <Typography
                  variant='h6'
                  color='textSecondary'
                  className={classes.listItemText}
                  component='a'
                  href='/home'
                >
                  {userInfo}
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <IconButton
                  // component='a'
                  // target='blank'
                  // href='/signup'
                  // onClick={logout()}
                  className={classes.listItemButton}
                >
                  <InputOutlined />
                </IconButton>
              </ListItem>
            </>
          ) : (
            <ListItem className={classes.listItem}>
              <Typography
                variant='body1'
                color='textSecondary'
                className={classes.listItemText}
                component='a'
                href='/signup'
              >
                SIGNIN
              </Typography>
            </ListItem>
          )} */}

          {/* <ListItem className={classes.listItem}>
            <Typography
              variant='body1'
              color='textSecondary'
              className={classes.listItemText}
              component='a'
              href='/signup'
            >
              SIGNIN
            </Typography>
          </ListItem> */}

          {/* <ListItem className={classes.listItem}>
            <Typography
              variant='body1'
              color='textSecondary'
              className={classes.listItemText}
              component='a'
              href='/not-found'
            >
              Error Page
            </Typography>
          </ListItem> */}
        </List>
      </Hidden>
      <Hidden mdUp>
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label='Menu'
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
};

export default Topbar;
