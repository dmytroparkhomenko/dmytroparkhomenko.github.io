import { Component } from 'react'
import './filter.scss'

class Filter extends Component {

    onActive = (e) => {
        for (let item of e.target.parentNode.children) {
            item.classList.remove('active')
        }
        e.target.classList.add('active')
    }

    onFilter = (e) => {
        this.props.onFilterSelect(e.target.textContent)
        this.onActive(e)
    }

    render () {

        const elements = this.props.filters.map((item, index) => {
            return (<div key={index} onClick={this.onFilter}>{item}</div>)
        })

        return (
            <>
                <div className="filter_choose">
                    {elements}
                </div>
            </>
        )
    }
}

export default Filter