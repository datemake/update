require("dotenv").config();

module.exports = {

    getDates: async (req, res) => {
        const db = req.app.get("db");
        const {location, within, tags} = req.body
        // console.log(req.body)
        const initial = await db.get_dates(tags) // <-- I'll filter by tags first (smaller & more precise query)
        // console.log(initial)
        const locationFilter = initial.filter((e) => {
            let fixedLatLng = e.lat_lng.replace(/[{}"latlng:]/gi, '').split(',')
            // console.log(fixedLatLng)
            let lat1 = location.lat 
            let lon1 = location.lng 
            let lat2 = fixedLatLng[0]
            // console.log(e.lat_lng['lat'])
            let lon2 = fixedLatLng[1]
            let R = 3958.7558657440545; // Radius of the earth in km
            // let R = 6371
            let dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
            let dLon = (lon2 - lon1) * Math.PI / 180;
            let a = 
                0.5 - Math.cos(dLat)/2 + 
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                (1 - Math.cos(dLon))/2;
            
            let distance =  R * 2 * Math.asin(Math.sqrt(a));
            // console.log(distance, within)
            return distance <= within
            
        })
        // console.log(locationFilter)
        if(locationFilter.length){
            res.status(200).json(locationFilter)
        }
        else{
            res.status(404).json('No dates found with given criteria')
        }
    },
    specificDate: (req, res) => {
        const db = req.app.get("db");
        console.log(req.params.id);
        db.specific_date([req.params.id])
          .then(response => {
            console.log(response);
            res.status(200).json(response);
          })
    
          .catch(err => {
            res.status(500).send({ errorMessage: "Something went wrong" });
            console.log(err);
          });
      }
}