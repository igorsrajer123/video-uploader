import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { purple } from "./Colors";

export const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: purple.NORMAL,
  },
}));
