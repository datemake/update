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