import React, { useState } from 'react';
import './App.css'; // already included for styling

function Events() {
  const [events, setEvents] = useState([
    { id: 1, text: 'Meeting with team', done: false },
    { id: 2, text: 'Doctor Appointment', done: false },
    { id: 3, text: 'Buy groceries', done: false },
  ]);
  const [newEvent, setNewEvent] = useState('');

  const toggleDone = (id) =>
    setEvents(events.map(e => e.id === id ? { ...e, done: !e.done } : e));

  const addEvent = () => {
    if (newEvent.trim() === '') return;
    setEvents([{ id: Date.now(), text: newEvent, done: false }, ...events]);
    setNewEvent('');
  };

  const removeEvent = (id) =>
    setEvents(events.filter(event => event.id !== id));

  return (
    <div>
      <div className="event-input">
        <input
          type="text"
          placeholder="Add new event"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addEvent()}
        />
        <button onClick={addEvent}>Add</button>
      </div>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id} className={`event-item ${event.done ? 'done' : ''}`}>
            <span onClick={() => toggleDone(event.id)}>{event.text}</span>
            <button onClick={() => removeEvent(event.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
