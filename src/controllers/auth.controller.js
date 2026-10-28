import { apiResponse, apiResponseValidation } from "../utils/response"
import { registerSchema } from "../schemas/auth.schema.js";

class AuthController{
    static async register(req,res){
    const result = registerSchema.safeParse(req.body)

    if (!result.success) {
        return apiResponseValidation({
            res,
            errors : result.error
        })
    }

    const {name, email, password} = result.data

    const newUser = await userModel.create({
        name,
        email,
        password : await passwordHelper.hash(password)
        })

    return apiResponse({
        res,
        status: 201,
        message: 'register berhasil'
    })
    }


    static async login(req,res){

    }
}