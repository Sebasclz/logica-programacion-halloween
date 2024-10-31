function battleHorde(zombies: string, humans: string): string {
  let charZombie = zombies.split('').map(Number)
  let charHuman = humans.split('').map(Number)

  let arrayZombie: number[] = []
  let arrayHuman: number[] = []

  let winner: string = 'z'

  for (let i = 0; i < charZombie.length; i++) {
    if (charZombie[i] > charHuman[i]) {
      let resZombie = charZombie[i] - charHuman[i]

      charZombie[i + 1] += resZombie
      arrayZombie.push(resZombie)

      if (i === charZombie.length - 2) {
        winner = 'z'
      }
    }

    if (charHuman[i] > charZombie[i]) {
      let resHuman = charHuman[i] - charZombie[i]

      charHuman[i + 1] += resHuman
      arrayHuman.push(resHuman)

      if (i === charHuman.length - 1) {
        winner = 'h'
      }
    }

    if (charZombie[i] === charHuman[i]) {
      let res = charZombie[i] - charHuman[i]
      charZombie[i + 1] += res
      arrayZombie.push(res)

      charHuman[i + 1] += res
      arrayHuman.push(res)
    }
  }

  const lastZombie = arrayZombie[arrayZombie.length - 1]
  const lastHuman = arrayHuman[arrayHuman.length - 1]

  const lengthZombie = lastZombie > lastHuman
  const lengthHuman = lastHuman > lastZombie

  const condZombie = lastZombie !== undefined
  const condZombie2 = lastZombie > 0

  const condHuman = lastHuman !== undefined
  const condHuman2 = lastHuman > 0


  if (lengthZombie) {
    return `${lastZombie}z`
  }

  if (!arrayHuman.length) {
    return `${lastZombie}z`
  }

  if (lengthHuman) {
    return `${lastHuman}h`
  }

  if (!arrayZombie.length) {
    return `${lastHuman}h`
  }


  if (winner === 'z' && condZombie && condZombie2) {
    return `${lastZombie}z`
  }

  if (winner === 'h' && condHuman && condHuman2) {
    return `${lastHuman}h`
  }


  return 'x'
}