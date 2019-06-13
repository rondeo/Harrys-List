const createOne = (req,res) => {
    const db = req.app.get('db'),
        { title, desc, image } = req.body;
 
 
    db.add_post( [title, desc, image, req.session.user.userId] )
        .then(response => res.status(200).send(response.data))
        .catch(error => res.status(500).send(`CREATEoNE: ${error}`))
 }
 
//  const getAll = (req,res) => {
//     const db = req.app.get('db');
 
//     db.getAll()
//         .then(response => res.status(200).json(response))
//         .catch(error => res.status(500).send(`GETaLL: ${error}`))
//  }
 
//  const updateOne = (req,res) => {
//     const db = req.app.get('db'),
//     { name, hash } = req.body,
//     { id } = req.params
 
//     db.editOne( id, name, address, city, state, zipcode, image_url, monthly_rent, monthly_mortgage )
//         .then(response => res.status(200).json(response))
//         .catch(error => res.status(500).send(`controller-updateOne: ${error}`))
//  }
 
//  const deleteOne = (req,res) => {
//     const db = req.app.get('db'),
//         {id} = req.params
 
//     db.deleteOne(id)
//         .then(response => res.status(200).send(response))
//         .catch(error => res.status(500).send(`controller-deleteOne: ${error}`))
//  }
 
 
 module.exports = {
    createOne,
    // getAll,
    // updateOne,
    // deleteOne
 }