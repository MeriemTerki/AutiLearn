/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "autilearn-d8f45.firebaseapp.com",
  projectId: "autilearn-d8f45",
  storageBucket: "autilearn-d8f45.appspot.com",
  messagingSenderId: "324769562921",
  appId: "1:324769562921:web:4dab998b3e7bcacf49f738",
  measurementId: "G-V8G5V6L4Q1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service

// Initialize Firestore
export const db = getFirestore(app, { useFetchStreams: false });
export const auth = getAuth(app);

// Get all the courses from the Course table
export async function getAllCourses() {
  const data = await getDocs(collection(db, "Course"));
  data.docs.forEach((doc) => {
    console.log(doc.id);
    console.log(doc.data());
  });
}

// Get user info for a specific user
export async function getUserData(userID) {
  const userRef = doc(db, "Users", userID);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    console.log(userDoc.data());
  } else {
    console.error("No such user!");
  }
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
export async function getUserCourses(userId) {
  const userCoursesRef = collection(db, "userCoursesIn");
  const userCoursesQuery = query(userCoursesRef, where("userId", "==", userId));
  const userCoursesSnapshot = await getDocs(userCoursesQuery);

  // Get the courses info using the retrieved courseId
  const coursesInfoPromises = userCoursesSnapshot.docs.map(async (docSnap) => {
      const coursesId = docSnap.data().coursesId;
      const courseRef = doc(db, "Course", coursesId);
      const courseDoc = await getDoc(courseRef);
      if (courseDoc.exists()) {
          return { id: courseDoc.id, ...courseDoc.data() }; // Return the entire courses data

      } else {
          console.error(`Course with ID ${courseId} not found`);
          return null;
      }
  });

  const courseInfos = await Promise.all(courseInfoPromises);
  return courseInfos.filter(info => info !== null);
}
    const courseInfos = await Promise.all(courseInfoPromises);
    return courseInfos.filter((info) => info !== null);
  } catch (error) {
    console.error("Error fetching user courses:", error);
    throw error;
  }
}
