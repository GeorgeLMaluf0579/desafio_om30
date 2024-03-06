# Desafio OM30

Este projeto é uma sugestão de implementação do [desafio proposto](DesafioBackendRuby.md) pela om30.

## Organização do projeto
Este projeto está separado em dois artefatos:
* Backend
* Frontend

Ambos os artefatos estão em seus respectivos containers e trabalham em conjunto.

## 🧪 Tecnologias
Esse projeto utiliza as seguintes tecnologias:
<table>
  <tr>
    <td style="vertical-align: center;text-align: left;">
      <a href="https://www.docker.com">
      <img height="28" width="28" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg">
      Docker</a>
    </td>
    <td style="vertical-align: center;text-align: left;">
      <a href="https://www.ruby-lang.org/">
      <img height="28" width="28" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg">
      Ruby</a>
    </td>
    <td style="vertical-align: center;text-align: left;">
      <a href="https://rubyonrails.org/">
      <img height="28" width="28" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg">
      Rails</a>
    </td>
    <td style="vertical-align: center;text-align: left;">
      <a href="https://rspec.info/">
      <img height="28" width="28" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg">
      RSpec</a>
    </td>
  </tr>
  <tr>
    <td style="vertical-align: center;text-align: left;">
      <a href="https://www.postgresql.org">
      <img height="28" width="28" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg">
      PostgreSQL</a>
    </td>
    <td style="vertical-align: center;text-align: left;">
      <a href="https://www.ruby-lang.org/">
      <img height="28" width="28" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg">
      React</a>
    </td>
    <td />
    <td />
  </tr>
</table>

## Requisitos
Para execução do projeto em sua máquina local, os requisitos são apenas uma boa conexão com internet e docker e docker-compose instalados.

## 📦 Setup
## 1. Clone o repositório do Github:
  ```bash
  $ git clone https://github.com/GeorgeLMaluf0579/desafio_om30.git && cd desafio_om30
  ```
## 2. Construa os containers do docker
  ```bash
  $ make docker-build
  ```
  Este processo pode demorar um pouco dependendo do seu computador e da sua conexão com a internet.

### 3. Configurar o banco de dados
  ```bash
  $ make docker-setupdb
  ```

## Execução do Projeto
Depois de executar todos os procedimentos da configuração, utilize a seguinte linha de comando:
```bash
  $ make docker-run
  ```
  Abra o seu navegador de preferencia no apontando para a seguinte URL:
  ```
  http://localhost:8080
  ```

## 🤖 Testes Automatizados e cobertura de código
```
$ make docker-back-tests
```
Uma pasta chamada `coverage`será criada ou atualizada dentro da pasta `back`do projeto.

## 👨🏻‍💻 Autor
Made by George Luiz 'Maverick' Maluf

<b> 📫 How to reach me</b>
<div>
  <a href="https://www.linkedin.com/in/%F0%9F%91%A8%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-george-l-maluf-24225733/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href="https://api.whatsapp.com/send?phone=554298337945"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"></a>
  <a href="mailto:georgelmaluf286@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
</div>