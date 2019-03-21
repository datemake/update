module.exports = {
  nameDate: (req, res) => {
    const db = req.app.get("db");
    const {name} = req.body;
    console.log(req.body);
    db.name_date(name)
    .then(response => res.status(200).json(response.pop()))
    .catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
      console.log(err);
    });
  },
  
  
  
  createDate: (req,res) => {
        const db = req.app.get("db");
    const { food_id,activity_id,memory_id,user_id } = req.body;
    console.log(req.body);
    db.create_date([food_id,activity_id,memory_id,user_id])
      .then(response => res.status(200).json(response.pop()))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });
    },
    createDateActivity: (req,res) => {
        const db = req.app.get("db");
    const { activity_description,activity_photo,activity_google_place_id } = req.body;
    console.log(req.body);
    db.create_date_activity([activity_description,activity_photo,activity_google_place_id])
      .then(response => res.status(200).json(response.pop()))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });
    },
    createDateFood: (req,res) => {
        const db = req.app.get("db");
    const { food_description,food_photo,food_google_place_id } = req.body;
    console.log(req.body);
    db.create_date_food([food_description,food_photo,food_google_place_id ])
      .then(response => res.status(200).json(response.pop()))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });
    },
    createDateMemory: (req,res) => {
        const db = req.app.get("db");
    const { memory_description,memory_photo,memory_google_place_id } = req.body;
    console.log(req.body);
    db.create_date_memory([memory_description,memory_photo,memory_google_place_id])
      .then(response => res.status(200).json(response.pop()))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });
    },
    createDateReview: (req,res) => {
        const db = req.app.get("db");
    const { review,dates_id,user_id,review_photo } = req.body;
    console.log(req.body);
    db.create_date_review([review,dates_id,user_id,review_photo])
      .then(response => res.status(200).json(response.pop()))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });
    }
}

