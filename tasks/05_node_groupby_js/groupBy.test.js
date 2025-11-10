import test from 'node:test'
import assert from 'node:assert/strict'
import { groupBySum } from './groupBy.js'
test('basic', ()=>{
  const items=[{region:'EU',revenue:10},{region:'US',revenue:5},{region:'EU',revenue:7}]
  assert.deepEqual(groupBySum(items,'region','revenue'), {EU:17, US:5})
})
test('robustness', ()=>{
  const items=[{region:'EU',revenue:'x'},{region:'EU',revenue:3},{region:'ASIA'}]
  assert.deepEqual(groupBySum(items,'region','revenue'), {EU:3})
})
