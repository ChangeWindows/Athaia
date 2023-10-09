import { Outlet } from 'react-router-dom';

import { Container, Dropdown, ListItemDecorator, Menu, MenuButton, MenuItem, Stack, Typography, useColorScheme } from '@mui/joy';

import AmaranthIcon, { aiCircleHalfInner, aiMoon, aiSun } from '@studio384/amaranth';

export default function Layout() {
  const { mode, setMode } = useColorScheme();

  return (
    <Container sx={{ py: 5 }}>
      <Stack spacing={4}>
        <Outlet />
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography level="body-sm">&copy; Athaia 2023</Typography>
          <Dropdown>
            <MenuButton size="sm" startDecorator={<AmaranthIcon icon={mode === 'dark' ? aiMoon : mode === 'light' ? aiSun : aiCircleHalfInner} />}>
              {mode === 'dark' ? 'Dark theme' : mode === 'light' ? 'Light theme' : 'System theme'}
            </MenuButton>
            <Menu size="sm">
              <MenuItem selected={mode === 'light'} onClick={() => setMode('light')}>
                <ListItemDecorator>
                  <AmaranthIcon icon={aiSun} />
                </ListItemDecorator>
                Light
              </MenuItem>
              <MenuItem selected={mode === 'dark'} onClick={() => setMode('dark')}>
                <ListItemDecorator>
                  <AmaranthIcon icon={aiMoon} />
                </ListItemDecorator>
                Dark
              </MenuItem>
              <MenuItem selected={mode === 'system'} onClick={() => setMode('system')}>
                <ListItemDecorator>
                  <AmaranthIcon icon={aiCircleHalfInner} />
                </ListItemDecorator>
                System
              </MenuItem>
            </Menu>
          </Dropdown>
        </Stack>
      </Stack>
    </Container>
  );
}
