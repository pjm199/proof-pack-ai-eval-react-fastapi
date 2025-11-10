import React, { useMemo, useState } from 'react'
import TodoList from './TodoList'
export default function TodoListWithFilters({ initialItems=[] }){
  const [filter, setFilter] = useState('all')
  const [items, setItems] = useState(initialItems)
  const filtered = useMemo(()=>{
    if(filter==='active') return items.filter(i=>!i.done)
    if(filter==='done') return items.filter(i=>i.done)
    return items
  },[items,filter])
  const add = (text)=> setItems(p=>[...p,{id:String(Date.now()), text, done:false}])
  const toggle = (id)=> setItems(p=>p.map(it=>it.id===id?{...it,done:!it.done}:it))
  const del = (id)=> setItems(p=>p.filter(it=>it.id!==id))
  return (<div>
    <div role="toolbar" aria-label="filters">
      <button aria-pressed={filter==='all'} onClick={()=>setFilter('all')}>All</button>
      <button aria-pressed={filter==='active'} onClick={()=>setFilter('active')}>Active</button>
      <button aria-pressed={filter==='done'} onClick={()=>setFilter('done')}>Done</button>
    </div>
    <TodoList internalOverride initialItems={filtered} onAdd={add} onToggle={toggle} onDelete={del}/>
  </div>)
}
