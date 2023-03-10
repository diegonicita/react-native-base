import React from 'react'
import { Platform, View, Text } from 'react-native'
import { FAB, makeStyles, useThemeMode } from '@rneui/themed'
import Icon from 'react-native-vector-icons/FontAwesome5'

export const ThemeButton = () => {
  const [visible, setVisible] = React.useState(true)
  const styles = useStyles()
  const { setMode, mode } = useThemeMode()

  const handleOnPress = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <View style={styles.view}>
      <FAB
        visible={visible}
        icon={
          <Icon
            name={mode !== 'dark' ? 'moon' : 'lightbulb'}
            size={20}
            color={mode !== 'dark' ? 'white' : 'black'}
          />
        }
        color={mode === 'dark' ? 'white' : 'black'}
        onPress={handleOnPress}
        // style={{borderWidth: 1, borderColor: mode !== 'dark' ? 'black' : 'white'}}
      />
    </View>
  )
}

const useStyles = makeStyles((theme) => ({
  view: {
    width: 1,
    height: 1,
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: -28,
        right: 25
      },
      android: {
        top: -28,
        right: 25
      },
      default: {
        top: 5,
        right: 35
      }
    })
  }
}))
