import type { ReactNode } from 'react';
import { styles } from './styles';

type Props = {
  children: ReactNode;
};

export const Description: React.FC<Props> = ({ children }) => {
  return <h1 css={styles.description}>{children}</h1>;
};
