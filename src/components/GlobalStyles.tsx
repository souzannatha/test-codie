"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button {
  all: unset;
  display: inline-block;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
}

`;
