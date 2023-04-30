import {
  AppBar,
  IconButton,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../styles/StyledButtons";

type NavigationProps = {
  openLoginModal: () => void;
};

const Navigation: React.FC<NavigationProps> = ({ openLoginModal }) => {
  const navigate = useNavigate();

  return (
    <AppBar sx={{ bgcolor: "#6d1b7b" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Video Playlist
        </Typography>

        {/* TODO: Display this when user is currently logged in and hide the "LOGIN" button */}
        {/* <Select
          sx={{
            width: 150,
            height: 40,
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "white",
              },
          }}
          label="Options"
        >
          <MenuItem value={10} onClick={() => navigate("/profile")}>
            User Profile
          </MenuItem>
          <MenuItem value={21}>Logout</MenuItem>
        </Select> */}

        <StyledButton variant="contained" onClick={openLoginModal}>
          Login
        </StyledButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
