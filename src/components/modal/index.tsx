import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import DownloadSVG from "assets/download.svg";

interface MProps {
  isShow: boolean;
  setShow: (item: boolean) => void;
  data: any;
}
const Modal: React.FC<MProps> = ({ isShow, setShow, data }) => {
  const modalRef = useRef(null);
  const { urls, user, alt_description, links } = data;

  const onClickOutside = () => setShow(false);

  useOnClickOutside(modalRef, onClickOutside);

  return isShow ? (
    <section id="modal">
      <div className="modal" ref={modalRef}>
        <img className="cover" src={urls.regular} alt={alt_description} />
        <div className="user">
          <img
            className="user-avatar"
            src={user.profile_image.medium}
            alt={user.name}
          />
          <div>
            <span>{user.name}</span>
            <p>@{user.username}</p>
          </div>
          <button onClick={() => (window.location = links?.download)}>
            <img src={DownloadSVG} alt="download" />
            Download
          </button>
        </div>
        <div>{/* google maps kodu */}</div>
      </div>
    </section>
  ) : null;
};

export default Modal;
