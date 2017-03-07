import React from 'react';
import List from './list';

const DATA = [
  {
    id: 1,
    title: 'LIST 1',
    cards: [
      {id: 3, title: "do this today", date: "3/5"},
      {id: 4, title: "do this tomorrow", date: "3/6"}
    ]
  },
  {
    id: 2,
    title: 'LIST 2',
    cards: [
      {id: 5, title: "do this next week", date: "3/15"},
      {id: 6, title: "do this next month", date: "4/6"},
      {id: 7, title: "do this never", date: "apocalypse"}
    ]
  },
]

export default function Board(props) {
  return (
    <div className="board">
    	<h1> THE BOARD</h1>
    	<List list={DATA[0]} />
    	<List list={DATA[1]} />
    </div>
  );
}
