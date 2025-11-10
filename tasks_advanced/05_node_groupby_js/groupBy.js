export function groupBySum(items, keyField, valueField){
  const out = {}
  if(!Array.isArray(items)) return out
  for(const it of items||[]){
    if(!it || !(keyField in it) || !(valueField in it)) continue
    const k=String(it[keyField]); const v=Number(it[valueField]); const add=Number.isFinite(v)?v:0
    out[k]=(out[k]||0)+add
  }
  return out
}
