import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
        return axios.create({
            headers: {
            Authorization: token
    },
            baseURL: "https://lambda-split-the-bill-be.herokuapp.com/api/"
    });
};
