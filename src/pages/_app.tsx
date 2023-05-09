import ResponsiveAppBar from "@/components/Layout/Navbar";
import "@/styles/globals.css";
import { Container } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResponsiveAppBar />
      <Container className="main-container">
        <Component {...pageProps} />
      </Container>
    </>
  );
}
