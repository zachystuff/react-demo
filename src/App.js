import { Component } from "react";
import Card from "./components/card";
import ClickCount from "./components/clickCount";
import "./App.css";

const cards = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "Not so Image from Unsplash",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnText: "Learn more",
    imgAltText: "Some random from unsplash ",
    creator: "zachyzon",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "Very barely from Unsplash",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnText: "Learn more",
    imgAltText: "Some random from unsplash ",
    creator: "zachyzon",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "Random Image from Unsplash",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnText: "Learn more",
    imgAltText: "Some random from unsplash ",
    creator: "anvy",
  }
];

class App extends Component {
  
  state = {
    clickCount: 0,
    clickCountEdit: 0,
    clickCountDelete: 0,
    cards,
    value: ''
  };

  handleDefaultBtnClick = () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
    });
  };

  handleEditBtnClick = () => {
    this.setState({
      clickCountEdit: this.state.clickCountEdit + 1,
    });
  };

  handleDeleteBtnClick = (e) => {
    const deleteCard = e.target.id;
    this.setState({
      clickCountDelete: this.state.clickCountDelete + 1,
      cards: this.state.cards.filter((card, idx) => idx != deleteCard)
    })
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    return (
      <>
      <div className="form-outline">
            <input 
            type="text" 
            id="form1" 
            className="form-control" 
            placeholder="Type query"
            aria-label="Search" 
            value={this.state.value} 
            onChange={this.handleChange} />
        </div>
        <div className="container">
          <div className="row">
            <ClickCount count={this.state.clickCount} name={"Counter"}/>
            <ClickCount count={this.state.clickCountEdit} name={"Edit"}/>
            <ClickCount count={this.state.clickCountDelete} name={"Delete"}/>
          </div>
        </div>

        <div className="App container d-flex flex-wrap">
          {this.state.cards
            .filter( card => {
              return card.title.toLowerCase().includes(this.state.value.toLowerCase())
            })
            .map((card, idx) => (
            <Card
              {...card}
              key={idx}
              id={idx}
              handleDefaultBtnClick={this.handleDefaultBtnClick}
              handleEditBtnClick={this.handleEditBtnClick}
              handleDeleteBtnClick={this.handleDeleteBtnClick}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
