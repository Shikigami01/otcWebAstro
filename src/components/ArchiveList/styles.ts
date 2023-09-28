import { css } from '@emotion/react';

export const styles = {
  list: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  `,
  item: css`
    filter: brightness(1);
    transition: filter 300ms;

    @media (min-width: 768px) {
      &:hover {
        filter: brightness(0.9);
      }
    }
  `,
};
