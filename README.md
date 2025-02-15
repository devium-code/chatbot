# Chatbot

Este proyecto Angular es el base del chatbot. Desde aca se desarrollan las funcionalidades del mismo.


Para exportar el bot hay que correr un simple script: npm run el-build. Lo que hace es generar la carpeta dist como ng buld convencional pero ademas, generar un archivo llamado chatbot.js. Este es la combinacion de main.js, polyfills.js y styles.js.

Una vez tenemos este archivo, solo hay que usarlo en el proyecto que se necesito de la siguiente manera:

<script type="text/javascript" src="chatbot.js"></script>

Ademas, por ahora, el componente se llama <chatbot-element></chatbot-element> por lo tanto hay que llamarlo tambien en el proyecto externo que se va a utilizar.
