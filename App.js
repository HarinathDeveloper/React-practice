import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
/* const heading = (<div className="parent">
                    <div className="child">
                        <h1 id="heading">Hello World...</h1>
                    </div>
                </div>) */
let Headings = () => {
    return (<h1 id="headings">Hello World.....</h1>)
}
let Heading = () => {
    return (<div>
                {<Headings></Headings>}{Headings()}{<Headings/>}
                <h1 id="heading">Hello World...</h1>
            </div>)
}

root.render(<Heading/>)