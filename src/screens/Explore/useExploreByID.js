import React, { useState, useEffect, useCallback, useMemo } from 'react'

// Data From JSON
import playersFromJSON from './helpers/dataJSON/combinedPlayerData'
import teamsFromJSON from './helpers/dataJSON/laliga.json'

export const useExploreByID = (id) => {
  const [isLoading, SetIsLoading] = useState(true)
  const [teamList, setTeamList] = useState([])
  const [playerList, setPlayerList] = useState([])

  useEffect(() => {
    setTeamList(teamsFromJSON.response)
    setPlayerList(playersFromJSON)
    SetIsLoading(false)
  }, [])
  
  const teamListFiltered = teamList?.filter((item) => id == item.team.id)  
  const playerListFiltered = playerList?.filter(
    (item) => id == item.statistics[0].team.id
  ) 

  return {
    isLoading,
    teamList,
    playerList,
    teamListFiltered,
    playerListFiltered
  }
}
