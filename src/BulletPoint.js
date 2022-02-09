import React from 'react';

const BulletPoint = (properties) => {
    return(
        <div className="lenovoBlack">
            <h3>{properties.header}</h3>
            <p>{preparePoints(properties.text)}</p>
        </div>
    )
}

const preparePoints = (properties) =>{
    const points = properties.map((item, pos) => {
      if(properties[pos].type == undefined){
        return(properties[pos]);
      }
      else{
          return(
              <a key={pos} href={properties[1].props.href}>{properties[pos].props.children}</a>
          )
      }
    })
    return points;
    }

export default BulletPoint;