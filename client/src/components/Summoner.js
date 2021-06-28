import React from 'react'
import  Heal from './summoner_spell_images/Heal.png'
import Ghost from './summoner_spell_images/Ghost.png'
import Barrier from './summoner_spell_images/Barrier.png'
import Teleport from './summoner_spell_images/Teleport.png'
import Cleanse from './summoner_spell_images/Cleanse.png'
import Ignite from './summoner_spell_images/Ignite.png'
import Exhaust from './summoner_spell_images/Exhaust.png'
import Smite from './summoner_spell_images/Smite.png'
import Flash from './summoner_spell_images/Flash.png'
import placeholder from './assets/placeholder.png'

function Summoner(props) {

    const summoners = [
        {
            name: "Heal",
            picture: Heal
        },
        {
            name: "Ghost",
            picture: Ghost
        },
        {
            name: "Barrier",
            picture: Barrier
        },
        {
            name: "Teleport",
            picture: Teleport
        },
        {
            name: "Cleanse",
            picture: Cleanse
        },
        {
            name: "Ignite",
            picture: Ignite
        },
        {
            name: "Exhaust",
            picture: Exhaust
        },
        {
            name: "Smite",
            picture: Smite
        },
    ]

    props.getSummoners(summoners)
    let name = props.name
    let picture = props.picture
    const role = props.role

    if(role === "Jungle"){
        picture = Smite
        name = "Smite"
    }

    return (
        <div className="summoner">
            <h2 id="summonertitle">Summoner Spells</h2>
            <img src={picture ? picture : placeholder} alt={`${name}.img`} id="summonerimage"/>
            <img src={Flash} alt={`${name}.img`} id="flashimage" />
        </div>
    )
}

export default Summoner
