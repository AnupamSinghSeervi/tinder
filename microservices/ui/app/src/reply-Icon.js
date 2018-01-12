import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import SvgIcon from 'material-ui/SvgIcon';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    fill: "#657786",
  },
  iconHover: {
    '&:hover': {
      fill: "#1da1f2",
    },
  },
};

const HomeIcon = props => (
  <SvgIcon {...props} viewBox='0 0 96 120' >
    <path d="M16.004 86.004c-0.808 0-1.536-0.488-1.848-1.236-0.312-0.752-0.14-1.604 0.432-2.18 2.212-2.22 6.208-7.66 8.88-13.52-13.296-5.82-21.468-16.056-21.468-27.072 0-17.64 20.636-32 46-32s46 14.36 46 32c0 17.644-20.636 32-46 32-1.644 0-3.256-0.080-4.852-0.204-7.528 8.108-16.656 12.212-27.144 12.212zM48.004 14.004c-23.16 0-42 12.572-42 28 0 9.844 7.984 19.088 20.832 24.132 0.496 0.196 0.896 0.584 1.104 1.072 0.208 0.492 0.22 1.052 0.020 1.544-1.864 4.652-4.756 9.424-7.396 12.948 7.716-1.060 14.52-4.844 20.276-11.296 0.416-0.468 1.028-0.72 1.668-0.66 1.8 0.16 3.628 0.26 5.492 0.26 23.16 0 42-12.564 42-28 0-15.432-18.836-28-41.996-28z" />
  </SvgIcon>
);

function SvgIcons(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <HomeIcon
        className={classes.iconHover}
        style={{
          width: 23,
          height: 23,
        }}
      />
    </div>
  );
}

SvgIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgIcons);
