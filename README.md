# 🖼️ Image Background Remover App

A simple full-stack web application to remove image backgrounds using AI.

This project was developed by **Dilshan** using **Next.js (TypeScript)** for the frontend and **Python (FastAPI)** for the backend, with the help of the `rembg` library for background removal.

---

## 🚀 Features

- Upload any image and remove its background instantly
- Real-time preview of original and processed images
- Clean and responsive UI
- FastAPI backend with AI-powered image processing
- Fully deployable on Railway

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, TypeScript, Axios
- **Backend**: Python, FastAPI, rembg
- **Styling**: Tailwind CSS (optional)
- **Deployment**: Railway

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/image-bg-remover.git
cd image-bg-remover
```

---

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Run the app:

```bash
npm run dev
```

---

### 3. Backend Setup

```bash
cd ../backend
pip install -r requirements.txt
```

Create `main.py` if not already created and run the server:

```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

---

## 🌐 Deployment

- Deploy both frontend and backend on [Railway](https://adequate-nourishment-production-9434.up.railway.app/)
- Set `NEXT_PUBLIC_API_URL` in Railway frontend environment variables

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).---

## 🔗 Live Project

Check out the live version of the app here: [View Live App](https://your-live-app-link.railway.app)
