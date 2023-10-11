import { Alert, AlertProps } from '@mui/joy';

interface ISessionStatusProps extends AlertProps {
  status: null | string;
}

export default function SessionStatus({ status, ...props }: ISessionStatusProps) {
  if (status) {
    return <Alert {...props}>{status}</Alert>;
  }

  return <></>;
}
