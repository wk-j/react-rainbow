import React from "react"
import { render } from "react-dom";
import "./css/Style.css"

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1 className="rainbow">Keyboard shortcut to navigate Working files #1363</h1>
            </div>
        );
    }
}

var el = document.getElementById("root")
render(<App />, el)