from fastapi.testclient import TestClient
from app_async import app
c=TestClient(app)
def test_ok(): r=c.get('/fib_async?n=12'); assert r.status_code==200; assert r.json()=={'n':12,'value':144}
def test_invalid(): r=c.get('/fib_async?n=10001'); assert r.status_code==422
