import React from 'react'
import './color-and-bg-color.css'

const ColorAndBgColor = () => {
    return(
        <div>
            <h3>
                Color And Bg Color
            </h3>
            Consider the following code snippet:
            
<pre>{`
<h4 class="rew">Welcome to WebDev</h4>
<p id="ewq" class="rew">
    React.JS
    <span id="rew">rocks!</span>
</p>`}</pre>
            
            Using the colors
            <br/>
            white,
            red,
            yellow,
            green,
            orange,
            and black, 
            <br/>
            fill in the blanks below so that the code above
            renders as follows:
            
            <h4 class="rew">Welcome to WebDev</h4>
            <p id="ewq" class="rew">
                React.JS
                <span id="rew">rocks!</span>
            </p>
            <pre>{`
.rew {
    background-color: [yellow];
    color: [red];
}
#ewq {
    background-color: [green];
    color: [white];
}
#rew {
    background-color: [orange];
    color: [black];
}`}</pre>   

            <hr/>
            
        </div>
    )
}

export default ColorAndBgColor