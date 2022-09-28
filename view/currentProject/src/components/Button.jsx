import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons({ name, onclick }) {
  return (
    <Stack direction="row" sx={{ mt: 2, alignSelf: "center", mb: 1, }} spacing={2}>
      <Button onClick={onclick} sx={{ width: "150px", textTransform: "capitalize", fontSize: "16px", fontWeight: "600", p: "9px 0px", }} variant="contained">{name}</Button>
    </Stack>
  );
}
