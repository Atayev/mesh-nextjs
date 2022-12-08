import Popover from "@mui/material/Popover";
const Pop = ({ visible, anchorEl, closeMenu,position,children }) => {
  return (
    <Popover
      open={visible}
      anchorEl={anchorEl}
      onClose={closeMenu}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: position,
      }}
    >
     {children}
    </Popover>
  );
};

export default Pop;
