import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    contactStyle: {
        margin: 0,
        padding: 6,
        listStyle: 'none',
        justifyContent: 'center',
    },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      justifyContent: 'center',
    },
  },
}));

export default function StateTextFields() {
  const classes = useStyles();
  const [name, setName] = React.useState();
  const handleChange = (event) => {
    setName(event.target.value);
  };


  return (
    <form className={classes.root} justify="center" noValidate autoComplete="off">
        <div className={classes.contactStyle}>
            <TextField id="standard-name" label="Name" value={name} onChange={handleChange} />
        </div>
        <div className={classes.contactStyle}>
            <TextField id="outlined-basic" label="Message" variant="outlined" />
        </div>
        <div className={classes.contactStyle}>
            <Button color="primary">Submit</Button>
        </div>
    </form>
  );
}