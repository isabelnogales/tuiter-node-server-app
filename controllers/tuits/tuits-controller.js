import * as tuitsDao from "../tuits/tuits-dao.js"

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const findTuits = async(req, res) => {
    const tuits= await tuitsDao.findTuits()
    res.json(tuits)
}


const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = (Number)(req.params.uid);
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate,updates);
    res.json(status);
}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.uid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    res.json(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:uid', updateTuit);
    app.delete('/api/tuits/:uid', deleteTuit);
}
