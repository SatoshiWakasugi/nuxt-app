type UserState = {
  age: number
  id: number
  name: string
  sex: string
  favorite: boolean
}

export const useUser = () => {
  const state = useState<UserState>('user', () => {
    return {
      age: 0,
      id: 0,
      name: '',
      sex: '',
      favorite: false,
    }
  })

  const setUser = (value: UserState) => {
    state.value = value
  }

  return { state, setUser }
}
