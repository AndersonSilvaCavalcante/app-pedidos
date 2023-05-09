import { CardButton } from "@/components/Layout/CardButton";
import { Box, Grid } from "@mui/material";
import { NextPage } from "next";
const Createorder: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1 }}>
        <h2 className="title">Escolha o Produto:</h2>
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={6} md={3}>
          <CardButton data={{ title: "Pizza", path:"/pizza" }} />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardButton data={{ title: "Pastel", path:"/pizza" }} />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardButton data={{ title: "Produto 3", path:"/pizza" }} />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardButton data={{ title: "Produto 4", path:"/pizza" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Createorder;
