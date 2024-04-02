import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;
  console.log(req.body)
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill food reservation form!", 400));
  }
  try {
    await Reservation.create({firstName, lastName, email, phone, date, time});
    res.status(200).json({
      success: true,
      message: "Reservation sent successfully!",
    });
  } catch (error) {
    console.log(error);
    
    if (error.name === "ValidationError") {
      const validationErrors = Object
        .values(error.errors)
        .map((error) => error.message);
        return next(new ErrorHandler(validationErrors.join(' , '), 400));
    }
  }
};
