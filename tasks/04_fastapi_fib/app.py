from functools import lru_cache
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
app = FastAPI(title="Fibonacci API")
@lru_cache(maxsize=None)
def fib(n:int)->int:
    if n<2: return n
    return fib(n-1)+fib(n-2)
class FibOut(BaseModel):
    n:int; value:int
@app.get("/fib", response_model=FibOut)
def get_fib(n:int):
    if n<0 or n>10000: raise HTTPException(status_code=422, detail="n must be in [0,10000]")
    return FibOut(n=n, value=fib(n))
