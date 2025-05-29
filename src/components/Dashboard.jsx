import React, { useState } from 'react';

function Dashboard() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Meeting with team', done: false },
    { id: 2, title: 'Doctor Appointment', done: false },
    { id: 3, title: 'Buy groceries', done: true },
  ]);

  const toggleDone = (id) => {
    setEvents(prevEvents =>
      prevEvents.map(event =>
        event.id === id ? { ...event, done: !event.done } : event
      )
    );
  };

  return (
    <div>
      <h2>My Events</h2>
      <ul>
        {events.map(event => (
          <li
            key={event.id}
            style={{
              textDecoration: event.done ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => toggleDone(event.id)}
          >
            {event.title}
          </li>
        ))}
      </ul>
      <p>Click on an event to mark it done/undone.</p>
    </div>
  );
}

export default Dashboard;
