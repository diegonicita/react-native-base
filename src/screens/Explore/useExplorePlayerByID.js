import React, { useState, useEffect } from 'react'

import playersFromJSON from './helpers/dataJSON/combinedPlayerData'

export const useExplorePlayerByID = (id) => {
  const [isLoading, SetIsLoading] = useState(true)  
  const [playerList, setPlayerList] = useState([])

  useEffect(() => {
    setPlayerList(playersFromJSON)
    SetIsLoading(false)
  }, [])
    
  const playerListFiltered = !isLoading && playerList?.filter(
    (item) => id == item.player.id
  ) 

  const player = !isLoading && {
    id: id,
    name: playerListFiltered[0]?.player.name,
    firstname: playerListFiltered[0]?.player.firstname,
    lastname: playerListFiltered[0]?.player.lastname,
    photo: playerListFiltered[0]?.player?.photo,
    club: playerListFiltered[0]?.statistics[0].team.name,
    logo: playerListFiltered[0]?.statistics[0].team.logo,
    age: playerListFiltered[0]?.player.age,
    nationality: playerListFiltered[0]?.player.nationality,
    birthDate: playerListFiltered[0]?.player.birth.date,
    birthPlace: playerListFiltered[0]?.player.birth.place,
    birthCountry: playerListFiltered[0]?.player.birth.country,
    injured: playerListFiltered[0]?.player.injured ? 'Si' : 'No',
    weight: playerListFiltered[0]?.player.weight,
    height: playerListFiltered[0]?.player.height
  }

  return {
    isLoading,        
    playerListFiltered,
    player
  }
}
