## Overview

Exploring <strong>SpringIA</strong> integrated with the <strong>Ollama</strong> model.

The project was developed to provide users with an AI solution that runs locally on their own machines, eliminating the need to rely on external AI services. 
The AI model utilized in the project is <strong>Ollama</strong>, which operates within a Docker container, the back-end built using Java and the Spring Framework 
facilitates seamless communication, while the front-end ensures an intuitive and user-friendly experience for end-users.

Ref.: https://hub.docker.com/r/ollama/ollama

## Execution

<p>Tools:</p>

<li> Java 17 </li>
<li> Spring IA </li>
<li> Ollama </li>
<li> Docker </li>
<li> Vue.js </li>
<li> Naive-ui </li>

<p></p>

<strong>Back-end</strong>

Import the project into an IDE of your choice, the IDE used for development was IntelliJ IDE, then simply build the application to download the dependencies that are managed by Maven, 
and run the application. For communication with the language model to work, you need to install Docker and initialize the container images encoded in the <code>docker-compose.yml</code> file, 
with the <code>docker-compose up -d</code> command and then the <code>docker exec -it ollama ollama run llama2</code> command to run the language model in the Docker container.

<strong>Front-end</strong>

Import the project into an IDE of your choice, the IDE used for development was VSCode, make sure you have the latest version of node.js installed, and then run the commands <code>npm install</code> 
to download the necessary dependencies and the command <code>npm run dev</code> to run the web application.

## Demo

### Technological issues test

https://github.com/user-attachments/assets/02bedf3a-9b0e-4b6e-9b98-fc4d70a2f2f9

### Math issues test

https://github.com/user-attachments/assets/796dba24-78a0-427b-8f83-dde7e05c737d

### Historical issues test

https://github.com/user-attachments/assets/52bc3edd-940e-4fb7-b299-0873eea57a01

### Geographical issues test

https://github.com/user-attachments/assets/628e9d26-b47a-4b8b-a7ef-e4430eb18ab7

### Sports issues test

https://github.com/user-attachments/assets/f3ad14f9-4d5a-4b1a-9ba2-dbe30d723173

### Cultural issues test

https://github.com/user-attachments/assets/a3e4b0c4-32ca-44b4-9a71-e1be779998e9

### Scientific issues test

https://github.com/user-attachments/assets/9c9d30d2-cdec-4d1d-97df-183130822343



