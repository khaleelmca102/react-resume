import React, { useState } from 'react'

const Template = (props) => {
  //const [templateSuccess, setTemplateSuccess] = useState('');

  const saveTemplate = () => {
    props.setCurrentNav('basicinfo');
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