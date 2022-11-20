import posts from "./tuits.js";

let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id =(new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits = (req, res) => {
    res.json(tuits)
}


const updateTuit = (req, res) => {
    const tuitdIdToUpdate = (Number)(req.params.uid);
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitdIdToUpdate);
    console.log(tuitIndex)
    tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    console.log(tuits[tuitIndex])

    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.uid;
    console.log(tuitdIdToDelete)
    tuits = tuits.filter((t) =>{
        return t._id !== (Number)(tuitdIdToDelete)
    }
        );
    console.log(tuits)
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:uid', updateTuit);
    app.delete('/api/tuits/:uid', deleteTuit);
}
