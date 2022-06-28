import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, onValue } from "firebase/database";
import moment from 'moment'
import 'moment/locale/id'
moment.locale('id')

const firebaseConfig = {
    apiKey: "AIzaSyAcAA8AFULWacjgHkBlp8alL0Ly8JvLsZM",
    authDomain: "responsimikro.firebaseapp.com",
    databaseURL: "https://responsimikro-default-rtdb.firebaseio.com",
    projectId: "responsimikro",
    storageBucket: "responsimikro.appspot.com",
    messagingSenderId: "165338116429",
    appId: "1:165338116429:web:c5146567f78055598d8704"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        if (err.code === "auth/") {
            return {
                success: false,
                message: "Pos-el atau Kata sandi salah!",
            };
        }
        else {
            return {
                success: false,
                message: "Terjadi kesalahan!",
            };
        }
    }
};

const registerWithEmailAndPassword = async (name, username, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            username: username,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
    }
};

const logout = () => {
    signOut(auth);
};

const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
        .then(function () {
            alert('Link penggantian password telah dikirimkan!, harap cek email anda')
        }).catch(function (e) {
            console.log(e)
        })
}

const getSensorData = () => {
    const dbRef = ref(database, "SensorData/");
    let data = {}
    onValue(dbRef, (snapshot) => {
        const dataFromFirebase = snapshot.val();
        data = {
            kelembabanTanah: dataFromFirebase.SoilMoisture,
            suhuTanah: dataFromFirebase.SoilTemperature,
            kelembabanUdara: dataFromFirebase.AirHumidity,
            suhuUdara: dataFromFirebase.AirTemperature,
        }
    });
    return data;
};

const getChartData = () => {
    const dbRef = ref(database, "Log/");
    let listDate = [];
    let data = [];
    onValue(dbRef, (snapshot) => {
        const dataFromFirebase = snapshot.val();
        Object.keys(dataFromFirebase).forEach(function (key) {
            const date = moment.unix(key).format('LL');
            let total = dataFromFirebase[key].TotalUsage;
            if (!listDate.includes(date)) {
                listDate.push(date);
                data.push({ label: date, data: total });
            } else {
                let obj = data.find(o => o.label === date);
                obj['data'] += total;
            }
        });
    });
    return data;
};

const getDevices = () => {
    const dbRef = ref(database, "Devices/");
    let data = [];
    onValue(dbRef, (snapshot) => {
        const dataFromFirebase = snapshot.val();
        Object.keys(dataFromFirebase).forEach(function (key) {
            data.push({
                name: dataFromFirebase[key].name,
                status: dataFromFirebase[key].status,
                id: key,
            });
        }
        );
    }
    );
    return data;
}

export {
    auth,
    db,
    database,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    getSensorData,
    getChartData,
    getDevices,
    forgotPassword,
}
