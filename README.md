# 🥈 HarmonAI: Intelligent Vocal Coach

> **2nd Place Winner** at CSHub Local Hack Day  
> **Built in a 12-hour sprint**

HarmonAI is a multimodal AI application designed to democratize vocal coaching. By leveraging **Google's Gemini 1.5 Flash API**, the platform analyzes user audio input for pitch, timbre, and texture, providing real-time feedback and generating personalized 7-day practice routines.

## 👥 Contributors

This project was developed by a team of three during a 12-hour hackathon.

| Team Member | Role | Key Contributions |
| :--- | :--- | :--- |
| **Camdyn Hamilton** | **Lead Architect & Backend** | Designed the **Monorepo architecture**, engineered the **Express/TypeScript backend**, and implemented the **Gemini 1.5 Flash** prompt engineering pipeline. |
| **Edison Tran** | **Frontend Engineer** | Built the interactive Vue.js interface and developed the **"Flappy Bird" style pitch-visualization game**. |
| **AJay Dela Cruz** | **Frontend UI Developer** | Implemented the visual interface, handled the responsive layout, and styled the core Vue.js components. |

## 🎥 Demo

https://github.com/user-attachments/assets/744d1fcd-4d5c-40d4-a54b-92f5fdff7c38

## ✨ Key Features

- **Multimodal Audio Analysis**: Captures raw audio and processes it using Gemini 1.5 Flash to analyze vocal patterns.
- **AI-Generated Routines**: Automatically generates a 7-day vocal exercise plan based on the user's specific weaknesses.
- **Comparative Benchmarking**: "Song Comparison" engine that compares user vocals against artist tracks.
- **Gamified Learning**: An interactive pitch-control game to practice vocal stability in real-time.

## 🛠️ Technical Stack

This project utilizes a **Monorepo** structure to separate concerns between the high-performance backend and the interactive frontend.

### **Backend (API & Logic)**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **AI Model:** Google Gemini 1.5 Flash
- **Utilities:** Multer (File Handling), CORS

### **Frontend (Client)**
- **Framework:** Vue.js
- **Build Tool:** Vite
- **Language:** TypeScript / JavaScript

## 📂 Project Structure

```text
├── apps/
│   ├── server/             # Backend API (Express + TypeScript)
│   │   ├── src/controllers # Request handlers
│   │   ├── src/services    # Business logic & AI integration
│   │   ├── src/routes      # API endpoints (e.g., /analyze)
│   │   └── src/types       # TypeScript definitions
│   ├── web-app/            # Frontend Application (Vue.js)
│       ├── src/components  # Reusable UI components
│       ├── src/pages       # Views (Record, PitchGame, Results)
│       └── src/utils       # Helpers (Audio processing)
├── uploads/                # Temporary storage for audio processing
├── package.json            # Monorepo root dependencies
└── tsconfig.json           # Shared TypeScript configuration
```

## 🚀 Setup and Installation

Follow these steps to run the development environment locally:

1. **Clone the repository:**
```Bash
git clone [https://github.com/your-username/harmonai-vocal-coach.git](https://github.com/your-username/harmonai-vocal-coach.git)
cd harmonai-vocal-coach
```
2. **Install dependencies:** This project uses a monorepo structure. Install dependencies at the root level.
```Bash
npm install
```
3. **Configure Environment:** Create a `.env` file in the root directory and add your Google Gemini API key:
```Bash
GEMINI_API_KEY=your_api_key_here
```
4. **Start the Development Suite:** Run the following command to start both the backend server and frontend client concurrently:
```Bash
npm run dev
```
- **Backend:** `http://localhost:8080`
- **Frontend:**   `http://localhost:5173`

## ⚖️ Disclaimer
_This project was built as a prototype for a hackathon. While fully functional, some features are optimized for demonstration speed rather than production scalability._
