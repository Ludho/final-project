import BookOrder from "./bookOrder";

export default interface Order{
    id: Number;
    date: string;
    status: Status;
    books: BookOrder[];
}