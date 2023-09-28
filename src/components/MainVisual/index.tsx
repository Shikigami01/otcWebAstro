import { styles } from './styles';

export const MainVisual = () => {
  return (
    <div css={styles.wrapper}>
      <img
        css={styles.img}
        src="/image/main-visual.svg"
        alt="Over The Coffee Main Visual"
        width="384"
        height="312"
      />
    </div>
  );
};
