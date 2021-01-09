import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function StateTextFields() {
  const classes = useStyles();
  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = (event) => {
    setName(event.target.value);
  };


  return (
    <form className={classes.root} noValidate autoComplete="off">
        <div>
            <TextField id="standard-name" label="Name" value={name} onChange={handleChange} />
        </div>
        <div>
            <TextField id="outlined-basic" label="Write your message here." variant="outlined" />
        </div>
        <div>
            <Button color="primary">Submit</Button>
        </div>
    </form>
  );
}