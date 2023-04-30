import { Box, FormControl, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { formStyles, modalStyles } from "../styles/Other";
import { StyledButton } from "../styles/StyledButtons";
import FormInput from "./shared/FormInput";

const Registration: React.FC = () => {
  const { control, handleSubmit, getValues } = useForm();

  const onSubmit = (data: any) => {
    console.log(getValues());
  };

  return (
    <Box sx={modalStyles}>
      <Typography variant="h4">User Registration</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={formStyles}>
          <FormInput
            name="fullName"
            control={control}
            label="Full Name"
            placeholder="Full Name..."
            variant="outlined"
            required
          />

          <FormInput
            name="email"
            control={control}
            label="Email"
            placeholder="Email..."
            variant="outlined"
            type="email"
            required
          />

          <FormInput
            name="password"
            control={control}
            label="Password"
            placeholder="Password..."
            variant="outlined"
            type="password"
            required
            getValues={getValues}
          />

          <FormInput
            name="confirmPassword"
            control={control}
            label="Confirm Password"
            placeholder="Confirm Password..."
            variant="outlined"
            type="password"
            required
            getValues={getValues}
          />

          <StyledButton variant="contained" fullWidth type="submit">
            Confirm
          </StyledButton>
        </FormControl>
      </form>
    </Box>
  );
};

export default Registration;
