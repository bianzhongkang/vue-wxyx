import axios from './middleware'

export default {
    fetchGoodsDetailInfo(params){  
        let uri = `/detail`
		return axios.get(uri);
    }, 
} 