import Order from "../models/order";

export const orders: Order[] = [

  {
    id: 1,
    date: "14/11/2023",
    status: 0,
    books:[
      {quantity: 5, book: "MyFirstEverBook", repo: "Me"},
      {quantity: 5, book: "MySecondBook", repo: "Silly"}
  ]
  },
  {
    id: 2,
    date: "12/11/2023",
    status: 1,
    books:[
      {quantity: 5, book: "Currency World", repo: "Marco"},
      {quantity: 5, book: "Boohky book ", repo: "Jhon Doe"}
  ]
  }

]