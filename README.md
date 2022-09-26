# Carteiro Digital - API 📦

## Tecnologias utilizadas
- Typescript
- NodeJS
- Express
- Redis
- Nodemailer

## Rotas
### Rastrear encomenda
- `/track/order/:id`
- Método: `GET`
- Parâmetro da rota: `id`

### Consultar número de encomendas rastreadas
- `/track/ordersNumber`
- Método: `GET`

### Entrar em contato
- `/contact`
- Metódo: `GET`
- Body: `name`, `email` e `message` 
