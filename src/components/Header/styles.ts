import { css } from '@emotion/react';
import { colors } from '../../utils/colors';

export const styles = {
  wrapper: css`
    background-color: ${colors.brown};
  `,
  content: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    height: 50px;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 16px;
    box-sizing: border-box;
  `,
};
