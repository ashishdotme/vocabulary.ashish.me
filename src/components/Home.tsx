import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDeck } from '../actions/cardActions';
import Flashcard from './Flashcard';

interface HomeProps {
  deck: any;
  getDeck(): void;
}

interface HomeState {
  currentCardIndex: number;
}

class Home extends Component<HomeProps, HomeState> {
  constructor(props: any) {
    super(props);
    this.state = { currentCardIndex: 0 };
    this.getNextCard = this.getNextCard.bind(this);
  }
  componentDidMount() {
    this.props.getDeck();
  }
  getNextCard() {
    if (this.props.deck) {
      if (this.state.currentCardIndex === this.props.deck.cards.length - 1) {
        this.setState({ currentCardIndex: 0 });
      } else {
        let nextCard = this.state.currentCardIndex + 1;
        this.setState({ currentCardIndex: nextCard });
      }
    }
  }

  render() {
    return (
      <div>
        <Flashcard />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  deck: state.deck
});

export default connect(
  mapStateToProps,
  { getDeck }
)(Home);