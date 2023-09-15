import React from "react";

class SquareColor extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                squareColor1: "red",
                squareColor2: "blue",
            }
        }

        squareClick = () => {
            this.setState((prevState) => ({
                squareColor1: prevState.squareColor2,
                squareColor2: prevState.squareColor1,
            }))
        }

        render() {
            const {squareColor1, squareColor2} = this.state

            return (
                <div className="SquareColor">
                    <div className="square"
                        style={{backgroundColor: squareColor1}}
                        onClick={this.squareClick}>
                    </div>
                    <div className="square"
                        style={{backgroundColor: squareColor2}}
                        onClick={this.squareClick}>
                    </div>
                </div>
            )
        }
}

export default SquareColor;