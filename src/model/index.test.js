import add from './index'
import test from 'ava'

test('ava should work', t =>
  t.is(add(1, 2), 3))