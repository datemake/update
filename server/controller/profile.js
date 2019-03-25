module.exports = {
    getProfile: (req, res) => {
        const db = req.app.get("db");
        console.log(req.body);
        db.get_profile()
          .then(response => res.status(200).json(response))
          .catch(err => {
            res.status(500).send({ errorMessage: "Something went wrong" });
            console.log(err);
          });
    },
    
    addUser: async (req, res) => {
      const db = req.app.get("db");
      const {displayName, email, firebaseId, profileImg} = req.body
      // console.log(req.body);
      const user = await db.get_user(firebaseId)
      if(user[0]){
        // console.log(user)
        res.status(200)
      }
    else {
        await db.add_user([firebaseId, displayName, email, profileImg])
        res.status(200)
        // return res.status(200).json(req.session.user)
    }
    },

    completedDates: (req, res) => {
        const db = req.app.get("db");
        console.log(req.body);
        db.completed_dates()
          .then(response => res.status(200).json(response))
          .catch(err => {
            res.status(500).send({ errorMessage: "Something went wrong" });
            console.log(err);
          });
      },
    savedDates: (req, res) => {
        const db = req.app.get("db");
        console.log(req.body);
        db.saved_dates()
          .then(response => res.status(200).json(response))
          .catch(err => {
            res.status(500).send({ errorMessage: "Something went wrong" });
            console.log(err);
          });
      },
      
}