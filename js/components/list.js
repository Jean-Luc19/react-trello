import React from 'react';
import Card from './card';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    //-------------------------Bind!!-------------------------//

    this.onAddInputChanged = this.onAddInputChanged.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
  }

  //-------------------------Function To Handle Input-------------------------//

  onAddInputChanged(event) {
    this.setState({value: event.target.value});
  }

  //-------------------------Function to Handle Submit-------------------------//

  onAddSubmit(event) {
    event.preventDefault();
    console.log(`This button was submitted and the input was ${this.state.value}`);
  }

  //-----------Render Function Required For Stateful Components-----//
  render() {
    const { list } = this.props;
    // { id, title, cards }
    return (
      <div className="card-list">
        <h2 className="list-title">{list.title}</h2>
        {list.cards.map(card => <Card key={card.id} card={card} />)}
        <form className="list-form" action="#" onSubmit={this.onAddSubmit}>
          <label>
            Card:
            <input type="text" value={this.state.value} onChange={this.onAddInputChanged} placeholder="New Card" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
