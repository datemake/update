module.exports = {
    getReviews: (req, res) => {
        const db = req.app.get("db");
        console.log(req.params)
        db.get_reviews(req.params.dateId)
        .then(response => res.status(200).json(response))
          .catch(err => {
            res.status(500).send({ errorMessage: "Something went wrong" });
            console.log(err);
          });
      },
      postReview: async (req, res) => {

        const db = req.app.get("db");
        const { userFid,review,exif, url, dateId } = req.body;
        console.log(req.body);
        try{
          const user = await db.get_user(userFid)
          if(user.length){
            console.log(user)
            const submitted = await db.post_review([review, dateId, user[0].user_id, url])
            if(submitted.length){
              const reviews = await db.get_reviews(dateId)
              res.status(200).json(reviews)
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
}



