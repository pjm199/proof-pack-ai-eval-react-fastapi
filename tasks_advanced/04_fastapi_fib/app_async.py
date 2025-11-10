import asyncio
from functools import lru_cache
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
app=FastAPI(title="Fibonacci API (async)")
@lru_cache(maxsize=None)
def fib(n:int)->int:
    if n<2: return n
    return fib(n-1)+fib(n-2)
class FibOut(BaseModel):
    n:int; value:int
@app.get("/fib_async", response_model=FibOut)
async def get_fib_async(n:int):
    if n<0 or n>10000: raise HTTPException(status_code=422, detail="n must be in [0,10000]")
    val = await asyncio.to_thread(fib, n)
    return FibOut(n=n, value=val)
