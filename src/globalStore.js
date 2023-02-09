export const globalStore = {
  accountService: {
    store: {
      name: "account",
      count: 0
    },
    subscribers: [],
    getSnapshot() {
      return globalStore.accountService.store;
    },
    publish(data) {
      if (!globalStore.accountService.subscribers) return;
      let diff = getDifference(
        { ...globalStore.accountService.store, ...data },
        globalStore.accountService.store
      );
      globalStore.accountService.store = {
        ...globalStore.accountService.store,
        ...data
      };
      globalStore.accountService.subscribers.forEach(
        ({ callback, parameters }) => {
          if (
            !parameters ||
            (parameters && diff.some((key) => parameters.includes(key)))
          ) {
            callback(globalStore.accountService.store);
          }
        }
      );
    },
    subscribe(callback, parameters) {
      if (!globalStore.accountService.subscribers) {
        globalStore.accountService.subscribers = [];
      }
      globalStore.accountService.subscribers.push({ callback, parameters });
    }
  },
  platformService: {
    store: {
      name: "platform",
      count: 10
    },
    subscribers: [],
    getSnapshot() {
      return globalStore.platformService.store;
    },
    publish(data) {
      if (!globalStore.platformService.subscribers) return;
      let diff = getDifference(
        { ...globalStore.platformService.store, ...data },
        globalStore.platformService.store
      );

      globalStore.platformService.store = {
        ...globalStore.platformService.store,
        ...data
      };
      globalStore.platformService.subscribers.forEach(
        ({ callback, parameters }) => {
          if (
            !parameters ||
            (parameters && diff.some((key) => parameters.includes(key)))
          ) {
            callback(globalStore.platformService.store);
          }
        }
      );
    },
    subscribe(callback, parameters) {
      if (!globalStore.platformService.subscribers) {
        globalStore.platformService.subscribers = [];
      }
      globalStore.platformService.subscribers.push({ callback, parameters });
    }
  }
};

const getDifference = (obj1, obj2) => {
  let keyFound = [];
  Object.keys(obj1).forEach((key) => {
    if (obj1[key] !== obj2[key]) {
      keyFound.push(key);
    }
  });
  return keyFound;
};
