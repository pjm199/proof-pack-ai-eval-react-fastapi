from fastapi.testclient import TestClient
from app import app
c=TestClient(app)
def test_ok(): r=c.get('/fib?n=10'); assert r.status_code==200; assert r.json()=={'n':10,'value':55}
def test_invalid(): r=c.get('/fib?n=-1'); assert r.status_code==422
