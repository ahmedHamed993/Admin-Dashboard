import React from 'react';
import {Header, LineChart} from "../../components";
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries} from "@syncfusion/ej2-react-charts";
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 p-4 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Area" title="Inflation Rate in Percentage" />
        <div className="w-full">
          <ChartComponent 
          id="area-chart" 
          height="420px" 
          primaryXAxis={areaPrimaryXAxis} 
          primaryYAxis={areaPrimaryYAxis} 
          chartArea={{ border:{width:0} }}
          background={ currentMode === 'Dark'? '#33373e':'#fff'}
        >
          <Inject services={[SplineAreaSeries, Legend, DateTime]} />
          <SeriesCollectionDirective>
            {
              areaCustomSeries.map((item,index)=> <SeriesDirective key={index} {...item} />)
            }
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Area