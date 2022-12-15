import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media (max-width: 750px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media (max-width: 1490px) {
      ${props}
    }
  `;
};
