import React, { useState } from 'react';

function TrafficLight() {
	const [color, setColor] = useState(null);
  
	return (
	  <div className="traffic-light-container">
		<div className="poste"></div> 
		<div className="traffic-light">
		  <div
			onClick={() => setColor('red')}
			className={`light red ${color === 'red' ? 'on-light-red' : ''}`}
		  ></div>
		  <div
			onClick={() => setColor('yellow')}
			className={`light yellow ${color === 'yellow' ? 'on-light-yellow' : ''}`}
		  ></div>
		  <div
			onClick={() => setColor('green')}
			className={`light green ${color === 'green' ? 'on-light-green' : ''}`}
		  ></div>
		</div>
	  </div>
	);
  }
  
  export default TrafficLight;
  