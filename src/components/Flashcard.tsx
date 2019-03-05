import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

interface FlashCardProps {
  getNextCard: () => void;
  currentCard: any;
}

interface FlascardState {
  isFlipped: boolean;
}

export default class Flashcard extends Component<FlashCardProps, FlascardState> {
  myInput: any;
  constructor(props: FlashCardProps) {
    super(props);
    this.state = { isFlipped: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  showBack() {
    this.setState({ isFlipped: true });
  }

  showFront() {
    this.setState({ isFlipped: false });
  }

  addScore() {
    this.showFront();
    this.props.getNextCard();
  }

  render() {
    return (
      <div>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div key="front" onClick={this.handleClick}>
            <div className="card large">
              <div className="card-content">
                <div className="content">{this.props.currentCard['word']}</div>
              </div>
            </div>
          </div>

          <div key="back" onClick={this.handleClick}>
            <div className="card large">
              <div className="card-content">
                <div className="content">{this.props.currentCard['meaning']}</div>
              </div>
            </div>
          </div>
        </ReactCardFlip>
        {this.state.isFlipped ? (
          <div className="bottom-buttons">
            <button
              className="btn btn-default incorrect-button"
              onClick={() => {
                this.showFront();
                this.props.getNextCard();
              }}
            >
              I was wrong!
            </button>
            <button className="btn btn-default correct-button" onClick={() => this.addScore()}>
              I was right!
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
