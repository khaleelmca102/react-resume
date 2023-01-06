import React, {useContext, useState, useEffect} from 'react'
import { userData } from '../App';
import { useNavigate } from 'react-router-dom';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import PdfViewerComponent from './PdfViewerComponent';

import Api from '../Api';
const Resume = () => {
    const navigate = useNavigate();
    const user = useContext(userData);
    const {http} = Api();
    const [resumeurl, setResumeUrl] = useState('');
    const [resumestr, setResumeString] = useState('');
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
      console.log('fff');
      if(!resumeurl){
        console.log('eee');
        fetchResume();
      } 
    },[]);

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    const fetchResume = () => {
      http.get('/resume',{user_id:user.user_id}).then((res)=>{
        console.log(res.data.pdfurl);
        console.log(res.data.content);
        setResumeUrl(res.data.pdfurl);
        setResumeString(res.data.content.arrayBuffer());
      }).catch((error) => {
        console.log(error);
        if(error.response.status === 401){        
          navigate('/login');  
        }
      });
    }
    return (
    <div>
      Resume     
      <div>
       <PdfViewerComponent document={`data:application/pdf;base64,${resumestr}`} />
       <Document
          //file={{url:'document.pdf'}}
          file={`data:application/pdf;base64,${resumestr}`}
          //onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div> 
    </div>
  )
}

export default Resume