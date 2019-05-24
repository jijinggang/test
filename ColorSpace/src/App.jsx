import { linear, gamma } from './convert_color.js'

class App extends React.Component {
    constructor() {
        super();
        this.state = { linearColor: 0, gammaColor: 0 };
    }
    render() {
        return (
            <div className="App">
                <p>线性空间(0~255):<input value={this.state.linearColor} onChange={this.onChangeLinear} ></input> {(this.state.linearColor / 256).toFixed(5)}</p>
                <p>伽馬空间(0~255):<input value={this.state.gammaColor} onChange={this.onChangeGamma} ></input> {(this.state.gammaColor / 256).toFixed(5)}</p>
            </div>

        );
    }
    
    onChangeLinear = (e) => {
        let l = e.target.value;
        this.setState({ linearColor: l, gammaColor: gamma(l) });
    }
    onChangeGamma = (e) => {
        let g = e.target.value;
        this.setState({ linearColor: linear(g), gammaColor: g });
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
