
peticiones
/info -- data
/info/random -- computo pesado

comandos de ejecucion
PM2
pm2 start server.js --name="Fork-Server-8080" -- -p 8080 FORK
pm2 start server.js --name="Cluster-Server-8081" -- -p 8080 CLUSTER
pm2 start server.js --name="Fork-Server-8082" -- -p 8082 FORK
pm2 start server.js --name="Fork-Server-8083" -- -p 8083 FORK
pm2 start server.js --name="Fork-Server-8084" -- -p 8084 FORK
pm2 start server.js --name="Fork-Server-8085" -- -p 8085 FORK

FOREVER
npm start-forever
