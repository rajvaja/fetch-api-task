import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from '../../utils/api'
import { getComments } from '../../store/slice/postSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./style.css"

const PostComments = () => {
    const {id} = useParams();

    const dispatch = useDispatch()

    const { comments } = useSelector((state)=>state.post)

    console.log(comments)

  
   


    const fetchComments = () => {
       try {
        fetchDataFromApi(`/posts/${id}/comments`).then((res)=>{
            console.log(res)
            dispatch(getComments(res))
        })
       } catch (error) {
        console.log(error)
       }
    }

    useEffect(()=>{
        fetchComments()
    },[])
  return (<>
    <h1 style={{marginTop:"30px"}}>comments data</h1>
    <div className="grid-container">
       
        {comments&&(
            comments?.map((item,index)=>{return(
                
                <div className="card bg-secondary mb-3" style={{maxWidth: '40rem'}} key={index}>
  <div className="card-header">id:-{item.id}   <span style={{fontWeight:"900"}}>Post ID :  </span> {id}</div>
  <div className="card-body">
    <h4 className="card-title"><span style={{fontWeight:"900"}}>Name:-  </span>   {item.name.slice(0,5)}</h4>
    <h6 className="card-title"><span style={{fontWeight:"900"}}>Email:-  </span>   {item.email}</h6>
    <p className="card-text"><span style={{fontWeight:"900"}}>Body:-  </span>     {item.body.slice(0,70)}</p>
    <Link to="/">
    <button type="button" className="btn btn-outline-secondary m-2">Goto Post </button>
    </Link>
  </div>
</div>
            )})
        )}
    </div>
    </>
  )
}

export default PostComments