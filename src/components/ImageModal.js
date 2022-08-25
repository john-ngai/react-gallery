import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid/*, regular*/ } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./ImageModal.scss";

export default function ImageModal(props) {
  const { selectedListItem, setSelectedListItem } = props;
  const { title/*, description*/, source } = selectedListItem;

  // Disable scrolling when this component is mounted.
  document.body.style.overflow = "hidden";

  return (
    <div
      className="container ImageModal"
    >
      <FontAwesomeIcon
        className="xmark"
        icon={solid("xmark")}
        onClick={() => setSelectedListItem(null)}
      />
      <img src={source} alt={title} />
    </div>
  );
}
