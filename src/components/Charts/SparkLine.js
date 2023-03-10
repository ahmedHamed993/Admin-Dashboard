import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = ({currentColor, id, height, width, color, type, data}) => {
  console.log(data);
  return (
    <SparklineComponent 
      id={id} 
      height={height} 
      width={width} 
      lineWidth={1} 
      valueType="Numeric"
      fill={color}
      border={{color:currentColor, width:2}}
      xName="x"
      yName="yval"
      tooltipSettings={{
        visible:true, 
        format:"${x} : data ${yval}", 
        trackLineSettings:{
          visible:true,
        }
      }}
      dataSource={data}
      type={type}
    >
      <Inject services={[SparklineTooltip]} />

    </SparklineComponent>
  )
}

export default SparkLine