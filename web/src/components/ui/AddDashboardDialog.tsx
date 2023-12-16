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
    const [dashboardName, setdashboardName] = React.useState('');
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        console.log(dashboardName);
        returnFunction(dashboardName);
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="contained" style={{ backgroundColor: "#877EFF" }} onClick={handleClickOpen}>
                <AddCircleIcon />
                <p className='px-2'>New Board</p>
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Dashboard</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                        The App is only support twitter for now. Please enter name for dashboardNames.

                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Dashboard Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={dashboardName}
                        onChange={(e) => setdashboardName(e.target.value)}
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
