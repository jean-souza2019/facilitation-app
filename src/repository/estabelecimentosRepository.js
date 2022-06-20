import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore'
import { searchByAddress } from "../services/LocationService"
import db from "../services/database/firebaseConnect"

export const criarEstabelecimentos = (dados, uid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let coordenadas = await searchByAddress(dados.endereco)
      let lat = coordenadas.lat
      let lng = coordenadas.lng
      dados.lat = lat
      dados.lng = lng
      dados.uid = uid
      const docId = await addDoc(collection(db, "estabelecimentos"), dados)
      resolve(docId)
    } catch (error) {
      reject(error)
    }
  })
}

export const buscaEstabelecimentos = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const colecao = collection(db, "estabelecimentos")
      const querySnapshot = await getDocs(query(colecao))
      let registros = []
      querySnapshot.forEach((item) => {
        let data = item.data()
        data.key = item.id
        registros.push(data)
      })
      resolve(registros)
    } catch (error) {
      reject(error)
    }
  })
}

export const deletarEstabelecimento = (key) => {
  return new Promise(async (resolve, reject) => {
    try {
      await deleteDoc(doc(db, "estabelecimentos", key))
      resolve()
    } catch (error) {
      console.log(error)
      reject()
    }
  })
}