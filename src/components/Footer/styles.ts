import { css } from '@emotion/react';
import { colors } from '../../utils/colors';

export const styles = {
  footer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 0;
    font-size: 1rem;
    color: ${colors.gray};
    background-color: ${colors.brown};
  `,
};
