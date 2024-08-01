type AleCounterState = {
  aleCount: number
}

export const useAleCounter = () => {
  const state = useState<AleCounterState>('aleCount', () => {
    return {
      aleCount: 0,
    }
  })

  const doubled = computed(() => state.value.aleCount * 2)

  const increment = (value: AleCounterState) => {
    state.value = value
  }

  const clear = () => {
    state.value = {
      ...state.value,
      aleCount: 0,
    }
  }

  return { state, increment, clear, doubled }
}
