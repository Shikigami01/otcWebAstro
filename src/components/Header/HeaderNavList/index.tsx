import { HeaderNavlistItem } from './HeaderNavListItem';
import { styles } from './styles';

const LINK_ITEM = [
  {
    url: '/',
    name: 'Home',
  },
  {
    url: '/about',
    name: 'About',
  },
  {
    url: '/archive',
    name: 'Archive',
  },
];

export const HeaderNavlist = () => {
  return (
    <ul css={styles.list}>
      {LINK_ITEM.map((item, index) => {
        return (
          <li key={index}>
            <HeaderNavlistItem url={item.url} name={item.name} />
          </li>
        );
      })}
    </ul>
  );
};
