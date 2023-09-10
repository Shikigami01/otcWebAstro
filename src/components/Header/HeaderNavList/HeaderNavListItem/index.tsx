import type React from 'react';
import { styles } from './styles';

type Props = {
  url: string;
  name: string;
};

export const HeaderNavlistItem: React.FC<Props> = ({ url, name }) => {
  return (
    <a css={styles.wrapper} href={url}>
      {name}
    </a>
  );
};
