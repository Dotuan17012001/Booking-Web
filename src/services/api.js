import axios from '../utils/axios-customize';

//Login Admin/Staff
export const callLoginAdmin = (email, password) => {
    return axios.post('/api/v2/auth/login', { email, password })
}

//Login User
export const callLoginUser = (email, password, device_token) => {
    return axios.post('/api/auth/login', { email, password, device_token })
}

//Register User
export const callLRegisterUser = (email, password, display_name, phone_number, detail_address) => {
   
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("display_name", display_name);
    data.append("phone_number", phone_number);
    data.append("detail_address", detail_address);
    
    return axios.post('/api/register', data)
}

// Customer -- /api/v2/customer/index?page=1&perpage=5&search=1%20ng%C6%B0%C6%A1%CC%80i
export const callGetAllCustomer = (query) => {
    return axios.get(`/api/v2/customer/${query}`)
}
// Update status customer
export const callUpdateStatusCustomer = (id, status) => {
    const statusData = new FormData();
    statusData.append("status", status);
    return axios.post(`/api/v2/customer/updateStatus/${id}`,statusData)
}

// Delete customer
export const callDeleteCustomer = (idDelete) => {
    //console.log('checkApi',{...idDelete});
    return axios.delete(`/api/v2/customer/multiple-delete`,{params:idDelete})
}
// Get category -- /api/v2/category/index?page=1&perpage=10&search=2%20ng%C3%A0y%201%20%C4%91%C3%AAm
export const callGetCategory = (query) => {
    return axios.get(`/api/v2/category/${query}`)
}

// Create Category
export const callCreateCategory = (name, number, description) => {
    
    const data = new FormData();
    data.append("name", name);
    data.append("number", number);
    data.append("description", description);
    
    return axios.post(`/api/v2/category/create`,data)
}

// Update Category
export const callUpdateCategory = (id,name, number, description) => {
    
    const data = new FormData();
    data.append("name", name);
    data.append("number", number);
    data.append("description", description);
    
    return axios.post(`/api/v2/category/update/${id}`,data)
}

// Delete category
export const callDeleteCategory = (dataID) => {

    console.log('dataID',{...dataID});

    return axios.delete(`/api/v2/category/multiple-delete`,{params:dataID})
}

// Get Room -- /api/v2/room/index?page=1&perpage=10&search=Phong so 1&status[]=1&type[]=1&type[]=2&type_room[]=room
export const callGetRoomTour = (query) => {
    return axios.get(`/api/v2/room/${query}`)
}

// --- /api/v2/room/index?page=1&perpage=10&type_room[]=room&type_room[]=tour&search=Ha Noi - HCM
export const callCreateNewRoom = (name, description, type, cost, logo, banner, status, type_room) => {
    const data = new FormData();
    data.append("name", name);
    data.append("type", type);
    data.append("description", description);
    data.append("cost", cost);
    data.append("logo", logo);
    data.append("banner[]", banner);
    data.append("status", status);
    data.append("type_room", type_room);
    
    return axios.post(`/api/v2/room/create-room`,data)
}
// create tour
export const callCreateNewTour = (name, description, type, cost, logo, banner, status, type_room, start_date, end_date) => {
    const data = new FormData();
    data.append("name", name);
    data.append("type", type);
    data.append("description", description);
    data.append("cost", cost);
    data.append("logo", logo);
    data.append("banner[]", banner);
    data.append("status", status);
    data.append("type_room", type_room);
    data.append("start_date", start_date);
    data.append("end_date", end_date);
    
    return axios.post(`/api/v2/room/create-room`,data)
}

//Update room
export const callUpdateRoom = (id, name, description, type, cost, logo, status) => {
    const data = new FormData();
    data.append("name", name);
    data.append("type", type);
    data.append("description", description);
    data.append("cost", cost);
    data.append("logo", logo);
    data.append("logo_delete", true);
    data.append("status", status);
    data.append("type_room", "room");
   
    return axios.post(`/api/v2/room/update/${id}`,data)
}

export const callUpdateTour = (id, name, description, type, cost, logo, status,  start_date, end_date) => {
    const data = new FormData();
    data.append("name", name);
    data.append("type", type);
    data.append("description", description);
    data.append("cost", cost);
    data.append("logo", logo);
    data.append("logo_delete", true);
    data.append("status", status);
    data.append("type_room", "tour");
    data.append("start_date", start_date);
    data.append("end_date", end_date);

    return axios.post(`/api/v2/room/update/${id}`,data)
}

// Delete Room Tour
export const callDeleteRoomTour = (dataID) => {
    return axios.delete(`/api/v2/room/multiple-delete`,{params:dataID})
}

//Get order booking
export const callGetListOrder = (query) => {
    return axios.get(`/api/v2/order/${query}`)
}
//Update status order
export const callUpdateStatusOrder = (idOrder, status) => {
    console.log(idOrder, status);
    return axios.post(`/api/v2/order/update-status/${idOrder}?status=${status}`)
}

//Get list request cancel
export const callGetListRequestCancel = (query) => {
    return axios.get(`/api/v2/request-cancel/index?${query}`)
}
//Get list request cancel
export const callUpdateRequestCancel = (idRequest, status) => {
    return axios.post(`/api/v2/request-cancel/update-status/${idRequest}?status=${status}`)
}









//Customer get tour room

export const callGetTourRoomHome = (pageSize,type,cateNumber) => {
    return axios.get(`/api/room?page=1&perpage=${pageSize}&type[]=${type}&category[]=${cateNumber}`)
}

// Customer cate
export const callGetCategoryForUser = () => {
    return axios.get(`/api/category/index`)
}

// Cus get tour

//  ---/api/room?page=1&perpage=10&type[]=tour&type[]=room&category[]=1&category[]=2&search=tour1&cost_min=12&cost_max=80&sort_cost=asc

export const callGetTourRoomPage = (query) => {
    return axios.get(`api/room?${query}`)
}

// Get tour/room detail
export const callGetTourRoomDetail = (id) => {
    return axios.get(`/api/room/detail/${id}`)
}

// Call Booking tour
export const callBookingTour = (id_room, id_user) => {

    const data = new FormData();
    data.append("id_room", id_room);
    data.append("id_user", id_user);

    return axios.post(`/api/order/booking-tour`,data)
}
// Call Booking Room
export const callBookingRoom = (id_room, id_user, start_date, end_date) => {

    const data = new FormData();
    data.append("id_room", id_room);
    data.append("id_user", id_user);
    data.append("start_date", start_date);
    data.append("end_date", end_date);

    return axios.post(`/api/order/booking-room`,data)
}

// Call get order user
export const callGetListOrderUser = (query) => {
    return axios.get(`/api/order/list-order?${query}`)
}
// cancel order
export const callCancelOrderUser = (id) => {
    return axios.post(`/api/order/cancel/${id}`)
}

//get detail order
export const callGetDetailOrder = (id) => {
    return axios.get(`/api/order/show/${id}`)
}
//get detail info user
export const callGetInfoUser = (id) => {
    return axios.get(`/api/user/show/${id}`)
}
// update info user
export const callUpdateInfoUser = (id, display_name, phone_number, detail_address, avatar) => {

    const data = new FormData();
    data.append("display_name", display_name);
    data.append("phone_number", phone_number);
    data.append("detail_address", detail_address);
    data.append("image_delete", true);
    data.append("image_data", avatar? avatar : "");

    return axios.post(`/api/user/update/${id}`,data)
}

//update password user
export const callChangePassUser = (id, password, newPassword) => {
    const data = new FormData();
    data.append("password", password);
    data.append("newPassword", newPassword);
    
    return axios.post(`/api/user/updatePs/${id}`,data)
}








