import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/entities";
import { pageProcess, getPhotos } from "store/photo";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const { searchText, collection, page, totalPages } = useSelector(
    (state: RootState) => state.photo
  );

  const onPress = async (type: string) => {
    await dispatch(pageProcess(type));
    dispatch(getPhotos({ searchText, collection, page }));
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => onPress("decrement")}
        disabled={page === 0}
      >
        Previous
      </button>
      <button
        className="pagination-button"
        onClick={() => onPress("increment")}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
