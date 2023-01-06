// import React from 'react'

// const Pdftest = () => {
//   // const headers = new Headers();
//   // headers.set("Access-Control-Allow-Origin",'*');
//   // headers.set("Access-Control-Allow-Methods",'GET, POST, PATCH, PUT, DELETE, OPTIONS');
//   // headers.set("Access-Control-Allow-Headers",'Origin, Content-Type, X-Auth-Token');
//   // headers.set("Access-Control-Allow-Credentials", 'true');

//   // const pdfResponse = fetch('https://www.africau.edu/images/default/sample.pdf', { 
//   //   //method: 'get', 
//   //   //headers:{headers}
//   //   headers
//   //   }).then(async response => {
//   //   const data = await response;	
//   //   console.log("khaleel  "+data);
//   //  }).catch(error => {
//   //   console.error('There was an error!', error);
//   // });
  

//   // fetch('http://localhost:8000/api/testing')
//   // .then((response) => response)
//   // .then((data) => console.log(data));

//   return (
//     <div id="pspdfkit">Pdftest</div>
//   )
// }

// export default Pdftest

import React, { useEffect } from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Pdftest = () => {
  // const  componentDidMount = () => {
  //   // GET request using fetch with error handling
  //   const headers = { "Access-Control-Allow-Origin":'*' }
  //   fetch('http://localhost:8000/api/test', { headers })
  //       .then(async response => {
  //           const data = await response;

  //           // check for error response
  //           if (!response.ok) {
  //               // get error message from body or default to response statusText
  //               const error = (data && data.message) || response.statusText;
  //               return Promise.reject(error);
  //           }
  //       })
  //       .catch(error => {
  //           console.error('There was an error!', error);
  //       });
  // }
  // useEffect(() => {    
  //   componentDidMount();
  // },[]);

  

  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
        <Viewer fileUrl="https://www.africau.edu/images/default/sample.pdf" />;
      </Worker>
    </div>
  )
}

export default Pdftest