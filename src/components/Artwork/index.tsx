import { styles } from './styles';

type Props = {
  pathUrl: string;
  name: string;
};

export const Artwork: React.FC<Props> = ({ pathUrl, name }) => {
  return (
    <img
      css={styles.img}
      src={pathUrl}
      alt={name}
      width="1024"
      height="1024"
      loading="lazy"
    />
  );
};
