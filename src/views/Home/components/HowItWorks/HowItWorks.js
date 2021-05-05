import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { Image } from '../../../../components/atoms';
import { SectionHeader } from '../../../../components/molecules';

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    height: 130,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 110,
    },
  },
}));

const HowItWorks = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        topLabel='An online platform to organize your book club'
        title='HOW IT WORKS'
        subtitle={
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item lg={4} xs={12} sm={6}>
              <Grid container justif='center' alignItems='center'>
                <SectionHeader
                  title={
                    <Image
                      src='/images/illustrations/img-usage-1.svg'
                      alt='usage'
                      className={classes.image}
                      lazy={false}
                    />
                  }
                  subtitle="Create a Club - It's Easy!
                    Start a Book Club or Add Your Existing Club"
                />
              </Grid>
            </Grid>
            <Grid item lg={4} xs={12} sm={6}>
              <Grid container justif='center' alignItems='center'>
                <SectionHeader
                  title={
                    <Image
                      src='/images/illustrations/img-usage-2.svg'
                      alt='usage'
                      className={classes.image}
                      lazy={false}
                    />
                  }
                  subtitle='Email the unique club invite link
                    to your members'
                />
              </Grid>
            </Grid>
            <Grid item lg={4} xs={12} sm={6}>
              <Grid container justif='center' alignItems='center'>
                <SectionHeader
                  title={
                    <Image
                      src='/images/illustrations/img-usage-3.svg'
                      alt='usage'
                      className={classes.image}
                      lazy={false}
                    />
                  }
                  subtitle='Create a meeting to send invites
                    and collect RSVPs'
                />
              </Grid>
            </Grid>
          </Grid>
        }
        align='center'
      />
    </div>
  );
};

HowItWorks.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default HowItWorks;
