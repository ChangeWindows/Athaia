import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Checkbox, Divider, FormControl, Stack, Typography } from '@mui/joy';

import TextField from '@/design/components/TextField';
import { useAuth } from '@/hooks';

import AmaranthIcon, { aiArrowRightToBracket, aiPersonPlus, aiShieldKeyhole } from '@studio384/amaranth';

import SessionStatus from './_SessionStatus';

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
  const [status, setStatus] = useState(null);

  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard'
  });

  const submitForm = async (event) => {
    event.preventDefault();

    login({
      email: form.email,
      password: form.password,
      remember: form.remember,
      setErrors,
      setStatus
    });
  };

  return (
    <form onSubmit={submitForm}>
      <Stack spacing={2}>
        <div>
          <Typography level="h2" fontSize="xl3">
            Login
          </Typography>
          <Typography color="neutral">Welcome back</Typography>
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

        <FormControl>
          <Checkbox label="Remember me" checked={form.remember} onChange={(e) => setForm((prev) => ({ ...prev, remember: e.target.checked }))} />
        </FormControl>

        <Stack direction="row" justifyContent="space-between">
          <Button variant="plain" color="neutral" startDecorator={<AmaranthIcon icon={aiShieldKeyhole} />} onClick={() => navigate('/forgot-password')}>
            Password forgotten?
          </Button>
          <Button type="submit" endDecorator={<AmaranthIcon icon={aiArrowRightToBracket} />}>
            Login
          </Button>
        </Stack>
        <Divider>or</Divider>
        <Button variant="outlined" color="primary" startDecorator={<AmaranthIcon icon={aiPersonPlus} />} onClick={() => navigate('/register')}>
          Create an account
        </Button>
      </Stack>
    </form>
  );
}
