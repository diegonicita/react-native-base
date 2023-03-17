import React from 'react'
import { useExplorePlayerByID } from '../Explore/useExplorePlayerByID'
import { Header } from '../../components/Header'
import { CustomScrollView } from '../../components/CustomScrollView'
import { PhotoPlayerCard } from '../Explore/PhotoPlayerCard'
import { LogoClubCard } from '../Explore/LogoClubCard'
import { DataPlayerCard } from '../Explore/DataPlayerCard'

const config = {
  title: 'Siguiendo'
}
export const HomePlayer = ({navigation, route}) => {
  
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

export default HomePlayer