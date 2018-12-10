import React, {Component} from 'react';
import '../scss/Tooltip.css';
import '../scss/Comman.css';

class Tooltip extends Component {

    constructor (props) {
        super(props);
        this.state = {isToggle : false};
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick () {
        console.log("test");
        this.setState(state=>({
            isToggle :!state.isToggle
        }))
    }
    render(){
        return(
        <div>
            <div className = "tooltip display-inline" onClick={this.handleOnClick}> Bottom Tooltip
                <span className = {this.state.isToggle ? 'tooltipText tooltipPosition ' : 'toolTip-hide'}> {this.props.toolTipText}</span>
            </div>
            <div className = "tooltip display-inline" onClick={this.handleOnClick}> Top Tooltip
                <span className = {this.state.isToggle ? 'tooltipText tooltipPosition' : 'toolTip-hide'}> {this.props.toolTipText}</span>
            </div>
        </div>);
    }
}
export default Tooltip;