import { styles } from './styles';

const LINK_LIST_ITEM_ARRAY = [
  {
    url: 'https://twitter.com/HouraijiN',
    label: 'X（旧 Twitter）',
  },
  {
    url: 'https://soundcloud.com/shikigami01',
    label: 'SoundCloud',
  },
  {
    url: 'https://www.nicovideo.jp/user/11259788',
    label: 'ニコニコ動画',
  },
  {
    url: 'https://www.youtube.com/@Shikigami01',
    label: 'YouTube',
  },
];

export const Linklist = () => {
  return (
    <ul>
      {LINK_LIST_ITEM_ARRAY.map((item) => {
        return (
          <li key={item.url} css={styles.item}>
            <a href={item.url} css={styles.link}>
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
