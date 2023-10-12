import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";

const Posts = () => {
  const data = useSelector((state) => state.post.postData);
//   console.log("postData", data);s
  return (
    <div>
        <h1>Post Data</h1>
      <div className="grid-container">
        {
            data && (
               data?.map((item,index)=>{
                return(
                    <div className="card" key={index}>
                    <div className="card-body">
                      <h4 className="card-title "><span style={{fontWeight:"900"}}>Post Title:- </span>{item.title.slice(0,7)}</h4>
                      
                      <p className="card-text">
                      <span style={{fontWeight:"900"}}>Post Body:- </span>{item.body.slice(0,70)}
                      </p>
                      <Link to={`/posts/${item.id}`} className="card-link">
                      <span className="badge rounded-pill bg-primary card-link">Details</span>
                      </Link>
                      <Link to={`/posts/${item.id}/comments`} className="card-link" >
                      <span className="badge rounded-pill bg-primary card-link">Comments</span>
                      </Link>
                    </div>
                  </div>
                )
               })
            )
        }
      </div>
    </div>
  );
};

export default Posts;
