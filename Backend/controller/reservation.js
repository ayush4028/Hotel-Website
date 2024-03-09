import ErrorHandler from "../error/error";
import {Reservation} from "../models/reservationSchema.js"

export const senReservation = async(req, res, next) => {
    const {firstName, lastName, email, phone, date, time} = req.body;
    if(!firstName || !lastName || !email || !phone || !date|| !time){
        return next(new ErrorHandler("Please fill food reservation form!", 400));
    }
    try{
        await Reservation.create(firstName, lastName, email, phone, date, time);
        res.status(200).json({
            success: true,
            message: "Reservation sent successfully!"
        });
    }
    catch(error){
        
    }

}

