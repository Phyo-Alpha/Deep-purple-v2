import React, { useState } from 'react';
import { Button, Dialog, DialogContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material/';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function SocialMediaPopUp() {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open Social Media Popup
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <List>
                        <ListItem button selected={selectedValue === 'Facebook'} onClick={() => handleClose('Facebook')}>
                            <ListItemIcon>
                                <FacebookIcon />
                            </ListItemIcon>
                            <ListItemText primary="Facebook" />
                        </ListItem>
                        <ListItem button selected={selectedValue === 'Twitter'} onClick={() => handleClose('Twitter')}>
                            <ListItemIcon>
                                <TwitterIcon />
                            </ListItemIcon>
                            <ListItemText primary="Twitter" />
                        </ListItem>
                        {/* Add other social media icons as needed */}
                    </List>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default SocialMediaPopUp;