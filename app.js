let express = require('express'),
    bodyParser = require('body-parser'),
    settings = require('./config/settings'),
    cors = require('cors'),
    // jwt = require('./routes/middlewares/jwt'),
    errorHandler = require('./utils/errorHandler');
let { controllerTeam,controllerPlayer,controllerMatch } = require('./routes');
const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(jwt());
app.use(errorHandler);
app.use("/api/v1", controllerTeam);
app.use("/api/v1", controllerPlayer);
app.use("/api/v1", controllerMatch);
app.listen(settings.port, '0.0.0.0', function () {
    console.log('Server running on port ' + settings.port);
});