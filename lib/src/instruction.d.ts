import { PublicKey, TransactionInstruction } from '@gemachain/web3.js';
import { AssetType } from './layout';
import BN from 'bn.js';
import { Order } from '@project-serum/serum/lib/market';
import { I80F48 } from './fixednum';
import { PerpOrder } from '.';
export declare function makeInitMangoGroupInstruction(programId: PublicKey, mangoGroupPk: PublicKey, signerKey: PublicKey, payerPk: PublicKey, quoteMintPk: PublicKey, quoteVaultPk: PublicKey, quoteNodeBankPk: PublicKey, quoteRootBankPk: PublicKey, insuranceVaultPk: PublicKey, msrmVaultPk: PublicKey, feesVaultPk: PublicKey, mangoCachePk: PublicKey, dexProgramPk: PublicKey, signerNonce: BN, validInterval: BN, quoteOptimalUtil: I80F48, quoteOptimalRate: I80F48, quoteMaxRate: I80F48): TransactionInstruction;
export declare function makeInitMangoAccountInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoAccountPk: PublicKey, ownerPk: PublicKey): TransactionInstruction;
export declare function makeWithdrawInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoAccountPk: PublicKey, walletPk: PublicKey, mangoCachePk: PublicKey, rootBankPk: PublicKey, nodeBankPk: PublicKey, vaultPk: PublicKey, tokenAccPk: PublicKey, signerKey: PublicKey, openOrders: PublicKey[], nativeQuantity: BN, allowBorrow: boolean): TransactionInstruction;
export declare function makeSettleFundsInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, ownerPk: PublicKey, mangoAccountPk: PublicKey, dexProgramId: PublicKey, spotMarketPk: PublicKey, openOrdersPk: PublicKey, signerKey: PublicKey, spotMarketBaseVaultPk: PublicKey, spotMarketQuoteVaultPk: PublicKey, baseRootBankPk: PublicKey, baseNodeBankPk: PublicKey, quoteRootBankPk: PublicKey, quoteNodeBankPk: PublicKey, baseVaultPk: PublicKey, quoteVaultPk: PublicKey, dexSignerKey: PublicKey): TransactionInstruction;
export declare function makeCancelSpotOrderInstruction(programId: PublicKey, mangoGroupPk: PublicKey, ownerPk: PublicKey, mangoAccountPk: PublicKey, dexProgramId: PublicKey, spotMarketPk: PublicKey, bidsPk: PublicKey, asksPk: PublicKey, openOrdersPk: PublicKey, signerKey: PublicKey, eventQueuePk: PublicKey, order: Order): TransactionInstruction;
export declare function makeCancelPerpOrderInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoAccountPk: PublicKey, ownerPk: PublicKey, perpMarketPk: PublicKey, bidsPk: PublicKey, asksPk: PublicKey, order: PerpOrder, invalidIdOk: boolean): TransactionInstruction;
export declare function makeCancelPerpOrderByClientIdInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoAccountPk: PublicKey, ownerPk: PublicKey, perpMarketPk: PublicKey, bidsPk: PublicKey, asksPk: PublicKey, clientOrderId: BN, invalidIdOk: boolean): TransactionInstruction;
export declare function makeCancelAllPerpOrdersInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoAccountPk: PublicKey, ownerPk: PublicKey, perpMarketPk: PublicKey, bidsPk: PublicKey, asksPk: PublicKey, limit: BN): TransactionInstruction;
export declare function makeDepositInstruction(programId: PublicKey, mangoGroupPk: PublicKey, ownerPk: PublicKey, merpsCachePk: PublicKey, mangoAccountPk: PublicKey, rootBankPk: PublicKey, nodeBankPk: PublicKey, vaultPk: PublicKey, tokenAccPk: PublicKey, nativeQuantity: BN): TransactionInstruction;
export declare function makeCacheRootBankInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, rootBanks: PublicKey[]): TransactionInstruction;
export declare function makeCachePricesInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, oracles: PublicKey[]): TransactionInstruction;
export declare function makeCachePerpMarketInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, perpMarketPks: PublicKey[]): TransactionInstruction;
export declare function makeAddSpotMarketInstruction(programId: PublicKey, mangoGroupPk: PublicKey, oraclePk: PublicKey, spotMarketPk: PublicKey, serumDexPk: PublicKey, mintPk: PublicKey, nodeBankPk: PublicKey, vaultPk: PublicKey, rootBankPk: PublicKey, adminPk: PublicKey, maintLeverage: I80F48, initLeverage: I80F48, liquidationFee: I80F48, optimalUtil: I80F48, optimalRate: I80F48, maxRate: I80F48): TransactionInstruction;
export declare function makeInitSpotOpenOrdersInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoAccountPk: PublicKey, ownerPk: PublicKey, serumDexPk: PublicKey, openOrdersPk: PublicKey, spotMarketPk: PublicKey, signerPk: PublicKey): TransactionInstruction;
export declare function makePlaceSpotOrderInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoAccountPk: PublicKey, ownerPk: PublicKey, mangoCachePk: PublicKey, serumDexPk: PublicKey, spotMarketPk: PublicKey, bidsPk: PublicKey, asksPk: PublicKey, requestQueuePk: PublicKey, eventQueuePk: PublicKey, spotMktBaseVaultPk: PublicKey, spotMktQuoteVaultPk: PublicKey, baseRootBankPk: PublicKey, baseNodeBankPk: PublicKey, baseVaultPk: PublicKey, quoteRootBankPk: PublicKey, quoteNodeBankPk: PublicKey, quoteVaultPk: PublicKey, signerPk: PublicKey, dexSignerPk: PublicKey, msrmOrSrmVaultPk: PublicKey, openOrders: {
    pubkey: PublicKey;
    isWritable: boolean;
}[], side: 'buy' | 'sell', limitPrice: BN, maxBaseQuantity: BN, maxQuoteQuantity: BN, selfTradeBehavior: string, orderType?: 'limit' | 'ioc' | 'postOnly', clientId?: BN): TransactionInstruction;
export declare function makeUpdateRootBankInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, rootBankPk: PublicKey, nodeBanks: PublicKey[]): TransactionInstruction;
export declare function makeAddOracleInstruction(programId: PublicKey, mangoGroupPk: PublicKey, oraclePk: PublicKey, adminPk: PublicKey): TransactionInstruction;
export declare function makeSetOracleInstruction(programId: PublicKey, mangoGroupPk: PublicKey, oraclePk: PublicKey, adminPk: PublicKey, price: I80F48): TransactionInstruction;
export declare function makeAddPerpMarketInstruction(programId: PublicKey, mangoGroupPk: PublicKey, oraclePk: PublicKey, perpMarketPk: PublicKey, eventQueuePk: PublicKey, bidsPk: PublicKey, asksPk: PublicKey, mngoVaultPk: PublicKey, adminPk: PublicKey, maintLeverage: I80F48, initLeverage: I80F48, liquidationFee: I80F48, makerFee: I80F48, takerFee: I80F48, baseLotSize: BN, quoteLotSize: BN, rate: I80F48, maxDepthBps: I80F48, targetPeriodLength: BN, mngoPerPeriod: BN): TransactionInstruction;
export declare function makeCachePerpMarketsInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, perpMarkets: PublicKey[]): TransactionInstruction;
export declare function makeSettlePnlInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoAccountAPk: PublicKey, mangoAccountBPk: PublicKey, mangoCachePk: PublicKey, rootBankPk: PublicKey, nodeBankPk: PublicKey, marketIndex: BN): TransactionInstruction;
export declare function makeConsumeEventsInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, perpMarketPk: PublicKey, eventQueuePk: PublicKey, mangoAccountPks: PublicKey[], limit: BN): TransactionInstruction;
export declare function makePlacePerpOrderInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoAccountPk: PublicKey, ownerPk: PublicKey, mangoCachePk: PublicKey, perpMarketPk: PublicKey, bidsPk: PublicKey, asksPk: PublicKey, eventQueuePk: PublicKey, openOrders: PublicKey[], price: BN, quantity: BN, clientOrderId: BN, side: 'buy' | 'sell', orderType?: 'limit' | 'ioc' | 'postOnly'): TransactionInstruction;
export declare function makeUpdateFundingInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, perpMarketPk: PublicKey, bidsPk: PublicKey, asksPk: PublicKey): TransactionInstruction;
export declare function makeForceCancelSpotOrdersInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, liqeeMangoAccountPk: PublicKey, baseRootBankPk: PublicKey, baseNodeBankPk: PublicKey, baseVaultPk: PublicKey, quoteRootBankPk: PublicKey, quoteNodeBankPk: PublicKey, quoteVaultPk: PublicKey, spotMarketPk: PublicKey, bidsPk: PublicKey, asksPk: PublicKey, signerPk: PublicKey, dexEventQueuePk: PublicKey, dexBasePk: PublicKey, dexQuotePk: PublicKey, dexSignerPk: PublicKey, dexProgramPk: PublicKey, liqeeOpenOrdersKeys: {
    pubkey: PublicKey;
    isWritable: boolean;
}[], limit: BN): TransactionInstruction;
export declare function makeForceCancelPerpOrdersInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, perpMarketPk: PublicKey, bidsPk: PublicKey, asksPk: PublicKey, liqeeMangoAccountPk: PublicKey, liqorOpenOrdersPks: PublicKey[], limit: BN): TransactionInstruction;
export declare function makeLiquidateTokenAndTokenInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, liqeeMangoAccountPk: PublicKey, liqorMangoAccountPk: PublicKey, liqorAccountPk: PublicKey, assetRootBankPk: PublicKey, assetNodeBankPk: PublicKey, liabRootBankPk: PublicKey, liabNodeBankPk: PublicKey, liqeeOpenOrdersPks: PublicKey[], liqorOpenOrdersPks: PublicKey[], maxLiabTransfer: I80F48): TransactionInstruction;
export declare function makeLiquidateTokenAndPerpInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, liqeeMangoAccountPk: PublicKey, liqorMangoAccountPk: PublicKey, liqorAccountPk: PublicKey, rootBankPk: PublicKey, nodeBankPk: PublicKey, liqeeOpenOrdersPks: PublicKey[], liqorOpenOrdersPks: PublicKey[], assetType: AssetType, assetIndex: BN, liabType: AssetType, liabIndex: BN, maxLiabTransfer: I80F48): TransactionInstruction;
export declare function makeLiquidatePerpMarketInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, perpMarketPk: PublicKey, eventQueuePk: PublicKey, liqeeMangoAccountPk: PublicKey, liqorMangoAccountPk: PublicKey, liqorAccountPk: PublicKey, liqeeOpenOrdersPks: PublicKey[], liqorOpenOrdersPks: PublicKey[], baseTransferRequest: BN): TransactionInstruction;
export declare function makeSettleFeesInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, perpMarketPk: PublicKey, mangoAccountPk: PublicKey, rootBankPk: PublicKey, nodeBankPk: PublicKey, bankVaultPk: PublicKey, feesVaultPk: PublicKey, signerPk: PublicKey): TransactionInstruction;
export declare function makeResolvePerpBankruptcyInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, liqeeMangoAccountPk: PublicKey, liqorMangoAccountPk: PublicKey, liqorPk: PublicKey, rootBankPk: PublicKey, nodeBankPk: PublicKey, vaultPk: PublicKey, insuranceVaultPk: PublicKey, signerPk: PublicKey, perpMarketPk: PublicKey, liqorOpenOrdersPks: PublicKey[], liabIndex: BN, maxLiabTransfer: I80F48): TransactionInstruction;
export declare function makeResolveTokenBankruptcyInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, liqeeMangoAccountPk: PublicKey, liqorMangoAccountPk: PublicKey, liqorPk: PublicKey, quoteRootBankPk: PublicKey, quoteNodeBankPk: PublicKey, quoteVaultPk: PublicKey, insuranceVaultPk: PublicKey, signerPk: PublicKey, liabRootBankPk: PublicKey, liabNodeBankPk: PublicKey, liqorOpenOrdersPks: PublicKey[], liabNodeBankPks: PublicKey[], maxLiabTransfer: I80F48): TransactionInstruction;
export declare function makeRedeemMngoInstruction(programId: PublicKey, mangoGroup: PublicKey, mangoCache: PublicKey, mangoAccount: PublicKey, owner: PublicKey, perpMarket: PublicKey, mngoPerpVault: PublicKey, mngoRootBank: PublicKey, mngoNodeBank: PublicKey, mngoBankVault: PublicKey, signer: PublicKey): TransactionInstruction;
export declare function makeAddMangoAccountInfoInstruction(programId: PublicKey, mangoGroup: PublicKey, mangoAccount: PublicKey, owner: PublicKey, info: string): TransactionInstruction;
export declare function makeDepositMsrmInstruction(programId: PublicKey, mangoGroup: PublicKey, mangoAccount: PublicKey, owner: PublicKey, msrmAccount: PublicKey, msrmVault: PublicKey, quantity: BN): TransactionInstruction;
export declare function makeWithdrawMsrmInstruction(programId: PublicKey, mangoGroup: PublicKey, mangoAccount: PublicKey, owner: PublicKey, msrmAccount: PublicKey, msrmVault: PublicKey, signer: PublicKey, quantity: BN): TransactionInstruction;
export declare function makeChangePerpMarketParamsInstruction(programId: PublicKey, mangoGroupPk: PublicKey, perpMarketPk: PublicKey, adminPk: PublicKey, maintLeverage: I80F48 | undefined, initLeverage: I80F48 | undefined, liquidationFee: I80F48 | undefined, makerFee: I80F48 | undefined, takerFee: I80F48 | undefined, rate: I80F48 | undefined, maxDepthBps: I80F48 | undefined, targetPeriodLength: BN | undefined, mngoPerPeriod: BN | undefined): TransactionInstruction;
export declare function makeSetGroupAdminInstruction(programId: PublicKey, mangoGroupPk: PublicKey, newAdminPk: PublicKey, adminPk: PublicKey): TransactionInstruction;
export declare function makeForceSettleQuotePositionsInstruction(programId: PublicKey, mangoGroupPk: PublicKey, mangoCachePk: PublicKey, liqeeMangoAccountPk: PublicKey, liqorMangoAccountPk: PublicKey, liqorAccountPk: PublicKey, rootBankPk: PublicKey, nodeBankPk: PublicKey, liqeeOpenOrdersPks: PublicKey[]): TransactionInstruction;
//# sourceMappingURL=instruction.d.ts.map