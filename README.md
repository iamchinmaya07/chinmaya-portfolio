Markdown
# 🌌 Professional Developer Portfolio

A high-performance, minimalist digital showroom engineered to showcase full-stack development capabilities and computational projects. Built with **React** and **Vite**, the application is optimized for speed, responsiveness, and fluid user interactions.

---

## 🛠️ Tech Stack & Architecture

*   **Core Framework:** React.js & Vite (Ensuring sub-second initial load times and efficient builds)
*   **Styling Engine:** Tailwind CSS (Utility-first, mobile-first responsive design framework)
*   **Animation Engine:** Framer Motion (Hardware-accelerated scroll animations and micro-interactions)
*   **Integrations:** EmailJS (Serverless communication portal handling contact inquiries securely via environment variables)

---

## ✨ Key UI/UX Highlights

*   **Fluid Interactions:** Immersive scroll-linked animations, dynamic text gradients, and interactive components that bring the portfolio to life.
*   **Responsive Architecture:** Pixel-perfect layouts adapted across all breakpoints—from mobile viewports to desktop displays.
*   **Polished Header & Branding:** Custom-styled developer branding featuring clean typography and IDE-inspired visual cues.
*   **Serverless Contact Flow:** Fully operational message dispatch framework eliminating the need for bulky custom backend overhead.

---

## 🚀 Local Development Setup

### 1. Clone the repository
```bash
git clone [https://github.com/iamchinmaya07/chinmaya-portfolio.git](https://github.com/iamchinmaya07/chinmaya-portfolio.git)
cd chinmaya-portfolio
2. Install dependencies
Bash
npm install
3. Configure Environment Variables
Create a .env file in the root directory and append your secure communication credentials:

Code snippet
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
4. Launch local server
Bash
npm run dev
📦 Continuous Integration & Deployment
This project features a fully automated Vercel CI/CD pipeline linked directly to the repository's production branch.

To ship updates live instantly:

Bash
git add .
git commit -m "feat: enhance UI components"
git push origin main
The connected pipeline automatically captures the repository state, securely evaluates the environment variables, and deploys the build globally in seconds.

Crafted with 💻 by Chinmaya Sahoo