import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import { Section } from '../../components/organisms';
import { BestBook } from './components';

import { books } from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  shape: {
    background: theme.palette.alternate.main,
    borderBottomRightRadius: '50%',
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
  shape2: {
    background: theme.palette.alternate.dark,
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
  shape3: {
    backgroundColor: 'rgba(24, 70, 162, .15)',
  },
}));

const Book = ({ match }) => {
  const classes = useStyles();

  const bookID = match.params.id || 1;

  const single = books.find((item) => item.id === bookID);

  return (
    <div className={classes.root}>
      <Section>
        <BestBook book={single} />
      </Section>
    </div>
  );
};

export default Book;
