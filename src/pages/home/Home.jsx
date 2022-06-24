import React from 'react'
import Cards from '../../components/Cards'
import Carousel from '../../components/Carousel'
import Items from '../../components/Items'

const Home = () => {
    return (
        <div>
            <Carousel />
            <Cards />
            <Items />
        </div>
    )
}

export default Home