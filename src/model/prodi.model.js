import mongoose from 'mongoose';

const schema = new mongoose.schema(
    {
    kode : {
        type : String,
        required : true,
        unique : true
    },
    nama_prodi: {
        type : String,
        required : true,
        unique : true
    },
fakultas: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "fakultas", 
      required: true,
    },

    timestamps : true,
}
);

const ProdiModel = mongo.model("prodi", schema)
export default ProdiModel