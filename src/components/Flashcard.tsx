import React, { Component } from 'react';

interface FlashCardProps {
  isFlipped: boolean;
}

interface FlascardState {}

export default class Flashcard extends Component<FlashCardProps, FlascardState> {
  constructor(props) {
    super(props);
  }
  render() {
    return <div />;
  }
}
