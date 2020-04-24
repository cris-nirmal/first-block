const { GENESIS_BLOCK_DATA } = require ('./config');

class Block {
    constructor({data, timestamp, hash, lasthash}){
    this.data=data;
    this.timestamp=timestamp;
    this.hash=hash;
    this.lasthash=lasthash;
    }

    static geneBlock(){
        return new this(GENESIS_BLOCK_DATA);
    }
}
    
const genBlock=Block.geneBlock();

console.log ('Genesis Block : ' ,genBlock) ;

const block= new Block({
    data:'dumy-data',
    timestamp:'01/01/2020',
    hash:'hash-data',
    lasthash:genBlock.hash
});

console.log('My first block : ' , block);