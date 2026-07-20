import 'react';
import "../App.css"


// props = {"message" : "whatever i put here"}
function Greetings({message}) {
    return (
        <div>
            <h1>Hello, React!</h1>
            <p>This content is render on the browser.</p>
            <p>{message}</p>
        </div>
    );
    // everytime I want to use an argument, I have to wrap it in {}
}

export default Greetings;