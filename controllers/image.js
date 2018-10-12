
const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '654e80bcd77a4ad7b831de87970ee8fc'
});

const handleApiCall = (req, res) => {
 app.models
	 .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
	 .then(data => {
	 	res.json(data);
	 })
	 .catch (err => res.status(400).json('Unable to work with API'))
}


imageHandle = (req, res, db, bcrypt)=> {
	const { id } = req.body;
	db('users').where('id', '=', id)
	.increment('entries', 1)
	.returning('entries') 
	.then(entries => {
	res.json(entries[0]);
	})
	.catch(err => res.status(400).json('error getting entries'))
	}

    

    module.exports = {
   imageHandle,
   handleApiCall,
};