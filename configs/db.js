'use strict'

import mongoose, { mongo } from 'mongoose'

export const dbConnection =async  () =>{
    try{
        mongoose.connection.on('error', () => {
            console.log('MongoDB | no se pudo conectar a MongoDB')
            mongoose.disconnect()
        })
        mongoose.connection.on('connecting', () =>{
            console.log('MongoDB | intentando conectar a MongoDB')
        })
        mongoose.connection.on('connected', () => {
            console.log('MongoDB | conectado a MongoDB')
        })
        mongoose.connection.on('open', () =>{
            console.log('MongoDB | conectado a la base de datos')
        })
        mongoose.connection.on('reconected', () =>{
            console.log('MongoDB | reconectado a MongoDB')
        })
        mongoose.connection.on('disconnected', () =>{
            console.log('MongoDB | desconectado de MongoDB')
        }) 
        
         await mongoose.Connection.connect(process.env.URI_MONGODB, {
            serverSelectionTimeoutMS: 5000, 
            maxPoolSize: 10
         })
          console.log(`Error al conectar la db: ${error}`)
    }catch(error){

    }
}
