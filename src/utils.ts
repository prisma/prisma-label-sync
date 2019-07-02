import { colors } from './labels/common/prisma1'

export function reduceAreas(areas: string[]) {
  return areas.reduce((acc, area) => {
    return {
      ...acc,
      [area]: colors.area,
    }
  }, {})
}
