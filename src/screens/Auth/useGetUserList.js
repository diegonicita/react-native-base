import React, { useState, useEffect, useCallback, useMemo } from 'react'
import usersFromJSON from './helpers/dataJSON/users.json'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useGetUserList = (userCounter) => {
  const [isLoadingData, setIsLoadingData] = useState(true)
  const [userList, setUserList] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const addUserList = async () => {
      await setUserList(usersFromJSON.response)
    }
    addUserList()
    const addDataFromStorage = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_user')
        if (value !== null) {
          setUserList((p) => [...p, { user: JSON.parse(value) }])
        }
      } catch (e) {
        setError(true)
      }
    }
    addDataFromStorage()
    setIsLoadingData(false)
  }, [userCounter])

  return {
    isLoadingData,
    userList,
    error
  }
}
