import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './components';
import { Section } from '../../components/organisms';
import { SectionHeader } from '../../components/molecules';

const useStyles = makeStyles((theme) => ({
  root: {},
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`,
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  title: {
    fontFamily: 'Roboto, sans-serif',
  },
}));

const CreateClub = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title='Create A Book Club'
            // subtitle='Create beautiful marketing websites in hours instead of weeks.'
            titleProps={{
              variant: 'h4',
            }}
            titleClasses={classes.title}
          />
          <Form />
        </div>
      </Section>
    </div>
  );
};

export default CreateClub;
