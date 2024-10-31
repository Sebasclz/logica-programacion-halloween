function createMagicPotion(potions: number[], target: number): number[] | undefined {
  let bestCombination: number[] | undefined = undefined;

  for (let i = 0; i < potions.length; i++) {
    for (let j = i + 1; j < potions.length; j++) {
      let sum = potions[i] + potions[j];

      if (sum === target) {
        if (!bestCombination || j < bestCombination[1]) {
          bestCombination = [i, j];
        }
      }
    }
  }

  return bestCombination ? bestCombination : undefined;
}
