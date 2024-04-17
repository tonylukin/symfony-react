import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints }) => ({
  root: {},
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '4px',
    background: '#F1F1F8',
    borderRadius: '4px',
    position: 'relative',
    cursor: 'pointer',
    '&.is-drag-active': {
      borderColor: 'transparent!important',
      '&:after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgba(33,88,245,.15)',
        top: '0',
        left: '0',
        border: '2px dashed #2158F5',
        borderRadius: '4px',
        pointerEvents: 'none',
        zIndex: '2',
      },
    },

    '&.has-file': {
      '& $num': {
        backgroundColor: '#D9E0EB',
      },
      '&:hover $remove': {
        display: 'flex',
      },
      [breakpoints.down('md')]: {
        '& $remove': {
          display: 'flex',
        },
      },
    },
  },
  num: {
    position: 'absolute',
    zIndex: '1',
    left: '0',
    top: '0',
    backgroundColor: 'rgba(0,73,121,0.1)',
    borderRadius: '4px 0px 0px 0px',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    lineHeight: '30px',
    fontWeight: '700',
    color: 'rgba(0,73,121,0.67)',
  },
  wrap: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    [breakpoints.down('xs')]: {
      maxHeight: 'calc((100vw - 45px) / 2 * 0.61)',
    },
  },
  border: {
    display: 'block',
    width: '100%',
    [breakpoints.down('sm')]: {
      visibility: 'hidden',
    },
  },
  imgWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    padding: '24px 15px',
  },
  img: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    width: '100%',
    height: '100%',
  },
  preview: {
    width: '100%',
    height: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: '#000',
    borderRadius: '2px',
    position: 'absolute',
    top: '0',
    left: '0',
    cursor: 'grab',
    '&.is-video': {
      cursor: 'default',
    },
  },
  label: {
    paddingTop: 3,
    [breakpoints.down('sm')]: {
      fontSize: '12px',
      paddingTop: '2px',
      paddingBottom: '1px',
    },
  },
  btn: {
    fontSize: '14px',
    lineHeight: '22px',
    marginBottom: '-3px',
    [breakpoints.down('sm')]: {
      fontSize: '12px',
      lineHeight: '18px',
      marginTop: '-1px',
      marginBottom: '0px',
    },
  },
  footer: {
    textAlign: 'center',
    marginTop: 5,
  },
  checkmark: {
    position: 'relative',
    top: '1px',
  },
  remove: {
    backgroundColor: 'rgba(255,255,255,.9)',
    borderRadius: '50%',
    cursor: 'pointer',
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -20,
    marginTop: -20,
    width: 40,
    height: 40,
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    [breakpoints.down('md')]: {
      marginLeft: 0,
      marginTop: 0,
      width: 24,
      height: 24,
      left: 'auto',
      top: 'auto',
      right: 10,
      bottom: 10,
      '& img': {
        width: 14,
        height: 14,
      },
    },
  },
}));
