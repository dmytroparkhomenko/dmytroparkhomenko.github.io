import { Component } from "react"
import "./products.scss"

import Card from "../../components/card/card"

class Products extends Component {

    render() {

        const elements = this.props.data.map(item => {
            return (
                <Card 
                    title={item.title}
                    country={item.country}
                    price={item.price}
                    id={item.id}
                    key={item.id} 
                />
            )
        })

        return (
            <>
                <div className="products-wrapper">
                    <div className="cards">
                        {elements}
                    </div>
                    <p>Showed: {elements.length} from {this.props.dataCount}</p>
                </div>
            </>
        )
    }
}

export default Products