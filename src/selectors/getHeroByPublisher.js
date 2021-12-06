import { heroes } from '../data/heroes'
const getHeroesByPublisher = ( publisher ) => {
    const validPublisher = ['DC Comics', 'Marvel comics'];
    if(!validPublisher.includes(publisher)){
        throw new Error (`${publisher} is not a valid publisher`)
    }
    return heroes.filter( hero => hero.publisher === publisher )
}
 
export default getHeroesByPublisher;