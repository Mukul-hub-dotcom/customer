import axios from 'axios'

export class Backend{
    static serverURL='http://localhost:8000'

    static sendData(data){
        let dataURL=`${this.serverURL}/api`;
        return axios.post(dataURL,data)
    }
    static getData(){
        let dataURL=`${this.serverURL}/api`;
        return axios.get(dataURL)
    }
}