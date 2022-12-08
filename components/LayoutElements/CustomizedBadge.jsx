import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -7,
    top: -5,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "3px 5px",
    backgroundColor: "#d8127d",
  },
}));

const CustomizedBagde = ({ children, content }) => {
  return (
    <StyledBadge badgeContent={content} color="secondary">
      {children}
    </StyledBadge>
  );
};

export default CustomizedBagde;
