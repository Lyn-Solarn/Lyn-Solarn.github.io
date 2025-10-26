import express from 'express';
import fetch from 'node-fetch';
const solarSystem = (await import('npm-solarsystem')).default;

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// Root Route
app.get('/', async (req, res) => {
   let url = "https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&per_page=50&orientation=horizontal&q=solar%20system"
   let response = await fetch(url);
   let data = await response.json();
   let randomNum = Math.floor(Math.random() * data.hits.length);
   let randomImage = data.hits[randomNum].webformatURL;
   
   res.render('home.ejs', {randomImage});
});

// Planet Route
app.get('/planet', (req, res) => {
    let planet_name = req.query.planetName;

    if (planet_name == "APOD") {
      res.render('apod.ejs');
    } else {
      let planetInfo = solarSystem[`get${planet_name}`]();
      res.render('planetInfo.ejs', {planetInfo, planet_name});
    }
 });

app.get('/comets', (req, res) => {
   let cometInfo = solarSystem.getComets();

   res.render('cometInfo.ejs', {cometInfo});
})

app.get('/asteroids', (req, res) => {
   let asteroidInfo = solarSystem.getAsteroids();

   res.render('asteroidInfo.ejs', {asteroidInfo});
})

// Mercury Route
// app.get('/mercury', (req, res) => {
//     let planetInfo = solarSystem.getMercury();
//     res.render('mercury.ejs', {planetInfo});
//  });

app.listen(3000, () => {
   console.log('Server Started');
});