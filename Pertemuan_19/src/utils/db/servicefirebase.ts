import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
  getDoc,
  doc,
  query,
  addDoc,
  where,
  updateDoc,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

const db = getFirestore(app);

//fungsi untuk mengambil semua data dari collection tertentu
export async function getData(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
}

//fungsi untuk mengambil data berdasarkan id
export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

//fungsi untuk login user dengan email dan password
export async function signIn(email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data) {
    return data[0];
  } else {
    return null;
  }
}

//fungsi untuk register user baru dengan email dan password, 
export async function signUp(
  userData: {
    email: string;
    fullName: string;
    password: string;
    role?: string;
  },
  callback: Function,
) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email),
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  //console.log("Query result:", data);
  if (data.length > 0) {
    //user belum ada -> boleh buat akun baru
    // await addDoc(collection(db, 'users'), userData);
    //console.log("User registered:", userData);
    callback({
      status: "error",
      message: "User already exists",
    });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = userData.role || "member";
    try {
      await addDoc(collection(db, "users"), userData);
      callback({
        status: "success",
        message: "User registered successfully",
      });
    } catch (error: any) {
      callback({
        status: "error",
        message: error.message,
      });
    }
  }
}

//fungsi untuk mengambil data user berdasarkan email, digunakan untuk login dengan google dan github
export async function getUserByEmail(email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const snapshot = await getDocs(q);

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data.length > 0 ? data[0] : null;
}

//fungsi untuk login dengan google dan github, jika user sudah ada maka update data, jika belum ada maka buat data baru
export async function signInOAuth(userData: any, callback: any) {
  try {
    const existingUser: any = await getUserByEmail(userData.email);

    if (existingUser) {
      userData.role = existingUser.role;
      await updateDoc(doc(db, "users", existingUser.id), userData);
      callback({
        status: true,
        message: "User login success",
        data: userData,
      });

    } else {
      userData.role = "member";
      await addDoc(collection(db, "users"), userData);
      callback({
        status: true,
        message: "User registered",
        data: userData,
      });
    }
  } catch (error) {
    callback({
      status: false,
      message: "OAuth login failed",
    });
  }
}