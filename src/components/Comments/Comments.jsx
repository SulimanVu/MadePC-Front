import styles from "../Comments/comments.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, addComments } from "../../features/commentSlice";

const Comments = () => {
  const [comm, setComm] = useState("");
  const id = useSelector((state) => state.application.id);

  const comment = useSelector((state) => state.commentSlice.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const handleChange = (e) => {
    setComm(e.target.value);
  };

  const handleAddComment = () => {
    dispatch(addComments({ comm, id }));
    setComm("");
  };

  return (
    <div className={styles.Block}>
      <div className={styles.Block2}>
        <div className={styles.Inputs}>
          <input
            value={comm}
            placeholder="Написать комментарий..."
            onChange={handleChange}
          />
          <button onClick={handleAddComment} disabled={!comm}>
            Добавить
          </button>
        </div>
        <div className={styles.BlockComment}>
          {comment
            .map((item) => {
              return (
                <div className={styles.Comment}>
                  <div className={styles.log}>
                    <span className={styles.pp}>{item.user.login}</span>
                  </div>
                  <div className={styles.text}>
                    <p className={styles.sp}>Комментарий</p>
                    <span>{item.text}</span>
                  </div>
                </div>
              );
            })
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export default Comments;
