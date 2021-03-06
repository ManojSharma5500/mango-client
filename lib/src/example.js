"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os = __importStar(require("os"));
const fs = __importStar(require("fs"));
const client_1 = require("./client");
const web3_js_1 = require("@gemachain/web3.js");
const ids_json_1 = __importDefault(require("./ids.json"));
const config_1 = require("./config");
const serum_1 = require("@project-serum/serum");
const utils_1 = require("./utils");
function readKeypair() {
    return JSON.parse(process.env.KEYPAIR ||
        fs.readFileSync(os.homedir() + '/.config/solana/devnet.json', 'utf-8'));
}
function examplePerp() {
    return __awaiter(this, void 0, void 0, function* () {
        // setup client
        const config = new config_1.Config(ids_json_1.default);
        const groupConfig = config.getGroup('devnet', 'mango_test_v2.2');
        const connection = new web3_js_1.Connection('https://api.devnet.solana.com', 'processed');
        const client = new client_1.MangoClient(connection, groupConfig.mangoProgramId);
        // load group & market
        const perpMarketConfig = config_1.getMarketByBaseSymbolAndKind(groupConfig, 'BTC', 'perp');
        const mangoGroup = yield client.getMangoGroup(groupConfig.publicKey);
        const perpMarket = yield mangoGroup.loadPerpMarket(connection, perpMarketConfig.marketIndex, perpMarketConfig.baseDecimals, perpMarketConfig.quoteDecimals);
        // Fetch orderbooks
        const bids = yield perpMarket.loadBids(connection);
        const asks = yield perpMarket.loadAsks(connection);
        // L2 orderbook data
        for (const [price, size] of bids.getL2(20)) {
            console.log(price, size);
        }
        // L3 orderbook data
        for (const order of asks) {
            console.log(order.owner.toBase58(), order.orderId.toString('hex'), order.price, order.size, order.side);
        }
        // Place order
        const owner = new web3_js_1.Account(readKeypair());
        const mangoAccount = (yield client.getMangoAccountsForOwner(mangoGroup, owner.publicKey))[0];
        yield client.placePerpOrder(mangoGroup, mangoAccount, mangoGroup.mangoCache, perpMarket, owner, 'buy', // or 'sell'
        39000, 0.0001, 'limit'); // or 'ioc' or 'postOnly'
        // retrieve open orders for account
        const openOrders = yield perpMarket.loadOrdersForAccount(connection, mangoAccount);
        // cancel orders
        for (const order of openOrders) {
            yield client.cancelPerpOrder(mangoGroup, mangoAccount, owner, perpMarket, order);
        }
        // Retrieve fills
        for (const fill of yield perpMarket.loadFills(connection)) {
            console.log(fill.maker.toBase58(), fill.taker.toBase58(), fill.price, fill.quantity);
        }
    });
}
function exampleSpot() {
    return __awaiter(this, void 0, void 0, function* () {
        // setup client
        const config = new config_1.Config(ids_json_1.default);
        const groupConfig = config.getGroup('devnet', 'mango_test_v2.2');
        const connection = new web3_js_1.Connection('https://api.devnet.solana.com', 'processed');
        const client = new client_1.MangoClient(connection, groupConfig.mangoProgramId);
        // load group & market
        const spotMarketConfig = config_1.getMarketByBaseSymbolAndKind(groupConfig, 'BTC', 'spot');
        const mangoGroup = yield client.getMangoGroup(groupConfig.publicKey);
        const spotMarket = yield serum_1.Market.load(connection, spotMarketConfig.publicKey, undefined, groupConfig.serumProgramId);
        // Fetch orderbooks
        const bids = yield spotMarket.loadBids(connection);
        const asks = yield spotMarket.loadAsks(connection);
        // L2 orderbook data
        for (const [price, size] of bids.getL2(20)) {
            console.log(price, size);
        }
        // L3 orderbook data
        for (const order of asks) {
            console.log(order.openOrdersAddress.toBase58(), order.orderId.toString('hex'), order.price, order.size, order.side);
        }
        // Place order
        const owner = new web3_js_1.Account(readKeypair());
        const mangoAccount = (yield client.getMangoAccountsForOwner(mangoGroup, owner.publicKey))[0];
        yield client.placeSpotOrder(mangoGroup, mangoAccount, mangoGroup.mangoCache, spotMarket, owner, 'buy', // or 'sell'
        41000, 0.0001, 'limit'); // or 'ioc' or 'postOnly'
        // retrieve open orders for account
        const openOrders = yield spotMarket.loadOrdersForOwner(connection, mangoAccount.publicKey);
        // cancel orders
        for (const order of openOrders) {
            yield client.cancelSpotOrder(mangoGroup, mangoAccount, owner, spotMarket, order);
        }
        // Retrieve fills
        for (const fill of yield spotMarket.loadFills(connection)) {
            console.log(fill.openOrders.toBase58(), fill.eventFlags.maker ? 'maker' : 'taker', fill.size * (fill.side === 'buy' ? 1 : -1), spotMarket.quoteSplSizeToNumber(fill.side === 'buy'
                ? fill.nativeQuantityPaid
                : fill.nativeQuantityReleased));
        }
        // Settle funds
        for (const openOrders of yield mangoAccount.loadOpenOrders(connection, groupConfig.serumProgramId)) {
            if (!openOrders)
                continue;
            if (openOrders.baseTokenFree.gt(utils_1.ZERO_BN) ||
                openOrders.quoteTokenFree.gt(utils_1.ZERO_BN)) {
                yield client.settleFunds(mangoGroup, mangoAccount, owner, spotMarket);
            }
        }
    });
}
examplePerp();
exampleSpot();
//# sourceMappingURL=example.js.map