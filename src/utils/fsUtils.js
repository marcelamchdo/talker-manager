const fs = require('fs').promises;
const path = require('path');

const PEOPLE_TALKER = path.resolve(__dirname, '../talker.json');

const talkersData = async () => {
    try {
    const data = await fs.readFile(PEOPLE_TALKER, 'utf-8');
    if (!data) {
        return [];
    }
    const talkers = JSON.parse(data);
    return talkers;
    } catch (error) {
        console.error(`Erro na leitura do arquivo: ${error}`);
    }
};

module.exports = {
    talkersData,
};
