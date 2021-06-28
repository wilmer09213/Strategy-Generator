import React from 'react'
import Press_the_Attack from './mastery_images/Press_the_Attack.png'
import Lethal_Tempo from './mastery_images/Lethal_Tempo.png'
import Fleet_Footwork from './mastery_images/Fleet_Footwork.png'
import Conqueror from './mastery_images/Conqueror.png'
import Electrocute from './mastery_images/Electrocute.png'
import Predator from './mastery_images/Predator.png'
import Dark_Harvest from './mastery_images/Dark_Harvest.png'
import Hail_of_Blades from './mastery_images/Hail_of_Blades.png'
import Summon_Aery from './mastery_images/Summon_Aery.png'
import Arcane_Comet from './mastery_images/Arcane_Comet.png'
import Phase_Rush from './mastery_images/Phase_Rush.png'
import Grasp_of_the_Undying from './mastery_images/Grasp_of_the_Undying.png'
import Aftershock from './mastery_images/Aftershock.png'
import Guardian from './mastery_images/Guardian.png'
import Glacial_Augment from './mastery_images/Glacial_Augment.png'
import Unsealed_Spellbook from './mastery_images/Unsealed_Spellbook.png'
import Omnistone from './mastery_images/Omnistone.png'
import placeholder from './assets/placeholder.png'

function Mastery(props) {

    const masteries = [
        {
            name: "Press The Attack",
            picture: Press_the_Attack
        },
        {
            name: "Lethal Tempo",
            picture: Lethal_Tempo
        },
        {
            name: "Fleet Footwork",
            picture: Fleet_Footwork
        },
        {
            name: "Conqueror",
            picture: Conqueror
        },
        {
            name: "Electrocute",
            picture: Electrocute
        },
        {
            name: "Predator",
            picture: Predator
        },
        {
            name: "Dark Harvest",
            picture: Dark_Harvest
        },
        {
            name: "Hail of Blades",
            picture: Hail_of_Blades
        },
        {
            name: "Summon Aery",
            picture: Summon_Aery
        },
        {
            name: "Arcane Comet",
            picture: Arcane_Comet
        },
        {
            name: "Phase Rush",
            picture: Phase_Rush
        },
        {
            name: "Grasp of the Undying",
            picture: Grasp_of_the_Undying
        },
        {
            name: "Aftershock",
            picture: Aftershock
        },
        {
            name: "Guardian",
            picture: Guardian
        },
        {
            name: "Glacial Augment",
            picture: Glacial_Augment
        },
        {
            name: "Unsealed Spellbook",
            picture: Unsealed_Spellbook
        },
        {
            name: "OmniStone",
            picture: Omnistone
        }
    ]

    props.getMasteries(masteries)

    const name = props.name
    const picture = props.picture
    

    return (
        <div className="mastery">
            <img src={picture ? picture : placeholder} alt={`${name}.img`} id="masteryimage" />
            <h2 id="masteryname">{name ? name : "Keystone"}</h2>
        </div>
    )
}

export default Mastery
