
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjw7ShAppZjUbly50iDua5HaF6fl8W9ic",
  authDomain: "ai-readiness-form-ba05e.firebaseapp.com",
  projectId: "ai-readiness-form-ba05e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const testData = [
    { name: "Alpha Corp", company: "Alpha", email: "contact@alpha.com", score: 2, answers: [0,0,0,1,0,0,1,0] },
    { name: "Beta Ltd", company: "Beta", email: "info@beta.com", score: 5, answers: [1,1,1,0,1,0,1,0] },
    { name: "Gamma Inc", company: "Gamma", email: "tech@gamma.com", score: 8, answers: [1,1,1,1,1,1,1,1] },
    { name: "Delta LLC", company: "Delta", email: "delta@delta.com", score: 6, answers: [1,1,0,1,1,1,1,0] }
];

async function seed() {
    console.log("Seeding data...");
    for (const item of testData) {
        try {
            await addDoc(collection(db, "ai_readiness_results"), {
                ...item,
                createdAt: serverTimestamp()
            });
            console.log(`Added ${item.company}`);
        } catch(e) {
            console.error("Error adding", e);
        }
    }
    console.log("Seeding complete. Check dashboard.html.");
}

seed();
