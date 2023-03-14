import React from 'react'
import { useMessageStore } from '../../redux/hooks/useMessage'
import { useExplorePlayerByID } from '../Explore/useExplorePlayerByID'
import { Header } from '../../components/Header'
import { CustomScrollView } from '../../components/CustomScrollView'
import { PhotoPlayerCard } from '../Explore/PhotoPlayerCard'
import { LogoClubCard } from '../Explore/LogoClubCard'
import { DataPlayerCard } from '../Explore/DataPlayerCard'

const config = {
  title: 'MyPlayer'
}
export const MyPlayer = () => {
  const { myPlayer: playerID } = useMessageStore()
  const { player } = useExplorePlayerByID(playerID)

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

export default MyPlayer