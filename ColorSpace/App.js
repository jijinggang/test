var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { linear, gamma } from './convert_color.js';

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.onChangeLinear = function (e) {
            var l = e.target.value;
            _this.setState({ linearColor: l, gammaColor: gamma(l) });
        };

        _this.onChangeGamma = function (e) {
            var g = e.target.value;
            _this.setState({ linearColor: linear(g), gammaColor: g });
        };

        _this.state = { linearColor: 0, gammaColor: 0 };
        return _this;
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "field" },
                    React.createElement(
                        "label",
                        { className: "label" },
                        "\u7EBF\u6027\u7A7A\u95F4(0~255):"
                    ),
                    React.createElement("input", { className: "input", value: this.state.linearColor, onChange: this.onChangeLinear }),
                    " ",
                    (this.state.linearColor / 256).toFixed(5)
                ),
                React.createElement(
                    "div",
                    { className: "field" },
                    React.createElement(
                        "label",
                        { className: "label" },
                        "\u4F3D\u99AC\u7A7A\u95F4(0~255):"
                    ),
                    React.createElement("input", { className: "input", value: this.state.gammaColor, onChange: this.onChangeGamma }),
                    " ",
                    (this.state.gammaColor / 256).toFixed(5)
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));