import { NextApiRequest, NextApiResponse } from 'next'
import * as process from 'process'
// import { cookies } from "next/headers";
import  {getAdminHashes} from '/utils/hash.js'

/** 
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
*/
export default function handler(req, res) {
    try{
        if(req.method!=="POST"){
            res.status(405).json({error:"'/login' API only accepts the POST method, not "+req.method})
            return
        }
        if(req.headers['content-type']!=="application/json"){
            res.status(415).json({error:"'/login' API only accepts 'application/json' as the content type header!"})
            return
        }
        if(req.body.password!==process.env["USER_"+req.body.username]){
            res.status(401).json({error:"Wrong password or username!"})
            return
        }

        res.status(200).json({data:getAdminHashes()[req.body.username]})
    }catch(err){
        console.warn(err)
        res.json({error:"Something went wrong when attempting to authenticate!"})
    }
}

