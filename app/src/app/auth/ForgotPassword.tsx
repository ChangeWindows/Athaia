import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Stack, Typography } from '@mui/joy';

import TextField from '@/design/components/TextField';
import { useAuth } from '@/hooks';

import AmaranthIcon, { aiArrowRight, aiArrowRightToBracket } from '@studio384/amaranth';

import SessionStatus from './_SessionStatus';

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '' });
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
  const [status, setStatus] = useState(null);

  const { forgotPassword } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard'
  });

  const submitForm = async (event) => {
    event.preventDefault();

    forgotPassword({
      email: form.email,
      setErrors,
      setStatus
    });
  };

  return (
    <form onSubmit={submitForm}>
      <Stack spacing={2}>
        <div>
          <Typography level="h2" fontSize="xl3">
            Forgot password
          </Typography>
          <Typography color="neutral">What could it be?</Typography>
        </div>

        <Typography color="neutral">
          Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new
          one.
        </Typography>

        <SessionStatus status={status} />

        <TextField
          required
          type="email"
          id="email"
          name="Email"
          value={form.email}
          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
          errors={errors.email}
        />

        <Stack direction="row" justifyContent="space-between">
          <Button variant="plain" color="neutral" startDecorator={<AmaranthIcon icon={aiArrowRightToBracket} />} onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button type="submit" endDecorator={<AmaranthIcon icon={aiArrowRight} />}>
            Send reset link
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
