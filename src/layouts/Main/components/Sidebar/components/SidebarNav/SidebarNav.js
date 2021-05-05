/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { InputOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {},
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  listItemLink: {
    textDecoration: 'none',
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
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  divider: {
    width: '100%',
  },
}));

const SidebarNav = (props) => {
  const { pages, onClose, className, ...rest } = props;
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
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={onClose}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize='small' />
        </ListItemIcon>
      </ListItem>
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
      {/* <ListItem className={classes.listItem}>
        <Typography
          variant='body1'
          color='textSecondary'
          className={classes.listItemText}
          component='a'
          href='/signup-simple'
        >
          SIGNIN
        </Typography>
      </ListItem> */}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
