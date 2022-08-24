
module.exports = {
    accountService:{
        store:{
            name:"account"
        },
        subscribers:[],
        publish(data){
            if (!this.subscribers) return;
            let diff = getDifference( {...this.store, ...data}, this.store)
            this.store={...this.store,...data}
            this.subscribers.forEach(({callback,parameters}) => {
                if (!parameters || (parameters && diff.some(key=> parameters.includes(key)))) {
                    callback(this.store)
                }
                });
        },
        subscribe(callback, parameters){
            if (!this.subscribers) {
                this.subscribers = [];
            }
            this.subscribers.push({callback, parameters});
        }
    },
    platformService:{
        store:{
            name:"platform"
        },
        subscribers:[],
        publish(data){
            if (!this.subscribers) return;
            let diff = getDifference( {...this.store, ...data}, this.store)
            this.store={...this.store,...data}
            this.subscribers.forEach(({callback,parameters}) => {
                if (!parameters || (parameters && diff.some(key=> parameters.includes(key)))) {
                    callback(this.store)
                }
                });
        },
        subscribe(callback, parameters){
            if (!this.subscribers) {
                this.subscribers = [];
            }
            this.subscribers.push({callback, parameters});
        }
    },
};

const getDifference = (obj1, obj2) => {
    let keyFound = [];
    Object.keys(obj1).forEach(key => {
       if(obj1[key] !== obj2[key]){
          keyFound.push(key);
       }
    });
    return keyFound ;
 };