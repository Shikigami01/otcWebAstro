import { css } from '@emotion/react';

export const styles = {
  item: css`
    list-style: inside;
    font-size: 1rem;
    line-height: 1.5;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  `,
  link: css`
    display: inline-block;
    text-decoration: underline;

    @media (min-width: 768px) {
      &:hover {
        text-decoration: none;
      }
    }
  `,
};
