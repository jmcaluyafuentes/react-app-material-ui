import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField'

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

const Create = () => {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        setTitleError(false);
        setDetailsError(false);

        if (title == '') {
            setTitleError(true);
        } 

        if (details == '') {
            setDetailsError(true);
        }

        if (title && details) {
            alert(`${title}, ${details}`);
        }
    }

    return (
        <Container
            disableGutters
        >
            <Typography 
                variant="h5"
                color="textSecondary"
                component="h1"
                gutterBottom
                className={classes.title}
            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField 
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.field}
                    label="Note"
                    fullWidth
                    required
                    error={titleError}
                />
                <TextField 
                    onChange={(e) => setDetails(e.target.value)}
                    className={classes.field}
                    label="Details"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={detailsError}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    endIcon={<KeyboardArrowRightIcon />}
                    className={classes.btn}
                >
                    Submit
                </Button>
            </form>

            
        </Container>
    )
}

export default Create