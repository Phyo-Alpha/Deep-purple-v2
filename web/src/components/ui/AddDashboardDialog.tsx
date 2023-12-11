import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface AddDashboardDialogProps {
    returnFunction: (value: string) => void;
}


export default function AddDashboardDialog({ returnFunction }: AddDashboardDialogProps) {
    const [open, setOpen] = React.useState(false);
    const [username, setUsername] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        returnFunction(username);
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button className='flex flex-row gap-2' onClick={handleClickOpen}>
                <AddCircleIcon />
                <p className="text-sm font-bold">New Board</p>
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Dashboard</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                        The App is only support twitter for now. Please enter your twitter username.

                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
