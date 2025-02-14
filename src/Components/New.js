import React from "react";
import "./New.css";
import React from "react";


class MyComponent extends React.Component {
    render(){
        return(
            // main division
            <div className="main-division">
                <div className="top-box">
                    <h2>Amazon</h2>
                    <input placeholder="Search..." className="input"></input>
                    <img src="../public/cartt.png" className="cart-container"/>
                </div>
                <div className="bottom-box">
                    {/* {parts.map((part) => (
                         
                    ))} */}
                <div className="card-container">
                </div>
                </div>
            </div>
        )

    }
}

export default MyComponent;