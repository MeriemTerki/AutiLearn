import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, updateDoc, query, where } from "firebase/firestore";

// Set up our config for Firebase
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Get all the courses from the Course table
export async function getAllCourses() {
    const data = await getDocs(collection(db, "Course"));
    data.docs.map((doc) => {
        console.log(doc.id);
        console.log(doc.data());
    });
}

// Get user info for a specific user
export async function getUserData(userID) {
    const userRef = doc(db, "Users", userID);
    const userDoc = await getDoc(userRef);

    console.log(userDoc.data());
}

// Edit user data
export async function editUserData(userID, newData) {
    const userRef = doc(db, "Users", userID);
    try {
        await updateDoc(userRef, newData);
        console.log("User data updated successfully");
    } catch (error) {
        console.error("Error updating user data: ", error);
    }
}

// Get all courses a specific user is in
export async function getUserJobs(userId) {
    const userCoursesRef = collection(db, "userCoursesIn");
    const userCoursesQuery = query(userJobsRef, where("userId", "==", userId));
    const userJobsSnapshot = await getDocs(userCoursesQuery);

    // Get the courses info using the retrieved courseId
    const coursesInfoPromises = userJobsSnapshot.docs.map(async (docSnap) => {
        const coursesId = docSnap.data().coursesId;
        const courseRef = doc(db, "Course", coursesId);
        const courseDoc = await getDoc(jobRef);
        if (courseDoc.exists()) {
            return { id: jobDoc.id, ...courseDoc.data() }; // Return the entire courses data
        } else {
            console.error(`Course with ID ${courseId} not found`);
            return null;
        }
    });

    const courseInfos = await Promise.all(courseInfoPromises);
    return courseInfos.filter(info => info !== null);
}
