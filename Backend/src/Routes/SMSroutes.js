import { Router  } from "express"
import { sendMessage } from "../Controllers/sms.controllers"


const Smsroutes=Router()

Smsroutes.route("/send-message").post(sendMessage)


export default Smsroutes