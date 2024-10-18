import axios from "axios";

export default axios.create({
    baseURL: "http://hotel-booking-backend-azure.vercel.app/api/v1/customers",
})