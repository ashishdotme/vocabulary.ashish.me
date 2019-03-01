import React, { Component } from 'react';

interface FlashCardProps {
  isFlipped: boolean;
}

interface FlascardState {}

export default class Flashcard extends Component<FlashCardProps, FlascardState> {
  constructor(props: FlashCardProps) {
    super(props);
  }
  render() {
    return <div />;
  }
}
