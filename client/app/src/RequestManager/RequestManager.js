class RequestManager{

    static request(URLString, options = {method: 'GET'}){
        return fetch(URLString, options);
    }

    static async requestText(URLString, options = {method: 'GET'}){
        const res = await this.request(URLString, options);
        return await res.text();
    }

    static async requestJSON(URLString, options = {method: 'GET'}){
        const res = await this.request(URLString, options);
        return await res.json();
    }
}

export default RequestManager;