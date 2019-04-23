import ipfs from './ipfs';

const basicUplaod = async (fileBuffer) => {
    let hash;
    await ipfs.add(fileBuffer, (err, ipfsHash) => {
        console.log(err,ipfsHash);
        hash = ipfsHash;
    });
    return hash;
};

export { basicUplaod };

