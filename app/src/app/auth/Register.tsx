import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Divider, Stack, Typography } from '@mui/joy';

import TextField from '@/design/components/TextField';
import { useAuth } from '@/hooks';

import AmaranthIcon, { aiArrowRightToBracket, aiPersonPlus } from '@studio384/amaranth';

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '', passwordConfirmation: '' });
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard'
  });

  const submitForm = async (event) => {
    event.preventDefault();

    register({
      name: form.name,
      email: form.email,
      password: form.password,
      password_confirmation: form.passwordConfirmation,
      setErrors
    });
  };

  return (
    <form onSubmit={submitForm}>
      <Stack spacing={2}>
        <div>
          <Typography level="h2" fontSize="xl3">
            Create account
          </Typography>
          <Typography color="neutral">Nice to meet you</Typography>
        </div>

        <TextField
          required
          id="name"
          name="Name"
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
          errors={errors.name}
        />

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

        <Button type="submit" endDecorator={<AmaranthIcon icon={aiPersonPlus} />}>
          Create account
        </Button>
        <Divider>or</Divider>
        <Button variant="outlined" color="primary" startDecorator={<AmaranthIcon icon={aiArrowRightToBracket} />} onClick={() => navigate('/login')}>
          Login
        </Button>
      </Stack>
    </form>
  );
}
