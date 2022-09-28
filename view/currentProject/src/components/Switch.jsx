import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels({ label, onchange, value }) {
    return (
        <FormGroup sx={{ mt: 1, alignSelf: "end", }}>
            <FormControlLabel onChange={(e) => onchange(e.target.checked)}
                control={<Switch />}
                value={value}
                label={label} />
        </FormGroup>
    );
}
