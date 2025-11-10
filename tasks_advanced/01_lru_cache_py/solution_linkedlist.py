class _Node:
    __slots__=("k","v","prev","next")
    def __init__(self,k=None,v=None): self.k=k; self.v=v; self.prev=None; self.next=None
class LRUCacheLL:
    def __init__(self, capacity:int):
        if capacity<=0: raise ValueError("capacity must be > 0")
        self.capacity=capacity; self.map={}
        self.head=_Node(); self.tail=_Node(); self.head.next=self.tail; self.tail.prev=self.head
    def _remove(self,node): p,n=node.prev,node.next; p.next=n; n.prev=p
    def _append_mru(self,node): last=self.tail.prev; last.next=node; node.prev=last; node.next=self.tail; self.tail.prev=node
    def get(self,key:int)->int:
        node=self.map.get(key); 
        if not node: return -1
        self._remove(node); self._append_mru(node); return node.v
    def put(self,key:int,value:int)->None:
        if key in self.map: node=self.map[key]; node.v=value; self._remove(node); self._append_mru(node); return
        if len(self.map)==self.capacity: lru=self.head.next; self._remove(lru); self.map.pop(lru.k,None)
        node=_Node(key,value); self.map[key]=node; self._append_mru(node)
