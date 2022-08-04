import React, { Component } from "react";
import "./burger.css";

export default class Burger extends Component {
  state = {
    lettuce: 0,
    tomato: 0,
    cheese: 0,
    meat: 0,
  };

  addRemoveIngridients = (action, ingridient) => {
    let { lettuce, tomato, cheese, meat } = this.state;

    let stateValue;

    switch (ingridient) {
      case "lettuce": {
        stateValue = lettuce;
        break;
      }
      case "tomato": {
        stateValue = tomato;
        break;
      }
      case "cheese": {
        stateValue = cheese;
        break;
      }
      case "meat": {
        stateValue = meat;
        break;
      }
      default:
        break;
    }
    if (action === "add") {
      stateValue = stateValue + 1;
    } else {
      stateValue = stateValue - 1;
    }
    this.setState({
      [ingridient]: stateValue >= 0 ? stateValue : 0,
    });
  };

  burgerContent = () => {
    let { lettuce, tomato, cheese, meat } = this.state;

    let burger = [];

    //display lettuce
    for (let i = 0; i < lettuce; i++) {
      burger.push(<div key={burger.length} className="lettuceSide"></div>);
    }

    //display tomato
    for (let i = 0; i < tomato; i++) {
      burger.push(<div key={burger.length} className="tomatoSide"></div>);
    }

    //display cheese
    for (let i = 0; i < cheese; i++) {
      burger.push(<div key={burger.length} className="cheeseSide"></div>);
    }

    //display meat
    for (let i = 0; i < meat; i++) {
      burger.push(<div key={burger.length} className="meatSide"></div>);
    }

    return burger;
  };

  render() {
    return (
      <>
        <div className="burgerIngridients">
          <div className="topside"></div>
          {this.burgerContent()}
          <div className="bottomSide"></div>
        </div>
        <div className="ingridientsBlock">
          <p>Lettuce</p>
          <div className="ingrBtns">
            <button
              onClick={() => this.addRemoveIngridients("add", "lettuce")}
              className="ingrBtn"
            >
              Add Lettuce
            </button>
            <button
              onClick={() => this.addRemoveIngridients("remove", "lettuce")}
              className="ingrBtn"
            >
              Remove
            </button>
          </div>
          <p>Tomato</p>
          <div className="ingrBtns">
            <button
              onClick={() => this.addRemoveIngridients("add", "tomato")}
              className="ingrBtn"
            >
              Add Tomato
            </button>
            <button
              onClick={() => this.addRemoveIngridients("remove", "tomato")}
              className="ingrBtn"
            >
              Remove
            </button>
          </div>
          <p>Cheese</p>
          <div className="ingrBtns">
            <button
              onClick={() => this.addRemoveIngridients("add", "cheese")}
              className="ingrBtn"
            >
              Add Cheese
            </button>
            <button
              onClick={() => this.addRemoveIngridients("remove", "cheese")}
              className="ingrBtn"
            >
              Remove
            </button>
          </div>
          <p>Meat</p>
          <div className="ingrBtns">
            <button
              onClick={() => this.addRemoveIngridients("add", "meat")}
              className="ingrBtn"
            >
              Add Meat
            </button>
            <button
              onClick={() => this.addRemoveIngridients("remove", "meat")}
              className="ingrBtn"
            >
              Remove
            </button>
          </div>
        </div>
      </>
    );
  }
}
