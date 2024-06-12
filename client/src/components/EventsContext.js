import React, { createContext, useState } from 'react';

const EventsContext = createContext();

const EventsProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);

    return (
        <EventsContext.Provider value={{ events, setEvents, searchPerformed, setSearchPerformed }}>
            {children}
        </EventsContext.Provider>
    );
};

export { EventsContext, EventsProvider };