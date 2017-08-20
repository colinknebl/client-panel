export interface Client{ // the "?" marks the parameter as optional
	$key?:string;
	firstName?:string;
	lastName?:string;
	email?:string;
	phone?:string;
	balance?:number;
}