const { Schema, model } = require ('mongoose');

const UsuarioSchema = Schema({
    nombre      :{
        type:String,
        required: [true,'El nombre es Obligatorio']
    },
    correo      :{
        type:String,
        required: [true,'El Correo es Obligatorio']
    },
    password    :{
        type:String,
        required: [true,'La Contraseña es Obligatorio']
    },
    img         :{
        type:String
    },
    rol         :{
        type:String,
        required: true,
        // enum: ['ADMIN_ROLE','USER_ROLE','VENTAS_ROLE']
    },
    estado      :{
        type:Boolean,
        default: true
    },
    google      :{
        type:Boolean,
        default: true
    },

});

UsuarioSchema.methods.toJSON = function () {
    const { __v, password, ...usuario } = this.toObject();
    return usuario;
}

module.exports = model ('Usuario', UsuarioSchema);