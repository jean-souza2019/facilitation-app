import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore';
import db from "../services/database/firebaseConnect"


export const createUser = (nomeCompleto, email, senha) => {
    return new Promise((resolve, reject) => {
        try {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, senha)
                .then(async (userCredential) => {
                    let dados = {
                        nomeCompleto,
                        email,
                        senha
                    }

                    await addDoc(collection(db, "usuarios"), dados)
                    resolve("Usuário criado com sucesso!")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode === "auth/invalid-email")
                        reject("E-mail informado incorretamente!")
                    else {
                        console.log("error",error)
                        reject("Verifique suas credenciais (senha, email) e tente novamente!")
                    }
                });
        } catch (error) {
            reject(error)
        }
    })
}

export const login = (email, senha) => {
    return new Promise((resolve, reject) => {
        try {
            const auth = getAuth()
            signInWithEmailAndPassword(auth, email, senha)
                .then((data) => {
                    const user = data.user
                    resolve(user)
                })
                .catch(error => {
                    const errorCode = error.code
                    if (errorCode === "auth/user-not-found")
                        reject("Usuário não encontrado!")
                    else
                        reject("Usuário ou senha inválidos!")

                })
        } catch (error) {
            reject(error)
        }
    })
}

export const logoff = () => {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
        signOut(auth).then(() => {
            resolve()
        }).catch((error) => {
            reject(error)
        });

    })
}