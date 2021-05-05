import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from '../../components/organisms';
import {
  Hero,
  HowItWorks,
  Recommended,
  Features,
  BestBook,
  Popular,
  BookClub,
  JoinClub,
} from './components';

import { books, popular, bookClub } from './data';

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

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.shape}>
        <Section className={classes.pagePaddingTop}>
          <Hero />
        </Section>
      </div>
      <Section>
        <HowItWorks />
      </Section>
      <Divider />
      <SectionAlternate>
        <Recommended data={books} />
      </SectionAlternate>
      <Divider />
      <Section>
        <Features />
      </Section>
      <Divider />

      <SectionAlternate>
        <BestBook />
      </SectionAlternate>
      <Divider />
      <Section>
        <Popular data={popular} />
      </Section>
      <Divider />
      <div className={classes.shape2}>
        <Section>
          <BookClub data={bookClub} />
        </Section>
      </div>
      <Divider />
      <div className={classes.shape3}>
        <Section>
          <JoinClub />
        </Section>
      </div>
    </div>
  );
};

export default Home;
