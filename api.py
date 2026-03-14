from fastapi import FastAPI
from generater_pass import password_generater
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

api = FastAPI()

api.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
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
