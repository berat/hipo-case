import { useState } from "react";
import Modal from "../modal";

interface GProps {
  data: {
    urls: {
      regular: string;
    };
    links: {
      download?: string;
    };
    user: {
      profile_image: {
        medium: string;
      };
      location: string;
      name: string;
      username: string;
    };
    alt_description: string;
  }[];
}

interface MData {
  urls: {
    regular: string;
  };
  links: {
    download?: string;
  };
  user: {
    profile_image: {
      medium: string;
    };
    location: string;
    name: string;
    username: string;
  };
  alt_description: string;
}

const GridView: React.FC<GProps> = ({ data }) => {
  const [isModal, setModal] = useState(false);
  const [modalData, setModalData] = useState<MData>();

  return (
    <section className="grid">
      <ul>
        {data.map((item: MData) => (
          <li>
            <button
              onClick={() => {
                setModal(true);
                setModalData(item);
              }}
            >
              <img src={item.urls.regular} alt={item.alt_description} />
            </button>
          </li>
        ))}
      </ul>
      {isModal && (
        <Modal isShow={isModal} setShow={setModal} data={modalData} />
      )}
    </section>
  );
};

export default GridView;
