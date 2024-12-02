import {Given, When, Then} from '@cucumber/cucumber'
import { expect, request, APIRequestContext } from '@playwright/test';
import { apiService } from '../../../services/apiService';

let response: any;

Given('Envio uma requisição do tipo {string}', async (method: string) => {
    await apiService.createContext();
    
    //envia a requisição utilizando o método fornecido no step
    response = await apiService.sendRequest(method, 'https://reqres.in/api/users?page=2');
    const responseBody = await response.json();    
    // armazena as respostas localmente para validações posteriores
    
    global.response = response;
    global.responseBody = responseBody;
    
});

When('Recebo uma resposta com status code {int}', async (code: number) => {
    apiService.verifyRequest(response, code)           
});

Then('Valido que o primeiro nome da lista é {string}', async (data: string) => {
    const responseBody = await response.json();
    apiService.verifyDataRequest(responseBody, data)
})
