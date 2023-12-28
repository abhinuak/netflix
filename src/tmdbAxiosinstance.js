import axios from "axios";

const tmdpAxiosinstance=axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default tmdpAxiosinstance