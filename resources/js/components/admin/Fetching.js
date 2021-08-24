import axios from "axios";

export const fetchStudents = async () => {
    try {
        const response = await axios.get(`/api/student`);
        return response;
    } catch (error) {
        return error.response;
    }
};

export const fetchCounselors = async () => {
    try {
        const response = await axios.get(`/api/counselor`);
        return response;
    } catch (error) {
        return error.response;
    }
};
