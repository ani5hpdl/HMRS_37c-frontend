import axios from 'axios';

const ApiFormData = axios.create({
    baseURL : import.meta.env.VITE_API_BASE_URL,
    withCredentials : true,
    headers : {
        "Content-Type" : "multipart/form-data",
    },
});

const Api = axios.create({
    baseURL : import.meta.env.VITE_API_BASE_URL,
    withCredentials : true,
    headers : {
        "Content-Type" : "application/json"
    }
});

const config = {
    headers : {
        'authorization' : `Bearer ${localStorage.getItem("token")}`
    }
}

export const login = (data) => Api.post('/api/user/login',data);

export const getRooms = () => Api.get('/api/rooms/getAllRooms',config);

export const createRoom = (data) => Api.post('/api/rooms/createRooms',data,config);

export const updateRoom = (id,data) => Api.put(`/api/rooms/updateRoom/${id}`,data,config);

export const deleteRoom = (id) => Api.delete(`/api/rooms/delete/${id}`,config);

export const getAvailableRooms = (params) => Api.get('/api/rooms/available', { params, ...config });

export const getRoomTypes = () => Api.get('/api/room-types/getAllRoomTypes',config);

export const createRoomType = (data) => Api.post('/api/room-types/createRoomType',data,config);

export const updateRoomType = (id,data) => Api.put(`/api/room-types/updateRoomType/${id}`,data,config);

export const deleteRoomType = (id) => Api.delete(`/api/room-types/delete/${id}`,config);

export const getAmenities = () => Api.get('/api/room-amenities/getAllAmenities',config);

export const createAmenity = (data) => Api.post('/api/room-amenities/createAmenity',data,config);

export const updateAmenity = (id,data) => Api.put(`/api/room-amenities/updateAmenity/${id}`,data,config);

export const deleteAmenity = (id) => Api.delete(`/api/room-amenities/delete/${id}`,config);