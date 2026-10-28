export interface User {
    id: number;
    name: string;
    email: string
}
// export function getStudents(): Promise<User[]> { 
//   return new Promise<User[]>((resolve) => { 
//     setTimeout(() => { 
//       resolve(
//       [ 
//         { id: 1, name: 'Maga', email: 'asda@mail.ru' }, 
//         { id: 2, name: 'Amina', email: 'bsda@mail.ru' }, 
//         { id: 3, name: 'Madiar', email: 'csda@mail.ru' }, 
//       ]
//     ); 
//     }, 2000); 
//   }); 
// }

export function getStudents() { 
  return new Promise(async (resolve) => { 
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    const data = await response.json();
    
    setTimeout(() => { 
      resolve(data); 
    }, 2000); 
  }); 
}

