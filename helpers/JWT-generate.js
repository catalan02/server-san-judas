import jwt from 'jsonwebtoken'
import { token } from 'morgan';

export const generarJWT = (vid = '',email = '') =>{
    return new Promise((resolve, reject) =>{
        const playload = {vid, email };
        jwt.sign(
            playload,
            process.env.TOKEN_KEY,
            {
                expiresIn: '8',
            },
            (err, token) =>{
                if (err){
                    console.error((err));
                    reject('Error al generar el token: ' + err.message);
                } else{
                    revolve(token);
                }
            }
        );
    });
};