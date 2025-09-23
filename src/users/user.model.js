import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        maxLengeth: [25, 'EL nombre no puede tener más de 25 caracteres'],
        trim: true
    },
    surname: {
         type: String,
        required: [true, 'El apellido es obligatorio'],
        maxLengeth: [25, 'EL apellido no puede tener más de 25 caracteres'],
        trim: true
    },
    username: {
        type: String,
        required: [true, 'El username es obligatorio'],
        unique: true,
        trim: true

    },
    email:{
         type: String,
         required: [true, 'El email es obligatorio'],
         unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'El email no es válido']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        minLenght: [8, 'La contraseña debe tener al menos 8 caracteres']
    },
    profilePicture:{
        type: String,
        default: ''
    },
    phone: {
        type: String,
        minLenght: [8, 'El teléfono debe de tener al menos 8 caracteres'],
        maxLengeth: [8, 'El teléfono no debe de tener más de 8 caracteres'],
        trim: true
    },
    role: {
        type: String,
        enum: ['ADMIN_ROLE', 'USER_ROLE'],
        default: 'USER_ROLE'
    },
    status: {
        type: Boolean,
        default: true
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
},{
    timestamps: true,
    versionKey: false
})
userSchema.methods.toJson = function(){
    const { password, _id, ...user} = this.ToObject();
    return{ uid: _id, ...user}
}
export default model('User', userSchema)