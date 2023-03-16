import React, { useState, useEffect } from 'react'

import playersFromJSON from './helpers/dataJSON/combinedPlayerData'

export const useExplorePlayerByArrayID = (arrayId) => {
  const [isLoading, SetIsLoading] = useState(true)
  const [playerList, setPlayerList] = useState([])

  useEffect(() => {
    setPlayerList(playersFromJSON)
    SetIsLoading(false)
  }, [])

  const playerListFiltered = []

  arrayId.forEach((id) => {
    
    const firstElementFound =
      !isLoading && playerList?.find((item) => id == item.player.id)
    
    const player = firstElementFound && {
      id: id,
      name: firstElementFound?.player.name,
      firstname: firstElementFound?.player.firstname,
      lastname: firstElementFound?.player.lastname,
      photo: firstElementFound?.player?.photo,
      club: firstElementFound?.statistics[0].team.name,
      logo: firstElementFound?.statistics[0].team.logo,
      age: firstElementFound?.player.age,
      nationality: firstElementFound?.player.nationality,
      birthDate: firstElementFound?.player.birth.date,
      birthPlace: firstElementFound?.player.birth.place,
      birthCountry: firstElementFound?.player.birth.country,
      injured: firstElementFound?.player.injured ? 'Si' : 'No',
      weight: firstElementFound?.player.weight,
      height: firstElementFound?.player.height
    }
    playerListFiltered.push(player)
  })

  return {
    isLoading,
    playerListFiltered,    
  }
}
