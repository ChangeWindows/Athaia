import { Outlet, useNavigate } from 'react-router-dom';

import { Button, Container, Dropdown, IconButton, ListItemDecorator, Menu, MenuButton, MenuItem, Sheet, Stack, Typography, useColorScheme } from '@mui/joy';

import { useAuth } from '@/hooks';

import AmaranthIcon, {
  aiArrowRightFromBracket,
  aiArrowRightToBracket,
  aiCircleHalfInner,
  aiCirclePerson,
  aiGauge,
  aiHouse,
  aiMoon,
  aiSun
} from '@studio384/amaranth';

export default function Frontend() {
  const navigate = useNavigate();

  const { mode, setMode } = useColorScheme();
  const { user, logout } = useAuth({ middleware: 'guest' });

  return (
    <>
      <Sheet>
        <Container>
          <Stack direction="row" justifyContent="space-between" gap={1} sx={{ py: 1.5 }}>
            <Stack direction="row" gap={1}>
              <Button variant="plain" color="neutral" size="sm" startDecorator={<AmaranthIcon icon={aiHouse} />} onClick={() => navigate('/')}>
                Home
              </Button>
            </Stack>
            {user ? (
              <Stack direction="row" gap={1}>
                <IconButton variant="outlined" size="sm" onClick={() => navigate('/admin/dashboard')}>
                  <AmaranthIcon icon={aiGauge} />
                </IconButton>
                <IconButton variant="outlined" size="sm" onClick={() => navigate('/profile')}>
                  <AmaranthIcon icon={aiCirclePerson} />
                </IconButton>
                <IconButton variant="outlined" size="sm" onClick={logout}>
                  <AmaranthIcon icon={aiArrowRightFromBracket} />
                </IconButton>
              </Stack>
            ) : (
              <Stack direction="row" gap={1}>
                <IconButton variant="outlined" size="sm" onClick={() => navigate('/login')}>
                  <AmaranthIcon icon={aiArrowRightToBracket} />
                </IconButton>
              </Stack>
            )}
          </Stack>
        </Container>
      </Sheet>
      <Container sx={{ py: 2 }}>
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
    </>
  );
}
