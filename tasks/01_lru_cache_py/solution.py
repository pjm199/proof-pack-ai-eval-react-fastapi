from collections import OrderedDict
class LRUCache:
    def __init__(self, capacity: int):
        if capacity <= 0:
            raise ValueError("capacity must be > 0")
        self.capacity = capacity
        self.od = OrderedDict()
    def get(self, key: int) -> int:
        if key not in self.od: return -1
        self.od.move_to_end(key, last=True)
        return self.od[key]
    def put(self, key: int, value: int) -> None:
        if key in self.od:
            self.od[key] = value; self.od.move_to_end(key, last=True); return
        if len(self.od) == self.capacity: self.od.popitem(last=False)
        self.od[key] = value
