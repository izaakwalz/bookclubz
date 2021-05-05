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
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 110,
    },
  },
}));

const Features = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title='BOOKCLUBZ FEATURES'
        subtitle={
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item lg={4} xs={12} sm={6}>
              <Grid container justif='center' alignItems='center'>
                <SectionHeader
                  title={
                    <Image
                      src='/images/illustrations/img-feature.svg'
                      alt='usage'
                      className={classes.image}
                      lazy={false}
                    />
                  }
                  subtitle='View all the books your club has
                  read in one place'
                />
              </Grid>
            </Grid>
            <Grid item lg={4} xs={12} sm={6}>
              <Grid container justif='center' alignItems='center'>
                <SectionHeader
                  title={
                    <Image
                      src='/images/illustrations/img-feature-2.svg'
                      alt='usage'
                      className={classes.image}
                      lazy={false}
                    />
                  }
                  subtitle='Manage your club membership
                  online - no more email chains!'
                />
              </Grid>
            </Grid>
            <Grid item lg={4} xs={12} sm={6}>
              <Grid container justif='center' alignItems='center'>
                <SectionHeader
                  title={
                    <Image
                      src='/images/illustrations/img-feature-3.svg'
                      alt='usage'
                      className={classes.image}
                      lazy={false}
                    />
                  }
                  subtitle='See what other book clubs
                  are reading'
                />
              </Grid>
            </Grid>
            <Grid item lg={6} xs={12} sm={6}>
              <Grid container justif='center' alignItems='center'>
                <SectionHeader
                  title={
                    <Image
                      src='/images/illustrations/img-feature-4.svg'
                      alt='usage'
                      className={classes.image}
                      lazy={false}
                    />
                  }
                  subtitle='Poll your members to select books
                  and meeting dates'
                />
              </Grid>
            </Grid>
            <Grid item lg={6} xs={12} sm={6}>
              <Grid container justif='center' alignItems='center'>
                <SectionHeader
                  title={
                    <Image
                      src='/images/illustrations/img-feature-5.svg'
                      alt='usage'
                      className={classes.image}
                      lazy={false}
                    />
                  }
                  subtitle='Rate each book you read and
                  save ratings'
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

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Features;
