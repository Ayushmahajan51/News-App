import axios from "axios";
const KEY ="c1a81ddb203a447fbb5303f075fd8c6b";

export default axios.create({
    baseURL: "https://newsapi.org/",
    params :{
        apiKey:KEY,
        
    }
})
