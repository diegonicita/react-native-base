export const countDuplicatedIds = (ObjectsArray) => {
     const counter = ObjectsArray.reduce((acc, obj) => {
       if (acc[obj.id]) {
         acc[obj.id]++;
       } else {
         acc[obj.id] = 1;
       }
       return acc;
     }, {});
}