import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  UseFormGetValues,
} from "react-hook-form";
import { red } from "../../styles/Colors";
import { StyledTextField } from "../../styles/StyledInputs";

type FormInputProps = {
  control: Control<FieldValues, any>;
  getValues?: UseFormGetValues<FieldValues>;
  name: string;
  label?: string;
  placeholder?: string;
  variant?: "filled" | "outlined" | "standard";
  type?: string;
  errors?: FieldErrors<FieldValues>;
  required?: boolean;
};

const FormInput: React.FC<FormInputProps> = ({
  control,
  getValues,
  name,
  label,
  placeholder = "",
  variant,
  type,
  required = false,
}) => {
  const validatePasswordsMatch = () => {
    if (getValues) {
      const { password, confirmPassword } = getValues();

      return password === confirmPassword || "Passwords do not match!";
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{
        required: required && "This field is required!",
        minLength: {
          value: type === "password" ? 5 : 0,
          message:
            type === "password"
              ? "Password must be at least 5 characters long!"
              : "",
        },
        validate: getValues && validatePasswordsMatch,
      }}
      render={({ field, fieldState }) => {
        return (
          <StyledTextField
            label={label}
            placeholder={placeholder}
            fullWidth
            variant={variant}
            InputProps={{
              style: { color: fieldState.invalid ? red.NORMAL : "white" },
            }}
            InputLabelProps={{
              style: { color: fieldState.invalid ? red.NORMAL : "white" },
            }}
            required={required}
            type={type}
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
            {...field}
          />
        );
      }}
    />
  );
};

export default FormInput;
