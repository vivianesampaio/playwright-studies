import { expect } from "@playwright/test";
import { request } from "playwright";

export class ApiService {
    public apiRequest: any;

    constructor(){
        this.apiRequest = null;
    }

    async createContext(){
        this.apiRequest = await request.newContext();
    }

    async sendRequest(method: string, url: string, options: any = {}){
        if(!this.apiRequest){
            throw new Error("Context not created. Call createContext() first");
        }
        return this.apiRequest[method](url, options)
    }

    async verifyRequest(response: any, statusCode: number){
        expect(response.status()).toBe(statusCode)
    }

    async verifyDataRequest(response: any, data: string){
         expect(response.data[0].first_name).toBe(data);

    }
}

export const apiService = new ApiService()