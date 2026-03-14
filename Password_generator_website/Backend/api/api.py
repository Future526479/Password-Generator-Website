from fastapi import FastAPI
from generater.generater_pass import password_generater
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

api = FastAPI()

origins = [
    "http://localhost:5173"
]

api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Password_Length(BaseModel):
    length: int

@api.post("/generater")
def password(data: Password_Length):
    password = password_generater(data.length)
    return {"password": password}
