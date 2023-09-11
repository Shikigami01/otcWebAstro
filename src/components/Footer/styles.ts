import { css } from '@emotion/react';
import { colors } from '../../utils/colors';

export const styles = {
  footer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    line-height: 1.5;
    color: ${colors.gray};
    background-color: ${colors.brown};
  `,
};
