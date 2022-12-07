import { globalStyle } from "@vanilla-extract/css";

import { FontBase } from "./fonts";

globalStyle("body, html", {
  padding: 0,
  margin: 0,
  fontFamily: FontBase,
});

globalStyle("html", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      colorScheme: "dark",
    },
  },
});

globalStyle("body", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      color: "white",
      backgroundColor: "black",
    },
  },
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle(".app-container", {
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#222",
  margin: "0.3rem",
});
