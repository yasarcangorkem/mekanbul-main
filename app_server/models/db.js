var mongoose = require('mongoose');
var dbURI = 'mongodb+srv://yasarcan:1234@mekanbul.5397nea.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
    console.log('Mongoose ' + dbURI + ' adresindeki veritabanına bağlandı\n');
});
mongoose.connection.on('error', function() {
    console.log('Mongoose bağlantı hatası\n');
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose bağlantısı kesildi\n');
});

function kapat(msg, callback) {
    mongoose.connection.close(function() {
        console.log(msg);
        callback();
    });
}
process.on('SIGINT', function() {
    kapat('Uygulama kapatıldı\n', function() {
        process.exit(0);
    });
});

require('./mekansema');