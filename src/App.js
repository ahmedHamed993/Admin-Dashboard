import {useState} from "react";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {FiSettings} from "react-icons/fi";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Line, Financial, ColorPicker, ColorMapping, Editor } 
from "./pages";

import {useStateContext} from "./contexts/ContextProvider";

import './App.css';

function App() {
  const {activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext();
  return (
    <div className={ currentMode === "Dark"? "dark":""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          
            {/* settings btn  */}
            <div className="fixed  right-4 bottom-4" style={{ zIndex: '1000' }}>
              <TooltipComponent
                content="Settings"
                position="TopCenter"
              >
                <button
                  type="button"
                  style={{ background:currentColor,  borderRadius: '50%' }}
                  className="sm:text-lg lg:text-2xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                  onClick={()=>{setThemeSettings(true)}}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>

            {/* sidebar menu visible or not   */}
            {
              activeMenu ? 
              (
                <div className="w-72  fixed sidebar dark:bg-secondary-dark-bg bg-white md:top-0 z-100000">
                  <Sidebar />
                </div>
              ):
              (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar />
                </div>
              )
            }
            {/* navbar and page content  */}
            <div className={`dark:bg-main-dark-bg bg-main-bg w-full min-h-screen ${activeMenu?'md:ml-72':'flex-2'}`}>
              {/* navbar section  */}
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>
            
              {/* routes  */}
              <div>
                { themeSettings && <ThemeSettings /> }
                <Routes>
                  {/* dashboard */}
                  <Route path='/' element= { <Ecommerce /> } />
                  <Route path='/ecommerce' element= { <Ecommerce /> } />

                  {/* pages */}
                  <Route path='/orders' element= { <Orders /> } />
                  <Route path='/employees' element= { <Employees /> } />
                  <Route path='/customers' element= { <Customers /> } />

                  {/* apps */}
                  <Route path='/kanban' element= { <Kanban /> } />
                  <Route path='/editor' element= { <Editor /> } />
                  <Route path='/calendar' element= { <Calendar /> } />
                  <Route path='/color-picker' element= { <ColorPicker /> } />

                  {/* Charts */}
                  <Route path='/line' element= { <Line /> } />
                  <Route path='/area' element= { <Area /> } />
                  <Route path='/bar' element= { <Bar /> } />
                  <Route path='/pie' element= {<Pie /> } />
                  <Route path='/financial' element= { <Financial /> } />
                  <Route path='/color-mapping' element= { <ColorMapping /> } />
                  <Route path='/pyramid' element= { <Pyramid /> } />
                  <Route path='/stacked' element= { <Stacked /> } />

                </Routes>
              </div>

            </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
