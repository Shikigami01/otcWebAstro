import { HeaderLogo } from './HeaderLogo';
import { HeaderNavlist } from './HeaderNavList';
import { styles } from './styles';

export const Header = () => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.content}>
        <HeaderLogo />
        <HeaderNavlist />
      </div>
    </div>
  );
};
