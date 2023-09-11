import { styles } from './styles';

type Props = {
  children: React.ReactNode;
};

export const Title: React.FC<Props> = ({ children }) => {
  return <h1 css={styles.heading}>{children}</h1>;
};
