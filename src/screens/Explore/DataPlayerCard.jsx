import React from 'react'
import { Card, Text } from '@rneui/themed'
import { StyleSheet } from 'react-native'

export const DataPlayerCard = ({ player }) => {  

  return (
    <>
      <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
        <Text style={styles.text}>Nombres: {player.firstname} </Text>
        <Text style={styles.text}>Apellidos: {player.lastname} </Text>
        <Text style={styles.text}>Edad: {player.age} </Text>
        <Text style={styles.text}>Nacionalidad: {player.nationality}</Text>
        <Text style={styles.text}>
          Fecha de Nacimiento: {player.birthDate}{' '}
        </Text>
        <Text style={styles.text}>
          Lugar de Nacimiento: {player.birthPlace}{' '}
        </Text>
        <Text style={styles.text}>
          Pais de Nacimiento: {player.birthCountry}{' '}
        </Text>
      </Card>
      <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
        <Text style={styles.text}>Peso: {player.weight}</Text>
        <Text style={styles.text}>Altura: {player.height}</Text>
        <Text style={styles.text}>Lesionado: {player.injured}</Text>
      </Card>
      <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
        <Card.Title>Partidos Jugados</Card.Title>
        <Text style={styles.text}>
          Game Appearences: {player.games?.appearences}
        </Text>
        <Text style={styles.text}>Game Lineups: {player.games?.lineups}</Text>
        <Text style={styles.text}>Game Minutes: {player.games?.minutes}</Text>
        <Text style={styles.text}>Game Number: {player.games?.number}</Text>
        <Text style={styles.text}>Game Position: {player.games?.position}</Text>
        <Text style={styles.text}>Game Rating: {player.games?.rating}</Text>
        <Text style={styles.text}>Game Captain: {player.games?.captain}</Text>
      </Card>
      <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
        <Card.Title>Substituciones</Card.Title>
        <Text style={styles.text}>
          Substitutes In: {player.substitutes?.in}
        </Text>
        <Text style={styles.text}>
          Substitutes Out: {player.substitutes?.out}
        </Text>
        <Text style={styles.text}>
          Substitutes Bench: {player.substitutes?.bench}
        </Text>
      </Card>
      <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
        <Card.Title>Tiros al Arco</Card.Title>
        <Text style={styles.text}>Shots Total: {player.shots?.total}</Text>
        <Text style={styles.text}>Shots On: {player.shots?.on}</Text>
      </Card>
      <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
        <Card.Title>Goles</Card.Title>
        <Text style={styles.text}>Goals Total: {player.goals?.total}</Text>
        <Text style={styles.text}>
          Goals Conceded: {player.goals?.conceded}
        </Text>
        <Text style={styles.text}>Goals Assists: {player.goals?.assists}</Text>
        <Text style={styles.text}>Goals Saves {player.goals?.saves}</Text>
      </Card>
      <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
        <Card.Title>Pases</Card.Title>
        <Text style={styles.text}>Passes Total: {player.passes?.total}</Text>
        <Text style={styles.text}>Passes Key: {player.passes?.key}</Text>
        <Text style={styles.text}>
          Passes Accuracy: {player.passes?.accuracy}
        </Text>
      </Card>
      <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
        <Card.Title>Tackles</Card.Title>
        <Text style={styles.text}>Tackles Total: {player.tackles?.total}</Text>
        <Text style={styles.text}>
          Tackles Blocks: {player.tackles?.blocks}
        </Text>
        <Text style={styles.text}>
          Tackles Interceptions: {player.tackles?.interceptions}
        </Text>
      </Card>
      <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
        <Card.Title>Duels</Card.Title>
        <Text style={styles.text}>Duels Total: {player.duels?.total}</Text>
        <Text style={styles.text}>Duels Won: {player.duels?.won}</Text>
      </Card>
      <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
        <Card.Title>Dribbles</Card.Title>
        <Text style={styles.text}>
          Dribbles Attempts: {player.dribbles?.attempts}
        </Text>
        <Text style={styles.text}>
          Dribbles Success: {player.dribbles?.success}
        </Text>
        <Text style={styles.text}>Dribbles Past: {player.dribbles?.past}</Text>
      </Card>
      <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
        <Card.Title>Faltas</Card.Title>
        <Text style={styles.text}>Fouls Drawn: {player.fouls?.drawn}</Text>
        <Text style={styles.text}>
          Fouls Committed: {player.fouls?.committed}
        </Text>
      </Card>
      <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
        <Card.Title>Tarjetas</Card.Title>
        <Text style={styles.text}>Cards Yellow: {player.cards?.yellow}</Text>
        <Text style={styles.text}>
          Cards YellowRed: {player.cards?.yellowred}
        </Text>
        <Text style={styles.text}>Cards Red: {player.cards?.red}</Text>
      </Card>
      <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
        <Card.Title>Penalties</Card.Title>
        <Text style={styles.text}>Penalty Won: {player.penalty?.won}</Text>
        <Text style={styles.text}>
          Penalty Committed: {player.penalty?.committed}
        </Text>
        <Text style={styles.text}>
          Penalty Scored: {player.penalty?.scored}
        </Text>
        <Text style={styles.text}>
          Penalty Missed: {player.penalty?.missed}
        </Text>
        <Text style={styles.text}>Penalty Saved: {player.penalty?.saved}</Text>
      </Card>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    lineHeight: 25
  },
  card: {
    borderColor: '#2089dc55',
    borderRadius: 5
  }
})
