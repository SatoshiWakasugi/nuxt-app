export const fetchGreeting = (id: number) => {
  //   const response = 本当はAPI叩く
  const response = {
    id: 'g' + id,
    text: 'こんにちは',
  }

  return response
}
