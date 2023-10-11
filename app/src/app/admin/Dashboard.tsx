import { useAuth } from '@/hooks';
import { Typography } from '@mui/joy';

export default function Dashboard() {
  const { user } = useAuth({ middleware: 'auth' });

  return (
    <>
      <Typography level="h1">Dashboard</Typography>
      {JSON.stringify(user)}
    </>
  );
}
