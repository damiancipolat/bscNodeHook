# BSC Node hook
This project is a POC of how to detect changes in a BNB wallets, the idea is to create a system that can detect incoming transferences in a list of wallet addres aka (watchlist). We are using the BSC blockchain.

### Stack:
- Nodejs
- Axios
- Dotenv
- node-cron

### Provider:
- BscScan Api: https://docs.bscscan.com / https://api.bscscan.com

### Strategy:
The main strategy is make pooling in the watchlist and detect transactions, and compare with registered transactions if a incoming transaction is detected make a request of the url configured. We use a variable as memory db, this is only for testing purposes is'nt recomended in a production environment.

This diagram show the strategy applied.
<img src="https://github.com/damiancipolat/bscNodeHook/blob/main/doc/diagram.png?raw=true" width="570px" align="center"/>

### Purpose:
This project was a poc to try to resolve how to detect incoming transaction of a wallet, to implement a seel feature for a exchange project.

### Reference:
I have created this project in the idea presented in this yotube video:
https://www.youtube.com/watch?v=PLSFVzYOcS8&t=892s
