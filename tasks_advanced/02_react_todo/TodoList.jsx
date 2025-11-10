import React, { useState } from 'react'
export default function TodoList({ initialItems = [], onAdd, onToggle, onDelete, internalOverride=false }) {
  const [items, setItems] = useState(initialItems)
  const [text, setText] = useState('')
  const addItem = () => {
    if (internalOverride && typeof onAdd === 'function') { const t=text.trim(); if(!t) return; onAdd(t); setText(''); return; }
    const t = text.trim(); if (!t) return
    setItems(prev => [...prev, { id: String(Date.now()), text: t, done: false }]); setText('')
  }
  const toggle = (id) => { if(internalOverride && typeof onToggle==='function'){ onToggle(id); return }
    setItems(prev => prev.map(it => it.id === id ? { ...it, done: !it.done } : it)) }
  const removeItem = (id) => { if(internalOverride && typeof onDelete==='function'){ onDelete(id); return }
    setItems(prev => prev.filter(it => it.id !== id)) }
  return (<div>
    <input aria-label="todo-input" value={text} onChange={e=>setText(e.target.value)} onKeyDown={e=>{if(e.key==='Enter') addItem()}}/>
    <button onClick={addItem}>Add</button>
    <ul>{items.map(it=>(<li key={it.id}>
      <span role="button" onClick={()=>toggle(it.id)} style={{textDecoration: it.done?'line-through':'none'}}>{it.text}</span>
      <button aria-label={`delete-${it.id}`} onClick={()=>removeItem(it.id)}>Delete</button>
    </li>))}</ul>
  </div>)
}
