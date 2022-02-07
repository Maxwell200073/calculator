import "./App.css";
import { data } from "./data";
import Button from "./Button";
function App() {
    return (
        <div className="App">
            <div className="display">
                <p id="calc">0</p>
                <p id="display">0</p>
            </div>
            <div className="btnContainer">
                {data.map((button) => (
                    <Button key={button.key} {...button} />
                ))}
            </div>
        </div>
    );
}

export default App;
