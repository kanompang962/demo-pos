import { SearchOutlined } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";

const InputSearch = ({ place }) => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        borderRadius: 1,
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchOutlined />
      </IconButton>
      <InputBase
        sx={{ fontSize:{xs:10,md:14} ,ml: { xs: 0, md: 1 }, flex: 1 }}
        placeholder={place}
        // inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
};

export default InputSearch;
