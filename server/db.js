const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.DB, connectionParams);
		console.log("Conectado a la base de datos con éxito");
	} catch (error) {
		console.log(error);
		console.log("¡No se pudo conectar la base de datos!");
	}
};
