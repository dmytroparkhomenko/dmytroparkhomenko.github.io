import { Component } from 'react'
import './search.scss'
 
class Search extends Component {

    constructor (props) {
        super(props)
        this.state = {
            field: ''
        }
    }

    render () {
        const onSearch = (e) => {
            const field = e.target.value
            this.setState({field})
    
            this.props.onSearch(field)
        }
        
        return (
            <>
                <input 
                    type="text" 
                    placeholder="start typing here..."
                    onChange={onSearch}  
                    value={this.state.field}
                />
            </>
        )
    }
}

export default Search