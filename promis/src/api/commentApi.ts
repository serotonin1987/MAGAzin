export interface Comment {
    id: number;
    name: string;
    body: string;
    email: string;
}

// export function getComments(): Promise<Comment[]> {
//   return new Promise<Comment[]>((resolve) => { 
//     setTimeout(() => { 
//       resolve(
//       [ 
//         { id: 1, name: 'Maga', body: 'Я сегодня кушал вкусный обед', email: 'aaa@example.com' },
//         { id: 2, name: 'Amina', body: 'Мне понравилось общаться с Марком', email: 'ccc@example.com' },
//         { id: 3, name: 'Madiar', body: 'Я тоже так думаю', email: 'eee@example.com' }
//       ]
//     );
//   }, 2000);
// });

export function getComments() {
  return new Promise(async (resolve) => { 
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=3');
    const data = await response.json();
    
    setTimeout(() => { 
      resolve(data); 
    }, 2000); 
  }); 
}