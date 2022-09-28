import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({ label, onchange, value }) {
    return (
        <Box
            sx={{
                '& > :not(style)': { mt: 1.5, width: '95%', },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-required"
                label={label}
                required
                autoComplete='off'
                value={value}
                onChange={(e) => onchange(e.target.value)}
                variant="outlined" />
        </Box>
    );
}
