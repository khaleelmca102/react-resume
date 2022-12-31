import React, { useState } from 'react'

function Template({templateToHome}) {

  //const [templateSuccess, setTemplateSuccess] = useState('');

  const saveTemplate = () => {
    templateToHome(true);
  }

  return (
    <div>
      Template
      <div className='row'>
          <div className='col'></div>
          <div className='col'>
            <button type="button" className="btn btn-success" onClick={saveTemplate}>Save</button>
          </div>
        </div>
    </div>
  )
}

export default Template