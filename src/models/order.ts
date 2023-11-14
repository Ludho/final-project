import BookOrder from "./bookOrder";
import { Status } from "./status";

export default interface Order{
    id: Number;
    date: string;
    status: Status;
    books: BookOrder[];
}