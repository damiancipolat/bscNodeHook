# bscNodeHook
This project is a POC of how to detect changes in a BNB wallets, the idea is to create a system that can detect incoming transferences in a list of wallet addres aka (watchlist). We are using the BSC blockchain.

### Stack:
- Nodejs
- Axios
- Dotenv
- node-cron

### Provider:
- BscScan Api: https://docs.bscscan.com / https://api.bscscan.com

### Strategy:
The main strategy is make pooling in the watchlist and detect transactions, and compare with registered transactions. We use a variable as memory db, this is only for testing purposes is'nt recomended in a production environment.


<img src="https://github.com/damiancipolat/bscNodeHook/blob/main/doc/diagram.png?raw=true" width="570px" />

