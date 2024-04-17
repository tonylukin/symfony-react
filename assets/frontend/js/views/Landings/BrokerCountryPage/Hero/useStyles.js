import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints }) => ({
  root: {
    backgroundColor: '#0C2E4C',
  },
  container: {
    backgroundSize: 'cover',
    padding: [[40, 0]],

    [breakpoints.down('sm')]: {
      padding: [[25, 0, 40]],
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '3fr 2fr',
    gridGap: 30,

    [breakpoints.down('lg')]: {
      gridTemplateColumns: '1fr 1fr',
    },

    [breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
  title: {
    fontSize: 32,
    fontWeight: 400,
    lineHeight: '38px',
    color: '#FFF',
    margin: 0,
    top: -5,
    position: 'relative',

    [breakpoints.down('md')]: {
      fontSize: 24,
      lineHeight: '32px',
    },

    [breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  subtitle: {
    margin: [[20, 0, 0]],
    fontSize: 18,
    lineHeight: '24px',
    fontWeight: 700,
    color: '#FFF',

    [breakpoints.down('md')]: {
      fontSize: 16,
      lineHeight: '22px',
    },

    [breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}));
