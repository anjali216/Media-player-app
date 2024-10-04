/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import  { useEffect, useState } from 'react'
import VideoCard from'./VideoCard'
import { Row,Col } from 'react-bootstrap'
import { getVideoAPI } from '../Services/AllAPIs'

function ViewVideo({addVideoResponse}) {

const[allVideos,setallVideos]=useState([])
const [deleteVideoStatus,setDeleteVideoStatus] = useState("")


const getVideos = async()=>{
 try{
  const response = await getVideoAPI()
 console.log(response.data);
 if(response.status>=200 && response.status<=300){
  setallVideos(response.data)
  }else{
    console.log((response.message));
    
  }
 }
 catch(err){
  console.log(err);
  
 }
} 

useEffect(()=>{
  getVideos()
},[addVideoResponse,deleteVideoStatus])


return (
  <div>
    <Row className='p-5 '>
     {
      allVideos.length > 0 ?
      allVideos.map(item=>(
      
      <Col  sm={4}  className='mt-5'>
      <VideoCard  displayVideo={item}    setDeleteVideoStatus={setDeleteVideoStatus}  />
      </Col>    
      ))
      
      :
      <p className="text-danger fw-bolder">No Videos found...</p>
     }
    
    </Row>
  </div>
)
}

export default ViewVideo