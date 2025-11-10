from collections import OrderedDict
class LRUCache:
    def __init__(self, capacity:int):
        if capacity<=0: raise ValueError("capacity must be > 0")
        self.capacity=capacity; self.od=OrderedDict()
    def get(self,k:int)->int:
        if k not in self.od: return -1
        self.od.move_to_end(k, last=True); return self.od[k]
    def put(self,k:int,v:int)->None:
        if k in self.od: self.od[k]=v; self.od.move_to_end(k, last=True); return
        if len(self.od)==self.capacity: self.od.popitem(last=False)
        self.od[k]=v
