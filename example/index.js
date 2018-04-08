const Pomby = require('pomby');

Pomby.init({
  
});

Pomby.listen(8080, () => {
  console.info('Listening on port 8080');
});
