import type { trackList } from '../../types/archiveList';
import { styles } from './styles';

type Props = {
  data: trackList;
};

export const SongList: React.FC<Props> = ({ data }) => {
  return (
    <ol>
      {data.map((item) => {
        return (
          <li css={styles.item}>
            {item.trackName}
            <br />
            {item.isOriginalSongFlag === true && (
              <div css={styles.text}>(原曲: {item.originalSongName})</div>
            )}
          </li>
        );
      })}
    </ol>
  );
};
