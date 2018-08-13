import Person from "../models/Person.js";
import Species from "../models/Species.js";
import Film from "../models/Film.js";

export default class SwapiService {
    test() {
        console.log("hello from Service")
    }
    getPersons(callback) {
        fetch('https://swapi.co/api/people/')
            .then(res => res.json())
            .then(res => {
                // console.log(
                callback(res.results.map(p => new Person(p)))
                // )
            })
    }
    getSpecies(callback) {
        fetch("https://swapi.co/api/species/")
            .then(res => res.json())
            .then(res => {
                callback(res.results.map(s => new Species(s)))
            })
    }
    getFilms(callback) {
        fetch("https://swapi.co/api/films/")
        .then(res => res.json())
        .then(res => {
            callback(res.results.map(f => new Film(f)))
        })
    }
}