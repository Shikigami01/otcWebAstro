import type { ReactNode } from 'react';
import { styles } from './styles';

type Props = {
  chidlren: ReactNode;
};

export const Description: React.FC<Props> = ({ chidlren }) => {
  return <h1 css={styles.description}>{chidlren}</h1>;
};
