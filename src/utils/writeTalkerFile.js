const fs = require('fs').promises;
const path = require('path');
const { readTalkersData } = require('./readTalkerFile');

const PATH_TALKER = path.resolve(__dirname, '../talker.json');

const writeTalkerFile = async (data) => {
    const oldData = await readTalkersData();
    const idData = oldData.length + 1;
    const newData = { id: idData, ...data };
    try {
        await fs.writeFile(PATH_TALKER, JSON.stringify([...oldData, newData]));
        return newData;
    } catch (error) {
        console.error(`Erro na escrita do arquivo: ${error}`);
    }
};

module.exports = writeTalkerFile;