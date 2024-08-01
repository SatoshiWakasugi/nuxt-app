type GreetingState = {
  id: string
  text: string
}

export const useGreeting = () => {
  const state = useState<GreetingState>('greeting', () => {
    return {
      id: '',
      text: '',
    }
  })

  const setGreeting = (value: GreetingState) => {
    state.value = value
  }

  return { state, setGreeting }
}
