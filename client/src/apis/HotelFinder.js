import axios from "axios";

export default axios.create({
    baseURL: "https://hotel-booking-backend-azure.vercel.app/api/v1/hotels",
})