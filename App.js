

// React.createElement() is used to create the react element which is an object
// render() method which converts the react element or object into the html element and render it in browser


// using javascript

/* const heading = document.createElement("h1");
heading.textContent = "Hello World...";
const root = document.getElementById("root");
root.appendChild(heading);  */

// using react

const root = ReactDOM.createRoot(document.getElementById("root"));
// normal single element
const heading = React.createElement("h1",
                                    {id:"heading",style:{color:'red'}},
                                    "Hello World...");
// child inside the another element
/*
<div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>
*/

/* const heading = React.createElement("div",
                                    {id:'parent'},
                                    React.createElement("div",
                                                        {id:'child'},
                                                        React.createElement("h1",
                                                                            {id:"heading"},
                                                                            "Hello World"
                                                        ))) */
// creating the siblings
/*
<div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>
*/

/* const heading = React.createElement("div",
                                    {id:'parent'},
                                    [React.createElement("div",
                                                        {id:'sibling1'},
                                                        ""),
                                    React.createElement("h1",
                                                        {id:"sibling2"},
                                                        "Hello World"
                                                        )
                                    ]) */
root.render(heading)