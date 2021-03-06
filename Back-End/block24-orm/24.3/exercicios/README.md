
- [Para testar](#testar-o-projeto)

# Exercicío

Antes de começar, crie um novo projeto chamado **hello-jwt** utilizando o comando **npm init @tryber/backend hello-jwt** , aceitando as opções padrão.

1. Crie um endpoint POST /login
2. O endpoint deve receber os seguintes dados no corpo da requisição:
```
{
  "username": "someUsername",
  "password": "somePassword"
}
```

3. Caso username e password sejam válidos, retorne um token que atenda às seguintes especificações:
  * Expira em uma hora;
  * Contém, no payload, o nome de usuário informado na request;
  * Contém, no payload, uma propriedade admin , com o valor false .

4. Para retornar o token, utilize o seguinte formato no corpo da resposta:
```
{
  "token": "<JWT aqui>"
}
```

5. Para que *username* seja válido, seu valor precisa ser uma string alfanumérica de, pelo menos, 5 caracteres.

6. Para que *password* seja válido, seu valor precisa ser uma string de, pelo menos, 5 caracteres.

7. Altere o endpoint **POST /login :**

8. Caso username seja *admin* e *password* seja **s3nh4S3gur4???** , a chave *admin* no payload do token gerado deve ter o valor true

9. Crie o endpoint **/GET /users/me**

10. O endpoint só pode ser acessado por pessoas autenticadas

11. Para realizar a autenticação, a requisição deve conter o header *Authorization* , cujo valor deve ser um token válido

12. Caso o token não exista, retorne o status **401 Unauthorized** , com o seguinte corpo da resposta:
```
{
  "error": {
    "message": "Token not found"
  }
}
```

13. Caso aconteça um erro ao validar o token, retorne o status 401 Unauthorized com o seguinte conteúdo no corpo:
```
{
  "error": {
    "message": "<mensagem de erro da biblioteca>"
  }
}
```

14. Caso o token seja válido, retorne o status 200 OK e, no corpo da resposta, o nome de usuário ao qual aquele token pertence e o valor da propriedade admin , no seguinte formato:
```
{
  "username": "nome de usuario do token",
  "admin": true || false
}
```

15. Utilize um middleware exclusivo para a autenticação. Armazene-o no arquivo **middlewares/auth.js**

16. Crie o endpoint **/GET /top-secret**

O endpoint só pode ser acessado por pessoas autenticadas.

17. Apenas tokens contendo, no payload, a propriedade *admin* com o valor true têm autorização para acessar esse endpoint.

18. Caso o token não exista, retorne o status **401 Unauthorized** , com o seguinte corpo da resposta:
```
{
  "error": {
    "message": "Token not found"
  }
}
```
19. Caso aconteça um erro ao validar o token, retorne o status **401 Unauthorized** com o seguinte conteúdo no corpo:
```
{
  "error": {
    "message": "<mensagem de erro da biblioteca>"
  }
}
```

20. Caso o token seja válido, mas a propriedade *admin* do payload não seja true , retorne o status **403 Forbidden** e o seguinte JSON:
```
{
  "error": {
    "message": "Restricted access"
  }
}
```

21. Caso o token seja válido e o payload contenha *admin* com o valor true , retorne o seguinte JSON:
```
{
  "secretInfo": "Peter Parker é o Homem-Arannha"
}
```

22. Para validar se a pessoa é admin, crie um novo middleware no arquivo **middlewares/admin.js .**

# Bônus

1. Crie o endpoint **POST /signup**

2. O endpoint deve aceitar o seguinte JSON no corpo da requisição:
```
{
  "username": "MariaCecília_Souza92",
  "password": "%9!%e"c0c5w,q%%h9n3k"
}
```

3. Para validar os campos, considere os mesmos critérios do endpoint **POST /login **;

4. Caso *username* já exista, retorne o status **409 Conflict** e o seguinte JSON:
```
{
   "error": { "message": "user already exists" }
}
```

5. Caso os campos sejam válidos, armazene os dados no arquivo *models/data/users.json* ;

6. Ao armazenar os dados recebidos, adicione a propriedade admin , que terá seu valor determinado da seguinte forma:
  * Obtenha um número aleatório de 1 a 100 com o seguinte trecho de código: `Math.floor(Math.random() * 100) ;`
  * Caso o número aleatório seja maior que 50 , admin deve ser true ;
  * Caso o número aleatório seja menor ou igual a 50 , admin deve ser false .

6. Após armazenar os novos dados, retorne um token que expire em uma hora e contenha username e admin no payload. Utilize o seguinte formato na resposta:
```
  {
    "token": "<token gerado aqui>"
  }
```

7. Altere o endpoint de login

8. Antes de gerar o token, verifique se o nome de usuário e a senha informados existem no arquivo **users.json **;

9. Não permita mais o login do usuário *admin* com a senha fixa.

10. Informe, na propriedade *admin* do payload do token, o mesmo valor da propriedade *admin* que está armazenado para aquela pessoa.

# Para testar <a name="testar-o-projeto"></a>

1. Clone o repositório

- `git clone https://github.com/Thiago-FR/trybe-exercicios.git`.
- Entre na pasta do repositório que você acabou de clonar.

2. Acesse a branch do exercício
- `git checkout exercicios/24.3`

3. Instale as dependências.

- `npm install`

4. Inicie o servidor.

- `npm start`
