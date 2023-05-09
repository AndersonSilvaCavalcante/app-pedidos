import Image from "next/image";
import { Inter } from "next/font/google";
import { CardButton } from "@/components/Layout/CardButton";
import { Container } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const inter = Inter({ subsets: ["latin"] });
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={6} md={4}>
          <CardButton data={{ title: "Fazer Pedido", size: 0 }} />
        </Grid>
        <Grid item xs={6} md={4}>
          <CardButton data={{ title: "Ver Pedidos", size: 2 }} />
        </Grid>
        <Grid item xs={6} md={4}>
          <CardButton data={{ title: "Editar Pedido", size: 1 }} />
        </Grid>
        <Grid item xs={6} md={4}>
          <CardButton data={{ title: "Cadastrar Produtos", size: 1 }} />
        </Grid>
      </Grid>
    </Box>
  );
}
