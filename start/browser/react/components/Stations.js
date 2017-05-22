import React from 'react';
import { Link } from 'react-router';

export default function Stations (props) {

    console.log(props.stations);

    const REAL_STATIONS_DATA = [];

    for (var genre in props.stations) {
        if (genre !== "null") {
            REAL_STATIONS_DATA.push({name : genre})
        }
    }
    //props.stations.map(station => station.name);


console.log(props.stations)

return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        REAL_STATIONS_DATA.map(station => {
          return (
            <div className="list-group-item" key={station.name}>
              <Link to={`/stations/${station.name}`}>{station.name}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
)


}