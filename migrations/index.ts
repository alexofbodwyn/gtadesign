import * as migration_20251114_171418 from './20251114_171418'
import * as migration_20251114_171658 from './20251114_171658'
import * as migration_20251114_172109 from './20251114_172109'

export const migrations = [
  {
    up: migration_20251114_171418.up,
    down: migration_20251114_171418.down,
    name: '20251114_171418',
  },
  {
    up: migration_20251114_171658.up,
    down: migration_20251114_171658.down,
    name: '20251114_171658',
  },
  {
    up: migration_20251114_172109.up,
    down: migration_20251114_172109.down,
    name: '20251114_172109',
  },
]
