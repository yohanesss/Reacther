var React = require('react');

var About = (render) => {
  return(
    <div className="text-center">
      <h1>About</h1>
      <p>Reacther is a weather application built on React.</p>
      <p>Using <a href="http://openweathermap.org">Open Weather Map</a> api.</p>
    </div>
  );
};

module.exports = About;