const React = require("react");

class Show extends React.Component {
  render() {
    const {name,img} = this.props
    return (
      <div>
        <h1>Pokemon Show Page</h1>

        <div>
          <p>The Pokemon is {name}</p>
          
        </div> 
      </div>
    )
  }
}

module.exports = Show;