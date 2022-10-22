import React from 'react'
import './color-and-bg-color.css'
import {randomArrayOfStrings, shuffleArray, colors} from "../../utils/utils";

const ColorAndBgColor = () => {
    const strings = randomArrayOfStrings(3);
    const rew = strings[0];
    const ewq = strings[1];
    const shuffledColors = shuffleArray(colors);
    const yellow = shuffledColors[0];
    const red = shuffledColors[1];
    const green = shuffledColors[2];
    const orange = shuffledColors[3];
    const white = shuffledColors[4];
    const black = shuffledColors[5];
    return(
        <div>
            <h3>
                Color And Bg Color
            </h3>
            <div>
            Consider the following code snippet:
            
<pre>{`
<h4 class="${rew}">Welcome to WebDev</h4>
<p id="${ewq}" class="${rew}">
    React.JS
    <span id="${rew}">rocks!</span>
</p>`}</pre>
            
            Using the colors
                <br/>
                <br/>
            white,
                blue,
            red,
            yellow,
            green,
            orange,
            and black, 
            <br/>
                <br/>
            fill in the blanks below so that the code above
            renders as follows:
            
            <h4 class="rew" style={{fontSize: "3em", backgroundColor: yellow, color: red}}>
                Welcome to WebDev
            </h4>
            <p id="ewq" class="rew" style={{fontSize: "3em", backgroundColor: green, color: white}}>
                React.JS
                <span id="rew" style={{backgroundColor: orange, color: black}}>rocks!</span>
            </p>
            <pre>{`
.${rew} {
    background-color: [${yellow}];
    color: [${red}];
}
#${ewq} {
    background-color: [${green}];
    color: [${white}];
}
#${rew} {
    background-color: [${orange}];
    color: [${black}];
}`}</pre>
            </div>
            <hr/>
        </div>
    )
}

export default ColorAndBgColor