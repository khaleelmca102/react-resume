import React, {useContext, useState, useEffect} from 'react'
import { userData } from '../App';
import { useNavigate } from 'react-router-dom';
import PdfViewerComponent from './PdfViewerComponent';

import Api from '../Api';
const Resume = () => {
    const navigate = useNavigate();
    const user = useContext(userData);
    const {http} = Api();
    const [resumeurl, setResumeurl] = useState('');

    useEffect(() => {
      console.log('fff');
      if(!resumeurl){
        fetchResume();
      } 
    },[]);

    const fetchResume = () => {
      http.get('/resume',{user_id:user.user_id}).then((res)=>{
        console.log(res.data.pdfurl);
        setResumeurl(res.data.pdfurl);
        console.log('dd'+resumeurl);
      }).catch((error) => {
        if(error.response.status === 401){        
          navigate('/login');  
        }
      });
    }
    return (
    <div>
      Resume     
      <div>
       <PdfViewerComponent document={'sample3.pdf'} />
      </div> 
    </div>
  )
}

export default Resume