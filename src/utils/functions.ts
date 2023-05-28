export function capitalizeFirstLetter(string: string) {
  const words = string.split(/\s+/g)

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }

  const formattedString = words.join(' ')

  return formattedString
}
