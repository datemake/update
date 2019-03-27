module.exports = {
    getReviews: (req, res) => {
        const db = req.app.get("db");
        db.get_reviews()
        .then(response => res.status(200).json(response))
    
          .catch(err => {
            res.status(500).send({ errorMessage: "Something went wrong" });
            console.log(err);
          });
      },
      postReview: (req, res) => {
        const db = req.app.get("db");
        const { inputReview,id,user_id } = req.body;
        console.log(req.body);
        db.post_review([inputReview,id,user_id])
          .then(response => res.status(200).json(response.pop()))
          .catch(err => {
            res.status(500).send({ errorMessage: "Something went wrong" });
            console.log(err);
          });
      },
}