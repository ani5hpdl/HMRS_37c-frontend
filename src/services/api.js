import axios from  'axios';

const ApiFormData =axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials:true,
    headers:{
        "Content-Type":"multipart/form-data",

    },
});
const Api =axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials:true,
    headers:{
        "Content-Type":"application/json",

    },

})

const config ={
    headers:{
        // 'authorization':`Bearer ${localStorage.getItem("token")}`
        'authorization':`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc2OTA2MTQyNywiZXhwIjoxNzY5NjY2MjI3fQ.83dGd8_BJtGtPpL8UikIEZfTA2zctTsB6HGeXhYri7E`
    }
}

export const createUserApi =(data) => Api.post("api/user/register", data);

export const getAllRooms = () => Api.get("/api/rooms/getAllRooms",config);

// Send password reset email
export const forgotPasswordApi = (data) => Api.post("/api/auth/forgot-password", data);

// Reset password with token
export const resetPasswordApi = (token, data) => Api.post(`/api/auth/reset-password/${token}`, data);

// Verify reset token validity
export const verifyResetTokenApi = (token) => Api.get(`/api/auth/verify-reset-token/${token}`);

export const createReservation = (data) => Api.post("/api/reservations/reservations", data);