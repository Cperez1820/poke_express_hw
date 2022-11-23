const React = require("react");

class Show extends React.Component {
  render() {
    const {name,img} = this.props.pokemon
    return (
      <div>
        <h1>Gotta catch 'Em All</h1>
        <h2>The Pokemon is {name}</h2>
        <img src={img + ".jpg"}></img>
        <a href={`/pokemon/`}>BACK</a>
        <div>
          
          
        </div> 
      </div>
    )
  }
}

module.exports = Show;