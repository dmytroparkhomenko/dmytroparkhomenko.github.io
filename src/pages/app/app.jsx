import './app.scss'
import { Component } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/home";
import OurCoffee from "../our-coffee/our-coffee";
import Nav from "../../components/nav/nav";
import NoPage from "../nopage/no-page";
import ForYou from "../for-you/for-you";
import CardPage from '../cardPage/cardPage';
import Admin from '../admin/admin';


class App extends Component {

    state = {
        cards: [
            {
                "id": 1, 
                "img": "./pic/card-beans.png", 
                "alt": "Beans Card Image", 
                "title": "AROMISTICO Coffee 1 kg", 
                "country": "Brazil", 
                "price": 6.99
            },
            {
                "id": 2, 
                "img": "./pic/card-beans.png", 
                "alt": "Beans Card Image", 
                "title": "AROMISTICO Coffee 2 kg", 
                "country": "Kenya", 
                "price": 6.99
            },
            {
                "id": 3, 
                "img": "./pic/card-beans.png", 
                "alt": "Beans Card Image", 
                "title": "Latte Macchiato 3 kg", 
                "country": "Kenya", 
                "price": 6.99
            },
            {
                "id": 4, 
                "img": "./pic/card-beans.png", 
                "alt": "Beans Card Image", 
                "title": "Cappucino Coffee 1 kg", 
                "country": "Brazil", 
                "price": 6.99
            },
            {
                "id": 5, 
                "img": "./pic/card-beans.png", 
                "alt": "Beans Card Image", 
                "title": "Presto coffee Beans 1 kg", 
                "country": "Brazil", 
                "price": 6.99
            },
            {
                "id": 6, 
                "img": "./pic/card-beans.png", 
                "alt": "Beans Card Image", 
                "title": "AROMISTICO Coffee 5 kg", 
                "country": "Columbia", 
                "price": 6.99
            }
        ],  
        filtersButtons: ["All", "Brazil", "Kenya", "Columbia"],
        filter: 'All',
        field: ''
    }

    changeFieldState = (field) => this.setState({field})

    onSearch = (cards, field) => {
        if (field.length < 1) return cards
        
        return cards.filter(item => item.title.indexOf(field) > -1 || item.country.indexOf(field) > -1) 
    }

    onFilterSelect = (filter) => this.setState({filter})

    onFilter = (cards, filter) => {
        if (filter === 'All') return cards

        return cards.filter(item => item.country === filter) 
    }

    render() {
        const {cards, field, filter} = this.state
        const dataCount = cards.length

        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Nav />}>
                            <Route index element={<Home />} />
                            <Route path="our-coffee" element={
                                <OurCoffee 
                                    data={this.onFilter(this.onSearch(cards, field), filter)}
                                    changeFieldState={this.changeFieldState}
                                    filtersButtons={this.state.filtersButtons}
                                    onFilterSelect={this.onFilterSelect}
                                    dataCount={dataCount}
                                    />} 
                            />
                            <Route path="for-you" element={<ForYou data={cards}/>} />
                            <Route path="admin" element={<Admin/> } />
                            <Route path="*" element={<NoPage />} />

                            {this.state.cards.map(item => {
                                return <Route key={item.id} path={"our-coffee/products/"+item.id} element={<CardPage {...item}/>} />
                            })}
                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

export default App