import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { compareStrings } from './helpers/stringHelper'

// Data From JSON
import playersFromJSON from './helpers/dataJSON/combinedPlayerData'
import teamsFromJSON from './helpers/dataJSON/laliga.json'

export const useExploreBySearchTerm = (search) => {
  const [isLoading, SetIsLoading] = useState(true)
  const [teamList, setTeamList] = useState([])
  const [playerList, setPlayerList] = useState([])

  useEffect(() => {
    setTeamList(teamsFromJSON.response)
    setPlayerList(playersFromJSON)
    SetIsLoading(false)
  }, [])

  const teamListFiltered = useCallback(
    teamList?.filter(
      (item) => search.length === 0 || search?.length > 1 && compareStrings(search, item.team.name),
      [search]
    )
  )

  const playerListFiltered = useCallback(
    playerList?.filter(
      (item) =>
        search?.length > 1 &&
        (compareStrings(search, item.statistics[0].team.name) ||
          compareStrings(search, item.player.name)),
      [search]
    )
  )

  const listFiltered = useMemo(() => {
    const result = [...teamListFiltered, ...playerListFiltered].map((item) => {
      return {
        id: item.player?.id || item.team.id,
        type: item.player?.id ? 'player' : 'team',
        title:
          item.player?.name ||
          (item.team.name && item.team.name + ' (' + item.team.code + ')'),
        subtitle1: item.player?.firstname
          ? item.player.firstname + ' ' + item.player.lastname
          : 'Country: ' + item.team.country + '. Founded: ' + item.team.founded,
        subtitle2:
          (item.statistics && 'Equipo: ' + item.statistics[0]?.team.name) ||
          null,
        image: item.player?.photo || item.team.logo
      }
    })    

    return result
  }, [search])

  return {
    isLoading,
    teamList,
    playerList,
    teamListFiltered,
    playerListFiltered,
    listFiltered
  }
}
