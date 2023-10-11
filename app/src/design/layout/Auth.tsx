import { Outlet } from 'react-router-dom';

import { Sheet, Stack } from '@mui/joy';

export default function Auth() {
  return (
    <Stack gap={4} sx={{ maxWidth: 360, height: '100vh', marginInline: 'auto' }} alignContent="center" justifyContent="center">
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: 'lg',
          p: 3
        }}
      >
        <Stack gap={2}>
          <Outlet />
        </Stack>
      </Sheet>
    </Stack>
  );
}
