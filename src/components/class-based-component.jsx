import { Component } from "react";


class ClassBasedComponent extends Component{
    //state

    state={
        showText:false,
        changeColor:false,
        count:0,
        changeCountStyle:false
    };

    handelClick=()=>{
        console.log("button Clicked");

        this.setState({
            showText:!this.state.showText,
            changeColor:!this.state.changeColor,
            
        })
    }
    handleCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    //componenent did mount, called for initial render
    componentDidMount(){
        console.log("this is called for the first time when the page load")
        this.setState({
            showText:!this.state.showText,
            changeColor:!this.state.changeColor,
            
        })
    }


    // componnent did update, called after any upadte, not for intial state
    componentDidUpdate(prevProps,prevState){
            console.log("hello"+ prevState,this.state)

            if(prevState&& prevState.count !== this.state.count && this.state.count===10){
                this.setState({
                    ...this.state,
                    changeCountStyle:!this.state.changeCountStyle,
                })
            }

    }

    // component will unmount


    render()
    {
        return(
            <div>
                {
                    this.state.showText ? <h3 style={{color: this.state.changeColor? 'red':'blue'}}>Class Based Components</h3>
                    : null
                }
                
                <button onClick={this.handelClick}>Toggle text</button>
                <button onClick={this.handleCount}>Increase Count</button>
                <h3 style={{color: this.state.changeCountStyle? 'blue' : 'black', fontSize:this.state.changeCountStyle? '20px': '10px'}}>Count is {this.state.count}</h3>
            </div>
        )
    }
}

export default ClassBasedComponent;