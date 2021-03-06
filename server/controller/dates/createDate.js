require("dotenv").config();

const axios = require("axios");

const activityID = [];
const foodID = [];
const memoryID = [];

module.exports = {
  // createDate: (req, res) => {
  //   let activity_id = activityID[0];
  //   let food_id = foodID[0];
  //   let memory_id = memoryID[0];
  //   const db = req.app.get("db");
  //   const { user_id, date_name, lat_lng, date_description } = req.body;
  //   console.log(req.body);
  //   db.create_date([
  //     food_id,
  //     activity_id,
  //     memory_id,
  //     user_id,
  //     date_name,
  //     lat_lng,
  //     date_description
  //   ])
  //     .then(response => res.status(200).json(response.pop()))
  //     .catch(err => {
  //       res.status(500).send({ errorMessage: "Something went wrong" });
  //       console.log(err);
  //     });
  // },
  createDate: async (req, res) => {
   
    let activity_id = activityID[0];
    let food_id = foodID[0];
    let memory_id = memoryID[0];
    const db = req.app.get("db");
    const { user_id, date_name, lat_lng, date_description, tags } = req.body;
    console.log(req.body);
    try{
      const user = await db.get_user(user_id)
      if(user.length){
        console.log(user)
        const date = await db.create_date([food_id,activity_id,memory_id,user[0].user_id,date_name,lat_lng,date_description, tags ])
        if(date.length){
          const complete = await db.get_dates(user[0].user_id)
          res.status(200).json(complete)
        }
        else{
          res.status(500).send({ errorMessage: "Something went wrong" });
        }
      }
    }
    catch(err){
      console.log(err)
    }
    
  },

  createDateActivity: (req, res) => {
    const db = req.app.get("db");
    const {
      activity_name,
      activity_photo,
      activity_google_place_id,
      activity_description
    } = req.body;
    db.create_date_activity([
      activity_name,
      activity_photo,
      activity_google_place_id,
      activity_description
    ])
      .then(response => {
        activityID.push(response[0].activity_id);
        console.log(activityID);
        console.log(response);
        res.status(200).json(response.pop());
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });
  },
  createDateFood: (req, res) => {
    const db = req.app.get("db");
    const { food_name, food_photo, food_google_place_id, food_description } = req.body;
    console.log(req.body);
    db.create_date_food([food_name, food_photo, food_google_place_id, food_description])
      .then(response => {
        foodID.push(response[0].food_id);
        console.log(foodID);
        console.log(response);
        res.status(200).json(response.pop());
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });
  },
  createDateMemory: (req, res) => {
    const db = req.app.get("db");
    const {
      memory_name,
      memory_photo,
      memory_google_place_id,
      memory_description
    } = req.body;
    console.log(req.body);
    db.create_date_memory([
      memory_name,
      memory_photo,
      memory_google_place_id,
      memory_description
    ])
      .then(response => {
        memoryID.push(response[0].memory_id);
        console.log(memoryID);
        console.log(response);
        res.status(200).json(response.pop());
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });
  },
  createDateReview: (req, res) => {
    const db = req.app.get("db");
    const { review, dates_id, user_id, review_photo } = req.body;
    console.log(req.body);
    db.create_date_review([review, dates_id, user_id, review_photo])
      .then(response => res.status(200).json(response.pop()))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });
  },

  getMatchingActivities: (req, res) => {
    const { location, activity } = req.query;
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${
          process.env.REACT_APP_GOOGLE
        }&query=${activity}&location=${location}&radius=10000`
      )
      .then(response => {
        // console.log(response.data)
        res.status(200).json(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getPhotos: (req, res) => {
    const { place_id } = req.body;

    axios
      .get(
        ` https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${
          process.env.REACT_APP_GOOGLE
        }&fields=photos,formatted_address,name,place_id`
      )
      .then(response => {
        console.log(response.data);
        res.status(200).json(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getMatchingFood: (req, res) => {
    const { location, food } = req.body;

    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${
          process.env.REACT_APP_GOOGLE
        }&query=${food}&location=${location}&radius=10000`
      )
      .then(response => {
        console.log(response.data);
        res.status(200).json(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getMatchingMemory: (req, res) => {
    const { location, memory } = req.body;

    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${
          process.env.REACT_APP_GOOGLE
        }&query=${memory}&location=${location}&radius=10000`
      )
      .then(response => {
        console.log(response.data);
        res.status(200).json(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
