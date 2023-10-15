import { css } from '@emotion/react';
import { colors } from '../../utils/colors';

export const styles = {
  wrapper: css`
    &.rhap_container {
      padding: 8px;
      background: none;
      border-radius: 8px;
      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.4);
    }

    .rhap_progress-indicator {
      background: ${colors.brown};
    }

    .rhap_time {
      color: inherit;
    }

    .rhap_controls-section {
      display: grid;
      grid-template-columns: 1fr 40px 1fr;

      .rhap_main-controls-button {
        margin: 0;
        color: ${colors.brown};
      }

      .rhap_volume-button {
        color: ${colors.brown};
      }

      .rhap_volume-indicator {
        background: ${colors.brown};
      }
    }
  `,
};
