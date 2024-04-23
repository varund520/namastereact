const heading = React.createElement("h1",{id:"heading",data_content:"this is the content"},"this is heading form react")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);


// for creating child 

// const heading = React.createElement("div",{id:"heading",data_content:"this is the content"},React.createElement("h1",{id:"heading",data_content:"this is the content"},"this is child"))
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);