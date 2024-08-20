# FestFly - Node.js/React Application

FestFly is a full-stack web application that utilizes React on the frontend and Node/Express on the backend. The connection between the client and the server is established via REST API architecture. App allows its users to search for their favorite artists' planned events and then find best flights to reach those concert destinations in a convenient time and for a cheap price. Functionality of the website relies on using Ticketmaster and Skyscanner API.

## Features

- **Authentication:** Users are able to sign in using their existing Google accounts. OAuth 2.0 is used to connect to Google API.
- **Event Search by Artist:** Users can find planned events for any artist of their choice by simply typing their name in a searchbar. The results will show such information as event name, location, time and date.
- **Flight Search for an Event:** After picking an event they would like to attend, users can search for flight info to get to the event location. The search will produce all flights from their location to the desired destination that happen within the 24 hours before the start time of the event. Users will be able to see departure/arrival time of all available flights together with their prices.
