import React, { useState } from 'react'
export default function TodoList({ initialItems = [] }){
  const [items, setItems] = useState(initialItems)
  const [text, setText] = useState('')
  const add = ()=>{ const t=text.trim(); if(!t) return; setItems(p=>[...p,{id:String(Date.now()),text:t,done:false}]); setText('') }
  const toggle = id => setItems(p=>p.map(it=>it.id===id?{...it,done:!it.done}:it))
  const del = id => setItems(p=>p.filter(it=>it.id!==id))
  return (<div>
    <input aria-label="todo-input" value={text} onChange={e=>setText(e.target.value)} onKeyDown={e=>{if(e.key==='Enter') add()}}/>
    <button onClick={add}>Add</button>
    <ul>{items.map(it=>(<li key={it.id}>
      <span role="button" onClick={()=>toggle(it.id)} style={{textDecoration: it.done?'line-through':'none'}}>{it.text}</span>
      <button aria-label={`delete-${it.id}`} onClick={()=>del(it.id)}>Delete</button>
    </li>))}</ul>
  </div>)
}
