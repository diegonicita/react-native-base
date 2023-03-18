import React from 'react'
import { useMessageStore } from '../../redux/hooks/useMessage'
import { useExplorePlayerByID } from './useExplorePlayerByID'
import { Header } from '../../components/Header'
import { CustomScrollView } from '../../components/CustomScrollView'
import { PhotoPlayerCard } from './PhotoPlayerCard'
import { LogoClubCard } from './LogoClubCard'
import { DataPlayerCard} from './DataPlayerCard'

const config = {
  title: 'Jugador'
}

export const Player = ({route}) => {
  
  const { player } = useExplorePlayerByID(route.params.id)

  return (
    <>
      <CustomScrollView>
        <Header title={config.title} />
        <PhotoPlayerCard name={player.name} photo={player.photo} />
        <LogoClubCard name={player.club} logo={player.logo} />  
        <DataPlayerCard player={player} />
      </CustomScrollView>
    </>
  )
}

export default Player
