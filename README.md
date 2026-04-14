# 🚀 Interview IQ – AI Interview Agent

**Interview IQ** is an advanced **AI-powered interview preparation platform** built using the **MERN stack**. It simulates real-world interview experiences with intelligent questioning, real-time voice interaction, and detailed performance analytics.



## 🌟 Key Highlights

- 🎯 AI-based personalized interviews  
- 🎤 Real-time voice-to-voice interaction  
- 📊 Smart performance analytics  
- 📄 Auto-generated PDF reports  
- 💳 Integrated payment & credit system  



## 🚀 Features

### 🧠 1. Smart Resume Analysis
- Upload resume (PDF format)
- Extracts:
  - Skills  
  - Projects  
  - Job roles  
- Generates personalized interview questions



### 🎯 2. Adaptive Interview Engine

Each interview consists of **5 structured questions**:

| Level  | Questions |
|--------|----------|
| Easy   | Q1, Q2   |
| Medium | Q3, Q4   |
| Hard   | Q5       |

- Based on:
  - Role  
  - Experience  
  - Mode (HR / Technical)



### 🎤 3. Voice-to-Voice Interaction
- AI speaks questions using speech synthesis  
- User answers via voice (speech recognition)  
- Real-time transcription  
- Avatar-based interaction for realistic experience  


### 📊 4. Real-Time Feedback & Scoring
Each response is evaluated on:
- Confidence  
- Communication  
- Technical Accuracy  

⏱ Time Limits:
- Easy: 60 sec  
- Medium: 90 sec  
- Hard: 120 sec  

❌ No answer → Score = 0  



### 📈 5. Performance Analytics & Reports
- Visual analytics dashboard  
- Performance tracking using charts  
- Downloadable PDF report  



### 💰 6. Credit System & Payments
- 🎁 100 free credits on signup  
- 🎯 1 Interview = 50 credits  
- 💳 Secure payment integration  



## 🛠️ Tech Stack

### 💻 Frontend
- React (Vite)  
- Tailwind CSS  
- Redux Toolkit  
- Recharts  
- jsPDF  

### ⚙️ Backend
- Node.js  
- Express.js  

### 🗄️ Database
- MongoDB (Mongoose)

### 🔐 Authentication
- Firebase (Google Login)  
- JWT (HTTP-only cookies)

### 🤖 AI Integration
- OpenRouter API (GPT-4o mini)

### 💳 Payments
- Razorpay  


## ⚙️ Environment Variables

### 🔹 Server (`/server/.env`)
```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPEN_ROUTER_API_KEY=your_open_router_key
RAZORPAY_KEY_ID=your_razorpay_id
RAZORPAY_KEY_SECRET=your_razorpay_secret

🔹 Client (/client/.env)
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_RAZORPAY_KEY_ID=your_razorpay_id
🛠️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/ronakg-tech/AI_Interview_Agent.git
cd AI_Interview_Agent
2️⃣ Backend Setup
cd server
npm install
npm run dev
3️⃣ Frontend Setup
cd client
npm install
npm run dev
📁 Project Structure
AI_Interview_Agent/
│
├── client/        # React frontend
├── server/        # Express backend
│
├── server/public  # Resume uploads (temporary)
├── client/assets  # UI & avatar files
🌐 Deployment
Backend → Render (Web Service)
Frontend → Render (Static Site)

⚠️ Important:

Add rewrite rules for React routing
Set environment variables properly
🎯 Future Improvements
📹 Video-based interview mode
📊 Advanced analytics dashboard
🌍 Multi-language support
🧠 More AI model integrations
🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

🔗 GitHub: https://github.com/ronakg-tech

⭐ Final Note

If you found this project helpful, don't forget to ⭐ the repository!
