import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid /*, regular*/,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import './ImageModal.scss';

export default function ImageModal(props) {
  const { selectedListItem, setSelectedListItem } = props;
  const { title /*, description*/, source } = selectedListItem;

  return (
    <div className="container ImageModal">
      <FontAwesomeIcon
        className="xmark"
        icon={solid('xmark')}
        onClick={() => setSelectedListItem(null)}
      />
      <FontAwesomeIcon className="chevron-left" icon={solid('chevron-left')} />
      <FontAwesomeIcon
        className="chevron-right"
        icon={solid('chevron-right')}
      />
      <img src={source} alt={title} />
    </div>
  );
}
