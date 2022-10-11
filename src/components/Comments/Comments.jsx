import styles from "../Comments/comments.module.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, addComments } from "../../features/commentSlice";
import { MagnifyingGlass } from "react-loader-spinner";

const Comments = () => {
  const [comm, setComm] = useState("");
  const [blur, setBlur] = useState(false);
  const id = useSelector((state) => state.application.id);
  const token = useSelector((state) => state.application.token);
  const comment = useSelector((state) => state.commentSlice.comments);
  const load = useSelector((state) => state.commentSlice.loadComment);
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

  if (load) {
    return (
      <div className={styles.load}>
        <MagnifyingGlass
          visible={true}
          height="150"
          width="150"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
        <p>Идет загрузка...</p>
      </div>
    );
  }

  return (
    <div className={styles.Block}>
      <div className={styles.Block2}>
        <div className={styles.Inputs}>
          <input
            value={comm}
            placeholder="Написать комментарий..."
            onChange={handleChange}
            onFocus={() => setBlur(true)}
            onBlur={() => setBlur(false)}
          />
          <button onClick={handleAddComment} disabled={!comm || !token}>
            Добавить
          </button>
          {!token && blur && (
            <div
              style={{
                color: "red",
                position: "absolute",
                left: "38%",
                bottom: "80px",
              }}
            >
              Вы не авторизованы и не можете добавить комментарий
            </div>
          )}
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
