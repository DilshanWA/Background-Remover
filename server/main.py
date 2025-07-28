from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from rembg import remove
from io import BytesIO

app = FastAPI()

# Allow CORS for local frontend (Next.js)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "https://adequate-nourishment-production-9434.up.railway.app"
    ],  # Change to your domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Server is running 🚀"}


@app.post("/remove-background")
async def remove_background(file: UploadFile = File(...)):
    image_data = await file.read()
    result = remove(image_data)

    return StreamingResponse(BytesIO(result), media_type="image/png")
