import React, { useState, useEffect } from 'react'

import playersFromJSON from './helpers/dataJSON/combinedPlayerData'

export const useExplorePlayerByID = (id) => {
  const [isLoading, SetIsLoading] = useState(true)  
  const [playerList, setPlayerList] = useState([])

  useEffect(() => {
    setPlayerList(playersFromJSON)
    SetIsLoading(false)
  }, [])
    
  const playerListFiltered = playerList?.filter(
    (item) => id == item.player.id
  ) 

  return {
    isLoading,        
    playerListFiltered
  }
}
