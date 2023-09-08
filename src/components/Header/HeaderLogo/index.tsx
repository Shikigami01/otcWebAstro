import { styles } from './styles';

export const HeaderLogo = () => {
  return (
    <a href="/" css={styles.wrapper}>
      <img
        css={styles.icon}
        src="/image/logo.svg"
        alt="logo"
        width="30"
        height="30"
      />
    </a>
  );
};
