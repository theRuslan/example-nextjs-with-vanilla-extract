import { globalStyle, style } from "@vanilla-extract/css";

import { FontMono } from "./fonts";

export const container = style({
  padding: "0 2rem",
});

export const main = style({
  minHeight: "100vh",
  padding: "4rem 0",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const footer = style({
  display: "flex",
  flex: 1,
  padding: "2rem 0",
  borderTop: "1px solid #eaeaea",
  justifyContent: "center",
  alignItems: "center",

  "@media": {
    "(prefers-color-scheme: dark)": {
      borderColor: "#222",
    },
  },
});

globalStyle(`${footer} a[href]`, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
});

export const title = style({
  margin: 0,
  lineHeight: 1.15,
  fontSize: "4rem",
  textAlign: "center",
});

globalStyle(`${title} a[href]`, {
  color: "#0070f3",
  textDecoration: "none",
});

globalStyle(
  `${title} a[href]:hover,
  ${title} a[href]:focus,
  ${title} a[href]:active`,
  {
    textDecoration: "underline",
  }
);

globalStyle("em", {
  fontWeight: "bold",
});

export const about = style({
  lineHeight: 1.5,
  fontSize: "1.5rem",
  textAlign: "center",
  backgroundColor: "#0070f3",
  color: "black",
  padding: "1rem",
});

export const description = style({
  margin: "4rem 0",
  lineHeight: 1.5,
  fontSize: "1.5rem",
  textAlign: "center",
});

export const code = style({
  backgroundColor: "#fafafa",
  borderRadius: 5,
  padding: "0.75rem",
  fontSize: "1.1rem",
  fontFamily: FontMono,

  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundColor: "#111",
    },
  },
});

export const grid = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "800px",

  "@media": {
    "(max-width: 600px)": {
      width: "100%",
      flexDirection: "column",
    },
  },
});

export const card = style({
  margin: "1rem",
  padding: "1.5rem",
  textAlign: "left",
  color: "inherit",
  textDecoration: "none",
  border: "1px solid #eaeaea",
  borderRadius: 10,
  transition: "color 0.15s ease, border-color 0.15s ease",
  maxWidth: "300px",

  "@media": {
    "(prefers-color-scheme: dark)": {
      borderColor: "#222",
    },
  },
});

globalStyle(
  `${card}:hover,
  ${card}:focus,
  ${card}:active`,
  {
    color: "#0070f3",
    borderColor: "#0070f3",
  }
);

globalStyle(`${card} h2`, {
  margin: "0 0 1rem 0",
  fontSize: "1.5rem",
});

globalStyle(`${card} p`, {
  margin: 0,
  fontSize: "1.25rem",
  lineHeight: 1.5,
});

export const logo = style({
  height: "1em",
  marginLeft: "0.5rem",

  "@media": {
    "(prefers-color-scheme: dark)": {
      filter: "invert(1)",
    },
  },
});
