import { random } from "lodash";
import { IChromosome } from "../models/Chromosome";

/**
 * Generate a random position to split chromosome
 * @param {IChromosome} chromosome chromosome to find a split position in it
 * @returns {number} a random split position between the first and the last items
 * @example
 *
 * getSplitPosition([0, 1, 2, 3])
 * // => 3 (could be only 1 or 2 because the first and the last items are fixed)
 *
 * * getSplitPosition([0, 3, 1, 2, 4, 6, 5])
 * // => 1 (could be only 1-5 because the first and the last items are fixed)
 */
export default (chromosome: IChromosome) => {
  return random(1, chromosome.length - 2);
};
