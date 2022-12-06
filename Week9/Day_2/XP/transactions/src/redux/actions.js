export const insert = (newList) => {
    return {
      type:'INSERT',
      payload: newList
    }
  }
export const update = (newList,index) => {
    return {
      type:'UPDATE',
      payload:newList,
      index:index
    }
  }
