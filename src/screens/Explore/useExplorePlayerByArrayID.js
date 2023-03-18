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
      height: firstElementFound?.player.height,
      games: {
        appearences: firstElementFound?.statistics[0].games.appearences,
        lineups: firstElementFound?.statistics[0].games.lineups,
        minutes: firstElementFound?.statistics[0].games.minutes,
        number: firstElementFound?.statistics[0].games.number,
        position: firstElementFound?.statistics[0].games.position,
        rating: firstElementFound?.statistics[0].games.rating,
        captain: firstElementFound?.statistics[0].games.captain,
      },
      substitutes: {
        in: firstElementFound?.statistics[0].substitutes.in,
        out: firstElementFound?.statistics[0].substitutes.out,
        bench: firstElementFound?.statistics[0].substitutes.bench,
      },
      shots: {
        total: firstElementFound?.statistics[0].shots.total,
        on: firstElementFound?.statistics[0].shots.on,
      },
      goals: {
        total: firstElementFound?.statistics[0].goals.total,
        conceded: firstElementFound?.statistics[0].goals.conceded,
        assists: firstElementFound?.statistics[0].goals.assists,
        saves: firstElementFound?.statistics[0].goals.saves,
      },
      passes: {
        total: firstElementFound?.statistics[0].passes.total,
        key: firstElementFound?.statistics[0].passes.key,
        accuracy: firstElementFound?.statistics[0].passes.accuracy,
      },
      tackles: {
        total: firstElementFound?.statistics[0].tackles.total,
        blocks: firstElementFound?.statistics[0].tackles.blocks,
        interceptions: firstElementFound?.statistics[0].tackles.interceptions,
      },
      duels: {
        total: firstElementFound?.statistics[0].duels.total,
        won: firstElementFound?.statistics[0].duels.total,
      },
      dribbles: {
        attempts: firstElementFound?.statistics[0].dribbles.attempts,
        success: firstElementFound?.statistics[0].dribbles.success,
        past: firstElementFound?.statistics[0].dribbles.past,
      },
      fouls: {
        drawn: firstElementFound?.statistics[0].fouls.drawn,
        committed: firstElementFound?.statistics[0].fouls.commited
      },
      cards: {
        yellow: firstElementFound?.statistics[0].cards.yellow,
        yellowred: firstElementFound?.statistics[0].cards.yellowred,
        red: firstElementFound?.statistics[0].cards.red
      },
      penalty: {
        won: firstElementFound?.statistics[0].penalty.won,
        commited: firstElementFound?.statistics[0].penalty.commited,
        scored: firstElementFound?.statistics[0].penalty.scored,
        missed: firstElementFound?.statistics[0].penalty.missed,
        saved: firstElementFound?.statistics[0].penalty.saved,
      }
    }
    playerListFiltered.push(player)
  })

  return {
    isLoading,
    playerListFiltered,    
  }
}