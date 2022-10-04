const fs = require('fs').promises;
const path = require('path');

const PATH_PEOPLE_TALKER = path.resolve(__dirname, '../talker.json');

const readTalkersData = async () => {
    try {
        const data = await fs.readFile(PATH_PEOPLE_TALKER, 'utf-8');

        if (!data) {
            return [];
    }

    return JSON.parse(data);
    } catch (error) {
        console.error(`Erro na leitura do arquivo: ${error}`);
    }
};

readTalkersData();

module.exports = {
    readTalkersData,
};
