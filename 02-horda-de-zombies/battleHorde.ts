function battleHorde(zombies: string, humans: string): string {
  let zombiePower = zombies.split('').map(Number)
  let humanPower = humans.split('').map(Number)

  const numberLastZombie = zombiePower.length - 1

  for (let i = 0; i < zombiePower.length; i++) {
    if (zombiePower[i] > humanPower[i]) {
      zombiePower[i + 1] = (zombiePower[i + 1 || 0]) + (zombiePower[i] - humanPower[i])
    } else if (zombiePower[i] < humanPower[i]) {
      humanPower[i + 1] = (humanPower[i + 1 || 0]) + (humanPower[i] - zombiePower[i])
    }
  }

  const lastZombie = zombiePower[numberLastZombie] || 0
  const lastHuman = humanPower[numberLastZombie] || 0

  if (lastZombie > lastHuman) {
    return `${lastZombie}z`
  } else if (lastZombie < lastHuman) {
    return `${lastHuman}h`
  }

  return 'x'
}