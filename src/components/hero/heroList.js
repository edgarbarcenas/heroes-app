import React from 'react'
import getHeroesByPublisher from '../../selectors/getHeroByPublisher';
const heroList = ( {publisher} ) => {
    const heroes = getHeroesByPublisher( publisher );
    return (
        <>
            <h1>Hero List</h1>
            <ul>
                    {
                        heroes.map( hero => (
                            <li key={hero.id}> 
                                {hero.superhero}
                            </li>
                        ))
                    }
            </ul>
        </>
    )
}

export default heroList;

