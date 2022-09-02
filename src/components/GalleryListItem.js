import './GalleryListItem.scss';

export default function GalleryListItem(props) {
  const { id, title, description, source, setModalImage } = props;
  const listItem = { id, title, description, source };

  return (
    <div
      className="container GalleryListItem"
      onClick={() => setModalImage(listItem)}
    >
      <img src={source} alt={title} />
    </div>
  );
}
