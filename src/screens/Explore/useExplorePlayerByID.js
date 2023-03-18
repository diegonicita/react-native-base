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
    height: playerListFiltered[0]?.player.height,
    games: {
      appearences: playerListFiltered[0]?.statistics[0].games.appearences,
      lineups: playerListFiltered[0]?.statistics[0].games.lineups,
      minutes: playerListFiltered[0]?.statistics[0].games.minutes,
      number: playerListFiltered[0]?.statistics[0].games.number,
      position: playerListFiltered[0]?.statistics[0].games.position,
      rating: playerListFiltered[0]?.statistics[0].games.rating,
      captain: playerListFiltered[0]?.statistics[0].games.captain,
    },
    substitutes: {
      in: playerListFiltered[0]?.statistics[0].substitutes.in,
      out: playerListFiltered[0]?.statistics[0].substitutes.out,
      bench: playerListFiltered[0]?.statistics[0].substitutes.bench,
    },
    shots: {
      total: playerListFiltered[0]?.statistics[0].shots.total,
      on: playerListFiltered[0]?.statistics[0].shots.on,
    },
    goals: {
      total: playerListFiltered[0]?.statistics[0].goals.total,
      conceded: playerListFiltered[0]?.statistics[0].goals.conceded,
      assists: playerListFiltered[0]?.statistics[0].goals.assists,
      saves: playerListFiltered[0]?.statistics[0].goals.saves,
    },
    passes: {
      total: playerListFiltered[0]?.statistics[0].passes.total,
      key: playerListFiltered[0]?.statistics[0].passes.key,
      accuracy: playerListFiltered[0]?.statistics[0].passes.accuracy,
    },
    tackles: {
      total: playerListFiltered[0]?.statistics[0].tackles.total,
      blocks: playerListFiltered[0]?.statistics[0].tackles.blocks,
      interceptions: playerListFiltered[0]?.statistics[0].tackles.interceptions,
    },
    duels: {
      total: playerListFiltered[0]?.statistics[0].duels.total,
      won: playerListFiltered[0]?.statistics[0].duels.total,
    },
    dribbles: {
      attempts: playerListFiltered[0]?.statistics[0].dribbles.attempts,
      success: playerListFiltered[0]?.statistics[0].dribbles.success,
      past: playerListFiltered[0]?.statistics[0].dribbles.past,
    },
    fouls: {
      drawn: playerListFiltered[0]?.statistics[0].fouls.drawn,
      committed: playerListFiltered[0]?.statistics[0].fouls.commited
    },
    cards: {
      yellow: playerListFiltered[0]?.statistics[0].cards.yellow,
      yellowred: playerListFiltered[0]?.statistics[0].cards.yellowred,
      red: playerListFiltered[0]?.statistics[0].cards.red
    },
    penalty: {
      won: playerListFiltered[0]?.statistics[0].penalty.won,
      commited: playerListFiltered[0]?.statistics[0].penalty.commited,
      scored: playerListFiltered[0]?.statistics[0].penalty.scored,
      missed: playerListFiltered[0]?.statistics[0].penalty.missed,
      saved: playerListFiltered[0]?.statistics[0].penalty.saved,
    }
  }

  return {
    isLoading,        
    playerListFiltered,
    player
  }
}
