import unittest
from solution_linkedlist import LRUCacheLL
class T(unittest.TestCase):
    def test_flow(self):
        c=LRUCacheLL(2); c.put(1,1); c.put(2,2)
        self.assertEqual(c.get(1),1); c.put(3,3); self.assertEqual(c.get(2),-1)
        c.put(4,4); self.assertEqual(c.get(1),-1); self.assertEqual(c.get(3),3); self.assertEqual(c.get(4),4)
    def test_update(self):
        c=LRUCacheLL(1); c.put(1,1); c.put(1,9); self.assertEqual(c.get(1),9)
    def test_bad(self):
        with self.assertRaises(ValueError): LRUCacheLL(0)
if __name__=='__main__': unittest.main()
