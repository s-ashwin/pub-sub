
module.exports = {
    accountService:{
        store:{
            name:"account"
        },
        subscribers:[],
        publish(event, data){
            if (!this.subscribers) return;
            this.store={...this.store,...data}
            this.subscribers.forEach(subscriberCallback =>{
                 subscriberCallback(this.store)});
        },
        subscribe(event, callback){
            if (!this.subscribers) {
                this.subscribers = [];
            }
            this.subscribers.push(callback);
        }
    },
    platformService:{
        store:{
            name:"platform"
        },
        subscribers:[],
        publish(event, data){
            if (!this.subscribers) return;
            this.store={...this.store,...data}
            this.subscribers.forEach(subscriberCallback => {
                console.log("callback",subscriberCallback);
                subscriberCallback(this.store)});
        },
        subscribe(event, callback){
            if (!this.subscribers) {
                this.subscribers = [];
            }
            this.subscribers.push(callback);
        }
    },
};