import React, { useState, useEffect } from 'react'
import Role from './Role'
import Playstyle from './Playstyle'
import Champion from './Champion'
import Item from './Item'
import Summoner from './Summoner'
import Mastery from './Mastery'
import "./Build.css"
import "./Champion.css"
import "./Item.css"
import "./Summoner.css"
import "./Mastery.css"
import "./Role.css"
import "./Playstyle.css"
import { RequestChampionsData, RequestItemsData } from './RequestApiData'



function Build() {

    const [champions, setChampions] = useState("");
    const [champion, setChampion] = useState("");
  
    const [items, setItems] = useState("");
    const [item, setItem] = useState("");

    const [roles, setRoles] = useState("");
    const [role, setRole] = useState("");

    const [playstyles, setPlaystyles] = useState("");
    const [playstyle, setPlaystyle] = useState("");

    const [summoners, setSummoners] = useState("");
    const [summoner, setSummoner] = useState("");

    const [masteries, setMasteries] = useState("");
    const [mastery, setMastery] = useState("");

    useEffect(() =>{
        
        let counter = 1;
        let collectedChampions = [];
        let collectedItems = [];

        const collectChampions = (counter) => {
            RequestChampionsData(counter).then((allChampions) => {
                if(allChampions.length === 100){
                    collectedChampions = [...collectedChampions, ...allChampions]
                    counter = counter + 1
                    collectChampions(counter)
                }
                else {
                    setChampions([...collectedChampions, ...allChampions])
                }
            }) 
        }
        collectChampions(counter)

        const collectItems = (counter) => {
            RequestItemsData().then((filteredItems) => {
                if(filteredItems.length === 100){
                    collectedItems = [...collectedItems, ...filteredItems]
                    counter = counter + 1
                    collectItems(counter)
                }
                else {
                    setItems([...collectedItems, ...filteredItems])
                }
            }) 
        }
        collectItems(counter)

    }, [])


    const generateData = () => {
        setChampion(champions[(Math.floor(Math.random() * (champions.length)))])
        setItem(items[(Math.floor(Math.random() * (items.length)))])
        setRole(roles[(Math.floor(Math.random() * (roles.length)))])
        setPlaystyle(playstyles[(Math.floor(Math.random() * (playstyles.length)))])
        setSummoner(summoners[(Math.floor(Math.random() * (summoners.length)))])
        setMastery(masteries[(Math.floor(Math.random() * (masteries.length)))])
    }

    let allRoles ;
    const getRoles = (data) => {
        allRoles = data;
    }

    let allPlaystyles ;
    const getPlaystyles = (data) => {
        allPlaystyles = data;
    }

    let allSummoners ;
    const getSummoners = (data) => {
        allSummoners = data;
    }

    let allMasteries;
    const getMasteries = (data) => {
        allMasteries = data;
    }

    useEffect(() => {
        setRoles(allRoles)
        setPlaystyles(allPlaystyles)
        setSummoners(allSummoners)
        setMasteries(allMasteries)
    }, [allRoles, allPlaystyles, allSummoners, allMasteries])
    
    

    return (
        <div className="build">
            <h2 id="title">LoL Strategy Builder</h2>
            <Champion picture={champion.image_url} name={champion.name} />
            <Item name={item.name} picture={item.image_url} />
            <Mastery getMasteries={getMasteries} name={mastery.name} picture={mastery.picture} />
            <Summoner getSummoners={getSummoners} name={summoner.name} picture={summoner.picture} role={role} />
            <Role getRoles={getRoles} role={role} summoner={summoner} />
            <Playstyle getPlaystyles={getPlaystyles} playstyle={playstyle} />
            {(champions && items) ? <button id="generatebutton" onClick={generateData}>Generate</button> : <button id="generatebutton">Loading...</button> }
        </div>
    )
}

export default Build;
