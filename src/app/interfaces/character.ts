import { Images } from "./images"
import { Name } from "./name"

export interface Character {
    name: Name
    images: Images
    gender: string
    species: string
    homePlanet?: string
    occupation: string
    sayings: string[]
    id: number
    age: string
}
