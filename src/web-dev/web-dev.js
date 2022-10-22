import React from 'react'
import {Link, Route} from "react-router-dom";
import Map1 from "./es6/map/map1";
import Filter from "./es6/filter/filter";
import LabelsForInput from "./html/labels-for-input";
import LabelsAndRadios from "./html/labels-and-radios";
import Placeholder from "./html/placeholder";
import Title from "./html/title";
import Value from "./html/value";
import Textarea from "./html/textarea";
import ColorAndBgColor from "./css/color-and-bg-color";
import RoutingNavigation from "./routing/routing-navigation";
import Nav1 from "./routing/nav1";

const WebDevelopment = () => {
  return (
    <>
      <h2>Web Development</h2>
        <h3>React</h3>
        <div>
            <Nav1/>

            <LabelsForInput/>

            <Link to="/web-dev/react/context/example1/redux"
                  className="list-group-item">
                Redux
            </Link>
            <Link to="/web-dev/react/context/example1/prop-drill/classes"
                  className="list-group-item">
                Property Drilling Class Components
            </Link>
            <Link to="/web-dev/react/context/example1/prop-drill"
                  className="list-group-item">
                Property Drilling Functional Components
            </Link>
            <Link to="/web-dev/react/context" className="list-group-item">
                React Context
            </Link>
            <Link to="/web-dev/react/function/return" className="list-group-item">
                React Function Return
            </Link>
            <Link to="/web-dev/react/class/props" className="list-group-item">
                React Class Props Syntax
            </Link>
        </div>
        <h3>Spreader</h3>
        <div>
            <Link to="/web-dev/es6/spreader/array" className="list-group-item">
                Spreader Array
            </Link>
            <Link to="/web-dev/es6/spreader/object" className="list-group-item">
                Spreader Object
            </Link>
        </div>
        <h3>State</h3>
        <div>
            <Link to="/web-dev/react/state/class/prev-state" className="list-group-item">
                State Class Prev State
            </Link>
            <Link to="/web-dev/react/state/redux" className="list-group-item">
                State Redux Counter
            </Link>
            <Link to="/web-dev/react/state/class" className="list-group-item">
                Class Set State
            </Link>
            <Link to="/web-dev/react/function/use-state" className="list-group-item">
                React Functional Component useState
            </Link>
        </div>
        <h3>HTML</h3>
        <div>
            <Link to="/web-dev/html/radio" className="list-group-item">
                Radio buttons
            </Link>
        </div>

        <h3>WhiteBoard</h3>
        <div>
            <Link to="/web-dev/widget-list" className="list-group-item">
                Widget List
            </Link>
        </div>

        <RoutingNavigation/>

        <ColorAndBgColor/>

        <Textarea/>

        <Value/>

        <Title/>

        <Placeholder/>

        <LabelsAndRadios/>
        
        <Filter/>
        <h3>Map</h3>
        <Map1/>
    </>
  )
}

export default WebDevelopment
