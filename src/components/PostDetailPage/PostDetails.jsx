import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import { getPostDetails } from "../../store/slice/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { postDetails } = useSelector((state) => state.post);

  const fetchPostDetail = () => {
    try {
      fetchDataFromApi(`/posts/${id}`).then((res) => {
        // console.log(res)
        dispatch(getPostDetails(res));
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostDetail();
  }, []);

  return (
    <>
    <div className="d-flex justify-content-center mt-5">
    <div className="card text-white bg-primary mb-3 " style={{maxWidth: '30rem',height:"400px", fontFamily: 'Georgia, serif ',fontWeight:"700"}}>
  <div className="card-header">Post id :- {id}</div>
  <div className="card-body">
    <h4 className="card-title"><span className="text-dark">Post Title :-</span> {postDetails?.title}</h4>
    <p className="card-text mt-5"><span className="text-dark">Post body :-</span> {postDetails?.body}</p>
    <Link to={`/posts/${id}/comments`}>
    <button type="button" className="btn btn-outline-secondary">Comments</button>
    </Link>
    <Link to="/">
    <button type="button" className="btn btn-outline-secondary m-2">Goto Post </button>
    </Link>
  </div>
</div>
</div>
    </>
  );
};

export default PostDetails;
