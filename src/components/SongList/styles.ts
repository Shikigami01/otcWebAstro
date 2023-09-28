import { css } from '@emotion/react';

export const styles = {
  item: css`
    font-size: 1rem;
    line-height: 1.5;
    counter-increment: cnt;

    &:not(:last-child) {
      margin-bottom: 8px;
    }

    &::before {
      content: counter(cnt, decimal-leading-zero) '. ';
    }
  `,
  text: css`
    padding-left: 2em;
  `,
};
