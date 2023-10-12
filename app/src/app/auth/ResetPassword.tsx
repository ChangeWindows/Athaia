import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button, Stack, Typography } from '@mui/joy';

import TextField from '@/design/components/TextField';
import { useAuth } from '@/hooks';

import AmaranthIcon, { aiShield } from '@studio384/amaranth';

import SessionStatus from './_SessionStatus';

export default function ResetPassword() {
  const params = useParams();

  const [form, setForm] = useState({ email: '', password: '', passwordConfirmation: '' });
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
  const [status, setStatus] = useState(null);

  const { resetPassword } = useAuth({
    middleware: 'guest'
  });

  const submitForm = async (event) => {
    event.preventDefault();

    resetPassword({
      email: form.email,
      password: form.password,
      password_confirmation: form.passwordConfirmation,
      token: params.token,
      setErrors,
      setStatus
    });
  };

  return (
    <form onSubmit={submitForm}>
      <Stack spacing={2}>
        <div>
          <Typography level="h2" fontSize="xl3">
            Reset password
          </Typography>
          <Typography color="neutral">Forging your new key</Typography>
        </div>

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

        <TextField
          required
          type="password"
          id="password"
          name="Password"
          value={form.password}
          onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
          errors={errors.password}
        />

        <TextField
          required
          type="password"
          id="passwordConfirmation"
          name="Confirm password"
          value={form.passwordConfirmation}
          onChange={(e) => setForm((prev) => ({ ...prev, passwordConfirmation: e.target.value }))}
          errors={errors.passwordConfirmation}
        />

        <Button type="submit" endDecorator={<AmaranthIcon icon={aiShield} />}>
          Reset password
        </Button>
      </Stack>
    </form>
  );
}
