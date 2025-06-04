# Guia Informativo de Prevenção de Desastres Naturais

Este projeto consiste em um programa Java de console que funciona como um guia interativo, fornecendo informações essenciais sobre diferentes tipos de desastres naturais (Enchentes, Deslizamentos de Terra, Secas). O objetivo é oferecer orientações claras e acessíveis sobre sinais de alerta, medidas preventivas e ações a serem tomadas durante e após um evento.

O sistema utiliza conceitos de Programação Orientada a Objetos, incluindo Herança, Encapsulamento, Sobrescrita e Sobrecarga, para organizar e apresentar as informações de forma estruturada.

## Integrantes do Grupo

*   Gabriel Maciel - RM 562795
*   Matheus Molina - RM 563399
*   Thomas Fontes - RM 562254

## Tecnologia Utilizada (Guia Informativo Java)

*   **Java:** Linguagem principal para a lógica do guia informativo e interação via console.
    *   Utiliza a biblioteca padrão do Java (java.util.Scanner, java.util.InputMismatchException).

*(Nota: Se o projeto completo incluir uma interface web, as tecnologias HTML, CSS e JavaScript seriam listadas separadamente para essa parte.)*

## Estrutura dos Arquivos Java

O código-fonte Java está organizado no pacote `com.desastres`:

```
src/
└── main/
    └── java/
        └── com/
            └── desastres/
                ├── DesastreNatural.java  (Classe Abstrata Base)
                ├── Enchente.java         (Subclasse)
                ├── Deslizamento.java     (Subclasse)
                ├── Seca.java             (Subclasse)
                └── MainClass.java        (Classe Principal com menu interativo)
```

## Como Compilar e Executar o Guia Informativo Java

**Pré-requisitos:**
*   JDK (Java Development Kit) 11 ou superior instalado e configurado no PATH do sistema.

**Passos:**

1.  **Abra um terminal ou prompt de comando.**
2.  **Navegue até o diretório que contém a pasta `src` do projeto Java.**
    *   Exemplo: Se os arquivos `.java` estão em `C:/Projeto/src/main/java/com/desastres`, navegue até `C:/Projeto/src/main/java`.
3.  **Compile os arquivos Java:**
    ```bash
    javac com/desastres/*.java
    ```
    *   Este comando compilará todos os arquivos `.java` dentro da pasta `com/desastres` e criará os arquivos `.class` correspondentes.
4.  **Execute a classe principal:**
    ```bash
    java com.desastres.MainClass
    ```
    *   Isso iniciará o programa no console.
5.  **Siga as instruções no terminal:** O programa apresentará um menu para você escolher o tipo de desastre (1 para Enchente, 2 para Deslizamento, 3 para Seca, 0 para Sair) e exibirá as informações correspondentes.

## Diagrama de Classes

A descrição textual do diagrama de classes UML para esta versão informativa está no arquivo `diagrama_classes_informativo.md` (enviado anteriormente).

