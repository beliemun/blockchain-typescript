import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timeStamp: number;

    static calculateBlockHash = (index: number, previousHassh: string, timeStamp: number, data: string): string =>
        CryptoJS.SHA256(index + previousHassh + timeStamp + data).toString();

    constructor(index: number, hash: string, previousHash: string, data: string, timeStamp: number) {
        this.index = index,
            this.hash = hash,
            this.previousHash = previousHash,
            this.data = data,
            this.timeStamp = timeStamp
    }
}

const genesisBlock: Block = new Block(0, "QWEASDZXC", "", "Hello", 123456);

let blockChain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;

const getLatestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

console.log(blockChain);

export { };