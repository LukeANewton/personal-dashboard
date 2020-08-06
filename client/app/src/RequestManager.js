class RequestManager{

    static request(URLString){
        return fetch(URLString);
    }

    static async requestText(URLString){
        const res = await this.request(URLString);
        return await res.text();
    }

    static async requestJSON(URLString){
        const res = await this.request(URLString);
        return await res.json();
    }
}

export default RequestManager;