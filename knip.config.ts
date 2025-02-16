/**************************************************************************************/

import { type KnipConfig } from 'knip'

/**************************************************************************************/

const config = {
  ignoreExportsUsedInFile: true,
  workspaces: {
    'apps/*': {
      entry: '{index,main}.ts',
      project: '**/*.ts'
    },
    'packages/*': {
      entry: '{index,main}.ts',
      project: '**/*.ts'
    }
  }
} satisfies KnipConfig

/**************************************************************************************/

export default config

/**************************************************************************************/