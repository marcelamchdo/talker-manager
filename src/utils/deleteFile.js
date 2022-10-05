const fs = require('fs').promises;
const path = require('path');
const { readTalkersData } = require('./readTalkerFile');

const DIRNAME = path.resolve(__dirname, '../talker.json');

const deleteTalker = async (id) => {
    const oldData = await readTalkersData();
    const newData = oldData.filter((talker) => talker.id !== id);
try {
     await fs.writeFile(DIRNAME, JSON.stringify(newData));
    return;
    } catch (error) {
        console.error('Erro na escrita do arquivo');
    }
};

module.exports = deleteTalker;