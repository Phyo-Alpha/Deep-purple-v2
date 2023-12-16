import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function SwitchAccountDropDown() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 180 }} size="small"
            className='bg-primary-500 rounded-lg'>
            <InputLabel id="demo-select-small-label">
                <div className='flex flex-row gap-1 justify-center items-center'>
                    <AccountBoxIcon />
                    <p>Select account</p>
                </div>
            </InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twitter</MenuItem>
                <MenuItem value={20}>Facebook</MenuItem>
                <MenuItem value={30}>Instagram</MenuItem>
            </Select>
        </FormControl>
    );
}
