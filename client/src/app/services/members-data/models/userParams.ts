import { User } from "../../account-data/models/user";

export class UserParams {
    gender: string;
    minAge = 18;
    maxAge = 100;
    pageNumber = 1;
    pageSize = 5;
    orderBy = 'lastActive';

    constructor (user: User) {
        this.gender = user.gender === "male" ? "female" : "male";
    }
}