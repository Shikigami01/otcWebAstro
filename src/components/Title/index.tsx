import type { ReactNode } from 'react';
import { styles } from './styles';

type Props = {
  chidlren: ReactNode;
};

export const Title: React.FC<Props> = ({ chidlren }) => {
  return <h1 css={styles.heading}>{chidlren}</h1>;
};
