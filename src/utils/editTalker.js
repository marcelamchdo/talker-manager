const fs = require('fs').promises;
const path = require('path');
const { readTalkersData } = require('./readTalkerFile');

const FILE_PATH = path.resolve(__dirname, '../talker.json');

async function editTalker(data) {
    const talkers = await readTalkersData();
    const talkerToEdit = talkers.filter((talker) => talker.id !== data.id);
    const newTalkers = [...talkerToEdit, data];
try {
     await fs.writeFile(FILE_PATH, JSON.stringify(newTalkers));
    return data;
    } catch (error) {
        console.error('erro ao mudar arquivo');
    }
}

module.exports = editTalker;