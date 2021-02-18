import { label } from 'label-sync'
import { colors } from './common/prisma1'

export const area = (name: string) => label(name, colors.area)
