import { useAuth } from '@/hooks';
import { Typography } from '@mui/joy';

export default function Profile() {
  const { user } = useAuth({ middleware: 'auth' });

  return (
    <>
      <Typography level="h1">{user.name}</Typography>
      {JSON.stringify(user)}
    </>
  );
}
