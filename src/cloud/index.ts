import { toLabelSyncConfig } from '../labelsync-wrapper'
import { repos } from './repos'

export const cloudRepos = toLabelSyncConfig(repos).repos
