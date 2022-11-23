const React = require('react')

class Index extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div>
                <head>
                    <title>Pokemon App</title>
                </head>
                <h1>See All The Pokemon!</h1>
                <nav>
                    <a href="/pokemon/new">Create new pokemon</a>
                </nav>
                <ul>
                    {pokemon.map((eachMon, i )=> {
                        return (
                            // <li key =  {i}> is making "Warning: Each child in a list should have a unique "key" prop." go away 
                            <ul key = {i}>
                                <a href={`/pokemon/${eachMon._id}`}>{eachMon.name[0].toUpperCase() + eachMon.name.slice(1)}</a>
                                {/* <a style={{color: "red"}} href={`/fruits/${fruit._id}`}>{fruit.name} */}
                                {/* </a> */}
                                
                                <br />
                            </ul>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
module.exports = Index;