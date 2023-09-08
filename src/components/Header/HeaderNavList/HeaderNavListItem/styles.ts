import { css } from '@emotion/react';
import { colors } from '../../../../utils/colors';

export const styles = {
  wrapper: css`
    position: relative;
    padding: 2px 0;
    box-sizing: border-box;
    color: ${colors.gray};
    font-size: 1rem;

    @media (min-width: 768px) {
      &::after {
        content: '';
        position: absolute;
        background-repeat: no-repeat;
        top: 100%;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${colors.gray};
        transition: width 100ms;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  `,
  active: css`
    &::after {
      width: 100%;
    }
  `,
};
