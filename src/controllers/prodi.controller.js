import mongoose from "mongoose";
import FakultasModel from "../model/fakultas.model.js";
import ProdiModel from "../model/prodi.model.js";
import { storeProdiSchema } from "../schemas/prodi.schema.js";
import { apiResponse, apiResponseValidation } from "../utils/apiResponse.js";



class ProdiController{
    static async index(req, res){}

    static async show(req, res){}

    static async store(req, res){
        const result = storeProdiSchema.safeParse(req.body)

        if (!result.success) {
            return apiResponseValidation({
                res,
                errors : result.error
            })
        }



        const { kode, nama_prodi, fakultas_id} = result.data

        const isExist = await FakultasModel.exists({
            _id : new mongoose.Types.ObjectId(fakultas_id)
        })

        if(!isExist){
            return apiResponse({
                res,
                status: 404,
                message: "Fakultas not found"
            })
        }

        const newProdi = await ProdiModel.create({
            kode,
            nama_prodi,
            fakultas: fakultas_id
        })

        return apiResponse({
            res,
            status: 201,
            message: "Prodi berhasil dibuat",
            data: newProdi
        })
    }

    static async update(req, res){}

    static async delete(req, res){}
}

export default ProdiController