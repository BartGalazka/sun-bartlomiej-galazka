import React from 'react';

const Spec = (properties) => {
    return(
        <tr>
          <td>{properties.header}</td>
          <td>{preparePoints(properties.text)}</td>
        </tr>
    )
}
const preparePoints = (properties) =>{
const points = properties.map((item, pos) => {
  if( properties[pos][0] == '*' || properties[pos][0] == '†'){
    return(
      <p style={{fontSize: '14px'}} key={pos}>{properties[pos]}</p>
    )
  }
  else{
  return(
    <p key={pos}>{properties[pos]}</p>
  )
  }
})
return points;
}

export default Spec;