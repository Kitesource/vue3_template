import { defineStore } from 'pinia';

export const PublicStore = defineStore('Public', {
  state: () => {
    return {
      count: 0,
      userMsg: {
        id: 1,
        username: 'kite',
        age: 20,
      },
      userList: [
        {
          id: 1,
          username: 'kite',
          age: 20,
        },
        {
          id: 2,
          username: 'Fun',
          age: 23,
        },
        {
          id: 4,
          username: 'Ron',
          age: 28,
        },
      ]
    }
  },
  getters: {
    getUserMsg: (state) => {
      return state.userMsg
    },
    getDoubleCount: (state) => {
      return state.count * 2
    },
    getMoreTwiceCount(): number{
      return this.getDoubleCount + 10
    },
    // 执行此操作时，getter 不再缓存，它们只是您调用的函数。
    getUserById: (state) => {
      return (id) => state.userList.find((user) => user.id === id)
    },
  },
  actions: {
    setUserMsg(user) {
      this.userMsg = user
    },
    setCount(count) {
      this.count = count;
    }
  }
})