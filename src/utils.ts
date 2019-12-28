import { label } from 'label-sync'

import { colors } from './labels/common/prisma1'
import { Label } from 'label-sync/dist/generator'

export type Dict<T> = { [key: string]: T }

export function reduceAreas(areas: string[]): Dict<Label> {
  return areas.reduce((acc, area) => {
    return {
      ...acc,
      [area]: label(colors.area),
    }
  }, {})
}

export function remove<T>(dict: Dict<T>, keys: string[]): Dict<T> {
  return Object.keys(dict)
    .filter(key => !keys.includes(key))
    .reduce((acc, key) => ({ ...acc, [key]: dict[key] }), {})
}
