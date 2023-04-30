import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { purple } from "./Colors";

export const StyledButton = styled(Button)(() => ({
  fontWeight: 600,
  backgroundColor: purple.NORMAL,
  "&:hover": {
    backgroundColor: purple.DARK,
  },
}));
