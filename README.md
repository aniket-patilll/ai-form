# AI Readiness Audit & Dashboard

A comprehensive web application designed to assess an organization's readiness for Artificial Intelligence adoption. This project includes a user-facing **Audit Form** for data collection and an administrative **Dashboard** for analyzing submissions.

## 🚀 Features

### 1. AI Readiness Audit Form (`index.html`)
A responsive, multi-step wizard that guides users through an assessment of their data and AI infrastructure.

*   **User Details Collection**: Captures Name, Company, and Email with validation.
*   **Interactive Questionnaire**: 8 key questions covering data strategy, governance, quality, and platform capabilities.
*   **Instant Scoring & Feedback**: Calculates a readiness score (0-8) and provides immediate, actionable feedback based on the result (e.g., "AI Ready", "Momentum", "Not Ready").
*   **Responsive Design**: Optimized for seamless embedding on websites (e.g., WordPress) and fully functional on mobile devices.
*   **Firebase Integration**: Automatically saves submission data to Firestore.

### 2. Admin Dashboard (`dashboard.html`)
A powerful interface for visualizing and managing audit results.

*   **Key Metrics**: Displays real-time KPIs including Total Submissions, Average Score, and AI Readiness Percentage.
*   **Data Table**: Lists all submissions with sortable columns for Date, Name, Company, Score, and Status.
*   **Advanced Filtering**:
    *   **Search**: Instantly filter by Name or Company.
    *   **Status Filter**: View submissions by tier (AI Ready, Momentum, Not Ready).
*   **Detailed View**: Click "View" on any row to open a modal showing the full breakdown of answers for that submission.
*   **Responsive Layout**: Works on desktop and mobile, with a fixed header and adaptive data tables.

## 🛠️ Technology Stack

*   **Frontend**: HTML5, CSS3, JavaScript (ES6+). No external UI frameworks used for maximum performance and customizability.
*   **Backend / Database**: Google Firebase (Firestore) for real-time data storage and retrieval.
*   **Deployment**: Static file hosting (e.g., GitHub Pages, Netlify, or embedded in WordPress).

## 📂 Project Structure

```
/
├── index.html          # Main Audit Form (User Facing)
├── dashboard.html      # Admin Dashboard (Internal Use)
├── seed_data.js        # Script to populate database with test data
└── README.md           # Project Documentation
```

## ⚙️ Setup & Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/ai-readiness-audit.git
    ```
2.  **Firebase Configuration**:
    *   Create a project at [console.firebase.google.com](https://console.firebase.google.com/).
    *   Add a **Web App** to your project to get your `firebaseConfig` object.
    *   **IMPORTANT**: Open `index.html` and `dashboard.html`. Find the `firebaseConfig` object and replace the placeholder values (`Your API Key`, etc.) with your actual credentials:
        ```javascript
        const firebaseConfig = {
            apiKey: "AIzaSy...",
            authDomain: "your-project.firebaseapp.com",
            projectId: "your-project-id"
        };
        ```
    *   **Firestore Database**: Create a Firestore database in **Production mode** or **Test mode**.
    *   **Security Rules**: Update Firestore Rules to allow read/write access (see Security section below).
3.  **Run Locally**:
    *   Simply open `index.html` or `dashboard.html` in your web browser.
    *   Alternatively, use a local server (e.g., generic `http-server` or `Live Server` in VS Code) to avoid CORS issues with modules.

## 🎨 Customization

*   **Theme**: Colors and fonts are defined in CSS variables (`:root`) in both HTML files. deeply customizable to match your brand.
*   **Questions**: Edit the `QUESTIONS` array in `dashboard.html` and the HTML content in `index.html` to modify the audit criteria.

## � Security & API Keys

You might notice the `firebaseConfig` is exposed in the HTML files. **This is standard and safe for Firebase Web Apps**, provided you follow these steps:

1.  **Security Rules**: The real security lies in your Firestore Security Rules. Ensure you restrict who can read/write data.
    *   *Example*: Only allow `create` for anyone, but `read` only for authenticated admins (or for now, public read if that's the intended design, but be careful).
2.  **Domain Restriction**: Go to the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) > Credentials.
    *   Edit your **API Key**.
    *   Under **Application restrictions**, select **HTTP referrers (web sites)**.
    *   Add the URLs where your app will be hosted (e.g., `your-domain.com`, `your-username.github.io`).
    *   This prevents others from using your API key on their own websites.

