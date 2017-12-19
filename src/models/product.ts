import { UserProfile } from "./userProfile";

export interface Product{
    id: string;
    description: string;
    imageURL: string;
    price: string;
    likes: number;
    createdAt: Date;
    lastUpdateDate: Date;
    status: string;
    createdBy: UserProfile;
}