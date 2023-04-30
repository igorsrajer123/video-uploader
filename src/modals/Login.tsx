import { Link } from "react-router-dom";
import { Box, Fade, FormControl, Modal, Typography } from "@mui/material";
import { StyledTextField } from "../styles/StyledInputs";
import { formStyles, linkStyles, modalStyles } from "../styles/Other";
import { StyledButton } from "../styles/StyledButtons";
import { useForm, Controller } from "react-hook-form";
import FormInput from "../components/shared/FormInput";

type LoginProps = {
  loginModalOpen: boolean;
  closeLoginModal: () => void;
};

const Login: React.FC<LoginProps> = ({ loginModalOpen, closeLoginModal }) => {
  const { control, handleSubmit, getValues } = useForm();

  const onSubmit = (data: any) => {
    console.log(getValues());
  };

  return (
    <Modal open={loginModalOpen} onClose={closeLoginModal}>
      <Fade in={loginModalOpen}>
        <Box sx={modalStyles}>
          <Typography variant="h3" fontWeight={600}>
            Login
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl sx={formStyles}>
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
              />

              <Link
                onClick={closeLoginModal}
                to="/registration"
                style={linkStyles}
              >
                Don't have an account? Sign up here!
              </Link>

              <StyledButton variant="contained" fullWidth type="submit">
                Login
              </StyledButton>
            </FormControl>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default Login;
