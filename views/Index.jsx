const React = require('react')

class Index extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div>
                <h1>See All The Pokemon!</h1>
                <nav>
                    <a href="/pokemon/new">Create new fruit</a>
                </nav>
                <ul>
                    {pokemon.map((poke, i )=> {
                        return (
                            // <li key =  {i}> is making "Warning: Each child in a list should have a unique "key" prop." go away 
                            <li key = {i}>
                                <a href='/pokemon'>{poke.name}</a>
                                {/* <a style={{color: "red"}} href={`/fruits/${fruit._id}`}>{fruit.name} */}
                                {/* </a> */}
                                
                                <br />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
module.exports = Index;