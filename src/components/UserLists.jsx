import React from 'react'
import Person from './Person.jsx'

function UserLists() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Diana',
            age: 1500,
            skill: 'Vue'
        },
        {
            id: 3,
            name: 'Clark',
            age: 40,
            skill: 'Angular'
        },
        {
            id: 4,
            name: 'Cyborg',
            age: 37,
            skill: 'Next'
        }
    ]
    const nameList = persons.map(person => <Person key={person.id} person={person} />)
  return (
    <div>
        <div>{nameList}</div>   
    </div>
  )
}

export default UserLists;