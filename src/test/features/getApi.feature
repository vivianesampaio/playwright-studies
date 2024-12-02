Feature: Get Api Route

Scenario: Get Request

Given Envio uma requisição do tipo "get"
When Recebo uma resposta com status code 200
Then Valido que o primeiro nome da lista é "Michael"