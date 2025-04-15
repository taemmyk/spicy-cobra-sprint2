import React from "react";
import { Box, Typography } from "@mui/material";
import Heading from "../components/common/Heading";
import { useTheme } from "@mui/material/styles";

function News() {
  const theme = useTheme();
  return (
    <>
      <Heading section="News" />
    </>
  );
}

export default News;
