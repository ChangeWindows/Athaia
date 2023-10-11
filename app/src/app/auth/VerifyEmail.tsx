import { useState } from 'react';

import { Button, Stack, Typography } from '@mui/joy';

import { useAuth } from '@/hooks';

import AmaranthIcon, { aiArrowRight, aiArrowRightFromBracket } from '@studio384/amaranth';

import SessionStatus from './_SessionStatus';

export default function VerifyEmail() {
  const [status, setStatus] = useState(null);
  const { logout, resendEmailVerification } = useAuth({
    middleware: 'auth',
    redirectIfAuthenticated: '/dashboard'
  });

  return (
    <Stack spacing={2}>
      <div>
        <Typography level="h2" fontSize="xl3">
          Verify email
        </Typography>
        <Typography color="neutral">Are you... you?</Typography>
      </div>

      <Typography color="neutral">
        Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive
        the email, we will gladly send you another.
      </Typography>

      <Typography color="neutral">A new verification link has been sent to the email address you provided during registration.</Typography>

      <SessionStatus status={status} />

      <Stack direction="row" justifyContent="space-between">
        <Button variant="plain" color="neutral" startDecorator={<AmaranthIcon icon={aiArrowRightFromBracket} />} onClick={logout}>
          Logout
        </Button>
        <Button onClick={() => resendEmailVerification({ setStatus })} endDecorator={<AmaranthIcon icon={aiArrowRight} />}>
          Resend verification
        </Button>
      </Stack>
    </Stack>
  );
}
