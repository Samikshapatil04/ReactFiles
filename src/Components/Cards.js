import React from "react";
import "./Cards.css";

export default class MyComponent extends React.Component {
  render() {
    const components = ["Motherboard", "Driver", "USB Ports"];

    this.state = {
      productArray: [
        {
          name: "Motherboard",
          image:
            "https://gr.mouser.com/images/marketingid/2020/img/110657914.png?v=032024.0746",
          description: "gghg",
          price: 3.4,
        },
        {
          name: "Driver",
          image:
            "https://gr.mouser.com/images/marketingid/2020/img/110657914.png?v=032024.0746",
          description: "fgfgfgh",
          price: 2,
        },
        {
          name: "USB Ports",
          image:
            "https://gr.mouser.com/images/marketingid/2020/img/110657914.png?v=032024.0746",
          description: "fdgg",
          price: 4,
        },
        {
          name: "USB Ports",
          image:
            "https://gr.mouser.com/images/marketingid/2020/img/110657914.png?v=032024.0746",
          description: "fdgg",
          price: 4,
        },
        {
          name: "USB Ports",
          image:
            "https://gr.mouser.com/images/marketingid/2020/img/110657914.png?v=032024.0746",
          description: "fdgg",
          price: 4,
        },
      ],
    };
    return (
      <div className="card">
        {this.state.productArray.map((productArray, index) => (
          <div key={index}>
            <div className="card-container">
              <img
                src={productArray.image}
                alt={productArray.name}
                className="image"
              />
              <h2>{productArray.name}</h2>
              <p>{productArray.description}</p>
              <h3>{productArray.price}</h3>
              <button className="button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
