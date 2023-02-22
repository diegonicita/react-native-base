import React, { useState, useEffect, useCallback } from 'react'
import { compareStrings } from './helpers/stringHelper'

// Data From JSON
import playersFromJSON from './helpers/dataJSON/combinedPlayerData'
import teamsFromJSON from './helpers/dataJSON/laliga.json'

export const useExplore = (search) => {    

  const [isLoading, SetIsLoading] = useState(true)
  const [teamList, setTeamList] = useState([])
  const [playerList, setPlayerList] = useState([])  

  useEffect(() => {
    setTeamList(teamsFromJSON.response)
    setPlayerList(playersFromJSON)
    SetIsLoading(false)    
  }, [])

  const teamListFiltered = useCallback( teamList?.filter((item) =>
    search?.length > 1 && compareStrings(search, item.team.name), [search])
  )

  const playerListFiltered = useCallback( playerList?.filter((item) =>
    search?.length > 1 && (compareStrings(search, item.statistics[0].team.name) || compareStrings(search, item.player.name)), [search])
  )
  
  return { isLoading, teamList, playerList, teamListFiltered, playerListFiltered}  
  
}
