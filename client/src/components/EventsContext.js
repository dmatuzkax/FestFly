import React, { createContext, useState } from 'react';

const EventsContext = createContext();

const EventsProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [flights, setFlights] = useState([]);
    const [clickPerformed, setClickPerformed] = useState(false);
    const [concertDate, setConcertDate] = useState('');

    return (
        <EventsContext.Provider value={{ events, setEvents, searchPerformed, setSearchPerformed, flights, setFlights, clickPerformed, setClickPerformed, concertDate, setConcertDate }}>
            {children}
        </EventsContext.Provider>
    );
};

export { EventsContext, EventsProvider };