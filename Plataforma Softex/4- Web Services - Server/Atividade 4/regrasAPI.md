## 6 regras de uma API Rest

### 1- Stateless:
    Sem estado significa que o servidor deve ter todas as solicitações feitas pelo cliente para as compreender. Para manter o estado do recurso solicitante, um URL é utilizado para identificar o recurso e o corpo. Assim, quando o servidor processar a solicitação, uma resposta será enviada ao cliente por meio de corpo, status ou cabeçalhos.
### 2- Arquitetura Cliente-Servidor:
    Esse princípio permite uma interface regular e separa os clientes dos servidores. O cliente é responsável pela interface do usuário e pela experiência do usuário, enquanto o servidor gerencia os recursos e a lógica de negócios
### 3- Interface uniforme: 
    A interface entre o cliente e o servidor deve ser uniforme, facilitando a compreensão e utilização da API. Isso é alcançado através de quatro princípios:
        - Identificação de Recursos.
        - Manipulação de Recursos Através de Representações.
        - Mensagens Autoexplicativas.
        - Hipermídia como motor do estado da aplicação.
### 4- Armazenamento em Cache:
    O servidor deve indicar se as respostas podem ser armazenadas em cache pelo cliente. Isso ajuda a reduzir a carga no servidor e melhora a eficiência. Melhora o desempenho e pode ser feito através de uma rotulação da resposta do servidor de forma implícita ou explícita.
### 5- Sistema em camadas:
    Faz com que a aplicação seja mais estável, limitando o comportamento dos componentes em diversas camadas.
### 6- Código sob demanda:
    Permite que um código do cliente seja baixado e usado dentro do aplicativo. É uma restrição opcional e menos usada.