export interface CartItems{
    id: string;
    title: string;
    quantity: number;
    total: number;
    price: number;
    
}
export interface Item{
    id: string;
    title: string;
    quantity: number; 
}
export interface CartState {
    items: CartItems[];
    totalQuantity: number;
    changed: boolean;
}

export interface UserState {
    isVisable: boolean;
    notifcation:  {
        status: string;
        title: string;
         message: string;},
}
