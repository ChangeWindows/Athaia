import { FormControl, FormHelperText, FormLabel, Input, InputProps } from '@mui/joy';

interface ITextFieldProps extends InputProps {
  required: boolean;
  errors: string[];
  helperText?: string;
  id: string;
  name: string;
}

export default function TextField({ required, helperText, errors, name, id, ...props }: ITextFieldProps) {
  return (
    <FormControl id={id} error={errors?.length >= 1} required={required}>
      <FormLabel>{name ?? id}</FormLabel>
      <Input name={name} id={id} {...props} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}

      {errors?.length > 0 && errors.map((message, key) => <FormHelperText key={key}>{message}</FormHelperText>)}
    </FormControl>
  );
}
