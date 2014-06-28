var cluster = require('cluster');

var redis = require('socket.io-redis');
var os = require('os');

if (cluster.isMaster) {
 







  for (var i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
      cluster.fork();
  }); 
}

if (cluster.isWorker) {
  //var express = require('express');
  //var app = express();










var jsdom = require("jsdom");
 var window = jsdom.jsdom().createWindow();
 var $ = require('./node_modules/jquery/dist/jquery')(window);
 var crypto = require('crypto');
 var fs = require('fs');
 var binary = require('binary');
var ip = require("ip");
 var mongoose = require('mongoose');

bitcoin = require('bitcoin');
var moment = require('moment');



//packages for website
var express = require('express'),
    socketio = require('socket.io'),
    app = express();
var csrf = express.csrf();
http = require('http');
var fs = require('fs');
var https = require('https');
var server = http.createServer(app);
var engines = require('consolidate');
var https = require('https');
var MongoStore = require('connect-mongo')(express);
var sendgrid  = require('sendgrid')('anonymousventures', 'mogulskier');
var Bitfinex = require('bitfinex');
var bitfinex = new Bitfinex('0ZBJrWbWZ8UHJxsV2iR82RB9ISnbwXJNdLMLSf5JIFv', 'RM1RWQcO8H3K1mWOYhIQSgmpVnExznYuYqwH0zPg2FE');
var Bitstamp = require('bitstamp');
var bitstamp = new Bitstamp;


var io = require('socket.io')(3000);
var redis = require('socket.io-redis');
io.adapter(redis({ host: 'localhost', port: 6379 }));


  // io.sockets.on('connection', function(socket) {
  //   socket.emit('data', 'connected to worker: ' + cluster.worker.id);
  // });

  // app.listen(80);


//   io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });

// var io = require('socket.io-emitter')();
// setInterval(function(){
//   //io.sockets.emit('fuck', new Date);
// }, 3000);





    app.configure(function() {
        app.set('views', __dirname + '/views');
        app.set('port', process.env.PORT || 8080);
        app.set('view engine', 'html');

        app.set('view options', {
            layout: false
        });

        app.engine('.html', engines.handlebars);
        app.use(express.json());
            app.use(express.urlencoded());
        app.use(express.methodOverride());
        app.use(express.cookieParser('asdfsecret'));
        app.use(express.cookieSession());


        var conditionalCSRF = function (req, res, next) {
          //compute needCSRF here as appropriate based on req.path or whatever
          if ( ( req.path.indexOf('withdraw')!= -1 && req.path.indexOf('withdraw/confirm')== -1) ||  req.path.indexOf('buy')!= -1  || req.path.indexOf('ask')!= -1 || req.path.indexOf('change_password')!= -1 || req.path.indexOf('exercise')!= -1 || req.path.indexOf('cancel_order')!= -1) {
            csrf(req, res, next);
          } else {
            next();
          }
        }

        app.use(conditionalCSRF);

        //app.use(express.csrf());
        // changed app.use(express.session({ secret: 'asdfsecret'}));
        //var db = mongoose.createConnection("mongodb://localhost/helloExpress");
        var testMongooseDb = mongoose.createConnection('mongodb://localhost/helloExpress');
        //var options_with_mongoose_connection = { mongoose_connection: testMongooseDb.connections[0] };
        app.use(express.session({
            secret: 'secretdawg',
            store: new MongoStore({
                mongoose_connection: testMongooseDb
            })
        }));

        //app.use(express.favicon());
        app.use(express.static(__dirname + "/public"));
        //app.use(express.static(__dirname + "/public/withdraw"));
        app.use(app.router);
        //app.use(express.static(__dirname + "/views"));

    });



TRANSACTION_FEE = 1;
LOOSER_BACK = 1;


mongoose.connect("mongodb://localhost/helloExpress");



var Contract = new mongoose.Schema({
    expiration_time: Number,
    start_time: Number,
    option_type: String,
    strike_price: Number,
    initial_margin: Number,
    maintenance_margin: Number,
    variation_margin: Number,
    max_price_change: Number,
    full_symbol: String,
    short_symbol: String,
    fees: Number,
    balance: { type: Number, default: 0},
});

var ContractRef = new mongoose.Schema({
    contract_number: Number,
    expiration_group: Number,
    expiration_time: Number,
    start_time: Number,
    option_type: String,
    strike_price: Number,
    initial_margin: Number,
    maintenance_margin: Number,
    variation_margin: Number,
    max_price_change: Number,
    full_symbol: String,
    short_symbol: String,
    fees: Number,
    balance: { type: Number, default: 0},
});



if ( ip.address() == '192.168.1.56')
var User = new mongoose.Schema({
    email: String,
    password: String,
    full_name: String,
    hash: String,
    activated: { type: Boolean, default: false},
    deposits: [{ type: mongoose.Schema.ObjectId, ref: 'Deposit' }],
    dogecoin: { type: mongoose.Schema.ObjectId, ref: 'Coin' },
    bitcoin: { type: mongoose.Schema.ObjectId, ref: 'Coin' },
    litecoin: { type: mongoose.Schema.ObjectId, ref: 'Coin' },
    withdrawals: [{ type: mongoose.Schema.ObjectId, ref: 'Withdrawal' }],
    orders: [{ type: mongoose.Schema.ObjectId, ref: 'Order' }],
    deposit_address: String,
    balance: { type: Number, default: 0},
    available_balance: { type: Number, default: 0},
    pending_deposits: { type: Number, default: 0},
    pending_withdrawals: { type: Number, default: 0},
    current_margin: { type: Number, default: 0},
    maintenance_margin: { type: Number, default: 0},
    required_margin:  { type: Number, default: 0},
    in_positions: { type: Number, default: 0},
    in_orders: { type: Number, default: 0},
    in_orders_non_margin: { type: Number, default: 0},
    login_attempts: [Number],
    BUSD1: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD2: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD3: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD4: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD5: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD6: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD7: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD8: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD9: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD10: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD11: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD12: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD13: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD14: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD15: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD16: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD17: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD18: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD19: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD20: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD21: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD22: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD23: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD24: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD25: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD26: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD27: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD28: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD29: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD30: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD31: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD32: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD33: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD34: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD35: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD36: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD37: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD38: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD39: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD40: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD41: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD42: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD43: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD44: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD45: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD46: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD47: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD48: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD49: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD50: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD51: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD52: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD53: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD54: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD55: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD56: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD57: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD58: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD59: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD60: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD61: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD62: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD63: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD64: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD65: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD66: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD67: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD68: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD69: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD70: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD71: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD72: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD73: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD74: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD75: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD76: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD77: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD78: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD79: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
});
else
var User = new mongoose.Schema({
    email: String,
    password: String,
    full_name: String,
    hash: String,
    activated: { type: Boolean, default: false},
    deposits: [{ type: mongoose.Schema.ObjectId, ref: 'Deposit' }],
    dogecoin: { type: mongoose.Schema.ObjectId, ref: 'Coin' },
    bitcoin: { type: mongoose.Schema.ObjectId, ref: 'Coin' },
    litecoin: { type: mongoose.Schema.ObjectId, ref: 'Coin' },

    x11coin: { type: mongoose.Schema.ObjectId, ref: 'Coin' },
    darkcoin: { type: mongoose.Schema.ObjectId, ref: 'Coin' },
    ppcoin: { type: mongoose.Schema.ObjectId, ref: 'Coin' },
    vericoin: { type: mongoose.Schema.ObjectId, ref: 'Coin' },
    blackcoin: { type: mongoose.Schema.ObjectId, ref: 'Coin' },
    namecoin: { type: mongoose.Schema.ObjectId, ref: 'Coin' },

    withdrawals: [{ type: mongoose.Schema.ObjectId, ref: 'Withdrawal' }],
    orders: [{ type: mongoose.Schema.ObjectId, ref: 'Order' }],
    deposit_address: String,
    balance: { type: Number, default: 0},
    available_balance: { type: Number, default: 0},
    pending_deposits: { type: Number, default: 0},
    pending_withdrawals: { type: Number, default: 0},
    current_margin: { type: Number, default: 0},
    maintenance_margin: { type: Number, default: 0},
    required_margin:  { type: Number, default: 0},
    in_positions: { type: Number, default: 0},
    in_orders: { type: Number, default: 0},
    in_orders_non_margin: { type: Number, default: 0},
    login_attempts: [Number],
    BUSD1: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD2: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD3: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD4: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD5: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD6: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD7: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD8: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD9: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD10: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD11: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD12: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD13: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD14: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD15: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD16: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD17: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD18: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD19: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD20: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD21: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD22: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD23: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD24: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD25: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD26: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD27: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD28: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD29: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD30: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD31: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD32: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD33: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD34: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD35: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD36: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD37: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD38: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD39: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD40: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD41: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD42: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD43: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD44: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD45: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD46: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD47: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD48: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD49: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD50: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD51: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD52: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD53: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD54: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD55: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD56: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD57: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD58: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD59: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD60: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD61: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD62: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD63: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD64: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD65: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD66: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD67: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD68: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD69: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD70: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD71: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD72: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD73: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD74: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD75: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD76: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD77: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD78: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
BUSD79: { type: mongoose.Schema.ObjectId, ref: 'Contract' },
});







for (i=0; i<80; i++){

    //console.log('BUSD' + i + ': { type: mongoose.Schema.ObjectId, ref: \'Contract\' },')

}


var Deposit = new mongoose.Schema({
    time: Number,
    amount: Number,
    deposit_address: String,
    status: String,
    pending: { type: Boolean, default: true},
    coin_name: String,
    coin_ticker: String,
    coin: { type: mongoose.Schema.ObjectId, ref: 'Coin' },
    txid: String,
});

var Withdrawal = new mongoose.Schema({
    time: Number,
    txid: String,
    amount: Number,
    fee: Number,
    receiving_address: String,
    status: String,
    pending: { type: Boolean, default: true},
    hash: String,
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    coin_name: String,
    coin_ticker: String,
    coin:  { type: mongoose.Schema.ObjectId, ref: 'Coin' }
});


var VariationMargin = new mongoose.Schema({
    time: Number,
    order:  { type: mongoose.Schema.ObjectId, ref: 'Order' },
    amount: Number
});



var Order = new mongoose.Schema({
    swap: Boolean,
    time: Number,
    last_trade_time: Number,
    coin_one_name: String,
    coin_two_name: String,
    coin_one_ticker: String,
    coin_two_ticker: String,
    coin_one:  { type: mongoose.Schema.ObjectId, ref: 'Coin' },
    coin_two:  { type: mongoose.Schema.ObjectId, ref: 'Coin' },
    user:  { type: mongoose.Schema.ObjectId, ref: 'User' },
    expiration_time: Number,
    start_time: Number,
    order_number: Number,
    option_type: String,
    call_put: String,
    side: String,
    price: Number,
    strike: Number,
    quantity_original: Number,
    quantity: Number,
    quantity_left: Number,
    initial_margin: Number,
    maintenance_margin: Number,
    variation_margin: [{ type: mongoose.Schema.ObjectId, ref: 'VariationMargin' }],
    btc_prices: [Number],
    max_price_change: Number,
    full_symbol: String,
    short_symbol: String,
    fees: String,
    pending: { type: String, default: 'pending'},
    net_variation:  { type: Number, default: 0},
    buyer:  { type: mongoose.Schema.ObjectId, ref: 'User' },
    seller: { type: mongoose.Schema.ObjectId, ref: 'User' },
    buyers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    sellers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    buyer_quantities: [Number],
    seller_quantities: [Number],
    opposing_users: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    opposing_quantities: [Number],
    exercised_quantity: Number,
    opposing_orders: [{ type: mongoose.Schema.ObjectId, ref: 'Order' }]
});

var OrderData = new mongoose.Schema({
    time: Number,
    full_symbol: String,
    short_symbol: String,
    coin_ticker_one: String,
    coin_ticker_two: String,
    call_put: String,
    strike: Number,
    expiration: Number,
    price: Number,
    quantity: Number,
    swap: Boolean
    });

var PairData = new mongoose.Schema({
    coin_ticker_one: String,
    coin_ticker_two: String,
    coin_one_name: String,
    coin_two_name: String,
    call_put: String,
    strike: Number,
    expiration: Number,
    swap: Boolean,
    last: Number,
    low: Number,
    high: Number,
    bid:Number,
    ask: Number,
    volume: Number
    });


var Coin = new mongoose.Schema({
    coin_name: String,
    code: String,
    balance: { type: Number, default: 0 },
    available_balance: { type: Number, default: 0 },  
    pending_deposits:{ type: Number, default: 0 },
    pending_withdrawals:{ type: Number, default: 0 },
    held_for_orders: { type: Number, default: 0 },
    deposits: [{ type: mongoose.Schema.ObjectId, ref: 'Deposit' }],
    withdrawal: [{ type: mongoose.Schema.ObjectId, ref: 'Withdrawal' }],
    deposit_address: String,
    in_positions: { type: Number, default: 0},
    in_orders: { type: Number, default: 0},
    in_orders_non_margin: { type: Number, default: 0},
    user: { type: mongoose.Schema.ObjectId, ref: 'User'},
    confirmation: { type: Number, default: 0 },
    coin_number: Number,
    order_fee: Number,
    withdraw_fee: Number,
    min_order: Number,
    orders: [{ type: mongoose.Schema.ObjectId, ref: 'Order' }],
});


VariationMargin = mongoose.model('VariationMargin', VariationMargin);
Contract = mongoose.model('Contract', Contract);
User = mongoose.model('User', User);
Coin = mongoose.model('Coin', Coin);
Deposit = mongoose.model('Deposit', Deposit);
Withdrawal = mongoose.model('Withdrawal', Withdrawal);
Order = mongoose.model('Order', Order);
OrderData = mongoose.model('OrderData', OrderData);
PairData = mongoose.model('PairData', PairData);
ContractRef = mongoose.model('ContractRef', ContractRef);




var bitcoin_client = new bitcoin.Client({
  host: '127.0.0.1',
  port: 12343,
  user: 'bitcoinrpc',
  pass: '8FZDgUAy81XtZbERtPW37G9AUG89ShgLJQTcpuHFhCrN'
});

var litecoin_client = new bitcoin.Client({
    host: '127.0.0.1',
    port: 12344,
    user: 'litecoinrpc',
    pass: '8FZDgUAy81XtZbERtPW37G9AUG89ShgLJQTcpuHFhCrN'
});

var dogecoin_client = new bitcoin.Client({
  host: '127.0.0.1',
  port: 12341,
  user: 'dogecoinrpc',
  pass: '8FZDgUAy81XtZbERtPW37G9AUG89ShgLJQTcpuHFhCrN'
});


if ( ip.address() != '192.168.1.56'){

var x11coin_client = new bitcoin.Client({
  host: '127.0.0.1',
  port: 12351,
  user: 'x11coinrpc',
  pass: '8FZDgUAy81XtZbERtPW37G9AUG89ShgLJQTcpuHFhCrN'
});

var darkcoin_client = new bitcoin.Client({
  host: '127.0.0.1',
  port: 12345,
  user: 'darkcoinrpc',
  pass: '8FZDgUAy81XtZbERtPW37G9AUG89ShgLJQTcpuHFhCrN'
});

var ppcoin_client = new bitcoin.Client({
  host: '127.0.0.1',
  port: 12347,
  user: 'ppcoinrpc',
  pass: '8FZDgUAy81XtZbERtPW37G9AUG89ShgLJQTcpuHFhCrN'
});

var vericoin_client = new bitcoin.Client({
  host: '127.0.0.1',
  port: 12348,
  user: 'vericoinrpc',
  pass: '8FZDgUAy81XtZbERtPW37G9AUG89ShgLJQTcpuHFhCrN'
});


var blackcoin_client = new bitcoin.Client({
  host: '127.0.0.1',
  port: 12349,
  user: 'blackcoinrpc',
  pass: '8FZDgUAy81XtZbERtPW37G9AUG89ShgLJQTcpuHFhCrN'
});

var namecoin_client = new bitcoin.Client({
  host: '127.0.0.1',
  port: 12350,
  user: 'namecoinrpc',
  pass: '8FZDgUAy81XtZbERtPW37G9AUG89ShgLJQTcpuHFhCrN'
});



}



all_clients = new Array();
all_clients.push(bitcoin_client);
all_clients.push(dogecoin_client);
all_clients.push(litecoin_client);

if ( ip.address() != '192.168.1.56'){
all_clients.push(x11coin_client);
all_clients.push(darkcoin_client);
all_clients.push(ppcoin_client);
all_clients.push(vericoin_client);
all_clients.push(blackcoin_client);
all_clients.push(namecoin_client);
}


console.dir ( ip.address() );

if ( ip.address() == '192.168.1.56')
    prefix = 'http://localhost:8080/';
else
    prefix = 'http://genesisblock.io/'
//prefix = 'http://ec2-54-186-16-187.us-west-2.compute.amazonaws.com/';

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {

  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log('ugh ' + data);
  });
});


//sorting functions
function dynamicSort(property) { 
    return function (obj1,obj2) {
        return obj1[property] > obj2[property] ? 1
            : obj1[property] < obj2[property] ? -1 : 0;
    }
}

function dynamicSortMultiple() {
    /*
     * save the arguments object as it will be overwritten
     * note that arguments object is an array-like object
     * consisting of the names of the properties to sort by
     */
    var props = arguments;
    return function (obj1, obj2) {
        var i = 0, result = 0, numberOfProperties = props.length;
        /* try getting a different result from 0 (equal)
         * as long as we have extra properties to compare
         */
        while(result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    }
}


app.get('/sent', function(req,res){

res.render('sent.html');

});

app.get('/register', function(req,res){

res.render('register.html');

});

app.get('/login', function(req,res){

res.render('login.html');

});

app.get('/forgot', function(req,res){

res.render('forgot.html');

});

app.get('/format', function(req,res){

var lazy = require("lazy"),
        fs  = require("fs");

 new lazy(fs.createReadStream('./input_file.txt'))
     .lines
     .forEach(function(line){

         console.log(line.toString() + '\\');


     }
 );

});

app.post('/select_deposit', function(req,res){

coin = req.body.coin;

User.findOne({email: req.session.user.email}).populate(req.body.coin).exec(function(err, user){
console.log(user);
console.log(coin);
console.log(user.email);
res.end(user[req.body.coin].deposit_address);

});


});

app.post('/select_withdraw', function(req,res){

coin = req.body.coin;

User.findOne({email: req.session.user.email}).populate(req.body.coin).exec(function(err, user){
console.log(user);
console.log(coin);
console.log(user.email);
res.end(JSON.stringify(user[req.body.coin]));

});


});


app.get('/market/:short_symbol', csrf, function(req,res){

if (req.session.activated ){

short_symbol = req.params.short_symbol

//csrf = req.session._csrf;
console.log('csrf ' + req.session._csrf);

current_time = new Date().getTime()/1000;
one_day_ago = current_time - (60 * 60 * 24 * 1000);

bitstamp.ticker(function(err, ticker) {
Order.find({$and:[{short_symbol: short_symbol}, {pending: 'pending'}, {side: 'ask'}, {pending: {'$ne': 'cancelled' }}]}).sort({price: 1}).exec( function(err, pending_asks){
Order.find({$and:[{short_symbol: short_symbol}, {pending: 'pending'}, {side: 'bid'}, {pending: {'$ne': 'cancelled' }}]}).sort({price: -1}).exec(function(err, pending_bids){
//find all orders within past day
Order.find({$and:[{short_symbol: short_symbol}, {time: {$gte: one_day_ago}}, {pending: {'$ne': 'cancelled' }}]}, function(err, orders_within_day){
//find last order
OrderData.findOne({$and:[{short_symbol: short_symbol, time: {$gte: one_day_ago }}]}).sort('-last_trade_time').limit(1).exec(function(err, last_order){
//find lowest price in 24 hours
OrderData.findOne({$and:[{short_symbol: short_symbol, time: {$gte: one_day_ago }}]}).sort({price: 1}).limit(1).exec(function(err, lowest_order){
//find highest price in 24 hours
OrderData.findOne({$and:[{short_symbol: short_symbol, time: {$gte: one_day_ago }}]}).sort({price: -1}).limit(1).exec(function(err, highest_order){

Contract.findOne({short_symbol: short_symbol}, function(err, contract){
User.findOne({email: req.session.user.email}, function (err, user) {
available_balance = user.available_balance;
maintenance_margin = user.maintenance_margin;


if (last_order == null){
last_price = null;
low_price = null;
high_price = null;
volume = 0;
}
else{
last_price = last_order.price;
low_price = lowest_order.price;
high_price = highest_order.price;

volume = 0;
$.each(orders_within_day, function(key,val){

volume += (val.quantity - val.quantity_left);

});

volume = volume/2;
console.log('volume ' + volume);
console.log('pending asks ' + pending_asks);
console.log('pending bids ' + pending_bids);

}


OrderData.find({short_symbol: short_symbol}).sort({time: 1}).exec(function(err, order_data){
//console.log('fucked ' + order_data);
object = new Object();

$.each(order_data, function(key,val){
minute_grouping = Math.floor(new Date(val.time).getTime()/ (1000 * 60));


if (object[minute_grouping] === undefined){
    subarray = new Array();
    subarray.push(val);
    object[minute_grouping] = subarray;
}
else{
    subarray = object[minute_grouping];
    subarray.push(val);
    object[minute_grouping] = subarray;
}


});

console.log('sharray ' + JSON.stringify(object));

chart_array = new Array();

$.each(object, function(key,val){

volume = 0;
$.each(val, function(keyb,valb){

volume += valb.quantity;
if (keyb == 0){
lowest_price = valb.price;
highest_price = valb.price;
open_price = valb.price;
}
else{
if (valb.price > highest_price)
    highest_price = valb.price;
if (valb.price < lowest_price)
    lowest_price = valb.price;
}

if (keyb == val.length -1){
close_price = valb.price;
}
});
subobject = new Object();
subobject.low = lowest_price;
subobject.high = highest_price;
subobject.open = open_price;
subobject.close = close_price;
subobject.volume = volume;
subobject.date = key * 1000 * 60;

chart_array.push(subobject);


});
if (pending_asks.length == 0)
    pending_asks = null;
if (pending_bids.length == 0 )
    pending_bids = null;

console.log('\r\n');
console.log(JSON.stringify(chart_array));
console.log(volume);
console.log(last_price);
console.log(low_price);
console.log(high_price);
console.log(pending_asks);
console.log(pending_bids);
console.log('available balance ' + available_balance);
console.log(' contract ' + JSON.stringify(contract));
console.log('chart info ' + JSON.stringify(chart_array));

if (last_price == null)
    last_price = 0;
if (low_price == null)
    low_price = 0;
if (high_price == null)
    high_price = 0;



res.render('trade.html', {user: JSON.stringify(user),last_bitstamp: ticker.last, maintenance_margin: maintenance_margin, available_balance: available_balance, contract: JSON.stringify(contract), chart_info: JSON.stringify(chart_array), csrf: JSON.stringify(req.session._csrf), volume: volume, last_price: last_price, low_price: low_price, high_price: high_price, pending_asks: JSON.stringify(pending_asks), pending_bids: JSON.stringify(pending_bids)});




});


});

});
});
});
});


});
});
});

});

}
else{

res.redirect(prefix + 'login');

}



});



app.get('/altmarket/:coin1/:coin2', csrf, function(req,res){

if (req.session.activated ){

coin1 = req.params.coin1;
coin2 = req.params.coin2;
coin2 = 'btc';


//csrf = req.session._csrf;
console.log('csrf ' + req.session._csrf);

current_time = Math.floor(new Date().getTime()/1000);
one_day_ago = current_time - (60 * 60 * 24);


Order.find({$and:[{swap: true},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {pending: 'pending'}, {side: 'ask'}, {pending: {'$ne': 'cancelled' }}]}).sort({price: 1}).exec( function(err, pending_asks){
Order.find({$and:[{swap: true},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {pending: 'pending'}, {side: 'bid'}, {pending: {'$ne': 'cancelled' }}]}).sort({price: -1}).exec(function(err, pending_bids){
//find all orders within past day
Order.find({$and:[{swap: true},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {time: {$gte: one_day_ago}}, {pending: {'$ne': 'cancelled' }}]}, function(err, orders_within_day){
//find last order
Order.findOne({$and:[{swap: true},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {last_trade_time: {'$ne': null }}, {pending: {'$ne': 'cancelled' }}]}).sort('-last_trade_time').limit(1).exec(function(err, last_order){
//find lowest price in 24 hours
Order.findOne({$and:[{swap: true},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {last_trade_time: {'$ne': null }}, {pending: {'$ne': 'cancelled' }}]}).sort({price: 1}).limit(1).exec(function(err, lowest_order){
//find highest price in 24 hours
Order.findOne({$and:[{swap: true},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {last_trade_time: {'$ne': null }}, {pending: {'$ne': 'cancelled' }}]}).sort({price: -1}).limit(1).exec(function(err, highest_order){

Coin.findOne({code: coin1}, function(err, coin_one){
Coin.findOne({code: coin2}, function(err, coin_two){
User.findOne({email: req.session.user.email}).populate(coin_one.coin_name + ' ' + coin_two.coin_name).exec(function (err, coin) {

console.log('yolo ' + req.session.user.email);

// console.log('da coin ' + coin);
// console.log(coin_one.coin_name);
coin_one_balance = coin[coin_one.coin_name].available_balance;
coin_two_balance = coin[coin_two.coin_name].available_balance;

coin_one_name = coin_one.coin_name;
coin_two_name = coin_two.coin_name;
console.log("coin one balance " + coin_one_balance);
console.log("coin two balance " + coin_two_balance);




if (last_order == null){
last_price = null;
low_price = null;
high_price = null;
volume = 0;
}
else{
last_price = last_order.price;
low_price = lowest_order.price;
high_price = highest_order.price;


console.log('last_price ' + last_price);
console.log('low price ' + low_price);
console.log('high price ' + high_price);

volume = 0;
$.each(orders_within_day, function(key,val){

volume += (val.quantity - val.quantity_left);

});

volume = volume/2;
console.log('volume ' + volume);
console.log('pending asks ' + pending_asks);
console.log('pending bids ' + pending_bids);

}

console.log(coin1);
console.log(coin2);
OrderData.find({$and: [{swap: true}, {coin_ticker_one: coin1}, {coin_ticker_two: coin2}]}).sort({time: 1}).exec(function(err, order_data){
//console.log('fucked ' + order_data);
object = new Object();

$.each(order_data, function(key,val){
minute_grouping = Math.floor(new Date(val.time).getTime()/ (1000 * 60));


if (object[minute_grouping] === undefined){
    subarray = new Array();
    subarray.push(val);
    object[minute_grouping] = subarray;
}
else{
    subarray = object[minute_grouping];
    subarray.push(val);
    object[minute_grouping] = subarray;
}


});

console.log('sharray ' + JSON.stringify(object));

chart_array = new Array();

$.each(object, function(key,val){


volume = 0;
$.each(val, function(keyb,valb){

volume += valb.quantity;
if (keyb == 0){
lowest_price = valb.price;
highest_price = valb.price;
open_price = valb.price;
}
else{
if (valb.price > highest_price)
    highest_price = valb.price;
if (valb.price < lowest_price)
    lowest_price = valb.price;
}

if (keyb == val.length -1){
close_price = valb.price;
}
});
subobject = new Object();
subobject.low = lowest_price;
subobject.high = highest_price;
subobject.open = open_price;
subobject.close = close_price;
subobject.volume = volume;
subobject.date = key * 1000 * 60;

chart_array.push(subobject);


});
if (pending_asks.length == 0)
    pending_asks = null;
if (pending_bids.length == 0 )
    pending_bids = null;

console.log('\r\n');
console.log(JSON.stringify(chart_array));
console.log(volume);
console.log(last_price);
console.log(low_price);
console.log(high_price);
console.log(coin_one_name);
console.log(coin_two_name);
console.log(coin1);
console.log(coin2);
console.log(pending_asks);
console.log(pending_bids);

if (last_price == null)
    last_price = 0;
if (low_price == null)
    low_price = 0;
if (high_price == null)
    high_price = 0;



res.render('trade_coins.html', {activated: req.session.activated, user: JSON.stringify(req.session.user), chart_info: JSON.stringify(chart_array), csrf: JSON.stringify(req.session._csrf), volume: volume, coin_one_balance: coin_one_balance, coin_two_balance: coin_two_balance, last_price: last_price, low_price: low_price, high_price: high_price, coin_one_name: JSON.stringify(coin_one_name), coin_two_name: JSON.stringify(coin_two_name), coin_one_ticker: JSON.stringify(coin1), coin_two_ticker: JSON.stringify(coin2), pending_asks: JSON.stringify(pending_asks), pending_bids: JSON.stringify(pending_bids)});

});


});
});
});
});
});
});


});
});
});

}
else {



coin1 = req.params.coin1;
coin2 = req.params.coin2;
coin2 = 'btc';


//csrf = req.session._csrf;
console.log('csrf ' + req.session._csrf);

current_time = Math.floor(new Date().getTime()/1000);
one_day_ago = current_time - (60 * 60 * 24);


Order.find({$and:[{swap: true},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {pending: 'pending'}, {side: 'ask'}, {pending: {'$ne': 'cancelled' }}]}).sort({price: 1}).exec( function(err, pending_asks){
Order.find({$and:[{swap: true},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {pending: 'pending'}, {side: 'bid'}, {pending: {'$ne': 'cancelled' }}]}).sort({price: -1}).exec(function(err, pending_bids){
//find all orders within past day
Order.find({$and:[{swap: true},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {time: {$gte: one_day_ago}}, {pending: {'$ne': 'cancelled' }}]}, function(err, orders_within_day){
//find last order
Order.findOne({$and:[{swap: true},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {last_trade_time: {'$ne': null }}, {pending: {'$ne': 'cancelled' }}]}).sort('-last_trade_time').limit(1).exec(function(err, last_order){
//find lowest price in 24 hours
Order.findOne({$and:[{swap: true},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {last_trade_time: {'$ne': null }}, {pending: {'$ne': 'cancelled' }}]}).sort({price: 1}).limit(1).exec(function(err, lowest_order){
//find highest price in 24 hours
Order.findOne({$and:[{swap: true},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {last_trade_time: {'$ne': null }}, {pending: {'$ne': 'cancelled' }}]}).sort({price: -1}).limit(1).exec(function(err, highest_order){

Coin.findOne({code: coin1}, function(err, coin_one){
Coin.findOne({code: coin2}, function(err, coin_two){
//User.findOne({email: req.session.user.email}).populate(coin_one.coin_name + ' ' + coin_two.coin_name).exec(function (err, coin) {

//console.log('yolo ' + req.session.user.email);

// console.log('da coin ' + coin);
// console.log(coin_one.coin_name);
coin_one_balance = 0;
coin_two_balance = 0;

coin_one_name = coin_one.coin_name;
coin_two_name = coin_two.coin_name;




if (last_order == null){
last_price = null;
low_price = null;
high_price = null;
volume = 0;
}
else{
last_price = last_order.price;
low_price = lowest_order.price;
high_price = highest_order.price;


console.log('last_price ' + last_price);
console.log('low price ' + low_price);
console.log('high price ' + high_price);

volume = 0;
$.each(orders_within_day, function(key,val){

volume += (val.quantity - val.quantity_left);

});

volume = volume/2;
console.log('volume ' + volume);
console.log('pending asks ' + pending_asks);
console.log('pending bids ' + pending_bids);

}


OrderData.find({$and: [{swap: true},{coin_ticker_one: coin1}, {coin_ticker_two: coin2}]}).sort({time: 1}).exec(function(err, order_data){
//console.log('fucked ' + order_data);
object = new Object();

$.each(order_data, function(key,val){
minute_grouping = Math.floor(new Date(val.time).getTime()/ (1000 * 60));


if (object[minute_grouping] === undefined){
    subarray = new Array();
    subarray.push(val);
    object[minute_grouping] = subarray;
}
else{
    subarray = object[minute_grouping];
    subarray.push(val);
    object[minute_grouping] = subarray;
}


});

console.log('sharray ' + JSON.stringify(object));

chart_array = new Array();

$.each(object, function(key,val){


volume = 0;
$.each(val, function(keyb,valb){

volume += valb.quantity;
if (keyb == 0){
lowest_price = valb.price;
highest_price = valb.price;
open_price = valb.price;
}
else{
if (valb.price > highest_price)
    highest_price = valb.price;
if (valb.price < lowest_price)
    lowest_price = valb.price;
}

if (keyb == val.length -1){
close_price = valb.price;
}
});
subobject = new Object();
subobject.low = lowest_price;
subobject.high = highest_price;
subobject.open = open_price;
subobject.close = close_price;
subobject.volume = volume;
subobject.date = key * 1000 * 60;

chart_array.push(subobject);


});
if (pending_asks.length == 0)
    pending_asks = null;
if (pending_bids.length == 0 )
    pending_bids = null;

console.log('\r\n');
console.log(JSON.stringify(chart_array));
console.log(volume);
console.log(last_price);
console.log(low_price);
console.log(high_price);
console.log(coin_one_name);
console.log(coin_two_name);
console.log(coin1);
console.log(coin2);
console.log(pending_asks);
console.log(pending_bids);

if (last_price == null)
    last_price = 0;
if (low_price == null)
    low_price = 0;
if (high_price == null)
    high_price = 0;




res.render('trade_coins.html', {activated: JSON.stringify(false), user: JSON.stringify(null), chart_info: JSON.stringify(chart_array), csrf: JSON.stringify(req.session._csrf), volume: volume, coin_one_balance: coin_one_balance, coin_two_balance: coin_two_balance, last_price: last_price, low_price: low_price, high_price: high_price, coin_one_name: JSON.stringify(coin_one_name), coin_two_name: JSON.stringify(coin_two_name), coin_one_ticker: JSON.stringify(coin1), coin_two_ticker: JSON.stringify(coin2), pending_asks: JSON.stringify(pending_asks), pending_bids: JSON.stringify(pending_bids)});

});


//});
});
});
});
});
});


});
});
});


}


});

//testing shits
// OrderData.find({$and: [{strike: 0.019200000}, {expiration: 1404950400000}, {call_put: 'CALL'}, {coin_ticker_one: 'ltc'}, {coin_ticker_two: 'btc'}, {swap: false}]}).sort({time: 1}).exec(function(err, order_data){

// console.log(order_data);
// });


app.get('/optmarket/:coin1/:coin2/:kind/:strike/:expiration', csrf, function(req,res){

if (req.session.activated ){

coin1 = req.params.coin1;
coin2 = req.params.coin2;
kind = req.params.kind
strike = req.params.strike;
expiration = req.params.expiration;

coin2 = 'btc';


//csrf = req.session._csrf;
console.log('csrf ' + req.session._csrf);

current_time = Math.floor(new Date().getTime()/1000);
one_day_ago = current_time - (60 * 60 * 24);




Order.find({$and:[{call_put: kind}, {strike: strike}, {expiration_time: expiration},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {swap: false}, {pending: 'pending'}, {side: 'ask'}, {pending: {'$ne': 'cancelled' }}]}).sort({price: 1}).exec( function(err, pending_asks){
Order.find({$and:[{call_put: kind}, {strike: strike}, {expiration_time: expiration},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {swap: false}, {pending: 'pending'}, {side: 'bid'}, {pending: {'$ne': 'cancelled' }}]}).sort({price: -1}).exec(function(err, pending_bids){
//find all orders within past day
Order.find({$and:[{call_put: kind}, {strike: strike}, {expiration_time: expiration},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {swap: false}, {time: {$gte: one_day_ago}}, {pending: {'$ne': 'cancelled' }}]}, function(err, orders_within_day){
//find last order
Order.findOne({$and:[{call_put: kind}, {strike: strike}, {expiration_time: expiration},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {swap: false}, {last_trade_time: {'$ne': null }}, {pending: {'$ne': 'cancelled' }}]}).sort('-last_trade_time').limit(1).exec(function(err, last_order){
//find lowest price in 24 hours
Order.findOne({$and:[{call_put: kind}, {strike: strike}, {expiration_time: expiration},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {swap: false}, {last_trade_time: {'$ne': null }}, {pending: {'$ne': 'cancelled' }}]}).sort({price: 1}).limit(1).exec(function(err, lowest_order){
//find highest price in 24 hours
Order.findOne({$and:[{call_put: kind}, {strike: strike}, {expiration_time: expiration},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {swap: false}, {last_trade_time: {'$ne': null }}, {pending: {'$ne': 'cancelled' }}]}).sort({price: -1}).limit(1).exec(function(err, highest_order){

Coin.findOne({code: coin1}, function(err, coin_one){
Coin.findOne({code: coin2}, function(err, coin_two){
User.findOne({email: req.session.user.email}).populate(coin_one.coin_name + ' ' + coin_two.coin_name).exec(function (err, coin) {

console.log('yolo ' + req.session.user.email);

// console.log('da coin ' + coin);
// console.log(coin_one.coin_name);
coin_one_balance = coin[coin_one.coin_name].available_balance;
coin_two_balance = coin[coin_two.coin_name].available_balance;

coin_one_name = coin_one.coin_name;
coin_two_name = coin_two.coin_name;
console.log("coin one balance " + coin_one_balance);
console.log("coin two balance " + coin_two_balance);




if (last_order == null){
last_price = null;
low_price = null;
high_price = null;
volume = 0;
}
else{
last_price = last_order.price;
low_price = lowest_order.price;
high_price = highest_order.price;


console.log('last_price ' + last_price);
console.log('low price ' + low_price);
console.log('high price ' + high_price);

volume = 0;
$.each(orders_within_day, function(key,val){

volume += (val.quantity - val.quantity_left);

});

volume = volume/2;
console.log('volume ' + volume);
console.log('pending asks ' + pending_asks);
console.log('pending bids ' + pending_bids);

}

console.log(coin1);
console.log(coin2);
OrderData.find({$and: [{strike: strike}, {expiration: expiration}, {call_put: kind}, {coin_ticker_one: coin1}, {coin_ticker_two: coin2}, {swap: false}]}).sort({time: 1}).exec(function(err, order_data){
//console.log('fucked ' + order_data);
object = new Object();

if (order_data != undefined){
$.each(order_data, function(key,val){
minute_grouping = Math.floor(new Date(val.time).getTime()/ (1000 * 60));


if (object[minute_grouping] === undefined){
    subarray = new Array();
    subarray.push(val);
    object[minute_grouping] = subarray;
}
else{
    subarray = object[minute_grouping];
    subarray.push(val);
    object[minute_grouping] = subarray;
}


});

console.log('sharray ' + JSON.stringify(object));

chart_array = new Array();

$.each(object, function(key,val){


volume = 0;
$.each(val, function(keyb,valb){

volume += valb.quantity;
if (keyb == 0){
lowest_price = valb.price;
highest_price = valb.price;
open_price = valb.price;
}
else{
if (valb.price > highest_price)
    highest_price = valb.price;
if (valb.price < lowest_price)
    lowest_price = valb.price;
}

if (keyb == val.length -1){
close_price = valb.price;
}
});
subobject = new Object();
subobject.low = lowest_price;
subobject.high = highest_price;
subobject.open = open_price;
subobject.close = close_price;
subobject.volume = volume;
subobject.date = key * 1000 * 60;

chart_array.push(subobject);


});



if (pending_asks == '')
    pending_asks = null;
if (pending_bids == '')
    pending_bids = null;

console.log('\r\n');
console.log(JSON.stringify(chart_array));
console.log(volume);
console.log(last_price);
console.log(low_price);
console.log(high_price);
console.log(coin_one_name);
console.log(coin_two_name);
console.log(coin1);
console.log(coin2);
console.log(pending_asks);
console.log(pending_bids);

if (last_price == null)
    last_price = 0;
if (low_price == null)
    low_price = 0;
if (high_price == null)
    high_price = 0;





res.render('trade_options.html', {kind: JSON.stringify(kind), activated: req.session.activated, user: JSON.stringify(req.session.user), chart_info: JSON.stringify(chart_array), csrf: JSON.stringify(req.session._csrf), volume: volume, coin_one_balance: coin_one_balance, coin_two_balance: coin_two_balance, last_price: last_price, low_price: low_price, high_price: high_price, coin_one_name: JSON.stringify(coin_one_name), coin_two_name: JSON.stringify(coin_two_name), coin_one_ticker: JSON.stringify(coin1), coin_two_ticker: JSON.stringify(coin2), kind: JSON.stringify(kind), strike: strike, expiration: expiration, pending_asks: JSON.stringify(pending_asks), pending_bids: JSON.stringify(pending_bids)});
}


});


});
});
});
});
});
});


});
});
});

}
else {


coin1 = req.params.coin1;
coin2 = req.params.coin2;
kind = req.params.kind
strike = req.params.strike;
expiration = req.params.expiration;

coin2 = 'btc';


//csrf = req.session._csrf;
console.log('csrf ' + req.session._csrf);

current_time = Math.floor(new Date().getTime()/1000);
one_day_ago = current_time - (60 * 60 * 24);



Order.find({$and:[{call_put: kind}, {strike: strike}, {expiration_time: expiration},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {swap: false}, {pending: 'pending'}, {side: 'ask'}, {pending: {'$ne': 'cancelled' }}]}).sort({price: 1}).exec( function(err, pending_asks){
Order.find({$and:[{call_put: kind}, {strike: strike}, {expiration_time: expiration},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {swap: false}, {pending: 'pending'}, {side: 'bid'}, {pending: {'$ne': 'cancelled' }}]}).sort({price: -1}).exec(function(err, pending_bids){
//find all orders within past day
Order.find({$and:[{call_put: kind}, {strike: strike}, {expiration_time: expiration},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {swap: false}, {time: {$gte: one_day_ago}}, {pending: {'$ne': 'cancelled' }}]}, function(err, orders_within_day){
//find last order
Order.findOne({$and:[{call_put: kind}, {strike: strike}, {expiration_time: expiration},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {swap: false}, {last_trade_time: {'$ne': null }}, {pending: {'$ne': 'cancelled' }}]}).sort('-last_trade_time').limit(1).exec(function(err, last_order){
//find lowest price in 24 hours
Order.findOne({$and:[{call_put: kind}, {strike: strike}, {expiration_time: expiration},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {swap: false}, {last_trade_time: {'$ne': null }}, {pending: {'$ne': 'cancelled' }}]}).sort({price: 1}).limit(1).exec(function(err, lowest_order){
//find highest price in 24 hours
Order.findOne({$and:[{call_put: kind}, {strike: strike}, {expiration_time: expiration},{coin_one_ticker: coin1}, {coin_two_ticker: coin2}, {swap: false}, {last_trade_time: {'$ne': null }}, {pending: {'$ne': 'cancelled' }}]}).sort({price: -1}).limit(1).exec(function(err, highest_order){

Coin.findOne({code: coin1}, function(err, coin_one){
Coin.findOne({code: coin2}, function(err, coin_two){
//User.findOne({email: req.session.user.email}).populate(coin_one.coin_name + ' ' + coin_two.coin_name).exec(function (err, coin) {

coin_one_name = coin_one.coin_name;
coin_two_name = coin_two.coin_name;

// console.log('da coin ' + coin);
// console.log(coin_one.coin_name);
coin_one_balance = 0;
coin_two_balance = 0;




if (last_order == null){
last_price = null;
low_price = null;
high_price = null;
volume = 0;
}
else{
last_price = last_order.price;
low_price = lowest_order.price;
high_price = highest_order.price;


console.log('last_price ' + last_price);
console.log('low price ' + low_price);
console.log('high price ' + high_price);

volume = 0;
$.each(orders_within_day, function(key,val){

volume += (val.quantity - val.quantity_left);

});

volume = volume/2;
console.log('volume ' + volume);
console.log('pending asks ' + pending_asks);
console.log('pending bids ' + pending_bids);

}

console.log(coin1);
console.log(coin2);
OrderData.find({$and: [{strike: strike}, {expiration: expiration}, {call_put: kind}, {coin_ticker_one: coin1}, {coin_ticker_two: coin2}, {swap: false}]}).sort({time: 1}).exec(function(err, order_data){
//console.log('fucked ' + order_data);
object = new Object();
if (order_data != undefined){
$.each(order_data, function(key,val){
minute_grouping = Math.floor(new Date(val.time).getTime()/ (1000 * 60));


if (object[minute_grouping] === undefined){
    subarray = new Array();
    subarray.push(val);
    object[minute_grouping] = subarray;
}
else{
    subarray = object[minute_grouping];
    subarray.push(val);
    object[minute_grouping] = subarray;
}


});

console.log('sharray ' + JSON.stringify(object));

chart_array = new Array();

$.each(object, function(key,val){


volume = 0;
$.each(val, function(keyb,valb){

volume += valb.quantity;
if (keyb == 0){
lowest_price = valb.price;
highest_price = valb.price;
open_price = valb.price;
}
else{
if (valb.price > highest_price)
    highest_price = valb.price;
if (valb.price < lowest_price)
    lowest_price = valb.price;
}

if (keyb == val.length -1){
close_price = valb.price;
}
});
subobject = new Object();
subobject.low = lowest_price;
subobject.high = highest_price;
subobject.open = open_price;
subobject.close = close_price;
subobject.volume = volume;
subobject.date = key * 1000 * 60;

chart_array.push(subobject);


});



if (pending_asks == '')
    pending_asks = null;
if (pending_bids == '')
    pending_bids = null;

console.log('\r\n');
console.log(JSON.stringify(chart_array));
console.log(volume);
console.log(last_price);
console.log(low_price);
console.log(high_price);
console.log(coin1);
console.log(coin2);
console.log(pending_asks);
console.log(pending_bids);

if (last_price == null)
    last_price = 0;
if (low_price == null)
    low_price = 0;
if (high_price == null)
    high_price = 0;




res.render('trade_options.html', {kind: JSON.stringify(kind), activated: JSON.stringify(false), user: JSON.stringify(null), chart_info: JSON.stringify(chart_array), csrf: JSON.stringify(req.session._csrf), volume: volume, coin_one_balance: coin_one_balance, coin_two_balance: coin_two_balance, last_price: last_price, low_price: low_price, high_price: high_price, coin_one_name: JSON.stringify(coin_one_name), coin_two_name: JSON.stringify(coin_two_name), coin_one_ticker: JSON.stringify(coin1), coin_two_ticker: JSON.stringify(coin2), kind: JSON.stringify(kind), strike: strike, expiration: expiration, pending_asks: JSON.stringify(pending_asks), pending_bids: JSON.stringify(pending_bids)});
}

});


//});
});
});
});
});
});


});
});
});

}

});





function process_variation(){

//get all orders that have some amount in positions
Order.find({pending: {'$ne': 'cancelled' }}).populate('buyer seller').exec(function(err, orders){

$.each(orders, function(key,val){
in_positions = val.quantity - val.quantity_left;
if (in_positions > 0){

console.log("the order ");
//console.log(val);

//calculate variation margin
bitstamp.ticker(function(err, trades) {
current_price = parseFloat(trades.last);
last_index = val.btc_prices.length -1;
last_price = val.btc_prices[last_index];
current_price = 800;
variation = 10/ (current_price - last_price) * in_positions;
console.log('the val ' + key + ' ' + val);
console.log('variation ' + key + variation); 

//if it is the buyer
if (val.side == 'bid'){
function callback(){}

variation_margin = new VariationMargin({
    time: new Date().getTime(),
    order: val,
    amount: variation
});

val.buyer.update({$inc: {balance: variation, available_balance: variation}}, { w: 1 }, callback);
Order.findByIdAndUpdate(val._id, {$push: {variation_margin: variation_margin}}, function(err,  order){
    console.log(order);
});
//val.variation_margin.push(variation_margin);


}
//if it is the seller
else{

function callback(){}

variation_margin = new VariationMargin({
    time: new Date().getTime(),
    order: val,
    amount: -1 * variation
});

val.seller.update({$inc: {balance: -1 * variation, available_balance: -1 * variation}}, { w: 1 }, callback);
Order.findByIdAndUpdate(val._id, {$push: {variation_margin: variation_margin}});


}

});


}



});



});





}


app.get('/process_variation', function(req,res){

console.log('ugh');
bitstamp.ticker(function(err, trades) {
//get all orders that have some amount in positions
Order.find({$and: [{pending: {'$ne': 'cancelled' }}, {pending: {'$ne': 'expired' }}, {pending: {'$ne': 'exercised' }} ]}).populate('buyer seller').exec(function(err, orders){

$.each(orders, function(key,val){
in_positions = val.quantity - val.quantity_left;
if (in_positions > 0){

//console.log("the order ");f
//console.log(val);

//calculate variation margin
(function(val, in_positions){

current_price = parseFloat(trades.last);
last_index = val.btc_prices.length -1;
last_price = val.btc_prices[last_index];

console.log("current priceb " + current_price);
//current_price = 800;


variation = (current_price - last_price ) / last_price * 10 / last_price * in_positions; 
//variation = 10/ ((current_price - last_price)* last_price ) * in_positions;
console.log('the val ' + key + ' ' + last_price);
console.log('current price ' + key + ' ' + current_price); 
console.log('last price ' + key + ' ' + last_price); 
yolo = current_price - last_price;
console.log('current price - last price ' + yolo);
console.log('variation ' + key + ' ' +  variation); 


//if it is the buyer
if (val.side == 'bid'){
function callback(){}

variation_margin = new VariationMargin({
    time: new Date().getTime(),
    order: val,
    amount: variation
});

variation_margin.save(function(err){

//console.log(err);

});

//console.log(variation_margin);

val.buyer.update({$inc: {balance: variation, available_balance: variation}}, { w: 1 }, callback);
Order.findByIdAndUpdate(val._id, {$push: {variation_margin: variation_margin}, $inc: {net_variation: variation}}, function(err,order){

    //console.log(order);
});
//val.variation_margin.push(variation_margin);


}
//if it is the seller
else{

console.log('ask');
function callback(){}

variation_margin = new VariationMargin({
    time: new Date().getTime(),
    order: val,
    amount: -1 * variation
});

variation_margin.save(function(err){

//console.log(err);

});

val.seller.update({$inc: {balance: -1 * variation, available_balance: -1 * variation}}, { w: 1 }, callback);
Order.findByIdAndUpdate(val._id, {$push: {variation_margin: variation_margin, $inc: {net_variation: -1 * variation}}}, function(err,order){

    //console.log(order);

});


}

//});
}(val, in_positions));


}



});



});


});

console.log("processed");

});

//for call options only



app.get('/generate_options_data', function(req,res){


expiration_times = new Array(1404259200000, 1404950400000, 1407628800000, 1418169600000);
option_types = new Array("CALL", "PUT");


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

current_time = new Date().getTime();
low_limit = current_time - (60000 * 60 * 24 * 60);



Coin.find().distinct('coin_name', function(err, coins) {

coins.splice( $.inArray('bitcoin', coins), 1 );
console.log(coins);

Coin.aggregate( 
       {$match   : {coin_name: {$in: coins }}}, 
       {$group   : {_id:"$coin_name", code: {$first:"$code"}, coin_number: {$first:"$coin_number"}} },
       {$project : {coin_name:"$_id", code: "$code", coin_number: "$coin_number", _id:0}}
  ).exec(function(err, result){

    $.each(result, function(key,val){

        //start price stuff

        if (val.code == 'ltc')
        current_price = .016;
        if (val.code == 'doge')
        current_price = 0.0000005;

        if (val.code == 'x11')
        current_price = 1;
        if (val.code == 'drk')
        current_price = 1;
        if (val.code == 'ppc')
        current_price = 1;
        if (val.code == 'vrc')
        current_price = 1;
        if (val.code == 'blk')
        current_price = 1;
        if (val.code == 'nmc')
        current_price = 1;



        price_deviation = current_price/10;
        starting = current_price - 3 * price_deviation;

        prices = new Array();

        for (var i=0; i < 6; i++){
            
            price = starting + i * price_deviation;
            prices.push(price);

        }



        //end price stuff
        $.each(prices, function(keyb, valb){
        $.each(expiration_times, function(keyc, valc){
        $.each(option_types, function(keyd, vald){

        (function(keyb, valb, keyc,valc,keyd,vald){    



        for (var i=0; i<3; i++){

        random = getRandomArbitrary(low_limit, current_time);
        bid_quantity = getRandomArbitrary(1,15);
        bid_price = getRandomArbitrary(.05, .25);

        order_data = new OrderData({
                            time: random,
                            coin_ticker_one: val.code,
                            coin_ticker_two: 'btc',
                            price: bid_price,
                            quantity: bid_quantity,
                            swap: false,
                            strike: valb.toFixed(9),
                            expiration: valc, 
                            call_put: vald 

        });

        order_data.save(function(err){
            console.log('saveed');

        });



        }
        })(keyb, valb, keyc, valc, keyd, vald);

    });

    });

});

});

});
});


});



app.get('/generate_swap_data', function(req,res){



function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

current_time = new Date().getTime();
low_limit = current_time - (60000 * 60 * 24 * 60);



Coin.find().distinct('coin_name', function(err, coins) {

coins.splice( $.inArray('bitcoin', coins), 1 );
console.log(coins);

Coin.aggregate( 
       {$match   : {coin_name: {$in: coins }}}, 
       {$group   : {_id:"$coin_name", code: {$first:"$code"}, coin_number: {$first:"$coin_number"}} },
       {$project : {coin_name:"$_id", code: "$code", coin_number: "$coin_number", _id:0}}
  ).exec(function(err, result){

    $.each(result, function(key,val){

        for (var i=0; i<25; i++){

        random = getRandomArbitrary(low_limit, current_time);
        bid_quantity = getRandomArbitrary(1,15);
        bid_price = getRandomArbitrary(.05, .25);

        order_data = new OrderData({
                            time: random,
                            coin_ticker_one: val.code,
                            coin_ticker_two: 'btc',
                            price: bid_price,
                            quantity: bid_quantity,
                            swap: true
        });

        order_data.save(function(err){
            console.log('saveed');

        });

        }

    });

});

});



});

app.get('/make_buy_orders', function(req,res){


var counter = 1;
var i = setInterval(function(){
    // do your thing

    counter++;
    if(counter === 780) {
        clearInterval(i);
    }




req.session.processing = false;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


//maintenance_margin: buy_margin, bid_quantity: bid_quantity, bid_price: bid_price, short_symbol: contract.short_symbol
req.body.maintenance_margin = .3;

req.body.bid_quantity = getRandomArbitrary(1,15);

req.body.bid_price = getRandomArbitrary(.0001, .0005);

req.body.short_symbol = 'BUSD' + (counter%77 + 1);


console.log(req.body.short_symbol);

//req.session.processing = false;
console.log('overhere' + req.session._csrf);
console.log(req.session.processing);

if (req.session.processing == undefined)
    req.session.processing = false;

if (req.session.processing == false){



quantity = req.body.bid_quantity;
price = req.body.bid_price;
bid_price = parseFloat(price);
bid_quantity = parseFloat(quantity);
// maintenance_margin = parseFloat(req.body.maintenance_margin);
// maintenance_margin = bid_price * bid_quantity;
// maintenance_margin_multiplier = 1
//console.log("maintenance margin " + maintenance_margin);

current_price = 660;
maintenance_margin = .4 * (bid_quantity * 10 / current_price);


short_symbol = req.body.short_symbol;


Order.find({$and: [{short_symbol: short_symbol}, {side: 'ask'}, {pending: 'pending'}, {price: {$lte: bid_price}}]}).populate('user').sort({price: 1}).exec(function(err, ask){

console.log('ask ' + ask)
//console.log('sell ordera ' + sell_order);
//console.log('sell orderb ' + sell_order['user']);
//coin_name_one = coin_one_ticker + 'coin';

//gets info for user that submitted the post request, and info on the relevant coins he owns
req.session.user.email = 'i';
User.findOne({email: req.session.user.email}).populate(short_symbol).exec(function (err, user) {


min_order = .00001;

bid_value = bid_price * bid_quantity;

console.log('bid ' + bid_price);
console.log('quantity ' + bid_quantity);
console.log('buyvalue ' + bid_value);

user_balance = user.available_balance;

//formula for intiail margin
initial_margin = 1;
fees = 0;
//total cost

if (user_balance >= fees * bid_quantity + bid_value + maintenance_margin ){

if (ask.length == 0 && quantity > min_order){

console.log("it is in here lol");


function callback(){}
user[short_symbol].update({$inc: {balance: bid_quantity}}, { w: 1 }, callback);
console.log('why user no show  '+ JSON.stringify(user));


console.log("maintenance margin " + maintenance_margin);
console.log('is it a ' + isNaN(maintenance_margin));
console.log(" down ");


//inc_available = parseFloat(fees) * parseFloat(bid_quantity) + parseFloat(bid_value) + parseFloat(maintenance_margin);
inc_available = -1 * (fees * bid_quantity + bid_value + maintenance_margin);
console.log(inc_available);

req.session.user.email = 'i';
User.findOneAndUpdate({email: req.session.user.email}, {$inc: {balance: -1 * fees * bid_quantity, available_balance: inc_available, maintenance_margin: maintenance_margin, in_orders: maintenance_margin, in_orders_non_margin: -1 * bid_value}},function(err, user){

order = new Order({
                time: new Date().getTime(),
                option_type: 'call',
                short_symbol: short_symbol,
                side: 'bid',
                price: price,
                quantity: quantity,
                quantity_original: quantity,
                quantity_left: quantity,
                initial_margin: maintenance_margin,
                buyer: user, 
                pending: 'pending'
});


order.btc_prices.push(current_price);

user.orders.push(order);


user.save(function(err){

});


order.save(function(err){

console.log('order saved');

});



req.session.processing = false;
res.end(JSON.stringify('done'));

//console.log(req.session.processing);





});


}




}
});


//});

  //console.log(trades.last);  
});

}

    
}, 100);

//}



});



app.get('/make_ask', function(req,res){

var counter = 1;
var i = setInterval(function(){
    // do your thing

    counter++;
    if(counter === 780) {
        clearInterval(i);
    }




req.session.processing = false;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


//maintenance_margin: buy_margin, bid_quantity: bid_quantity, bid_price: bid_price, short_symbol: contract.short_symbol
req.body.maintenance_margin = .3;

req.body.ask_quantity = getRandomArbitrary(.001,.005);

req.body.ask_price = getRandomArbitrary(1, 3);

req.body.short_symbol = 'BUSD' + (counter%77 + 1);




//req.session.processing = false;
console.log('overhere' + req.session._csrf);
console.log(req.session.processing_sell);

if (req.session.processing_sell == undefined)
    req.session.processing_sell = false;

if (req.session.processing_sell== false){
req.session.processing_sell = true;


quantity = req.body.ask_quantity;
price = req.body.ask_price;
ask_price = parseFloat(price);
ask_quantity = parseFloat(quantity);
// maintenance_margin = parseFloat(req.body.maintenance_margin);
// maintenance_margin = ask_price * ask_quantity;

//bitstamp.ticker(function(err, trades) {
 maintenance_margin_multiplier = .4
current_price = 650;
maintenance_margin = .4 * (ask_quantity * 10 / current_price);

console.log("maintenance margin " + maintenance_margin);

short_symbol = req.body.short_symbol;


Order.find({$and: [{short_symbol: short_symbol}, {side: 'bid'}, {pending: 'pending'}, {price: {$gte: ask_price}}]}).populate('user').sort({price: -1}).exec(function(err, bid){

console.log('bid ' + bid)
//console.log('sell ordera ' + sell_order);
//console.log('sell orderb ' + sell_order['user']);
//coin_name_one = coin_one_ticker + 'coin';

//gets info for user that submitted the post request, and info on the relevant coins he owns
User.findOne({email: req.session.user.email}).populate(short_symbol).exec(function (err, user) {


min_order = .00001;

contract_balance = user[short_symbol].balance;
initial_margin = user[short_symbol].initial_margin;
ask_value = ask_price * ask_quantity;

console.log('bid ' + ask_price);
console.log('quantity ' + ask_quantity);
console.log('buyvalue ' + ask_value);

user_balance = user.available_balance;

//formula for intiail margin
initial_margin = 1;
fees = .001;
fees = 0;

//total cost

if (user_balance >= fees * ask_quantity + ask_value + maintenance_margin){

if (bid.length == 0 && quantity > min_order){

console.log("it is in here lol");

function callback(){}
user[short_symbol].update({$inc: {balance: -1 * ask_quantity}}, { w: 1 }, callback);

//User.findOneAndUpdate({email: req.session.user.email}, {$inc: {balance: -1 * fees * bid_quantity, available_balance: inc_available, maintenance_margin: maintenance_margin, in_orders: bid_value}},function(err, user){
// inc_available = -1 * (fees * bid_quantity + maintenance_margin);
// console.log(inc_available);


User.findOneAndUpdate({email: req.session.user.email}, {$inc: {in_orders_non_margin: ask_value, in_orders: maintenance_margin, balance: -1 * fees * ask_quantity, available_balance: -1 * (fees * ask_quantity + maintenance_margin), maintenance_margin: maintenance_margin}},function(err, user){

order = new Order({
                time: new Date().getTime(),
                option_type: 'call',
                short_symbol: short_symbol,
                side: 'ask',
                price: price,
                quantity_original: quantity,
                quantity: quantity,
                quantity_left: quantity,
                seller: user,
                pending: 'pending',
                initial_margin: maintenance_margin
});
order.btc_prices.push(current_price);

user.orders.push(order);


user.save(function(err){

});


order.save(function(err){

console.log('order saved');

});



req.session.processing_sell = false;
res.end(JSON.stringify('done'));

//console.log(req.session.processing);





});


}




}
});


});

//});

}

}, 100);


});




app.post('/buy_order',  csrf, function(req,res){
//req.session.processing = false;
console.log('overhere' + req.session._csrf);
console.log(req.session.processing);

if (req.session.processing == undefined)
    req.session.processing = false;

if (req.session.processing == false){
req.session.processing = true;


quantity = req.body.bid_quantity;
price = req.body.bid_price;
bid_price = parseFloat(price);
bid_quantity = parseFloat(quantity);
// maintenance_margin = parseFloat(req.body.maintenance_margin);
// maintenance_margin = bid_price * bid_quantity;
// maintenance_margin_multiplier = 1
//console.log("maintenance margin " + maintenance_margin);

short_symbol = req.body.short_symbol;

ContractRef.findOne({short_symbol: short_symbol}, function(err, contractref){
bitstamp.ticker(function(err, trades) {
current_price = trades.last;
strike_price = contractref.strike_price;

//if (current_price < strike_price)
maintenance_margin = .4 * (bid_quantity * 10 / current_price);
required_margin = .75 * maintenance_margin;

short_symbol = req.body.short_symbol;


Order.find({$and: [{short_symbol: short_symbol}, {side: 'ask'}, {pending: 'pending'}, {price: {$lte: bid_price}}]}).populate('user').sort({price: 1}).exec(function(err, ask){

console.log('ask ' + ask)
//console.log('sell ordera ' + sell_order);
//console.log('sell orderb ' + sell_order['user']);
//coin_name_one = coin_one_ticker + 'coin';

//gets info for user that submitted the post request, and info on the relevant coins he owns
User.findOne({email: req.session.user.email}).populate(short_symbol).exec(function (err, user) {


min_order = .00001;

contract_balance = user[short_symbol].balance;
initial_margin = user[short_symbol].initial_margin;
bid_value = bid_price * bid_quantity;

console.log('bid ' + bid_price);
console.log('quantity ' + bid_quantity);
console.log('buyvalue ' + bid_value);

user_balance = user.available_balance;

//formula for intiail margin
initial_margin = 1;
fees = .001;
fees = 0;
//total cost

if (user_balance >= fees * bid_quantity + bid_value + maintenance_margin ){

if (ask.length == 0 && quantity > min_order){

console.log("it is in here lol");


function callback(){}
user[short_symbol].update({$inc: {balance: bid_quantity}}, { w: 1 }, callback);

console.log("maintenance margin " + maintenance_margin);
console.log('is it a ' + isNaN(maintenance_margin));
console.log(" down ");


//inc_available = parseFloat(fees) * parseFloat(bid_quantity) + parseFloat(bid_value) + parseFloat(maintenance_margin);
inc_available = -1 * (fees * bid_quantity + bid_value + maintenance_margin);
console.log(inc_available);

User.findOneAndUpdate({email: req.session.user.email}, {$inc: {balance: -1 * fees * bid_quantity, available_balance: inc_available, required_margin: required_margin, maintenance_margin: maintenance_margin, in_orders: maintenance_margin, in_orders_non_margin: -1 * bid_value}},function(err, user){

order = new Order({
                time: new Date().getTime(),
                option_type: 'call',
                short_symbol: short_symbol,
                side: 'bid',
                price: price,
                quantity: quantity,
                quantity_original: quantity,
                quantity_left: quantity,
                initial_margin: maintenance_margin,
                buyer: user, 
                pending: 'pending'
});


order.btc_prices.push(current_price);

user.orders.push(order);


user.save(function(err){

});


order.save(function(err){

console.log('order saved');

});



req.session.processing = false;
res.end(JSON.stringify('done'));

//console.log(req.session.processing);





});


}
else{

//console.log(coin_one_name);
//console.log('coinfucker '  + coin);
//console.log('fucker ' + coin[coin_two_name].balance);

//balance = coin[coin_one_name].balance;
bid_value = bid_price * bid_quantity
bid_value_left = bid_value;
bid_quantity_left = bid_quantity;
user_balance = user.available_balance;

console.log('buy quantity lefta ' + bid_quantity_left);

complete = false;

total = 0;



$.each(ask, function(key,val){
ask_value = val.price * val.quantity_left;
ask_order_id = val._id;
ask_price = val.price;
ask_quantity_left = val.quantity_left;
purchase_cost = bid_quantity_left * val.price;
partial_maintenance_margin = .4 * (bid_quantity_left * 10 / current_price);
ask_maintenance_margin = .4 * (ask_quantity_left * 10 / current_price);
maintenance_margin_multiplier = .4;

(function(ask_value, ask_order_id, ask_price, ask_quantity_left, key, purchase_cost, partial_maintenance_margin, ask_maintenance_margin, maintenance_margin_multiplier){
if (!complete ){
    if (ask_quantity_left >= bid_quantity_left){
        console.log('figure 1 ' + ask_quantity_left); 
        console.log('figure 1 ' + bid_quantity_left);

        quantity_left = ask_quantity_left - bid_quantity_left;
        //update sell order

        if (ask_quantity_left == bid_quantity_left)
            Order.findByIdAndUpdate(ask_order_id, {$set: {quantity_left: quantity_left, pending: 'complete', last_trade_time: new Date().getTime()}}, function(err, order){

            });
        else
            Order.findByIdAndUpdate(ask_order_id, {$set: {quantity_left: quantity_left, last_trade_time: new Date().getTime()}}, function(err, order){

            });

        //create buy order record and update balance
        User.findOne({email: req.session.user.email}).populate(short_symbol).exec(function(err, user){

        //buy_quantity_left = buy_value_left / buy_price;
        //update buyer balance

        console.log('buy quantity left ' + key + ' ' + bid_quantity_left);
        console.log('purchase cost ' + key + ' ' + ask_value);
        fee_total = fees * bid_quantity;

        //User.findById(val['seller']).populate(short_symbol).exec(function(err, seller){
        user[short_symbol].update({$inc: {balance: bid_quantity_left}}, { w: 1 }, callback);
        user.update({$inc: {in_positions: partial_maintenance_margin, required_margin: required_margin, maintenance_margin: maintenance_margin, balance: -1 * (purchase_cost + fee_total) , available_balance: -1 * ( purchase_cost + fee_total + maintenance_margin)}}, { w: 1 }, callback);


        function callback(){}
        //done updating buyer balance
        User.findById(val['seller']).populate(short_symbol).exec(function(err, seller){

        time = new Date().getTime();
        order = new Order({
                        time: time,
                        //last_trade_time: new Date().getTime(),
                        short_symbol: short_symbol,
                        side: 'bid',
                        price: bid_price,
                        quantity_original: bid_quantity,
                        quantity: bid_quantity,
                        quantity_left: 0,
                        seller: val.seller,
                        buyer: user,
                        pending: 'complete',
                        initial_margin: maintenance_margin
        });


        console.log('point 1  ' + key + ' ' + val);

        $.each(ask, function(keyb, valb){
        if (keyb <= key)
        order.opposing_orders.push(valb);
        });

        console.log('daseller ' + seller);

        console.log('test 1 ' + order);
        order.btc_prices.push(current_price);



        order_data = new OrderData({
                            time: time,
                            short_symbol: short_symbol,
                            price: ask_price,
                            quantity: bid_quantity_left,
                            swap: false
        });

        order_data.save(function(err){

        });

        user.orders.push(order);


        user.save(function(err){

        });



        
        for (var i=0; i< key; i++){
        order.sellers.push(ask[i]['seller']);
        order.seller_quantities.push(ask[i]['quantity_left']);
        }
        order.sellers.push(val['seller']);
        order.seller_quantities.push(bid_quantity_left);


        order.save(function(err){

        console.log('order saved');

        });



        //update balance on seller

        //console.log('sell order user ' + sell_order);

            //console.log('dasell ' + seller);
            console.log('buy quantity left ' + bid_quantity_left);
            console.log('buy value left ' + bid_value_left);

            purchase_cost = bid_quantity_left * val.price;

            seller.update({$inc: { in_positions: partial_maintenance_margin, in_orders: -1 * partial_maintenance_margin, balance: purchase_cost, available_balance: purchase_cost, in_orders_non_margin: -1 * purchase_cost}}, { w: 1 }, function(err){

                seller[short_symbol].update({$inc: {balance: -1 * bid_quantity_left}}, { w: 1 }, function(err){

                    console.log('right here dude');
                    req.session.processing = false;
                    res.end('done');

                });

            });

                    });

        });


        complete = true;
    }
    else{
        console.log('figure 2 ' + ask_quantity_left); 
        console.log('figure 2 ' + bid_quantity_left);
        //if sell quantity is less than the buy quantity
        console.log('shit is in elseb');

        //quantity_left = (sell_value - buy_value_left)/sell_price;
        //update sell order
        bid_quantity_left -= ask_quantity_left;

        Order.findByIdAndUpdate(ask_order_id, {$set: {quantity_left: 0, pending: 'complete', last_trade_time: new Date().getTime()}}, function(err, order){


        });

        //create buy order record and update balance
        User.findById(val['seller']).populate(short_symbol).exec(function(err, seller){
        User.findOne({email: req.session.user.email}).populate(short_symbol).exec(function(err, user){

        function callback(){}

        console.log('sell quantity left ' + key + ' ' + ask_quantity_left);
        console.log('sell value ' + key + ' ' + ask_value);
        //update buyer balance
        User.findById(val['seller']).populate(short_symbol).exec(function(err, seller){
        user[short_symbol].update({$inc: {balance: ask_quantity_left}}, { w: 1 }, callback);
        user.update({$set: {seller: seller}, $inc: {in_positions: ask_maintenance_margin, balance: -1 * ask_value, available_balance: -1 * ask_value}}, { w: 1 }, callback);
        //done updating buyer balance
        });

        time = new Date().getTime();

        order_data = new OrderData({
                            time: time,
                            short_symbol: short_symbol,
                            price: ask_price,
                            quantity: ask_quantity_left,
                            swap: false
        });

        order_data.save(function(err){

        });




        if (key == ask.length -1 ){

            in_orders_non_margin = -1 * bid_quantity_left * bid_price;
            in_orders = maintenance_margin_multiplier * (bid_quantity_left * 10 / current_price);
            user.update({$inc: {maintenance_margin: maintenance_margin, required_margin: required_margin, in_orders_non_margin: in_orders_non_margin, in_orders: in_orders, available_balance: -1 * maintenance_margin}}, { w: 1 }, callback);

            order = new Order({
                    time: time,
                    last_trade_time: new Date().getTime(),
                    short_symbol: short_symbol,
                    side: 'bid',
                    price: bid_price,
                    quantity: bid_quantity,
                    quantity_left: bid_quantity_left,
                    buyer: user,
                    //seller: seller,
                    pending: 'pending',
                    initial_margin: maintenance_margin
            });

            console.log('point 2 ' + key + ' ' + val);

            $.each(ask, function(keyb, valb){
            if (keyb <= key)
            order.opposing_orders.push(valb);
            });

            console.log('test 2 ' + order);
            order.btc_prices.push(current_price);

            user.orders.push(order);


            user.save(function(err){

            });


            order.save(function(err){

            console.log('order saved');

            });


        }




        });

        //update balance on seller

            seller[short_symbol].update({$inc: {balance: -1 * ask_quantity_left}}, { w: 1 }, function(err){

                seller.update({$inc: {in_positions: ask_maintenance_margin, in_orders: -1 * ask_maintenance_margin, balance: ask_value, available_balance: ask_value, in_orders_non_margin: -1 * ask_value}}, { w: 1 }, function(err){

                    req.session.processing = false;
                    res.end('done');
                });

            });


        });


    }






}
}(ask_value, ask_order_id, ask_price, ask_quantity_left, key, purchase_cost, partial_maintenance_margin, ask_maintenance_margin, maintenance_margin_multiplier));


});



}




}
});


});

  console.log(trades.last);  
});
});


}



});







app.post('/buy_option',  csrf, function(req,res){
//req.session.processing = false;
console.log('overhere' + req.session._csrf);
console.log(req.session.processing);

if (req.session.processing == undefined)
    req.session.processing = false;

if (req.session.processing == false){
req.session.processing = true;


quantity = req.body.bid_quantity;
price = req.body.bid_price;
bid_price = price;
bid_quantity = quantity;

coin_one_name = req.body.coin_name_one;
coin_two_name = req.body.coin_name_two;
coin_one_ticker = req.body.coin_ticker_one
coin_two_ticker = req.body.coin_ticker_two;
expiration = req.body.expiration;
strike = parseFloat(req.body.strike).toFixed(9);
call_put = req.body.call_put;

if (call_put == 'CALL')
call = true;
else
call = false;


console.log('dastrike ' + strike);
console.log(call_put);

//console.log('coinone' + coin_one_name);

console.log('coin one ticker ' + coin_one_ticker);
console.log('coin two ticker ' + coin_two_ticker);
console.log('bid price ' + bid_price);
//coin_one_ticker = 'doge';
//coin_two_ticker = 'btc';
//price = 100;
//res.end('done');


Order.find({$and: [{call_put: call_put}, {expiration_time: expiration}, {strike: strike}, {swap: false}, {coin_one_ticker: coin_one_ticker}, {coin_two_ticker: coin_two_ticker}, {side: 'ask'}, {pending: 'pending'}, {price: {$lte: bid_price}}]}).populate('user').sort({time: 1}).exec(function(err, ask){

console.log('ask ' + ask)
//console.log('sell ordera ' + sell_order);
//console.log('sell orderb ' + sell_order['user']);
//coin_name_one = coin_one_ticker + 'coin';

//gets info for user that submitted the post request, and info on the relevant coins he owns
User.findOne({email: req.session.user.email}).populate(coin_one_name + ' ' + coin_two_name).exec(function (err, coin) {

//console.log('dacoin ' + coin);

//Coin.findOne({code: coin_one_ticker}, function(err, coin){

min_order = .00001;

balance = coin[coin_two_name].balance;
bid_value = bid_price * bid_quantity;

console.log('bid ' + bid_price);
console.log('quantity ' + bid_quantity);
console.log('dabalance ' + balance);
console.log('buyvalue ' + bid_value);


if (balance >= bid_value){

if (ask.length == 0 && quantity > min_order){

console.log("it is in here lol");

function callback(){}

coin[coin_two_name].update({$inc: {in_orders: bid_quantity * bid_price, balance: -1 * bid_quantity * bid_price, available_balance: -1 * bid_quantity * bid_price}}, { w: 1 }, callback);



//, in_orders_non_margin: bid_quantity * bid_price

User.findOne({email: req.session.user.email}, function(err, user){

order = new Order({
                time: new Date().getTime(),
                //last_trade_time: new Date().getTime(),
                coin_one_ticker: coin_one_ticker,
                coin_two_ticker: coin_two_ticker,
                coin_one_name: coin_one_name,
                coin_two_name: coin_two_name,
                side: 'bid',
                price: price,
                quantity_original: bid_quantity,
                quantity: quantity,
                quantity_left: quantity,
                user: user,
                swap: false,
                expiration_time: expiration,
                strike: strike,
                call_put: call_put
});

user.orders.push(order);


user.save(function(err){

});


order.save(function(err){

console.log('order saved');

});



req.session.processing = false;
res.end(JSON.stringify('done'));

//console.log(req.session.processing);





});


}
else{

console.log(coin_one_name);
//console.log('coinfucker '  + coin);
//console.log('fucker ' + coin[coin_two_name].balance);

balance = coin[coin_one_name].balance;
bid_value = bid_price * bid_quantity
bid_value_left = bid_value;
bid_quantity_left = bid_quantity;

console.log('buy quantity lefta ' + bid_quantity_left);

complete = false;

total = 0;



$.each(ask, function(key,val){
ask_value = val.price * val.quantity_left;
ask_order_id = val._id;
ask_price = val.price;
ask_quantity_left = val.quantity_left;

(function(ask_value, ask_order_id, ask_price, ask_quantity_left, key){
if (!complete ){
    if (ask_quantity_left >= bid_quantity_left){
        quantity_left = ask_quantity_left - bid_quantity_left;


        //update order on poosing side
        if (ask_quantity_left == bid_quantity_left)
            Order.findByIdAndUpdate(ask_order_id, {$set: {quantity_left: quantity_left, pending: 'complete', last_trade_time: new Date().getTime()}}, function(err, order){

            });
        else
            Order.findByIdAndUpdate(ask_order_id, {$set: {quantity_left: quantity_left, last_trade_time: new Date().getTime()}}, function(err, order){

            });

        //create buy order record and update balance
        User.findOne({email: req.session.user.email}).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, user){

        //buy_quantity_left = buy_value_left / buy_price;


        //update buyer balance
        purchase_cost = bid_quantity_left * val.price;


        //user[coin_one_name].update({$inc: {available_balance: bid_quantity_left, balance: bid_quantity_left}}, { w: 1 }, callback);
        user[coin_two_name].update({$inc: { available_balance: -1 * purchase_cost, balance: -1 * purchase_cost}}, { w: 1 }, callback);

        function callback(){}
        //done updating buyer balance

        time = new Date().getTime();
        order = new Order({
                        time: time,
                        //last_trade_time: new Date().getTime(),
                        coin_one_ticker: coin_one_ticker,
                        coin_two_ticker: coin_two_ticker,
                        coin_one_name: coin_one_name,
                        coin_two_name: coin_two_name,
                        side: 'bid',
                        price: bid_price,
                        quantity_original: bid_quantity,
                        quantity: bid_quantity,
                        quantity_left: 0,
                        user: user,
                        pending: 'complete',
                        swap: false,
                        expiration_time: expiration,
                        strike: strike,
                        call_put: call_put
        });

        //add opposing orders and users to newly created order 
        $.each(ask, function(keyb, valb){
        if (keyb <= key){
        order.opposing_orders.push(valb);
        order.opposing_users.push(valb.user);
        
        if (keyb == key)
            order.opposing_quantities.push(bid_quantity_left);
        else
            order.opposing_quantities.push(valb.quantity_left);

        }
        });

        //add opposing orders to opposing orders
        $.each(ask, function(keyb, valb){

            valb.opposing_orders.push(order);
            valb.opposing_users.push(user);

            if (keyb == key)
                valb.opposing_quantities.push(bid_quantity_left);
            else
                valb.opposing_quantities.push(valb.quantity_left);

            valb.save();

        });    



        order_data = new OrderData({
                            time: time,
                            coin_ticker_one: coin_one_ticker,
                            coin_ticker_two: coin_two_ticker,
                            strike: strike,
                            expiration: expiration,
                            price: ask_price,
                            quantity: bid_quantity,
                            swap: false,
                            call_put: call_put
        });

        order_data.save(function(err){

        });

        user.orders.push(order);


        user.save(function(err){

        });


        order.save(function(err){

        // req.session.processing = false;
        // res.end('done');

        console.log('order saved');

        });

        });

        //update balance on seller


        // Order.findByIdAndUpdate(ask_order_id, {$inc: {quantity_left: }}, function(err, order){


        // });



        //update seller info
        //console.log('sell order user ' + sell_order);
        User.findById(val['user']).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, seller){
            //console.log('dasell ' + seller);
            console.log('buy quantity left ' + bid_quantity_left);
            console.log('buy value left ' + bid_value_left);

        purchase_cost = bid_quantity_left * val.price;
        seller[coin_two_name].update({$inc: {in_orders_non_margin: -1 * purchase_cost, available_balance: purchase_cost, balance: purchase_cost}}, { w: 1 }, function(err){

            if (call)
                seller[coin_one_name].update({$inc: {in_orders: -1 * bid_quantity_left,  in_positions: bid_quantity_left}}, { w: 1 }, function(err){
                        req.session.processing = false;
                        res.end('done');
                });
            else
                seller[coin_two_name].update({$inc: {in_orders: -1 * bid_quantity_left * strike,  in_positions: bid_quantity_left * strike}}, { w: 1 }, function(err){
                        req.session.processing = false;
                        res.end('done');
                });



            });



        });


        complete = true;
    }
    else{
        //if sell quantity is less than the buy quantity
        console.log('shit is in elseb');

        //quantity_left = (sell_value - buy_value_left)/sell_price;
        //update sell order
        bid_quantity_left -= ask_quantity_left;

        //update ask order
        Order.findByIdAndUpdate(ask_order_id, {$set: {quantity_left: 0, pending: 'complete', last_trade_time: new Date().getTime()}}, function(err, order){

            console.log('fucking error ' + err);

        });

        //create buy order record and update balance
        User.findOne({email: req.session.user.email}).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, user){

            console.log(' fucking error 2 ' + err);
 
        function callback(){}

        console.log('sell quantity left ' + key + ' ' + ask_quantity_left);
        console.log('sell value ' + key + ' ' + ask_value);
        console.log('bid quantity left ' + key + ' ' + bid_quantity_left);

        //update buyer balance
        //user[coin_one_name].update({$inc: {available_balance: ask_quantity_left, balance: ask_quantity_left}}, { w: 1 }, callback);
        user[coin_two_name].update({$inc: { available_balance: -1 * ask_value, balance: -1 * ask_value}}, { w: 1 }, callback);
        //done updating buyer balance

        time = new Date().getTime();

        order_data = new OrderData({
                            time: time,
                            coin_ticker_one: coin_one_ticker,
                            coin_ticker_two: coin_two_ticker,
                            price: ask_price,
                            quantity: ask_quantity_left,
                            strike: strike,
                            expiration: expiration,
                            swap: false,
                            call_put: call_put
        });

        order_data.save(function(err){

        });



        if (key == ask.length -1 ){

            function callback(err){ console.log('errorhi ' + err)}
            console.log('ovahere ' + user[coin_two_name]);

            //update buyer's balance page info
            user[coin_two_name].update({$inc: {in_orders: bid_quantity_left * bid_price, available_balance: -1 * bid_quantity_left * bid_price, balance: -1 * bid_quantity_left * bid_price}}, { w: 1 }, callback);

            order = new Order({
                    time: time,
                    last_trade_time: new Date().getTime(),
                    coin_one_ticker: coin_one_ticker,
                    coin_two_ticker: coin_two_ticker,
                    coin_one_name: coin_one_name,
                    coin_two_name: coin_two_name,
                    side: 'bid',
                    price: bid_price,
                    quantity_original: bid_quantity,
                    quantity: bid_quantity,
                    quantity_left: bid_quantity_left,
                    user: user,
                    pending: 'pending',
                    swap: false,
                    expiration_time: expiration,
                    strike: strike,
                    call_put: call_put
            });


                $.each(ask, function(keyb, valb){
                if (keyb <= key){
                order.opposing_orders.push(valb);
                order.opposing_users.push(valb.user);
                order.opposing_quantities.push(valb.quantity_left);

                }
                });

                //add opposing orders to opposing orders
                $.each(ask, function(keyb, valb){

                    valb.opposing_orders.push(order);
                    valb.opposing_users.push(user);
                    valb.opposing_quantities.push(valb.quantity_left);
                    valb.save();

                });    




            user.orders.push(order);


            user.save(function(err){

            });


            order.save(function(err){

            console.log('order saved');

            });


        }



        });




        //update opposing order;
        //val.update({$inc: {quantity_left: -1 * ask_quantity_left}, $set: {pending: 'complete'}});


        //update balance on seller
        // User.findOne(val['user']).populate({
        //   path: 'orders',
        //   match: { $and: [{swap: false}, {expiration: expiration}, {strike: strike}, {coin_one_name: coin_one_name}] },
        //   //select: 'orders',
        // }).select('orders').exec(function(err, orders){

        // order = orders['orders'][0];
        // console.log(order);





        // });



        //update balance on seller
        User.findById(val['user']).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, seller){


            seller[coin_two_name].update({$inc: {in_orders_non_margin: -1 * ask_value, available_balance: ask_value, balance: ask_value}}, { w: 1 }, function(err){

                if (call)
                    seller[coin_one_name].update({$inc: {in_orders: -1 * ask_quantity_left, in_positions: ask_quantity_left}}, { w: 1 }, function(err){
                            req.session.processing = false;
                            res.end('done');
                        });
                else
                    seller[coin_two_name].update({$inc: {in_orders: -1 * ask_quantity_left * strike, in_positions: ask_quantity_left * strike}}, { w: 1 }, function(err){
                            req.session.processing = false;
                            res.end('done');
                    });


            });


        });


    }



}
}(ask_value, ask_order_id, ask_price, ask_quantity_left, key));


});



}




}
});


});

}

});

// Order.find({}, function(err, orders){

// $.each(orders, function(key, val){

// //console.log('yolo here ' + val);

// if (val.time == 1403335309229){

// //val.update({$set: {quantity: 1}}, function(err, val){});


// }



// });

// });


app.post('/sell_option', csrf, function(req,res){



console.log( 'ask + \r\n')

if (req.session.processing_sell == undefined)
    req.session.processing_sell = false;

if (req.session.processing_sell == false){
req.session.processing_sell = true;

ask_quantity = parseFloat(req.body.ask_quantity);
ask_price = parseFloat(req.body.ask_price);
console.log(' ap ' + ask_price);

coin_one_name = req.body.coin_name_one;
coin_two_name = req.body.coin_name_two;
coin_one_ticker = req.body.coin_ticker_one
coin_two_ticker = req.body.coin_ticker_two;
expiration = req.body.expiration;
strike = req.body.strike;
call_put = req.body.call_put;
//margin = parseFloat(req.body.margin);

if (call_put == 'CALL'){
call = true;
margin = ask_quantity;
}
else{
call = false;
margin = ask_quantity * strike;
}

console.log('coinone' + coin_one_name);

console.log('coin one ticker ' + coin_one_ticker);
console.log(coin_two_ticker);
//coin_one_ticker = 'doge';
//coin_two_ticker = 'btc';
//price = 100;

Order.find({$and: [{call_put: call_put}, {expiration_time: expiration}, {strike: strike}, {swap: false}, {coin_one_ticker: coin_one_ticker}, {coin_two_ticker: coin_two_ticker}, {side: 'bid'}, {pending: 'pending'}, {price: {$gte: ask_price}}]}).populate('user').sort({time: 1}).exec(function(err, bid){

//console.log('sell ordera ' + sell_order);
//console.log('sell orderb ' + sell_order['user']);
//coin_name_one = coin_one_ticker + 'coin';

//gets info for user that submitted the post request, and info on the relevant coins he owns
User.findOne({email: req.session.user.email}).populate(coin_one_name + ' ' + coin_two_name).exec(function (err, coin) {

//console.log('dacoin ' + coin);

//Coin.findOne({code: coin_one_ticker}, function(err, coin){
min_order = .00001;

if (call)
balance = coin[coin_one_name].balance;
else
balance = coin[coin_two_name].balance;


ask_value = ask_price * ask_quantity;
total =  margin;

console.log('bid ' + ask_price);
console.log('quantity ' + ask_quantity);
console.log('dabalance ' + balance);
console.log('buyvalue ' + ask_value);


if (balance >= total){
console.log('inside');

if (bid.length == 0 && ask_quantity > min_order){

function callback(){}

coin[coin_two_name].update({$inc: {in_orders_non_margin: ask_value}}, { w: 1 }, callback);

if (call)
coin[coin_one_name].update({$inc: {available_balance: -1 * total, balance: -1 * total, in_orders: margin}}, { w: 1 }, callback);
else
coin[coin_two_name].update({$inc: {available_balance: -1 * total, balance: -1 * total, in_orders: margin}}, { w: 1 }, callback);




console.log("it is in here lol");

User.findOne({email: req.session.user.email}, function(err, user){



order = new Order({
                time: new Date().getTime(),
                coin_one_ticker: coin_one_ticker,
                coin_two_ticker: coin_two_ticker,
                coin_one_name: coin_one_name,
                coin_two_name: coin_two_name,
                side: 'ask',
                price: ask_price,
                quantity_original: ask_quantity,
                quantity: ask_quantity,
                quantity_left: ask_quantity,
                user: user,
                swap: false,
                expiration_time: expiration,
                strike: strike,
                call_put: call_put,
                initial_margin: margin
});

user.orders.push(order);


user.save(function(err){

});


order.save(function(err){

console.log('order saved');

});

req.session.processing_sell = false;
res.end('done');

});

}
else{

console.log(coin_one_name);
//console.log('coinfucker '  + coin);
console.log('fucker ' + coin[coin_two_name].balance);



ask_value_left = ask_value;
ask_quantity_left = ask_quantity;

//console.log('sell quantity lefta ' + key + ' ' + ask_quantity_left);

complete = false;

total = 0;

console.log('orignal ask quantity left ' + ask_quantity_left);

$.each(bid, function(key,val){
bid_value = val.price * val.quantity_left;
bid_order_id = val._id;
bid_price = val.price;
bid_quantity_left = val.quantity_left;


(function(bid_value, bid_order_id, bid_price, bid_quantity_left, key){

console.log('here ask quantity left ' + key + ' ' + ask_quantity_left);


if (!complete ){
console.log("fuckingtest" + bid_quantity_left + ' ' + ask_quantity_left);
    if (bid_quantity_left >= ask_quantity_left){
        quantity_left = bid_quantity_left - ask_quantity_left;
        console.log('bid quantity leftb ' + key + ' ' + bid_quantity_left);
        //update bid order
        console.log('yoloa '  + key + ' ' + ask_quantity_left);
        if (bid_quantity_left == ask_quantity_left)
            Order.findByIdAndUpdate(bid_order_id, {$set: {quantity_left: quantity_left, pending: 'complete', last_trade_time: new Date().getTime()}}, function(err, order){

            });
        else
            Order.findByIdAndUpdate(bid_order_id, {$set: {quantity_left: quantity_left, last_trade_time: new Date().getTime()}}, function(err, order){

            });

        //create ask order record and update balance
        User.findOne({email: req.session.user.email}).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, user){

        //buy_quantity_left = buy_value_left / buy_price;


        //update askers balance
        sell_price = ask_quantity_left * bid_price;

        console.log('bid price ' + bid_price);
        console.log('bid quantity leftb ' + bid_quantity_left );
        console.log('yolob '  + key + ' ' + sell_price);
        //console.log('sell price ' + key + ' ' + sell _price);

        //update  user's bitcoin balance for both
        user[coin_two_name].update({$inc: {available_balance: sell_price, balance: sell_price}}, { w: 1 }, callback);

        if (call)
        user[coin_one_name].update({$inc: {in_positions: ask_quantity_left, available_balance: -1 * ask_quantity_left, balance: -1 * ask_quantity_left}}, { w: 1 }, callback);
        else
        user[coin_two_name].update({$inc: {in_positions: ask_quantity_left * strike, available_balance: -1 * ask_quantity_left * strike, balance: -1 * ask_quantity_left * strike}}, { w: 1 }, callback);



        function callback(){}
        //done updating buyer balance

        time = new Date().getTime();

        order = new Order({
                        time: time,
                        coin_one_ticker: coin_one_ticker,
                        coin_two_ticker: coin_two_ticker,
                        coin_one_name: coin_one_name,
                        coin_two_name: coin_two_name,
                        side: 'ask',
                        price: ask_price,
                        quantity_original: ask_quantity,
                        quantity: ask_quantity,
                        quantity_left: 0,
                        user: user,
                        pending: 'complete',
                        swap: false,
                        expiration_time: expiration,
                        strike: strike,
                        call_put: call_put
        });


        //add opposing orders and users to newly created order 
        $.each(bid, function(keyb, valb){
        if (keyb <= key){
        order.opposing_orders.push(valb);
        order.opposing_users.push(valb.user);
        
        if (keyb == key)
            order.opposing_quantities.push(ask_quantity_left);
        else
            order.opposing_quantities.push(valb.quantity_left);

        }
        });

        //add opposing orders to opposing orders
        $.each(bid, function(keyb, valb){

            valb.opposing_orders.push(order);
            valb.opposing_users.push(user);

            if (keyb == key)
                valb.opposing_quantities.push(ask_quantity_left);
            else
                valb.opposing_quantities.push(valb.quantity_left);

            valb.save();

        });    

        order_data = new OrderData({
                            time: time,
                            coin_ticker_one: coin_one_ticker,
                            coin_ticker_two: coin_two_ticker,
                            price: bid_price,
                            quantity: ask_quantity,
                            strike: strike,
                            expiration: expiration,
                            swap: false,
                            call_put: call_put
        });

        order_data.save(function(err){

        });


        user.orders.push(order);


        user.save(function(err){

        });

        order.save(function(err){

        console.log('order saved');
        req.session.processing_sell = false;
        res.end('done');

        });

        });

        //update balance on buyer



        //update balance on bidder
        User.findById(val['user']).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, buyer){

            //sell_price = bid_quantity_left * bid_price;
            buyer[coin_two_name].update({$inc: {in_orders: -1 * sell_price}}, { w: 1 }, function(err){

                    req.session.processing_sell = false;
                    res.end('done');

            });
        });


        //console.log('sell order user ' + sell_order);
        //User.findById(val['user']).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, buyer){
            //console.log('dabuy ' + buyer);
            //console.log('buy quantity left ' + bid_quantity_left);
            //console.log('buy value left ' + ask_value_left);

            // buyer[coin_one_name].update({$inc: {available_balance: ask_quantity_left, balance: ask_quantity_left}}, { w: 1 }, function(err){

            //     buy_price = ask_quantity_left * bid_price;
            //     buyer[coin_two_name].update({$inc: {balance: -1 * buy_price, in_orders_non_margin: -1 * buy_price}}, { w: 1 }, function(err){
                    // req.session.processing_sell = false;
                    // res.end('done');
            //     });

            // });



        //});


        complete = true;
    }
    else{
        //if bid quantity is less than the ask quantity
        console.log('shit is in elseb');

        //quantity_left = (sell_value - buy_value_left)/sell_price;
        //update bid order
        //console.log('bid quantity lefta ' + key + ' ' + bid_quantity_left);

        ask_quantity_left -= bid_quantity_left;
        console.log('elsea ask quantity left ' + key + ' ' + ask_quantity_left);

        Order.findByIdAndUpdate(bid_order_id, {$set: {quantity_left: 0, pending: 'complete', last_trade_time: new Date().getTime()}}, function(err, order){

        });

        //update balance for user that submitted ask order
        User.findOne({email: req.session.user.email}).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, user){

        function callback(){}



        console.log('elseb ask quantity left ' + key + ' ' + ask_quantity_left);

        sell_price = bid_quantity_left * bid_price;


        console.log('bid quantity leftai ' + key + ' ' + bid_quantity_left);

        console.log('bid quantity left ' + bid_quantity_left);
        console.log('bid price ' + bid_price);
        console.log('sell price ' + sell_price);

        //update asker's bitcoin balance
        user[coin_two_name].update({$inc: {available_balance: sell_price, balance: sell_price}}, { w: 1 }, callback);

        if (call)
        user[coin_one_name].update({$inc: {in_positions: bid_quantity_left, available_balance: -1 * bid_quantity_left, balance: -1 * bid_quantity_left}}, { w: 1 }, callback);
        else
        user[coin_two_name].update({$inc: {in_positions: bid_quantity_left * strike, available_balance: -1 * bid_quantity_left * strike, balance: -1 * bid_quantity_left * strike}}, { w: 1 }, callback);


        //done updating  asker's balance

        time = new Date().getTime();


        order_data = new OrderData({
                            time: time,
                            coin_ticker_one: coin_one_ticker,
                            coin_ticker_two: coin_two_ticker,
                            price: bid_price,
                            quantity: bid_quantity_left,
                            strike: strike,
                            expiration: expiration,
                            swap: false,
                            call_put: call_put
        });

        order_data.save(function(err){

        });


        //create ask order after processing last bid
        if (key == bid.length -1 ){


            function callback(err){ console.log('errorhi ' + err)}
            console.log('ovahere ' + user[coin_two_name]);

            //update seller's net orders info for balance page
            user[coin_two_name].update({$inc: {in_orders_non_margin: ask_quantity_left * ask_price}}, { w: 1 }, callback);

            if (call)
            user[coin_one_name].update({$inc: {in_orders: ask_quantity_left, available_balance: -1 * ask_quantity_left, balance: -1 * ask_quantity_left }}, { w: 1 }, callback);
            else
            user[coin_two_name].update({$inc: {in_orders: ask_quantity_left * strike, available_balance: -1 * ask_quantity_left * strike, balance: -1 * ask_quantity_left * strike }}, { w: 1 }, callback);




            order = new Order({
                    time: time,
                    coin_one_ticker: coin_one_ticker,
                    coin_two_ticker: coin_two_ticker,
                    coin_one_name: coin_one_name,
                    coin_two_name: coin_two_name,
                    side: 'ask',
                    price: ask_price,
                    quantity_original: ask_quantity,
                    quantity: ask_quantity,
                    quantity_left: ask_quantity_left,
                    user: user,
                    pending: 'pending',
                    swap: false,
                    expiration_time: expiration,
                    strike: strike,
                    call_put: call_put
            });

                $.each(bid, function(keyb, valb){
                if (keyb <= key){
                order.opposing_orders.push(valb);
                order.opposing_users.push(valb.user);
                order.opposing_quantities.push(valb.quantity_left);

                }
                });

                //add opposing orders to opposing orders
                $.each(bid, function(keyb, valb){

                    valb.opposing_orders.push(order);
                    valb.opposing_users.push(user);
                    valb.opposing_quantities.push(valb.quantity_left);
                    valb.save();

                });    


            user.orders.push(order);

            user.save(function(err){

            });


            order.save(function(err){

            console.log('order saved');
            req.session.processing_sell = false;
            res.end('done');

            });


        }



        });

        //update balance on bidder
        User.findById(val['user']).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, buyer){

            //sell_price = bid_quantity_left * bid_price;
            buyer[coin_two_name].update({$inc: {in_orders:  -1 * sell_price}}, { w: 1 }, function(err){

                    req.session.processing_sell = false;
                    res.end('done');

            });
        });




    }





}
}(bid_value, bid_order_id, bid_price, bid_quantity_left, key));

});



}




}
});


});

}




});





app.post('/buy_swap',  csrf, function(req,res){
//req.session.processing = false;
console.log('overhere' + req.session._csrf);
console.log(req.session.processing);

if (req.session.processing == undefined)
    req.session.processing = false;

if (req.session.processing == false){
req.session.processing = true;


quantity = req.body.bid_quantity;
price = req.body.bid_price;
bid_price = price;
bid_quantity = quantity;

coin_one_name = req.body.coin_name_one;
coin_two_name = req.body.coin_name_two;
coin_one_ticker = req.body.coin_ticker_one
coin_two_ticker = req.body.coin_ticker_two;

//console.log('coinone' + coin_one_name);

console.log('coin one ticker ' + coin_one_ticker);
console.log('coin two ticker ' + coin_two_ticker);
console.log('bid price ' + bid_price);
//coin_one_ticker = 'doge';
//coin_two_ticker = 'btc';
//price = 100;
//res.end('done');


Order.find({$and: [{swap: true}, {coin_one_ticker: coin_one_ticker}, {coin_two_ticker: coin_two_ticker}, {side: 'ask'}, {pending: 'pending'}, {price: {$lte: bid_price}}]}).populate('user').sort({time: 1}).exec(function(err, ask){

console.log('ask ' + ask)
//console.log('sell ordera ' + sell_order);
//console.log('sell orderb ' + sell_order['user']);
//coin_name_one = coin_one_ticker + 'coin';

//gets info for user that submitted the post request, and info on the relevant coins he owns
User.findOne({email: req.session.user.email}).populate(coin_one_name + ' ' + coin_two_name).exec(function (err, coin) {

//console.log('dacoin ' + coin);

//Coin.findOne({code: coin_one_ticker}, function(err, coin){

min_order = .00001;

balance = coin[coin_two_name].balance;
bid_value = bid_price * bid_quantity;

console.log('bid ' + bid_price);
console.log('quantity ' + bid_quantity);
console.log('dabalance ' + balance);
console.log('buyvalue ' + bid_value);


if (balance >= bid_value){

if (ask.length == 0 && quantity > min_order){

console.log("it is in here lol");

function callback(){}
coin[coin_two_name].update({$inc: {available_balance: -1 * bid_quantity * bid_price, in_orders_non_margin: bid_quantity * bid_price}}, { w: 1 }, callback);


User.findOne({email: req.session.user.email}, function(err, user){

order = new Order({
                time: new Date().getTime(),
                //last_trade_time: new Date().getTime(),
                coin_one_ticker: coin_one_ticker,
                coin_two_ticker: coin_two_ticker,
                coin_one_name: coin_one_name,
                coin_two_name: coin_two_name,
                side: 'bid',
                price: price,
                quantity: quantity,
                quantity_left: quantity,
                user: user,
                swap: true
});

user.orders.push(order);


user.save(function(err){

});


order.save(function(err){

console.log('order saved');

});



req.session.processing = false;
res.end(JSON.stringify('done'));

//console.log(req.session.processing);





});


}
else{

console.log(coin_one_name);
//console.log('coinfucker '  + coin);
//console.log('fucker ' + coin[coin_two_name].balance);

balance = coin[coin_one_name].balance;
bid_value = bid_price * bid_quantity
bid_value_left = bid_value;
bid_quantity_left = bid_quantity;

console.log('buy quantity lefta ' + bid_quantity_left);

complete = false;

total = 0;



$.each(ask, function(key,val){
ask_value = val.price * val.quantity_left;
ask_order_id = val._id;
ask_price = val.price;
ask_quantity_left = val.quantity_left;

(function(ask_value, ask_order_id, ask_price, ask_quantity_left, key){
if (!complete ){
    if (ask_quantity_left >= bid_quantity_left){
        quantity_left = ask_quantity_left - bid_quantity_left;
        //update sell order

        if (ask_quantity_left == bid_quantity_left)
            Order.findByIdAndUpdate(ask_order_id, {$set: {quantity_left: quantity_left, pending: 'complete', last_trade_time: new Date().getTime()}}, function(err, order){

            });
        else
            Order.findByIdAndUpdate(ask_order_id, {$set: {quantity_left: quantity_left, last_trade_time: new Date().getTime()}}, function(err, order){

            });

        //create buy order record and update balance
        User.findOne({email: req.session.user.email}).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, user){

        //buy_quantity_left = buy_value_left / buy_price;


        //update buyer balance
        purchase_cost = bid_quantity_left * val.price;

        console.log('buy quantity left ' + key + ' ' + bid_quantity_left);
        console.log('purchase cost ' + key + ' ' + ask_value);

        user[coin_one_name].update({$inc: {available_balance: bid_quantity_left, balance: bid_quantity_left}}, { w: 1 }, callback);
        user[coin_two_name].update({$inc: {available_balance: -1 * purchase_cost, balance: -1 * purchase_cost}}, { w: 1 }, callback);

        function callback(){}
        //done updating buyer balance

        time = new Date().getTime();
        order = new Order({
                        time: time,
                        //last_trade_time: new Date().getTime(),
                        coin_one_ticker: coin_one_ticker,
                        coin_two_ticker: coin_two_ticker,
                        coin_one_name: coin_one_name,
                        coin_two_name: coin_two_name,
                        side: 'bid',
                        price: bid_price,
                        quantity: bid_quantity,
                        quantity_left: 0,
                        user: user,
                        pending: 'complete',
                        swap: true
        });

        order_data = new OrderData({
                            time: time,
                            coin_ticker_one: coin_one_ticker,
                            coin_ticker_two: coin_two_ticker,
                            price: ask_price,
                            quantity: bid_quantity
        });

        order_data.save(function(err){

        });

        user.orders.push(order);


        user.save(function(err){

        });


        order.save(function(err){

        console.log('order saved');

        });

        });

        //update balance on seller

        //console.log('sell order user ' + sell_order);
        User.findById(val['user']).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, seller){
            //console.log('dasell ' + seller);
            console.log('buy quantity left ' + bid_quantity_left);
            console.log('buy value left ' + bid_value_left);

            seller[coin_one_name].update({$inc: {in_orders_non_margin: -1 * bid_quantity_left,  balance: -1 * bid_quantity_left}}, { w: 1 }, function(err){

                purchase_cost = bid_quantity_left * val.price;
                seller[coin_two_name].update({$inc: {available_balance: purchase_cost, balance: purchase_cost}}, { w: 1 }, function(err){

                    req.session.processing = false;
                    res.end('done');

                });

            });



        });


        complete = true;
    }
    else{
        //if sell quantity is less than the buy quantity
        console.log('shit is in elseb');

        //quantity_left = (sell_value - buy_value_left)/sell_price;
        //update sell order
        bid_quantity_left -= ask_quantity_left;

        Order.findByIdAndUpdate(ask_order_id, {$set: {quantity_left: 0, pending: 'complete', last_trade_time: new Date().getTime()}}, function(err, order){

            console.log('fucking error ' + err);

        });

        //create buy order record and update balance
        User.findOne({email: req.session.user.email}).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, user){

            console.log(' fucking error 2 ' + err);
 
        function callback(){}

        console.log('sell quantity left ' + key + ' ' + ask_quantity_left);
        console.log('sell value ' + key + ' ' + ask_value);
        console.log('bid quantity left ' + key + ' ' + bid_quantity_left);
        //update buyer balance
        user[coin_one_name].update({$inc: {available_balance: ask_quantity_left, balance: ask_quantity_left}}, { w: 1 }, callback);
        user[coin_two_name].update({$inc: {available_balance: -1 * ask_value, balance: -1 * ask_value}}, { w: 1 }, callback);
        //done updating buyer balance

        time = new Date().getTime();

        order_data = new OrderData({
                            time: time,
                            coin_ticker_one: coin_one_ticker,
                            coin_ticker_two: coin_two_ticker,
                            price: ask_price,
                            quantity: ask_quantity_left
        });

        order_data.save(function(err){

        });



        if (key == ask.length -1 ){

            function callback(err){ console.log('errorhi ' + err)}
            console.log('ovahere ' + user[coin_two_name]);

            user[coin_two_name].update({$inc: {in_orders_non_margin: bid_quantity_left * bid_price, available_balance: -1 * bid_quantity_left * bid_price }}, { w: 1 }, callback);

            order = new Order({
                    time: time,
                    last_trade_time: new Date().getTime(),
                    coin_one_ticker: coin_one_ticker,
                    coin_two_ticker: coin_two_ticker,
                    coin_one_name: coin_one_name,
                    coin_two_name: coin_two_name,
                    side: 'bid',
                    price: bid_price,
                    quantity: bid_quantity,
                    quantity_left: bid_quantity_left,
                    user: user,
                    pending: 'pending',
                    swap: true
            });

            user.orders.push(order);


            user.save(function(err){

            });


            order.save(function(err){

            console.log('order saved');

            });


        }



        });

        //update balance on seller
        User.findById(val['user']).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, seller){
            seller[coin_one_name].update({$inc: {in_orders_non_margin: -1 * ask_quantity_left, balance: -1 * ask_quantity_left}}, { w: 1 }, function(err){

                seller[coin_two_name].update({$inc: {available_balance: ask_value, balance: ask_value}}, { w: 1 }, function(err){

                    req.session.processing = false;
                    res.end('done');
                });

            });


        });


    }






}
}(ask_value, ask_order_id, ask_price, ask_quantity_left, key));


});



}




}
});


});

}

});


app.post('/ask_swap', csrf, function(req,res){



console.log( 'ask + \r\n')

if (req.session.processing_sell == undefined)
    req.session.processing_sell = false;

if (req.session.processing_sell == false){
req.session.processing_sell = true;

ask_quantity = req.body.ask_quantity;
ask_price = req.body.ask_price;
console.log(' ap ' + ask_price);

coin_one_name = req.body.coin_name_one;
coin_two_name = req.body.coin_name_two;
coin_one_ticker = req.body.coin_ticker_one
coin_two_ticker = req.body.coin_ticker_two;

console.log('coinone' + coin_one_name);

console.log('coin one ticker ' + coin_one_ticker);
console.log(coin_two_ticker);
//coin_one_ticker = 'doge';
//coin_two_ticker = 'btc';
//price = 100;

Order.find({$and: [{swap: true}, {coin_one_ticker: coin_one_ticker}, {coin_two_ticker: coin_two_ticker}, {side: 'bid'}, {pending: 'pending'}, {price: {$gte: ask_price}}]}).populate('user').sort({time: 1}).exec(function(err, bid){

//console.log('sell ordera ' + sell_order);
//console.log('sell orderb ' + sell_order['user']);
//coin_name_one = coin_one_ticker + 'coin';

//gets info for user that submitted the post request, and info on the relevant coins he owns
User.findOne({email: req.session.user.email}).populate(coin_one_name + ' ' + coin_two_name).exec(function (err, coin) {

//console.log('dacoin ' + coin);

//Coin.findOne({code: coin_one_ticker}, function(err, coin){
min_order = .00001;

balance = coin[coin_one_name].balance;
ask_value = ask_price * ask_quantity;

console.log('bid ' + ask_price);
console.log('quantity ' + ask_quantity);
console.log('dabalance ' + balance);
console.log('buyvalue ' + ask_value);


if (balance >= ask_value){
console.log('inside');

if (bid.length == 0 && ask_quantity > min_order){

function callback(){}
coin[coin_one_name].update({$inc: {available_balance: -1 * ask_quantity, in_orders_non_margin: ask_quantity}}, { w: 1 }, callback);



console.log("it is in here lol");

User.findOne({email: req.session.user.email}, function(err, user){



order = new Order({
                time: new Date().getTime(),
                coin_one_ticker: coin_one_ticker,
                coin_two_ticker: coin_two_ticker,
                coin_one_name: coin_one_name,
                coin_two_name: coin_two_name,
                side: 'ask',
                price: ask_price,
                quantity: ask_quantity,
                quantity_left: ask_quantity,
                user: user,
                swap: true
});

user.orders.push(order);


user.save(function(err){

});


order.save(function(err){

console.log('order saved');

});

req.session.processing_sell = false;
res.end('done');

});

}
else{

console.log(coin_one_name);
//console.log('coinfucker '  + coin);
console.log('fucker ' + coin[coin_two_name].balance);



ask_value_left = ask_value;
ask_quantity_left = ask_quantity;

//console.log('sell quantity lefta ' + key + ' ' + ask_quantity_left);

complete = false;

total = 0;

console.log('orignal ask quantity left ' + ask_quantity_left);

$.each(bid, function(key,val){
bid_value = val.price * val.quantity_left;
bid_order_id = val._id;
bid_price = val.price;
bid_quantity_left = val.quantity_left;


(function(bid_value, bid_order_id, bid_price, bid_quantity_left, key){

console.log('here ask quantity left ' + key + ' ' + ask_quantity_left);


if (!complete ){
console.log("fuckingtest" + bid_quantity_left + ' ' + ask_quantity_left);
    if (bid_quantity_left >= ask_quantity_left){
        quantity_left = bid_quantity_left - ask_quantity_left;
        console.log('bid quantity leftb ' + key + ' ' + bid_quantity_left);
        //update bid order
        console.log('yoloa '  + key + ' ' + ask_quantity_left);
        if (bid_quantity_left == ask_quantity_left)
            Order.findByIdAndUpdate(bid_order_id, {$set: {quantity_left: 0, pending: 'complete', last_trade_time: new Date().getTime()}}, function(err, order){

            });
        else
            Order.findByIdAndUpdate(bid_order_id, {$set: {quantity_left: bid_quantity_left - ask_quantity_left, last_trade_time: new Date().getTime()}}, function(err, order){

            });

        //create ask order record and update balance
        User.findOne({email: req.session.user.email}).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, user){

        //buy_quantity_left = buy_value_left / buy_price;


        //update askers balance
        sell_price = ask_quantity_left * bid_price;

        console.log('bid price ' + bid_price);
        console.log('bid quantity leftb ' + bid_quantity_left );
        console.log('yolob '  + key + ' ' + sell_price);
        //console.log('sell price ' + key + ' ' + sell _price);

        user[coin_one_name].update({$inc: {available_balance: -1 * ask_quantity_left, balance: -1 * ask_quantity_left}}, { w: 1 }, callback);
        user[coin_two_name].update({$inc: {available_balance: sell_price, balance: sell_price}}, { w: 1 }, callback);

        function callback(){}
        //done updating buyer balance

        time = new Date().getTime();

        order = new Order({
                        time: time,
                        coin_one_ticker: coin_one_ticker,
                        coin_two_ticker: coin_two_ticker,
                        coin_one_name: coin_one_name,
                        coin_two_name: coin_two_name,
                        side: 'ask',
                        price: ask_price,
                        quantity: ask_quantity,
                        quantity_left: 0,
                        user: user,
                        pending: 'complete',
                        swap: true
        });

        order_data = new OrderData({
                            time: time,
                            coin_ticker_one: coin_one_ticker,
                            coin_ticker_two: coin_two_ticker,
                            price: bid_price,
                            quantity: ask_quantity
        });

        order_data.save(function(err){

        });


        user.orders.push(order);


        user.save(function(err){

        });

        order.save(function(err){

        console.log('order saved');

        });

        });

        //update balance on buyer

        //console.log('sell order user ' + sell_order);
        User.findById(val['user']).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, buyer){
            //console.log('dabuy ' + buyer);
            //console.log('buy quantity left ' + bid_quantity_left);
            //console.log('buy value left ' + ask_value_left);

            buyer[coin_one_name].update({$inc: {available_balance: ask_quantity_left, balance: ask_quantity_left}}, { w: 1 }, function(err){

                buy_price = ask_quantity_left * bid_price;
                buyer[coin_two_name].update({$inc: {balance: -1 * buy_price, in_orders_non_margin: -1 * buy_price}}, { w: 1 }, function(err){
                    req.session.processing_sell = false;
                    res.end('done');
                });

            });



        });


        complete = true;
    }
    else{
        //if bid quantity is less than the ask quantity
        console.log('shit is in elseb');

        //quantity_left = (sell_value - buy_value_left)/sell_price;
        //update bid order
        //console.log('bid quantity lefta ' + key + ' ' + bid_quantity_left);

        ask_quantity_left -= bid_quantity_left;
        console.log('elsea ask quantity left ' + key + ' ' + ask_quantity_left);

        Order.findByIdAndUpdate(bid_order_id, {$set: {quantity_left: 0, pending: 'complete', last_trade_time: new Date().getTime()}}, function(err, order){

        });

        //update balance for user that submitted ask order
        User.findOne({email: req.session.user.email}).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, user){

        function callback(){}



        console.log('elseb ask quantity left ' + key + ' ' + ask_quantity_left);

        sell_price = bid_quantity_left * bid_price;


        console.log('bid quantity leftai ' + key + ' ' + bid_quantity_left);

        console.log('bid quantity left ' + bid_quantity_left);
        console.log('bid price ' + bid_price);
        console.log('sell price ' + sell_price);

        //update asker's balance
        user[coin_one_name].update({$inc: {available_balance: -1 * bid_quantity_left, balance: -1 * bid_quantity_left}}, { w: 1 }, callback);
        user[coin_two_name].update({$inc: {available_balance: sell_price, balance: sell_price}}, { w: 1 }, callback);
        //done updating  asker's balance

        time = new Date().getTime();


        order_data = new OrderData({
                            time: time,
                            coin_ticker_one: coin_one_ticker,
                            coin_ticker_two: coin_two_ticker,
                            price: bid_price,
                            quantity: bid_quantity_left
        });

        order_data.save(function(err){

        });


        //create ask order after processing last bid
        if (key == bid.length -1 ){


            function callback(err){ console.log('errorhi ' + err)}
            console.log('ovahere ' + user[coin_two_name]);

            user[coin_one_name].update({$inc: {in_orders_non_margin: ask_quantity_left, available_balance: -1 * ask_quantity_left }}, { w: 1 }, callback);

            order = new Order({
                    time: time,
                    coin_one_ticker: coin_one_ticker,
                    coin_two_ticker: coin_two_ticker,
                    coin_one_name: coin_one_name,
                    coin_two_name: coin_two_name,
                    side: 'ask',
                    price: ask_price,
                    quantity: ask_quantity,
                    quantity_left: ask_quantity_left,
                    user: user,
                    pending: 'pending',
                    swap: true
            });

            user.orders.push(order);

            user.save(function(err){

            });


            order.save(function(err){

            console.log('order saved');

            });


        }



        });

        //update balance on bidder
        User.findById(val['user']).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, buyer){
            buyer[coin_one_name].update({$inc: {available_balance: bid_quantity_left, balance: bid_quantity_left}}, { w: 1 }, function(err){

                sell_price = bid_quantity_left * bid_price;
                buyer[coin_two_name].update({$inc: {in_orders_non_margin: -1 * sell_price, balance: -1 * sell_price}}, { w: 1 }, function(err){
                    req.session.processing_sell = false;
                    res.end('done');
                });

            });


        });


    }





}
}(bid_value, bid_order_id, bid_price, bid_quantity_left, key));

});



}




}
});


});

}




});



app.post('/ask',  csrf, function(req,res){
//req.session.processing = false;
console.log('overhere' + req.session._csrf);
console.log(req.session.processing_sell);
    //req.session.processing_sell = false;


if (req.session.processing_sell == undefined)
    req.session.processing_sell = false;

if (req.session.processing_sell== false){
req.session.processing_sell = true;


quantity = req.body.ask_quantity;
price = req.body.ask_price;
ask_price = parseFloat(price);
ask_quantity = parseFloat(quantity);
short_symbol = req.body.short_symbol;
// maintenance_margin = parseFloat(req.body.maintenance_margin);
// maintenance_margin = ask_price * ask_quantity;
ContractRef.findOne({short_symbol: short_symbol}, function(err, contractref){
bitstamp.ticker(function(err, trades) {
maintenance_margin_multiplier = .4
current_price = trades.last;

strike_price = contractref.strike_price;

if (current_price < strike_price)
maintenance_margin = .4 * (ask_quantity * 10 / current_price);
else{
in_the_money = 10/ (current_price - strike_price) * ask_quantity;
fourty_percent_change = .4 * (ask_quantity * 10 / current_price);
maintenance_margin = in_the_money + fourty_percent_change;


}



console.log("maintenance margin " + maintenance_margin);

short_symbol = req.body.short_symbol;


Order.find({$and: [{short_symbol: short_symbol}, {side: 'bid'}, {pending: 'pending'}, {price: {$gte: ask_price}}]}).populate('user').sort({price: -1}).exec(function(err, bid){

console.log('bid ' + bid)
//console.log('sell ordera ' + sell_order);
//console.log('sell orderb ' + sell_order['user']);
//coin_name_one = coin_one_ticker + 'coin';

//gets info for user that submitted the post request, and info on the relevant coins he owns
User.findOne({email: req.session.user.email}).populate(short_symbol).exec(function (err, user) {


min_order = .00001;

contract_balance = user[short_symbol].balance;
initial_margin = user[short_symbol].initial_margin;
ask_value = ask_price * ask_quantity;

console.log('bid ' + ask_price);
console.log('quantity ' + ask_quantity);
console.log('buyvalue ' + ask_value);

user_balance = user.available_balance;

//formula for intiail margin
initial_margin = 1;
fees = .001;
fees = 0;

//total cost

if (user_balance >= fees * ask_quantity + ask_value + maintenance_margin){

if (bid.length == 0 && quantity > min_order){

console.log("it is in here lol");

function callback(){}
user[short_symbol].update({$inc: {balance: -1 * ask_quantity}}, { w: 1 }, callback);

//User.findOneAndUpdate({email: req.session.user.email}, {$inc: {balance: -1 * fees * bid_quantity, available_balance: inc_available, maintenance_margin: maintenance_margin, in_orders: bid_value}},function(err, user){
// inc_available = -1 * (fees * bid_quantity + maintenance_margin);
// console.log(inc_available);


User.findOneAndUpdate({email: req.session.user.email}, {$inc: {in_orders_non_margin: ask_value, in_orders: maintenance_margin, balance: -1 * fees * ask_quantity, available_balance: -1 * (fees * ask_quantity + maintenance_margin), maintenance_margin: maintenance_margin}},function(err, user){

console.log('fucking quantity ' + quantity);


order = new Order({
                time: new Date().getTime(),
                option_type: 'call',
                short_symbol: short_symbol,
                side: 'ask',
                price: price,
                quantity_original: quantity,
                quantity: quantity,
                quantity_left: quantity,
                seller: user,
                pending: 'pending',
                initial_margin: maintenance_margin
});
order.btc_prices.push(current_price);

user.orders.push(order);


user.save(function(err){

});


console.log('the order ' + order);

order.save(function(err){

console.log('order saved');

});



req.session.processing_sell = false;
res.end('done');

//console.log(req.session.processing);





});


}
else{


//console.log(coin_one_name);
//console.log('coinfucker '  + coin);
//console.log('fucker ' + coin[coin_two_name].balance);

//balance = coin[coin_one_name].balance;
ask_value = ask_price * ask_quantity
ask_value_left = ask_value;
ask_quantity_left = ask_quantity;
user_balance = user.available_balance;

console.log('sell quantity lefta ' + ask_quantity_left);

complete = false;

total = 0;


$.each(bid, function(key,val){
bid_value = val.price * val.quantity_left;
bid_order_id = val._id;
bid_price = val.price;
bid_quantity_left = val.quantity_left;
purchase_cost = ask_quantity_left * val.price;
// partial_maintenance_margin = purchase_cost;
// bid_maintenance_margin = bid_value;

partial_maintenance_margin = .4 * (ask_quantity_left * 10 / current_price);
bid_maintenance_margin = .4 * (bid_quantity_left * 10 / current_price);


(function(bid_value, bid_order_id, bid_price, bid_quantity_left, key, purchase_cost, partial_maintenance_margin, bid_maintenance_margin, maintenance_margin_multiplier){
if (!complete ){
    if (bid_quantity_left >= ask_quantity_left){
        quantity_left = bid_quantity_left - ask_quantity_left;
        //update sell order

        if (bid_quantity_left == ask_quantity_left)
            Order.findByIdAndUpdate(bid_order_id, {$set: {quantity_left: quantity_left, pending: 'complete', last_trade_time: new Date().getTime()}}, function(err, order){

            });
        else
            Order.findByIdAndUpdate(bid_order_id, {$set: {quantity_left: quantity_left, last_trade_time: new Date().getTime()}}, function(err, order){

            });

        //create buy order record and update balance
        User.findOne({email: req.session.user.email}).populate(short_symbol).exec(function(err, user){
        User.findById(val['buyer']).populate(short_symbol).exec(function(err, buyer){

        //buy_quantity_left = buy_value_left / buy_price;


        //update buyer balance


        console.log('buy quantity left ' + key + ' ' + ask_quantity_left);
        console.log('purchase cost ' + key + ' ' + bid_value);
        fee_total = fees * ask_quantity;

        user[short_symbol].update({$inc: {balance: ask_quantity_left}}, { w: 1 }, callback);
        user.update({$inc: {in_positions: partial_maintenance_margin, maintenance_margin: maintenance_margin, balance: purchase_cost - fee_total , available_balance: purchase_cost - fee_total - maintenance_margin}}, { w: 1 }, callback);

        function callback(){}
        //done updating buyer balance



        time = new Date().getTime();
        order = new Order({
                        time: time,
                        //last_trade_time: new Date().getTime(),
                        short_symbol: short_symbol,
                        side: 'ask',
                        price: ask_price,
                        quantity_original: ask_quantity,
                        quantity: ask_quantity,
                        quantity_left: 0,
                        seller: user,
                        //buyer: buyer,
                        pending: 'complete',
                        initial_margin: maintenance_margin
        });

        order.btc_prices.push(current_price);
        order.buyers.push(buyer);
        order.buyer_quantities.push(ask_quantity_left);

        order_data = new OrderData({
                            time: time,
                            short_symbol: short_symbol,
                            price: bid_price,
                            quantity: ask_quantity_left,
                            initial_margin: maintenance_margin
        });

        order_data.save(function(err){

        });

        user.orders.push(order);


        user.save(function(err){

        });


        order.save(function(err){

        console.log('order saved');

        });

        });
        });

        //update balance on buyer

        //console.log('sell order user ' + sell_order);
        User.findById(val['buyer']).populate(short_symbol).exec(function(err, buyer){
            //console.log('dasell ' + seller);
            console.log('sell quantity left ' + ask_quantity_left);
            console.log('sell value left ' + ask_value_left);

            purchase_cost = ask_quantity_left * val.price;

            buyer.update({$inc: {in_orders_non_margin: purchase_cost, in_positions: partial_maintenance_margin, in_orders: -1 * partial_maintenance_margin, balance: -1 * purchase_cost}}, { w: 1 }, function(err){

                buyer[short_symbol].update({$set:{seller: user}, $inc: {balance: ask_quantity_left}}, { w: 1 }, function(err){

                    console.log('right here dude');
                    req.session.processing_sell = false;
                    res.end('done');

                });

            });



        });


        complete = true;
    }
    else{
        //if sell quantity is less than the buy quantity
        console.log('shit is in elseb');

        //quantity_left = (sell_value - buy_value_left)/sell_price;
        //update sell order
        ask_quantity_left -= bid_quantity_left;

        //ended here

        Order.findByIdAndUpdate(bid_order_id, {$set: {quantity_left: 0, pending: 'complete', last_trade_time: new Date().getTime()}}, function(err, order){

        });

        //create buy order record and update balance
        User.findOne({email: req.session.user.email}).populate(short_symbol).exec(function(err, user){
        User.findById(val['buyer']).populate(short_symbol).exec(function(err, buyer){

        function callback(){}

        console.log('bid quantity left ' + key + ' ' + bid_quantity_left);
        console.log('bid value ' + key + ' ' + bid_value);
        //update seller balance
        user[short_symbol].update({$inc: {balance: -1 * bid_quantity_left}}, { w: 1 }, callback);
        user.update({$inc: {in_positions: bid_maintenance_margin, balance: bid_value, available_balance: bid_value}}, { w: 1 }, callback);
        //done updating seller ballance

        time = new Date().getTime();

        order_data = new OrderData({
                            time: time,
                            short_symbol: short_symbol,
                            price: bid_price,
                            quantity: bid_quantity_left
        });

        order_data.save(function(err){

        });


        if (key == bid.length -1 ){

            fees = .001;
            fees = 0;
            fee_total = fees * ask_quantity;
            in_orders_non_margin = ask_quantity_left * ask_price;
            in_orders =  maintenance_margin_multiplier *  (ask_quantity_left * 10 / current_price);;
            user.update({$inc: {in_orders: in_orders, available_balance: -1 * ( maintenance_margin + fee_total)}}, { w: 1 }, callback);

            order = new Order({
                    time: time,
                    last_trade_time: new Date().getTime(),
                    short_symbol: short_symbol,
                    side: 'ask',
                    price: ask_price,
                    quantity_original: ask_quantity,
                    quantity: ask_quantity,
                    quantity_left: ask_quantity_left,
                    seller: user,
                    //buyer: buyer,
                    pending: 'pending',
                    initial_margin: maintenance_margin
            });

            order.btc_prices.push(current_price);
            order.buyers.push(buyer);
            order.buyer_quantities.push(ask_quantity_left);

            user.orders.push(order);


            user.save(function(err){

            });


            order.save(function(err){

            console.log('order saved');

            });


        }


        });

        });

        //update balance on buyer
        User.findById(val['buyer']).populate(short_symbol).exec(function(err, buyer){
            buyer[short_symbol].update({$inc: {balance: ask_quantity_left}}, { w: 1 }, function(err){

                buyer.update({$set:{seller: user}, $inc: {in_positions: bid_maintenance_margin, in_orders: -1 * bid_maintenance_margin, in_orders_non_margin: bid_value, balance: -1 * bid_value}}, { w: 1 }, function(err){

                    req.session.processing_sell = false;
                    res.end('done');
                });

            });


        });


    }






}
}(bid_value, bid_order_id, bid_price, bid_quantity_left, key, purchase_cost, partial_maintenance_margin, bid_maintenance_margin, maintenance_margin_multiplier));


});



}




}
});


});

});
});


}

});




app.post('/ask_prior', csrf, function(req,res){



console.log( 'ask + \r\n')

if (req.session.processing_sell == undefined)
    req.session.processing_sell = false;

if (req.session.processing_sell == false){
req.session.processing_sell = true;

ask_quantity = req.body.ask_quantity;
ask_price = req.body.ask_price;
console.log(' ap ' + ask_price);

coin_one_name = req.body.coin_name_one;
coin_two_name = req.body.coin_name_two;
coin_one_ticker = req.body.coin_ticker_one
coin_two_ticker = req.body.coin_ticker_two;

console.log('coinone' + coin_one_name);

console.log('coin one ticker ' + coin_one_ticker);
console.log(coin_two_ticker);
//coin_one_ticker = 'doge';
//coin_two_ticker = 'btc';
//price = 100;

Order.find({$and: [{coin_one_ticker: coin_one_ticker}, {coin_two_ticker: coin_two_ticker}, {side: 'bid'}, {pending: 'pending'}, {price: {$gte: ask_price}}]}).populate('user').sort({time: 1}).exec(function(err, bid){

//console.log('sell ordera ' + sell_order);
//console.log('sell orderb ' + sell_order['user']);
//coin_name_one = coin_one_ticker + 'coin';

//gets info for user that submitted the post request, and info on the relevant coins he owns
User.findOne({email: req.session.user.email}).populate(coin_one_name + ' ' + coin_two_name).exec(function (err, coin) {

//console.log('dacoin ' + coin);

//Coin.findOne({code: coin_one_ticker}, function(err, coin){
min_order = .00001;

balance = coin[coin_one_name].balance;
ask_value = ask_price * ask_quantity;

console.log('bid ' + ask_price);
console.log('quantity ' + ask_quantity);
console.log('dabalance ' + balance);
console.log('buyvalue ' + ask_value);


if (balance >= ask_value){
console.log('inside');

if (bid.length == 0 && ask_quantity > min_order){

function callback(){}
coin[coin_one_name].update({$inc: {balance: -1 * ask_quantity * ask_price, held_for_orders: ask_quantity * ask_price}}, { w: 1 }, callback);



console.log("it is in here lol");

User.findOne({email: req.session.user.email}, function(err, user){



order = new Order({
                time: new Date().getTime(),
                coin_one_ticker: coin_one_ticker,
                coin_two_ticker: coin_two_ticker,
                side: 'ask',
                price: ask_price,
                quantity_original: ask_quantity,
                quantity: ask_quantity,
                quantity_left: ask_quantity,
                user: user,
                initial_margin: maintenance_margin
});
order.btc_prices.push(current_price);

user.orders.push(order);


user.save(function(err){

});


order.save(function(err){

console.log('order saved');

});

req.session.processing_sell = false;
res.end('done');

});

}
else{

console.log(coin_one_name);
//console.log('coinfucker '  + coin);
console.log('fucker ' + coin[coin_two_name].balance);



ask_value_left = ask_value;
ask_quantity_left = ask_quantity;

//console.log('sell quantity lefta ' + key + ' ' + ask_quantity_left);

complete = false;

total = 0;

console.log('orignal ask quantity left ' + ask_quantity_left);

$.each(bid, function(key,val){
bid_value = val.price * val.quantity_left;
bid_order_id = val._id;
bid_price = val.price;
bid_quantity_left = val.quantity_left;


(function(bid_value, bid_order_id, bid_price, bid_quantity_left, key){

console.log('here ask quantity left ' + key + ' ' + ask_quantity_left);


if (!complete ){
console.log("fuckingtest" + bid_quantity_left + ' ' + ask_quantity_left);
    if (bid_quantity_left >= ask_quantity_left){
        quantity_left = bid_quantity_left - ask_quantity_left;
        console.log('bid quantity leftb ' + key + ' ' + bid_quantity_left);
        //update bid order
        console.log('yoloa '  + key + ' ' + ask_quantity_left);
        if (bid_quantity_left == ask_quantity_left)
            Order.findByIdAndUpdate(bid_order_id, {$set: {quantity_left: quantity_left, pending: 'complete', last_trade_time: new Date().getTime()}}, function(err, order){

            });
        else
            Order.findByIdAndUpdate(bid_order_id, {$set: {quantity_left: quantity_left, last_trade_time: new Date().getTime()}}, function(err, order){

            });

        //create ask order record and update balance
        User.findOne({email: req.session.user.email}).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, user){

        //buy_quantity_left = buy_value_left / buy_price;


        //update askers balance
        sell_price = ask_quantity_left * bid_price;

        console.log('bid price ' + bid_price);
        console.log('bid quantity leftb ' + bid_quantity_left );
        console.log('yolob '  + key + ' ' + sell_price);
        //console.log('sell price ' + key + ' ' + sell _price);

        user[coin_one_name].update({$inc: {balance: -1 * ask_quantity_left}}, { w: 1 }, callback);
        user[coin_two_name].update({$inc: {balance: sell_price}}, { w: 1 }, callback);

        function callback(){}
        //done updating buyer balance

        time = new Date().getTime();

        order = new Order({
                        time: time,
                        coin_one_ticker: coin_one_ticker,
                        coin_two_ticker: coin_two_ticker,
                        side: 'ask',
                        price: ask_price,
                        quantity: ask_quantity,
                        quantity_left: 0,
                        user: user,
                        pending: 'complete',
                        initial_margin: maintenance_margin
        });
        order.btc_prices.push(current_price);

        order_data = new OrderData({
                            time: time,
                            coin_ticker_one: coin_one_ticker,
                            coin_ticker_two: coin_two_ticker,
                            price: bid_price,
                            quantity: ask_quantity
        });

        order_data.save(function(err){

        });


        user.orders.push(order);


        user.save(function(err){

        });

        order.save(function(err){

        console.log('order saved');

        });

        });

        //update balance on buyer

        //console.log('sell order user ' + sell_order);
        User.findById(val['user']).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, buyer){
            //console.log('dabuy ' + buyer);
            //console.log('buy quantity left ' + bid_quantity_left);
            //console.log('buy value left ' + ask_value_left);

            buyer[coin_one_name].update({$inc: {balance: ask_quantity_left}}, { w: 1 }, function(err){

                buy_price = ask_quantity_left * bid_price;
                buyer[coin_two_name].update({$inc: {balance: -1 * buy_price}}, { w: 1 }, function(err){
                    req.session.processing_sell = false;
                    res.end('done');
                });

            });



        });


        complete = true;
    }
    else{
        //if bid quantity is less than the ask quantity
        console.log('shit is in elseb');

        //quantity_left = (sell_value - buy_value_left)/sell_price;
        //update bid order
        //console.log('bid quantity lefta ' + key + ' ' + bid_quantity_left);

        ask_quantity_left -= bid_quantity_left;
        console.log('elsea ask quantity left ' + key + ' ' + ask_quantity_left);

        Order.findByIdAndUpdate(bid_order_id, {$set: {quantity_left: 0, pending: 'complete', last_trade_time: new Date().getTime()}}, function(err, order){

        });

        //update balance for user that submitted ask order
        User.findOne({email: req.session.user.email}).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, user){

        function callback(){}



        console.log('elseb ask quantity left ' + key + ' ' + ask_quantity_left);

        sell_price = bid_quantity_left * bid_price;


        console.log('bid quantity leftai ' + key + ' ' + bid_quantity_left);

        console.log('bid quantity left ' + bid_quantity_left);
        console.log('bid price ' + bid_price);
        console.log('sell price ' + sell_price);

        //update asker's balance
        user[coin_one_name].update({$inc: {balance: -1 * bid_quantity_left}}, { w: 1 }, callback);
        user[coin_two_name].update({$inc: {balance: sell_price}}, { w: 1 }, callback);
        //done updating  asker's balance

        time = new Date().getTime();


        order_data = new OrderData({
                            time: time,
                            coin_ticker_one: coin_one_ticker,
                            coin_ticker_two: coin_two_ticker,
                            price: bid_price,
                            quantity: bid_quantity_left
        });

        order_data.save(function(err){

        });


        //create ask order after processing last bid
        if (key == bid.length -1 ){


            order = new Order({
                    time: time,
                    coin_one_ticker: coin_one_ticker,
                    coin_two_ticker: coin_two_ticker,
                    side: 'ask',
                    price: ask_price,
                    quantity: ask_quantity,
                    quantity_left: ask_quantity_left,
                    user: user,
                    pending: 'pending',
                    initial_margin: maintenance_margin
            });

            order.btc_prices.push(current_price);
            user.orders.push(order);

            user.save(function(err){

            });


            order.save(function(err){

            console.log('order saved');

            });


        }



        });

        //update balance on bidder
        User.findById(val['user']).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, buyer){
            buyer[coin_one_name].update({$inc: {balance: bid_quantity_left}}, { w: 1 }, function(err){

                //sell_price = bid_quantity_left * bid_price;
                buyer[coin_two_name].update({$inc: {balance: -1 * sell_price}}, { w: 1 }, function(err){
                    req.session.processing_sell = false;
                    res.end('done');
                });

            });


        });


    }





}
}(bid_value, bid_order_id, bid_price, bid_quantity_left, key));

});



}




}
});


});

}




});





app.get('/chart', function(req,res){

res.render("samples/stockMultiplePanels.html");

});

app.get('/chart2', function(req,res){

res.render("samples/chart2.html");

});

app.get('/chart3', function(req,res){

res.render("samples/chart3.html");

});


app.get('/activate/:token', function(req,res){
token = req.params.token;

User.findOneAndUpdate({hash: token},  { $set: { activated: true }}, function(err, user){
if (user != null && user != undefined){

object = new Object();
object.email = user.email;
object.full_name = user.full_name;
object.user_id = user._id;

req.session.activated = true;
req.session.user = object;

res.redirect('/');



}


else{



}

});

});


app.post('/logout', function(req,res){


delete req.session;

res.end('done');


});

app.post('/remind', function(req,res){


User.findOne({email: req.body.email.toLowerCase()}, function(err, user){

if (user != null){
string = 'Welcome! \r\n Please activate your account by clicking the\
             link below: \r\n\r\n ' + prefix + 'activate/' + user.hash;

html = '<p>Hello,<br />\
    Welcome to GenesisBlock. The following is your activation link:<br/><br/>\
    <strong>' + prefix + 'activate/' + user.hash + '</strong></p>';


sendgrid.send({
  to:       req.body.email.toLowerCase(),
  from:     'info@GenesisBlock.io',
  subject:  'GenesisBlock - cryptocurrency exchange account activation',
  text:     string,
  html: html
}, function(err, json) {

  if (err) { return console.error(err); }

  console.log(json);
  res.end('done');

});

} else res.end('Email not found');

});



});

app.post('/forgot', function(req,res){

// User.findOne({email: req.body.email.toLowerCase()}, function(err, user){

// console.log(user.hash);

// });

email = req.body.email;

User.findOne({email: email}, function(err, user){
if (user == null)
res.end('incorrect');


else if (user.activated){
console.log('b');
object = new Object();
object.email = user.email;
object.full_name = user.full_name;
object.user_id = user._id;

string = 'Hello! \r\n Your password is: \r\n\r\n ' + user.password;

html = '<p>Hello,<br/>\
    Your password is:<br/>\
    <strong>' + user.password + '</strong></p>';


sendgrid.send({
  to:       req.body.email,
  from:     'info@GenesisBlock.io',
  subject:  'GenesisBlock - Password Reminder',
  text:     string,
  html: html
}, function(err, json) {

  if (err) { return console.error(err); }
});



res.end(JSON.stringify(user));

}

else {
console.log('c');
    res.end('unactivated');
}


});

});


app.post('/change_password', csrf, function(req,res){
new_pass = req.body.password;

console.log(req.session.activated);
console.log(req.session.user.email);
console.log(req.body.email);

if (req.session.activated && req.session.user.email == req.body.email){

User.findOneAndUpdate({email: email},{$set: {password: new_pass}},function(err, user){

console.log("password updated");
res.end('done');

});


}

});

app.post('/login', function(req,res){

email = req.body.email.toLowerCase();
password = req.body.password;

User.findOne({email: email}, function(err, user){

if (user != undefined){
if (user.activated == false){

    res.end('Not activated yet. Please search both inbox and spam for activation email');

}
else{

current_time = new Date().getTime();
count = 0;

if (user.login_attempts.length > 7 ){

index = user.login_attempts.length - 6;
subarray = user.login_attempts.slice(index);

$.each(subarray, function(key,val){

if (current_time - val < 120000)
    count++;

});


}



if (count < 5  && user.password == req.body.password){

object = new Object();
object.email = user.email;
object.full_name = user.full_name;
object.user_id = user._id;

req.session.activated = true;
req.session.user = object;

res.end('correct');

}
else if (count < 5 && user.password != req.body.password){

user.login_attempts.push(current_time);
user.save(function(err){
console.log("updated");
});

res.end('Incorrect Password!');

}
else if (count >= 5 && user.password == req.body.password){

res.end('You tried to login more than 5 times in the past 2 minutes. Please wait 2 minutes and try again.');

}
else if (count >= 5 && user.password != req.body.password){

res.end('You tried to login more than 5 times in the past 2 minutes. Please wait 2 minutes and try again.');

}


}
}else res.end('Account not found');



});


});


app.post('/register', function(req,res){
body = req.body;

console.log(body);

User.findOne({email: body.email.toLowerCase()}, function(err, user){

console.log(user);
if (user != null){

if (user.activated == false)
res.end('1');
else
res.end('2');

}
else{
require('crypto').randomBytes(48, function(ex, buf) {
    token = buf.toString('base64').replace(/\//g,'_').replace(/\+/g,'-');

    activation_url = prefix + 'activate/' + token;


    console.log(token);
    user = new User({
                full_name: body.full_name,
                email: body.email.toLowerCase(),
                password: body.password,
                hash: token
    });
    user.save(function(err){
        console.log('user has been saved');

string = 'Welcome! \r\n Please activate your account by clicking the\
             link below: \r\n\r\n ' + prefix + 'activate/' + token;

html = '<p>Hello,<br />\
    Welcome to GenesisBlock. The following is your activation link:<br/><br/>\
    <strong>' + prefix + 'activate/' + token + '</strong></p>';


sendgrid.send({
  to:       body.email,
  from:     'info@GenesisBlock.io',
  subject:  'GenesisBlock - cryptocurrency exchange account activation',
  text:     string,
  html: html
}, function(err, json) {

  if (err) { return console.error(err); }
});

  res.end("done"); 




litecoin_client.getNewAddress(function(err, address) {

litecoin = new Coin({
    coin_name: 'litecoin',
    code: 'ltc',
    user: user,
    deposit_address: address,
    confirmation: 1,
    coin_number: 3,
    withdraw_fee: .01,
    order_fee: .015
});

litecoin.save(function(err){

User.findOneAndUpdate({hash: token}, {$set: {litecoin: litecoin}},function(err, user){
console.log("did find" + JSON.stringify(user));
console.log("edited litecoin address" + address);

});

console.log('coin saved');

});

});




dogecoin_client.getNewAddress(function(err, address) {

dogecoin = new Coin({
    coin_name: 'dogecoin',
    code: 'doge',
    user: user,
    deposit_address: address,
    confirmation: 3,
    coin_number: 2,
    withdraw_fee: 1,
    order_fee: .015,
    balance: 1000,
    available_balance: 1000
});

dogecoin.save(function(err){

User.findOneAndUpdate({hash: token}, {$set: {dogecoin: dogecoin}},function(err, user){
console.log("did find" + JSON.stringify(user));
console.log("edited");

});

console.log('coin saved');

});


});

bitcoin_client.getNewAddress(function(err, address) {

bitcoin = new Coin({
    coin_name: 'bitcoin',
    code: 'btc',
    user: user,
    deposit_address: address,
    confirmation: 1,
    coin_number: 1,
    withdraw_fee: .0002,
    order_fee: .015
});

bitcoin.save(function(err){

User.findOneAndUpdate({hash: token}, {$set: {bitcoin: bitcoin}},function(err, user){
console.log("did find" + JSON.stringify(user));
console.log("edited");

});

console.log('coin saved');

});

});


if ( ip.address() != '192.168.1.56'){

x11coin_client.getNewAddress(function(err, address) {

x11coin = new Coin({
    coin_name: 'x11coin',
    code: 'x11',
    user: user,
    deposit_address: address,
    confirmation: 1,
    coin_number: 4,
    withdraw_fee: .0002,
    order_fee: .015
});

x11coin.save(function(err){

User.findOneAndUpdate({hash: token}, {$set: {x11coin: x11coin }},function(err, user){
console.log("did find" + JSON.stringify(user));
console.log("edited");

});

console.log('coin saved');

});

});





darkcoin_client.getNewAddress(function(err, address) {

darkcoin = new Coin({
    coin_name: 'darkcoin',
    code: 'drk',
    user: user,
    deposit_address: address,
    confirmation: 1,
    coin_number: 5,
    withdraw_fee: .0002,
    order_fee: .015
});

darkcoin.save(function(err){

User.findOneAndUpdate({hash: token}, {$set: {darkcoin: darkcoin}},function(err, user){
console.log("did find" + JSON.stringify(user));
console.log("edited");

});

console.log('coin saved');

});

});




ppcoin_client.getNewAddress(function(err, address) {

ppcoin = new Coin({
    coin_name: 'ppcoin',
    code: 'ppc',
    user: user,
    deposit_address: address,
    confirmation: 1,
    coin_number: 6,
    withdraw_fee: .0002,
    order_fee: .015
});

ppcoin.save(function(err){

User.findOneAndUpdate({hash: token}, {$set: {ppcoin: ppcoin}},function(err, user){
console.log("did find" + JSON.stringify(user));
console.log("edited");

});

console.log('coin saved');

});

});


vericoin_client.getNewAddress(function(err, address) {

vericoin = new Coin({
    coin_name: 'vericoin',
    code: 'vrc',
    user: user,
    deposit_address: address,
    confirmation: 1,
    coin_number: 7,
    withdraw_fee: .0002,
    order_fee: .015
});

vericoin.save(function(err){

User.findOneAndUpdate({hash: token}, {$set: {vericoin: vericoin}},function(err, user){
console.log("did find" + JSON.stringify(user));
console.log("edited");

});

console.log('coin saved');

});

});




blackcoin_client.getNewAddress(function(err, address) {

blackcoin = new Coin({
    coin_name: 'blackcoin',
    code: 'blk',
    user: user,
    deposit_address: address,
    confirmation: 1,
    coin_number: 8,
    withdraw_fee: .0002,
    order_fee: .015
});

blackcoin.save(function(err){

User.findOneAndUpdate({hash: token}, {$set: {blackcoin: blackcoin}},function(err, user){
console.log("did find" + JSON.stringify(user));
console.log("edited");

});

console.log('coin saved');

});

});


namecoin_client.getNewAddress(function(err, address) {

namecoin = new Coin({
    coin_name: 'namecoin',
    code: 'nmc',
    user: user,
    deposit_address: address,
    confirmation: 1,
    coin_number: 9,
    withdraw_fee: .0002,
    order_fee: .015
});

namecoin.save(function(err){

User.findOneAndUpdate({hash: token}, {$set: {namecoin: namecoin}},function(err, user){
console.log("did find" + JSON.stringify(user));
console.log("edited");

});

console.log('coin saved');

});

});


}


bitcoin_client.getNewAddress(function(err, address) {


expiration_times = new Array(1404259200000, 1404950400000, 1407628800000, 1410307200000, 1412899200000, 1418169600000, 1425945600000, 1436486400000)

counter = 0;
$.each(expiration_times, function(key,val){


for (i = 5; i<15; i++){
counter++;
strike_price = i * 100;    
date = new Date(val);
day = date.getDate();
month = date.getMonth() +1;
year = date.getYear().toString();
year = year.substr(1, year.length);

short_symbol = 'BUSD' + counter;
contract = new Contract({
    contract_number: counter,
    expiration_group: key,
    expiration_time: val, 
    start_time: 1435708800000, //july 1st
    option_type: 'call',
    strike_price: strike_price,
    initial_margin: .3,
    maintenance_margin: .3,
    variation_margin: .3,
    max_price_change: .3,
    full_symbol: 'BTC/USD-' + day + '/' + month +'/' + year + '-' + strike_price,
    short_symbol: short_symbol,
    fees: .01,
});

contract.save(function(err){

});
obj = new Object();
obj.deposit_address = address;
obj[short_symbol] = contract;


User.findOneAndUpdate({hash: token}, {$set: obj },function(err, user){
console.log("added deposit address to user: " + JSON.stringify(user));
console.log("edited");

});


}


});









});



});





}); 
}

});

});

date = new Date().getTime();
date = new Date(date);
day = date.getDate();
console.log(day);


app.get('/save_contracts', function(req,res){


expiration_times = new Array(1404259200000, 1404950400000, 1407628800000, 1410307200000, 1412899200000, 1418169600000, 1425945600000, 1436486400000)

counter = 0;
$.each(expiration_times, function(key,val){


for (i = 5; i<15; i++){
counter++;
strike_price = i * 100;    
date = new Date(val);
day = date.getDate();
month = date.getMonth() +1;
year = date.getYear().toString();
year = year.substr(1, year.length);



new ContractRef({
    contract_number: counter,
    expiration_group: key,
    expiration_time: val, 
    start_time: 1435708800000, //july 1st
    option_type: 'call',
    strike_price: strike_price,
    initial_margin: .3,
    maintenance_margin: .3,
    variation_margin: .3,
    max_price_change: .3,
    full_symbol: 'BTC/USD-' + day + '/' + month +'/' + year + '-' + strike_price,
    short_symbol: 'BUSD' + counter,
    fees: .01,
}).save(function(err){

});


}


});

/*
contract_one = new ContractRef({
    expiration_time: 1402358400000, //june 10th
    start_time: 1399680000000, //may 10th already started
    option_type: 'call',
    strike_price: 700,
    initial_margin: 2,
    maintenance_margin: 2,
    variation_margin: 1,
    max_price_change: .15,
    full_symbol: 'opt_one',
    short_symbol: 'opt_one',
    fees: .01,
});

contract_two = new ContractRef({
    expiration_time: 1402358400000, //june 10th
    start_time: 1399680000000, //may 10th already started
    option_type: 'call',
    strike_price: 700,
    initial_margin: .3,
    maintenance_margin: 2,
    variation_margin: 1,
    max_price_change: .15,
    full_symbol: 'opt_two',
    short_symbol: 'opt_two',
    fees: .01,
});


contract_three = new ContractRef({
    expiration_time: 1402358400000, //june 10th
    start_time: 1399680000000, //may 10th already started
    option_type: 'call',
    strike_price: 700,
    initial_margin: .4,
    maintenance_margin: 2,
    variation_margin: 1,
    max_price_change: .15,
    full_symbol: 'opt_three',
    short_symbol: 'opt_three',
    fees: .01,
});


contract_four = new ContractRef({
    expiration_time: 1402358400000, //june 10th
    start_time: 1399680000000, //may 10th already started
    option_type: 'call',
    strike_price: 700,
    initial_margin: .5,
    maintenance_margin: 2,
    variation_margin: 1,
    max_price_change: .15,
    full_symbol: 'opt_four',
    short_symbol: 'opt_four',
    fees: .01,
});


contract_five = new ContractRef({
    expiration_time: 1402358400000, //june 10th
    start_time: 1399680000000, //may 10th already started
    option_type: 'call',
    strike_price: 700,
    initial_margin: .6,
    maintenance_margin: 2,
    variation_margin: 1,
    max_price_change: .15,
    full_symbol: 'opt_five',
    short_symbol: 'opt_five',
    fees: .01,
});


contract_six = new ContractRef({
    expiration_time: 1402358400000, //june 10th
    start_time: 1399680000000, //may 10th already started
    option_type: 'call',
    strike_price: 700,
    initial_margin: .7,
    maintenance_margin: 2,
    variation_margin: 1,
    max_price_change: .15,
    full_symbol: 'opt_six',
    short_symbol: 'opt_six',
    fees: .01,
});


contract_one.save(function(err){

console.log("coin saved");

});

contract_two.save(function(err){

console.log("coin saved");

});

contract_three.save(function(err){

console.log("coin saved");

});

contract_four.save(function(err){

console.log("coin saved");

});

contract_five.save(function(err){

console.log("coin saved");

});

contract_six.save(function(err){

console.log("coin saved");

});
*/




});

console.log('ugh');

process.on('uncaughtException', function (e) {
  console.log(new Date().toString(), e.stack || e);

// sendgrid.send({
//   to:       'gary.lu.le@gmail.com',
//   from:     'info@GenesisBlock.io',
//   subject:  'server crash',
//   text:    'shit crashed',
//   html: 'shit crashed'
// }, function(err, json) {
//   if (err) { return console.error(err); }
//   console.log(json);

//       console.log(err.stack);
//     process.exit(1);

//   //res.end("done"); 


// }); 


  process.exit(1);
});

/*
var log = console.log;

console.log = function(){
date = new Date();

  log.apply(console, [date.toString() + ' ' + date.getTime() ].concat(arguments));
};*/



app.post('/get_address', function(req,res){
coin_name = req.body.coin_name;

email = req.session.user.email;



User
.findOne({ email: email })
.populate(coin_name)
.exec(function (err, populated) {
    //console.log(populated.dogecoin.deposit_address)

    res.end(JSON.stringify(populated[coin_name]));

})




});


app.get('/exercise_option', csrf, function(req,res){



if (req.session.activated ){

email = req.session.user.email;
console.log(email);

User
.findOne({ email: email })
.populate('orders')
.exec(function (err, data) {

$.each(data.orders, function(key,val){
in_positions = val.quantity - val.quantity_left;
if (in_positions > 0 && val.pending != 'exercised' && val.pending != 'expired'){


console.log(val);


}

});


});

}

});







app.get('/balances', csrf,  function(req,res){
console.log('here');
if (req.session.activated ){
console.log('here');
email = req.session.user.email;
console.log(email);

if ( ip.address() != '192.168.1.56'){

User
.findOne({ email: email })
.populate('opt_one deposits withdrawals orders dogecoin bitcoin litecoin x11coin darkcoin ppcoin vericoin blackcoin namecoin')
.exec(function (err, data) {

//console.log(data.orders);
orders_populated  = new Array();
//console.log('the data ' + data);
//console.log(data.orders);
if (data.orders.length != 0) {
$.each(data.orders, function(keyb, valb){
//console.log('here ' + keyb + ' ' + valb.variation_margin);
console.log(valb.swap);

Order.find({_id: valb._id}).populate({path: 'variation_margin',
  match: { amount: { $ne: Infinity }},
  //options: { limit: 5 }
  }).exec(function( err, doc) {

    console.log("aha");
                //res.json(doc);
                //console.log('here2 ' + doc);
                orders_populated.push(doc);
                console.log(keyb);
                if (keyb == data.orders.length -1){
                    //comparator
                    function compare(a,b) {
                      if (a.time > b.time)
                         return -1;
                      if (a.time < b.time)
                        return 1;
                      return 0;
                    }



                    data.deposits.sort(compare);
                    data.withdrawals.sort(compare);
                    data.orders.sort(compare);



                    console.log('the ordersa ' + orders_populated);
                    res.render('tab_template.html', {csrf: JSON.stringify(req.session._csrf), data: JSON.stringify(data), orders_populated: JSON.stringify(orders_populated)});


                }

            }); 

      


        });

}
else{

    console.log("fucked");
    console.log(data);
res.render('tab_template.html', {csrf: JSON.stringify(req.session._csrf), data: JSON.stringify(data), orders_populated: JSON.stringify(null)});


}


});





}
else
User
.findOne({ email: email })
.populate('opt_one deposits withdrawals orders dogecoin bitcoin litecoin')
.exec(function (err, data) {

//console.log(data.orders);
orders_populated  = new Array();
//console.log('the data ' + data);
//console.log(data.orders);
if (data.orders.length != 0) {
$.each(data.orders, function(keyb, valb){
//console.log('here ' + keyb + ' ' + valb.variation_margin);
console.log(valb.swap);

Order.find({_id: valb._id}).populate({path: 'variation_margin',
  match: { amount: { $ne: Infinity }},
  //options: { limit: 5 }
  }).exec(function( err, doc) {

    console.log("aha");
                //res.json(doc);
                //console.log('here2 ' + doc);
                orders_populated.push(doc);
                console.log(keyb);
                if (keyb == data.orders.length -1){
                    //comparator
                    function compare(a,b) {
                      if (a.time > b.time)
                         return -1;
                      if (a.time < b.time)
                        return 1;
                      return 0;
                    }



                    data.deposits.sort(compare);
                    data.withdrawals.sort(compare);
                    data.orders.sort(compare);



                    console.log('the ordersa ' + orders_populated);
                    res.render('tab_template.html', {csrf: JSON.stringify(req.session._csrf), data: JSON.stringify(data), orders_populated: JSON.stringify(orders_populated)});


                }

            }); 

      


        });

}
else{

    console.log("fucked");
    console.log(data);
res.render('tab_template.html', {csrf: JSON.stringify(req.session._csrf), data: JSON.stringify(data), orders_populated: JSON.stringify(null)});


}


});
// array = new Array();
// array.push(data.orders[0]._id);




    //console.log(data);




}


/*

User.findOne({email:req.session.user.email}).populate('deposits deposits.coin')
.exec(function (err, populated) {
console.log('popular ' + populated.deposits);

res.render('tab_template.html', {data: JSON.stringify(populated.deposits)});

});*/




});


app.get('/loggedin', function(req,res){
activated = true;
user = req.session.user;



res.render('index_exchange_logged_in.html', {activated: activated, user: JSON.stringify(user) });


});



app.get('/', function(req,res){

activated = req.session.activated;
user = req.session.user;

//console.log(activated);
if (activated == undefined){
    activated = false;
    user = false;
}



console.log(activated);
console.log(user);

OrderData.find({}).sort('-time').limit(5).exec(function(err, orderdata){
Order.find({$and: [{pending: 'pending'}, {side: 'bid'}, {swap: true}]}).sort('-time').limit(5).exec(function(err, bids){
Order.find({$and: [{pending: 'pending'}, {side: 'ask'}, {swap: true}]}).sort('-time').limit(5).exec(function(err, asks){

console.log(orderdata);

res.render('index_exchange.html', {activated: JSON.stringify(activated), user: JSON.stringify(user),asks: JSON.stringify(asks),bids: JSON.stringify(bids), orderdata: JSON.stringify(orderdata)});
//console.log('fucked ' + JSON.stringify(req.session));
console.log(req.session);
//console.log(JSON.stringify(express.session));
        // store.get(req.session, function(err, session) {
        //     // session
        //     console.log(session);

        // });

});
});
});


});

app.get('/voting', function(req,res){

activated = req.session.activated;
user = req.session.user;

//console.log(activated);
if (activated == undefined) 
    activated = false;

console.log(activated);
console.log(user);
res.render('voting.html', {activated: activated, user: JSON.stringify(user) });

});

app.get('/support', function(req,res){

activated = req.session.activated;
user = req.session.user;

//console.log(activated);
if (activated == undefined) 
    activated = false;

console.log(activated);
console.log(user);
res.render('support.html', {activated: activated, user: JSON.stringify(user) });

});

app.get('/fees', function(req,res){

activated = req.session.activated;
user = req.session.user;

//console.log(activated);
if (activated == undefined) 
    activated = false;

console.log(activated);
console.log(user);
res.render('fees.html', {activated: activated, user: JSON.stringify(user) });

});

app.get('/contract/:short_symbol', function(req,res){

activated = req.session.activated;
user = req.session.user;

//console.log(activated);
if (activated == undefined) 
    activated = false;

console.log(activated);
console.log(user);

ContractRef.findOne({short_symbol: req.params.short_symbol}, function(err, contract){
    console.log(contract);
res.render('contract.html', {activated: activated, user: JSON.stringify(user), contract: JSON.stringify(contract)});
});



});

app.get('/about', function(req,res){

activated = req.session.activated;
user = req.session.user;

//console.log(activated);
if (activated == undefined) 
    activated = false;

console.log(activated);
console.log(user);
res.render('about.html', {activated: activated, user: JSON.stringify(user) });

});


app.get('/faq', function(req,res){

activated = req.session.activated;
user = req.session.user;

//console.log(activated);
if (activated == undefined) 
    activated = false;

console.log(activated);
console.log(user);
res.render('faq.html', {activated: activated, user: JSON.stringify(user) });

});





app.get('/coin_trading', function(req,res){

 // db.images.aggregate( 
 //       {$match   : {hashtag: {$in:["tag1","tag2"]}}}, 
 //       {$group   : {_id:"$hashtag", name: {$first:"$name"}}},
 //       {$project : {hashtag:"$_id", name: "$name", _id:0}}
 //  )

current_time = new Date().getTime()/1000;
one_day_ago = current_time - (60 * 60 * 24 * 1000);

array = new Array();
Coin.find().distinct('coin_name', function(err, coins) {

coins.splice( $.inArray('bitcoin', coins), 1 );
console.log(coins);

Coin.aggregate( 
       {$match   : {coin_name: {$in: coins }}}, 
       {$group   : {_id:"$coin_name", code: {$first:"$code"}, coin_number: {$first:"$coin_number"}} },
       {$project : {coin_name:"$_id", code: "$code", coin_number: "$coin_number", _id:0}}
  ).exec(function(err, result){


    // ids is an array of all ObjectIds



$.each(result, function(key,val){


(function(key,val){
Order.findOne({$and: [{coin_one_name: val.coin_name}, {coin_two_name: 'bitcoin'}, {side: 'bid'}, {pending: 'pending'}]}).sort({price: -1}).limit(1).exec(function(err, bid){
Order.findOne({$and: [{coin_one_name: val.coin_name}, {coin_two_name: 'bitcoin'}, {side: 'ask'}, {pending: 'pending'}]}).sort({price: 1}).limit(1).exec(function(err, ask){
OrderData.findOne({$and:[{swap: true},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort('-last_trade_time').limit(1).exec(function(err, last_order){
//find lowest price in 24 hours
OrderData.findOne({$and:[{swap: true},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort({price: 1}).limit(1).exec(function(err, lowest_order){
//find highest price in 24 hours
OrderData.findOne({$and:[{swap: true},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort({price: -1}).limit(1).exec(function(err, highest_order){
OrderData.find({$and:[{swap: true},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago}}, {pending: {'$ne': 'cancelled' }}]}, function(err, orders_within_day){

var bid_price;
var ask_price;



if (bid == null)
bid_price = 'n/a';
else
bid_price = bid.price;


if (ask == null)
ask_price = 'n/a';
else
ask_price = ask.price;

console.log('da bid ' + bid_price);

volume = 0;
$.each(orders_within_day, function(key,val){

volume += val.quantity;

});

volume = volume/2;



obj = new Object();
obj.coin_one_name = val.coin_name;
obj.coin_two_name = 'bitcoin';
obj.coin_one_ticker = val.code;
obj.coin_two_ticker = 'btc';
obj.bid = bid_price;
obj.ask = ask_price;

if (lowest_order == null){
obj.low = 0;
obj.high = 0;
obj.last = 0;
obj.volume = 0;

}
else{
obj.low = lowest_order.price;
obj.high = highest_order.price;
obj.last = last_order.price;
obj.volume = volume;
}

array.push(obj);

if (array.length == coins.length){

console.log('this array ' + JSON.stringify(array));


activated = req.session.activated;
user = req.session.user;

console.log('status ' + activated);

if (activated != true)
    activated = false;
if (user == undefined)
    user = null;

res.render('coin_trading.html', {coin_data: JSON.stringify(array), user: JSON.stringify(user), activated: JSON.stringify(activated)});

}


});
});
});
});
});
});




})(key,val);
});




  });





});


});


current_time = new Date().getTime()/1000;
one_day_ago = current_time - (60 * 60 * 24 * 1000);
OrderData.findOne({$and:[{time: {$gte: one_day_ago}}, {swap: false },{call_put: 'CALL'}, {strike: 0.0192}, {expiration: 1404950400000},{coin_ticker_one: 'ltc'}]}).sort({price: 1}).limit(1).exec(function(err, lowest_order){

console.log(lowest_order);

});


app.get('/save_data/:flag', function(req,res){

flag = req.params.flag;

expiration_times = new Array(1404259200000, 1404950400000, 1407628800000, 1418169600000);


current_time = new Date().getTime()/1000;
one_day_ago = current_time - (60 * 60 * 24 * 1000);

array = new Array();
option_types = new Array("CALL", "PUT");


Coin.find().distinct('coin_name', function(err, coins) {

coins.splice( $.inArray('bitcoin', coins), 1 );
//coins.splice( $.inArray('litecoin', coins), 1 );
console.log(coins);

Coin.aggregate( 
       {$match   : {coin_name: {$in: coins }}}, 
       {$group   : {_id:"$coin_name", code: {$first:"$code"}, coin_number: {$first:"$coin_number"}} },
       {$project : {coin_name:"$_id", code: "$code", coin_number: "$coin_number", _id:0}}
  ).exec(function(err, result){


    // ids is an array of all ObjectIds



$.each(result, function(key,val){

$.each(expiration_times, function(keyb,valb){


(function(key,val,keyb, valb){

if (val.code == 'ltc')
current_price = .016;
if (val.code == 'doge')
current_price = 0.0000005;


if (val.code == 'x11')
current_price = 1;
if (val.code == 'drk')
current_price = 1;
if (val.code == 'ppc')
current_price = 1;
if (val.code == 'vrc')
current_price = 1;
if (val.code == 'blk')
current_price = 1;
if (val.code == 'nmc')
current_price = 1;


price_deviation = current_price/10;
starting = current_price - 3 * price_deviation;

prices = new Array();

for (var i=0; i < 6; i++){
    
    price = starting + i * price_deviation;
    prices.push(price.toFixed(9));

}



$.each(prices, function(keyc, valc){
$.each(option_types, function(keyd, vald){



console.log('fucking price ' + valc);
//valc = valc.toFixed(9);
(function(keyc,valc,keyd,vald){    
Order.findOne({$and: [{call_put: vald}, {strike: valc}, {expiration_time: valb}, {coin_one_name: val.coin_name}, {coin_two_name: 'bitcoin'}, {side: 'bid'}, {pending: 'pending'}]}).sort({price: -1}).limit(1).exec(function(err, bid){
Order.findOne({$and: [{call_put: vald}, {strike: valc}, {expiration_time: valb}, {coin_one_name: val.coin_name}, {coin_two_name: 'bitcoin'}, {side: 'ask'}, {pending: 'pending'}]}).sort({price: 1}).limit(1).exec(function(err, ask){
OrderData.findOne({$and:[{swap: false },{call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort('-last_trade_time').limit(1).exec(function(err, last_order){
//find lowest price in 24 hours
OrderData.findOne({$and:[{swap: false },{call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort({price: 1}).limit(1).exec(function(err, lowest_order){
//find highest price in 24 hours
OrderData.findOne({$and:[{swap: false }, {call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort({price: -1}).limit(1).exec(function(err, highest_order){
//Order.find({$and:[{strike: valc}, {expiration_time: valb}, {coin_one_ticker: val.code}, {time: {$gte: one_day_ago}}, {pending: {'$ne': 'cancelled' }}]}, function(err, orders_within_day){
OrderData.find({$and:[{swap: false }, {call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort({price: -1}).exec(function(err, orders_within_day){

//lowest_order = null;
//orders_within_day = [];

var bid_price;
var ask_price;

console.log('stupid' + val.coin_name + ' ' + valb + ' ' + orders_within_day)

if (bid == null)
bid_price = 0;
else
bid_price = bid.price;


if (ask == null)
ask_price = 0;
else
ask_price = ask.price;

console.log('da bid ' + bid_price);
console.log('wtf' + orders_within_day[0]);
volume = 0;
if (orders_within_day != undefined && orders_within_day != null ){
$.each(orders_within_day, function(key,valz){

//console.log('rage '  + JSON.stringify(valz));
volume += valz.quantity;

});
}
else volume = 0;

volume = volume/2;

console.log('im confused ' + valc);

obj = new Object();
obj.coin_one_name = val.coin_name;
obj.coin_two_name = 'bitcoin';
obj.coin_one_ticker = val.code;
obj.coin_two_ticker = 'btc';
obj.bid = bid_price;
obj.ask = ask_price;

if (lowest_order == null){
obj.low = 0;
obj.high = 0;
obj.last = 0;
}
else{
obj.low = lowest_order.price;
obj.high = highest_order.price;
obj.last = last_order.price;
}

obj.volume = volume;
obj.expiration = valb;
obj.strike = valc;
obj.call_put = vald;

console.log(valb);

array.push(obj);


if (flag == false){
pairdata = new PairData({
    coin_ticker_one: val.code,
    coin_ticker_two: 'btc',
    coin_one_name: obj.coin_one_name,
    coin_two_name: obj.coin_two_name,
    call_put: vald,
    strike: valc,
    expiration: valb,
    swap: false,
    last: obj.last,
    low: obj.low,
    high: obj.high,
    bid: bid_price,
    ask: ask_price,
    volume: volume
    });

pairdata.save(function(err){
    console.log('yolo');
})
}else{


PairData.findOneAndUpdate({$and: [{swap: false }, {call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}]}, {$set: {
  last: obj.last,
    low: obj.low,
    high: obj.high,
    bid: bid_price,
    ask: ask_price,
    volume: volume  
}}).exec();






}


if (array.length == coins.length * 4 * 6 * 2){



array.sort(dynamicSortMultiple("coin_one_name","call_put", "expiration", "strike"));

console.log(array);

// modified_array = new Array();
// $.each(array, function(key,val){




// });

activated = req.session.activated;
user = req.session.user;

console.log('status ' + activated);

if (activated != true)
    activated = false;
if (user == undefined)
    user = null;

console.log('later status ' + activated);

console.log('this array ' + JSON.stringify(array));
//res.render('options.html', {coins: JSON.stringify(coins),coin_data: JSON.stringify(array), user: JSON.stringify(user), activated: JSON.stringify(activated)});

}


});
});
});
});


});
});
})(keyc, valc, keyd,vald);
});
});




})(key,val, keyb, valb);

});
});




  });





});


});




setInterval(function(){

expiration_times = new Array(1404259200000, 1404950400000, 1407628800000, 1418169600000);


current_time = new Date().getTime()/1000;
one_day_ago = current_time - (60 * 60 * 24 * 1000);

array = new Array();
option_types = new Array("CALL", "PUT");


Coin.find().distinct('coin_name', function(err, coins) {

coins.splice( $.inArray('bitcoin', coins), 1 );
//coins.splice( $.inArray('litecoin', coins), 1 );
console.log(coins);

Coin.aggregate( 
       {$match   : {coin_name: {$in: coins }}}, 
       {$group   : {_id:"$coin_name", code: {$first:"$code"}, coin_number: {$first:"$coin_number"}} },
       {$project : {coin_name:"$_id", code: "$code", coin_number: "$coin_number", _id:0}}
  ).exec(function(err, result){


    // ids is an array of all ObjectIds



$.each(result, function(key,val){

$.each(expiration_times, function(keyb,valb){


(function(key,val,keyb, valb){

if (val.code == 'ltc')
current_price = .016;
if (val.code == 'doge')
current_price = 0.0000005;


if (val.code == 'x11')
current_price = 1;
if (val.code == 'drk')
current_price = 1;
if (val.code == 'ppc')
current_price = 1;
if (val.code == 'vrc')
current_price = 1;
if (val.code == 'blk')
current_price = 1;
if (val.code == 'nmc')
current_price = 1;


price_deviation = current_price/10;
starting = current_price - 3 * price_deviation;

prices = new Array();

for (var i=0; i < 6; i++){
    
    price = starting + i * price_deviation;
    prices.push(price.toFixed(9));

}



$.each(prices, function(keyc, valc){
$.each(option_types, function(keyd, vald){



console.log('fucking price ' + valc);
//valc = valc.toFixed(9);
(function(keyc,valc,keyd,vald){    
Order.findOne({$and: [{call_put: vald}, {strike: valc}, {expiration_time: valb}, {coin_one_name: val.coin_name}, {coin_two_name: 'bitcoin'}, {side: 'bid'}, {pending: 'pending'}]}).sort({price: -1}).limit(1).exec(function(err, bid){
Order.findOne({$and: [{call_put: vald}, {strike: valc}, {expiration_time: valb}, {coin_one_name: val.coin_name}, {coin_two_name: 'bitcoin'}, {side: 'ask'}, {pending: 'pending'}]}).sort({price: 1}).limit(1).exec(function(err, ask){
OrderData.findOne({$and:[{swap: false },{call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort('-last_trade_time').limit(1).exec(function(err, last_order){
//find lowest price in 24 hours
OrderData.findOne({$and:[{swap: false },{call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort({price: 1}).limit(1).exec(function(err, lowest_order){
//find highest price in 24 hours
OrderData.findOne({$and:[{swap: false }, {call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort({price: -1}).limit(1).exec(function(err, highest_order){
//Order.find({$and:[{strike: valc}, {expiration_time: valb}, {coin_one_ticker: val.code}, {time: {$gte: one_day_ago}}, {pending: {'$ne': 'cancelled' }}]}, function(err, orders_within_day){
OrderData.find({$and:[{swap: false }, {call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort({price: -1}).exec(function(err, orders_within_day){

//lowest_order = null;
//orders_within_day = [];

var bid_price;
var ask_price;

console.log('stupid' + val.coin_name + ' ' + valb + ' ' + orders_within_day)

if (bid == null)
bid_price = 0;
else
bid_price = bid.price;


if (ask == null)
ask_price = 0;
else
ask_price = ask.price;

console.log('da bid ' + bid_price);
console.log('wtf' + orders_within_day[0]);
volume = 0;
if (orders_within_day != undefined && orders_within_day != null ){
$.each(orders_within_day, function(key,valz){

//console.log('rage '  + JSON.stringify(valz));
volume += valz.quantity;

});
}
else volume = 0;

volume = volume/2;

console.log('im confused ' + valc);

obj = new Object();
obj.coin_one_name = val.coin_name;
obj.coin_two_name = 'bitcoin';
obj.coin_one_ticker = val.code;
obj.coin_two_ticker = 'btc';
obj.bid = bid_price;
obj.ask = ask_price;

if (lowest_order == null){
obj.low = 0;
obj.high = 0;
obj.last = 0;
}
else{
obj.low = lowest_order.price;
obj.high = highest_order.price;
obj.last = last_order.price;
}

obj.volume = volume;
obj.expiration = valb;
obj.strike = valc;
obj.call_put = vald;

console.log(valb);

array.push(obj);





PairData.findOneAndUpdate({$and: [{swap: false }, {call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}]}, {$set: {
  last: obj.last,
    low: obj.low,
    high: obj.high,
    bid: bid_price,
    ask: ask_price,
    volume: volume  
}}).exec();





if (array.length == coins.length * 4 * 6 * 2){



array.sort(dynamicSortMultiple("coin_one_name","call_put", "expiration", "strike"));

console.log(array);

// modified_array = new Array();
// $.each(array, function(key,val){




// });

activated = req.session.activated;
user = req.session.user;

console.log('status ' + activated);

if (activated != true)
    activated = false;
if (user == undefined)
    user = null;

console.log('later status ' + activated);

console.log('this array ' + JSON.stringify(array));
//res.render('options.html', {coins: JSON.stringify(coins),coin_data: JSON.stringify(array), user: JSON.stringify(user), activated: JSON.stringify(activated)});

}


});
});
});
});


});
});
})(keyc, valc, keyd,vald);
});
});




})(key,val, keyb, valb);

});
});




  });





});
},60000 * 20000 );



app.get('/options', function(req,res){


expiration_times = new Array(1404259200000, 1404950400000, 1407628800000, 1418169600000);


current_time = new Date().getTime()/1000;
one_day_ago = current_time - (60 * 60 * 24 * 1000);

array = new Array();
option_types = new Array("CALL", "PUT");


Coin.find().distinct('coin_name', function(err, coins) {

coins.splice( $.inArray('bitcoin', coins), 1 );
coins.splice( $.inArray('litecoin', coins), 1 );
console.log(coins);

coins = new Array("litecoin");

Coin.aggregate( 
       {$match   : {coin_name: {$in: coins }}}, 
       {$group   : {_id:"$coin_name", code: {$first:"$code"}, coin_number: {$first:"$coin_number"}} },
       {$project : {coin_name:"$_id", code: "$code", coin_number: "$coin_number", _id:0}}
  ).exec(function(err, result){


    // ids is an array of all ObjectIds



$.each(result, function(key,val){

$.each(expiration_times, function(keyb,valb){


(function(key,val,keyb, valb){

if (val.code == 'ltc')
current_price = .016;
if (val.code == 'doge')
current_price = 0.0000005;


if (val.code == 'x11')
current_price = 1;
if (val.code == 'drk')
current_price = 1;
if (val.code == 'ppc')
current_price = 1;
if (val.code == 'vrc')
current_price = 1;
if (val.code == 'blk')
current_price = 1;
if (val.code == 'nmc')
current_price = 1;


price_deviation = current_price/10;
starting = current_price - 3 * price_deviation;

prices = new Array();

for (var i=0; i < 6; i++){
    
    price = starting + i * price_deviation;
    prices.push(price.toFixed(9));

}



$.each(prices, function(keyc, valc){
console.log('change');

$.each(option_types, function(keyd, vald){



console.log('fucking price ' + valc);

(function(keyc,valc,keyd,vald){ 

// Order.findOne({$and: [{call_put: vald}, {strike: valc}, {expiration_time: valb}, {coin_one_name: val.coin_name}, {coin_two_name: 'bitcoin'}, {side: 'bid'}, {pending: 'pending'}]}).sort({price: -1}).limit(1).exec(function(err, bid){
// Order.findOne({$and: [{call_put: vald}, {strike: valc}, {expiration_time: valb}, {coin_one_name: val.coin_name}, {coin_two_name: 'bitcoin'}, {side: 'ask'}, {pending: 'pending'}]}).sort({price: 1}).limit(1).exec(function(err, ask){
// OrderData.findOne({$and:[{swap: false },{call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort('-last_trade_time').limit(1).exec(function(err, last_order){
// //find lowest price in 24 hours
// OrderData.findOne({$and:[{swap: false },{call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort({price: 1}).limit(1).exec(function(err, lowest_order){
// //find highest price in 24 hours
// OrderData.findOne({$and:[{swap: false }, {call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort({price: -1}).limit(1).exec(function(err, highest_order){
// //Order.find({$and:[{strike: valc}, {expiration_time: valb}, {coin_one_ticker: val.code}, {time: {$gte: one_day_ago}}, {pending: {'$ne': 'cancelled' }}]}, function(err, orders_within_day){

PairData.findOne({$and: [{swap: false }, {call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}]}).exec(function(err, pairdata){


obj = new Object();
obj.coin_one_ticker = pairdata.coin_ticker_one;
obj.coin_two_ticker = pairdata.coin_ticker_two;
obj.coin_one_name = pairdata.coin_one_name;
obj.coin_two_name = pairdata.coin_two_name;
obj.call_put = pairdata.call_put;
obj.expiration = pairdata.expiration;
obj.strike = pairdata.strike;
obj.high = pairdata.high;
obj.last = pairdata.last;
obj.low = pairdata.low;
obj.bid = pairdata.bid;
obj.ask = pairdata.ask;
obj.volume = pairdata.volume;


array.push(obj);

if (array.length == coins.length * 4 * 6 * 2){



array.sort(dynamicSortMultiple("coin_one_name","call_put", "expiration", "strike"));

console.log(array);

// modified_array = new Array();
// $.each(array, function(key,val){




// });

activated = req.session.activated;
user = req.session.user;

console.log('status ' + activated);

if (activated != true)
    activated = false;
if (user == undefined)
    user = null;

console.log('later status ' + activated);

console.log('this array ' + JSON.stringify(array));
res.render('options.html', {coins: JSON.stringify(coins),coin_data: JSON.stringify(array), user: JSON.stringify(user), activated: JSON.stringify(activated)});

}

});
//});
// });
// });
// });


// });
// });
})(keyc, valc, keyd,vald);
});
});




})(key,val, keyb, valb);

});
});




  });





});


});

// app.get('/options', function(req,res){


// expiration_times = new Array(1404259200000, 1404950400000, 1407628800000, 1418169600000);


// current_time = new Date().getTime()/1000;
// one_day_ago = current_time - (60 * 60 * 24 * 1000);

// array = new Array();
// option_types = new Array("CALL", "PUT");


// Coin.find().distinct('coin_name', function(err, coins) {

// coins.splice( $.inArray('bitcoin', coins), 1 );
// coins.splice( $.inArray('litecoin', coins), 1 );
// console.log(coins);

// Coin.aggregate( 
//        {$match   : {coin_name: {$in: coins }}}, 
//        {$group   : {_id:"$coin_name", code: {$first:"$code"}, coin_number: {$first:"$coin_number"}} },
//        {$project : {coin_name:"$_id", code: "$code", coin_number: "$coin_number", _id:0}}
//   ).exec(function(err, result){


//     // ids is an array of all ObjectIds



// $.each(result, function(key,val){

// $.each(expiration_times, function(keyb,valb){


// (function(key,val,keyb, valb){

// if (val.code == 'ltc')
// current_price = .016;
// if (val.code == 'doge')
// current_price = 0.0000005;


// if (val.code == 'x11')
// current_price = 1;
// if (val.code == 'drk')
// current_price = 1;
// if (val.code == 'ppc')
// current_price = 1;
// if (val.code == 'vrc')
// current_price = 1;
// if (val.code == 'blk')
// current_price = 1;
// if (val.code == 'nmc')
// current_price = 1;


// price_deviation = current_price/10;
// starting = current_price - 3 * price_deviation;

// prices = new Array();

// for (var i=0; i < 6; i++){
    
//     price = starting + i * price_deviation;
//     prices.push(price);

// }



// $.each(prices, function(keyc, valc){
// $.each(option_types, function(keyd, vald){



// console.log('fucking price ' + valc);

// (function(keyc,valc,keyd,vald){    
// Order.findOne({$and: [{call_put: vald}, {strike: valc}, {expiration_time: valb}, {coin_one_name: val.coin_name}, {coin_two_name: 'bitcoin'}, {side: 'bid'}, {pending: 'pending'}]}).sort({price: -1}).limit(1).exec(function(err, bid){
// Order.findOne({$and: [{call_put: vald}, {strike: valc}, {expiration_time: valb}, {coin_one_name: val.coin_name}, {coin_two_name: 'bitcoin'}, {side: 'ask'}, {pending: 'pending'}]}).sort({price: 1}).limit(1).exec(function(err, ask){
// OrderData.findOne({$and:[{swap: false },{call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort('-last_trade_time').limit(1).exec(function(err, last_order){
// //find lowest price in 24 hours
// OrderData.findOne({$and:[{swap: false },{call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort({price: 1}).limit(1).exec(function(err, lowest_order){
// //find highest price in 24 hours
// OrderData.findOne({$and:[{swap: false }, {call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort({price: -1}).limit(1).exec(function(err, highest_order){
// //Order.find({$and:[{strike: valc}, {expiration_time: valb}, {coin_one_ticker: val.code}, {time: {$gte: one_day_ago}}, {pending: {'$ne': 'cancelled' }}]}, function(err, orders_within_day){

// lowest_order = null;
// orders_within_day = [];

// var bid_price;
// var ask_price;

// console.log('stupid' + val.coin_name + ' ' + valb + ' ' + orders_within_day)

// if (bid == null)
// bid_price = 'n/a';
// else
// bid_price = bid.price;


// if (ask == null)
// ask_price = 'n/a';
// else
// ask_price = ask.price;

// console.log('da bid ' + bid_price);

// volume = 0;
// $.each(orders_within_day, function(key,val){

// volume += (val.quantity - val.quantity_left);

// });

// volume = volume/2;

// console.log('im confused ' + valc);

// obj = new Object();
// obj.coin_one_name = val.coin_name;
// obj.coin_two_name = 'bitcoin';
// obj.coin_one_ticker = val.code;
// obj.coin_two_ticker = 'btc';
// obj.bid = bid_price;
// obj.ask = ask_price;

// if (lowest_order == null){
// obj.low = 0;
// obj.high = 0;
// obj.last = 0;
// }
// else{
// obj.low = lowest_order.price;
// obj.high = highest_order.price;
// obj.last = last_order.price;
// }

// obj.volume = volume;
// obj.expiration = valb;
// obj.strike = valc;
// obj.call_put = vald;

// console.log(valb);

// array.push(obj);

// if (array.length == coins.length * 4 * 6 * 2){



// array.sort(dynamicSortMultiple("coin_one_name","call_put", "expiration", "strike"));

// console.log(array);

// // modified_array = new Array();
// // $.each(array, function(key,val){




// // });

// activated = req.session.activated;
// user = req.session.user;

// console.log('status ' + activated);

// if (activated != true)
//     activated = false;
// if (user == undefined)
//     user = null;

// console.log('later status ' + activated);

// console.log('this array ' + JSON.stringify(array));
// res.render('options.html', {coins: JSON.stringify(coins),coin_data: JSON.stringify(array), user: JSON.stringify(user), activated: JSON.stringify(activated)});

// }


// //});
// });
// });
// });


// });
// });
// })(keyc, valc, keyd,vald);
// });
// });




// })(key,val, keyb, valb);

// });
// });




//   });





// });


// });







app.post('/append_options', function(req,res){




expiration_times = new Array(1404259200000, 1404950400000, 1407628800000, 1418169600000);


current_time = new Date().getTime()/1000;
one_day_ago = current_time - (60 * 60 * 24 * 1000);

array = new Array();
option_types = new Array("CALL", "PUT");


Coin.find().distinct('coin_name', function(err, coins) {

coins.splice( $.inArray('bitcoin', coins), 1 );
coins.splice( $.inArray('litecoin', coins), 1 );
console.log(coins);

Coin.aggregate( 
       {$match   : {coin_name: {$in: coins }}}, 
       {$group   : {_id:"$coin_name", code: {$first:"$code"}, coin_number: {$first:"$coin_number"}} },
       {$project : {coin_name:"$_id", code: "$code", coin_number: "$coin_number", _id:0}}
  ).exec(function(err, result){


    // ids is an array of all ObjectIds



$.each(result, function(key,val){

$.each(expiration_times, function(keyb,valb){


(function(key,val,keyb, valb){

if (val.code == 'ltc')
current_price = .016;
if (val.code == 'doge')
current_price = 0.0000005;


if (val.code == 'x11')
current_price = 1;
if (val.code == 'drk')
current_price = 1;
if (val.code == 'ppc')
current_price = 1;
if (val.code == 'vrc')
current_price = 1;
if (val.code == 'blk')
current_price = 1;
if (val.code == 'nmc')
current_price = 1;


price_deviation = current_price/10;
starting = current_price - 3 * price_deviation;

prices = new Array();

for (var i=0; i < 6; i++){
    
    price = starting + i * price_deviation;
    prices.push(price.toFixed(9));

}



$.each(prices, function(keyc, valc){
console.log('change');

$.each(option_types, function(keyd, vald){



console.log('fucking price ' + valc);

(function(keyc,valc,keyd,vald){ 

// Order.findOne({$and: [{call_put: vald}, {strike: valc}, {expiration_time: valb}, {coin_one_name: val.coin_name}, {coin_two_name: 'bitcoin'}, {side: 'bid'}, {pending: 'pending'}]}).sort({price: -1}).limit(1).exec(function(err, bid){
// Order.findOne({$and: [{call_put: vald}, {strike: valc}, {expiration_time: valb}, {coin_one_name: val.coin_name}, {coin_two_name: 'bitcoin'}, {side: 'ask'}, {pending: 'pending'}]}).sort({price: 1}).limit(1).exec(function(err, ask){
// OrderData.findOne({$and:[{swap: false },{call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort('-last_trade_time').limit(1).exec(function(err, last_order){
// //find lowest price in 24 hours
// OrderData.findOne({$and:[{swap: false },{call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort({price: 1}).limit(1).exec(function(err, lowest_order){
// //find highest price in 24 hours
// OrderData.findOne({$and:[{swap: false }, {call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort({price: -1}).limit(1).exec(function(err, highest_order){
// //Order.find({$and:[{strike: valc}, {expiration_time: valb}, {coin_one_ticker: val.code}, {time: {$gte: one_day_ago}}, {pending: {'$ne': 'cancelled' }}]}, function(err, orders_within_day){

PairData.findOne({$and: [{swap: false }, {call_put: vald}, {strike: valc}, {expiration: valb},{coin_ticker_one: val.code}]}).exec(function(err, pairdata){


obj = new Object();
obj.coin_one_ticker = pairdata.coin_ticker_one;
obj.coin_two_ticker = pairdata.coin_ticker_two;
obj.coin_one_name = pairdata.coin_one_name;
obj.coin_two_name = pairdata.coin_two_name;
obj.call_put = pairdata.call_put;
obj.expiration = pairdata.expiration;
obj.strike = pairdata.strike;
obj.high = pairdata.high;
obj.last = pairdata.last;
obj.low = pairdata.low;
obj.bid = pairdata.bid;
obj.ask = pairdata.ask;
obj.volume = pairdata.volume;


array.push(obj);

if (array.length == coins.length * 4 * 6 * 2){



array.sort(dynamicSortMultiple("coin_one_name","call_put", "expiration", "strike"));

console.log(array);

// modified_array = new Array();
// $.each(array, function(key,val){




// });

activated = req.session.activated;
user = req.session.user;

console.log('status ' + activated);

if (activated != true)
    activated = false;
if (user == undefined)
    user = null;

console.log('later status ' + activated);

console.log('this array ' + JSON.stringify(array));
//res.render('options.html', {coins: JSON.stringify(coins),coin_data: JSON.stringify(array), user: JSON.stringify(user), activated: JSON.stringify(activated)});


if (activated != true)
    activated = false;
if (user == undefined)
    user = null;

console.log('later status ' + activated);

console.log('this array ' + JSON.stringify(array));
res.json({coins: coins ,coin_data: array, user: user, activated: activated});

}

});
//});
// });
// });
// });


// });
// });
})(keyc, valc, keyd,vald);
});
});




})(key,val, keyb, valb);

});
});




  });





});








// expiration_times = new Array(1404259200000, 1404950400000, 1407628800000, 1418169600000);

// // current_prices = new Object();
// // current_prices.ltc = .016;
// // current_prices.doge = 0.0000005;




//  // db.images.aggregate( 
//  //       {$match   : {hashtag: {$in:["tag1","tag2"]}}}, 
//  //       {$group   : {_id:"$hashtag", name: {$first:"$name"}}},
//  //       {$project : {hashtag:"$_id", name: "$name", _id:0}}
//  //  )

// current_time = new Date().getTime()/1000;
// one_day_ago = current_time - (60 * 60 * 24 * 1000);
// option_types = new Array("CALL", "PUT");


// array = new Array();
// Coin.find().distinct('coin_name', function(err, coins) {

// coins.splice( $.inArray('bitcoin', coins), 1 );
// coins.splice( $.inArray('dogecoin', coins), 1 );
// console.log(coins);

// Coin.aggregate( 
//        {$match   : {coin_name: {$in: coins }}}, 
//        {$group   : {_id:"$coin_name", code: {$first:"$code"}, coin_number: {$first:"$coin_number"}} },
//        {$project : {coin_name:"$_id", code: "$code", coin_number: "$coin_number", _id:0}}
//   ).exec(function(err, result){


//     // ids is an array of all ObjectIds



// $.each(result, function(key,val){

// $.each(expiration_times, function(keyb,valb){


// (function(key,val,keyb, valb){

// if (val.code == 'ltc')
// current_price = .016;
// if (val.code == 'doge')
// current_price = 0.0000005;

// price_deviation = current_price/10;
// starting = current_price - 3 * price_deviation;

// prices = new Array();

// for (var i=0; i < 6; i++){
    
//     price = starting + i * price_deviation;
//     prices.push(price);

// }



// $.each(prices, function(keyc, valc){
// $.each(option_types, function(keyd, vald){


// console.log('fucking price ' + valc);

// (function(keyc,valc,keyd,vald){    
// Order.findOne({$and: [{call_put: vald}, {strike: valc}, {expiration_time: valb}, {coin_one_name: val.coin_name}, {coin_two_name: 'bitcoin'}, {side: 'bid'}, {pending: 'pending'}]}).sort({price: -1}).limit(1).exec(function(err, bid){
// Order.findOne({$and: [{call_put: vald},{strike: valc}, {expiration_time: valb}, {coin_one_name: val.coin_name}, {coin_two_name: 'bitcoin'}, {side: 'ask'}, {pending: 'pending'}]}).sort({price: 1}).limit(1).exec(function(err, ask){
// OrderData.findOne({$and:[{call_put: vald},{strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort('-last_trade_time').limit(1).exec(function(err, last_order){
// //find lowest price in 24 hours
// OrderData.findOne({$and:[{call_put: vald},{strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort({price: 1}).limit(1).exec(function(err, lowest_order){
// //find highest price in 24 hours
// OrderData.findOne({$and:[{call_put: vald},{strike: valc}, {expiration: valb},{coin_ticker_one: val.code}, {time: {$gte: one_day_ago }}]}).sort({price: -1}).limit(1).exec(function(err, highest_order){
// Order.find({$and:[{call_put: vald}, {strike: valc}, {expiration_time: valb}, {coin_one_ticker: val.code}, {time: {$gte: one_day_ago}}, {pending: {'$ne': 'cancelled' }}]}, function(err, orders_within_day){

// orders_within_day = [];

// var bid_price;
// var ask_price;

// console.log('stupid' + val.coin_name + ' ' + valb + ' ' + orders_within_day)

// if (bid == null)
// bid_price = 'n/a';
// else
// bid_price = bid.price;


// if (ask == null)
// ask_price = 'n/a';
// else
// ask_price = ask.price;

// console.log('da bid ' + bid_price);

// volume = 0;
// $.each(orders_within_day, function(key,val){

// volume += (val.quantity - val.quantity_left);

// });

// volume = volume/2;

// console.log('im confused ' + valc);

// obj = new Object();
// obj.coin_one_name = val.coin_name;
// obj.coin_two_name = 'bitcoin';
// obj.coin_one_ticker = val.code;
// obj.coin_two_ticker = 'btc';
// obj.bid = bid_price;
// obj.ask = ask_price;

// if (lowest_order == null){
// obj.low = 0;
// obj.high = 0;
// obj.last = 0;
// }
// else{
// obj.low = lowest_order.price;
// obj.high = highest_order.price;
// obj.last = last_order.price;
// }

// obj.volume = volume;
// obj.expiration = valb;
// obj.strike = valc;
// obj.call_put = vald;

// console.log(valb);

// array.push(obj);

// if (array.length == coins.length * 4 * 6 * 2){


// //sorting functions
// function dynamicSort(property) { 
//     return function (obj1,obj2) {
//         return obj1[property] > obj2[property] ? 1
//             : obj1[property] < obj2[property] ? -1 : 0;
//     }
// }

// function dynamicSortMultiple() {
//     /*
//      * save the arguments object as it will be overwritten
//      * note that arguments object is an array-like object
//      * consisting of the names of the properties to sort by
//      */
//     var props = arguments;
//     return function (obj1, obj2) {
//         var i = 0, result = 0, numberOfProperties = props.length;
//         /* try getting a different result from 0 (equal)
//          * as long as we have extra properties to compare
//          */
//         while(result === 0 && i < numberOfProperties) {
//             result = dynamicSort(props[i])(obj1, obj2);
//             i++;
//         }
//         return result;
//     }
// }

// array.sort(dynamicSortMultiple("coin_one_name","call_put", "expiration", "strike"));

// console.log(array);

// // modified_array = new Array();
// // $.each(array, function(key,val){




// // });

// activated = req.session.activated;
// user = req.session.user;

// console.log('status ' + activated);

// if (activated != true)
//     activated = false;
// if (user == undefined)
//     user = null;

// console.log('later status ' + activated);

// console.log('this array ' + JSON.stringify(array));
// res.json({coins: coins ,coin_data: array, user: user, activated: activated});

// }


// });
// });
// });
// });
// });
// });
// })(keyc, valc, keyd,vald);
// });
// });




// })(key,val, keyb, valb);

// });
// });




//   });





// });


});









app.get('/trading', function(req,res){



activated = req.session.activated;
user = req.session.user;

console.log(activated);
if (activated == undefined){
    activated = false;
    user = null;
}

ContractRef.find({}).sort({contract_number: 1}).exec(function(err, contracts){
//console.log(contracts);


bitstamp.ticker(function(err, ticker) {
contracts_modified = new Array();
current_price = ticker.last;

counter = 0;
$.each(contracts, function(key,val){
//sub = $.parseJSON(contracts[key]);
//console.log(contracts[key].short_symbol);
short_symbol = val.short_symbol;
(function(val, short_symbol, key, current_price, activated, user){
    //console.log(short_symbol);
Order.findOne({$and: [{short_symbol: short_symbol}, {pending: 'pending'}, {side: 'bid'}]}).sort('-price').limit(1).exec(function(err, bid){
Order.findOne({$and: [{short_symbol: short_symbol}, {pending: 'pending'}, {side: 'ask'}]}).sort('-price').limit(1).exec(function(err, ask){

sub = new Object();
sub.expiration_time = val.expiration_time;
sub.start_time = val.start_time;
sub.option_type = val.option_type;
sub.strike_price = val.strike_price;
sub.initial_margin = val.initial_margin;
sub.maintenance_margin = val.maintenance_margin;
sub.variation_margin = val.variation_margin;
sub.max_price_change = val.max_price_change;
sub.full_symbol = val.full_symbol;
sub.short_symbol = val.short_symbol;
sub.fees = val.fees;
sub.balance = val.balance;
sub.expiration_group = val.expiration_group;
sub.contract_number = val.contract_number;
if (bid != null){
sub.bid = bid.price;
extrinsic_bid = (10/(current_price * (current_price - val.strike_price)));

//extrinsic and iv bid
if (current_price > val.strike_price){
sub.extrinsic_bid = extrinsic_bid;
sub.intrinsic_bid = bid.price - extrinsic_bid;


}
else{
sub.extrinsic_bid = bid.price;
sub.intrinsic_bid = 0;

}


}
else{
sub.bid = 0;
sub.extrinsic_bid = 0;
sub.intrinsic_bid = 0;



}





//require(functions.js);


if (ask != null){
sub.ask = ask.price;
extrinsic_ask = (10/(current_price * (current_price - val.strike_price)));

if (current_price > val.strike_price){
sub.extrinsic_ask = extrinsic_ask;
sub.intrinsic_ask = bid.price - extrinsic_ask;

}
else{
sub.extrinsic_ask = ask.price;
sub.intrinsic_ask = 0;

}

}
else{
sub.ask = 0;
sub.extrinsic_ask = 0;
sub.intrinsic_ask = 0;


}

//console.log(JSON.stringify(sub));

contracts_modified.push(sub);
counter++;

if (counter == contracts.length -1){
//console.log(JSON.stringify(contracts_modified));
console.log(key);
console.log(contracts.length);


function sortByGroup(a, b){
  var aName = a.contract_number;
  var bName = b.contract_number;
  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}

contracts_modified = contracts_modified.sort(sortByGroup);


console.log(JSON.stringify(contracts_modified));

activated = req.session.activated;
user = req.session.user;

console.log(activated);
if (activated == undefined){
    activated = false;
    user = null;
}

res.render('trading.html', {activated: JSON.stringify(activated), user: JSON.stringify(user), contracts: JSON.stringify(contracts_modified)});
}



});
});
})(val, short_symbol, key, current_price);



});
});

//console.log(contracts_modified);

//res.render('trading.html', {activated: activated, user: JSON.stringify(user), contracts: JSON.stringify(contracts)});


});


});
















app.get('/tester', function(req,res){

res.render('tester.html');

});


app.get('/process_ticket', function(req,res){

res.render('process_ticket.html');

});

app.get('/get_price', function(req,res){


bitstamp.ticker(function(err, trades) {
  console.log(trades.last);  
});


/*
var body = '';

http.get(url, function(res) {
  res.on('data', function(chunk) {
    body += chunk;
  });
  res.on('end', function() {
    // all data has been downloaded
  });
});
*/


});


app.get('/withdraw/:coin', csrf, function(req,res){
code = req.params.coin;
console.log("testing " + code);
Coin.findOne({code: code}, function(err, coin){
console.log('testcoin ' + coin);
res.render('tab_template_second.html',{data: JSON.stringify(coin)});

});

});

app.get('/withdraw2', function(req,res){

res.render("withdraw2.html");

});


app.get('/confirm', function(req,res){

res.render('withdraw_confirm.html');

});

app.get('/withdrawal', function(req,res){

if (req.session.activated ){

console.log("theemail " + req.session.user.email);

User.findOne({email:req.session.user.email}).populate('withdrawals withdrawals.coin')
.exec(function (err, populated) {

console.log('popular ' + populated.withdrawals);

res.render('tab_template.html', {data: JSON.stringify(populated.withdrawals)});

});

}

});




app.get('/orders', function(req,res){

if (req.session.activated ){

console.log("theemail " + req.session.user.email);

User.findOne({email:req.session.user.email}).populate({
  path: 'orders',
  match: { pending: 'pending'}
})
.exec(function (err, populated) {

console.log('popular ' + populated.orders);

res.render('tab_template.html', {data: JSON.stringify(populated.orders)});

});

}

});

app.post('/cancel_order', function(req,res){

console.log(req.body.order_id);

Order.findByIdAndUpdate(req.body.order_id, {$set: {pending: 'cancelled'}}).populate('user').exec(function(err, order){

console.log("order cancelled");
res.end("done");





});


});



app.post('/cancel_alt_order', function(req,res){

console.log(req.body.order_id);

//, {$set: {pending: 'cancelled'}}

Order.findOneAndUpdate({ $and: [{_id: req.body.order_id}, {pending: 'pending'}]}, {$set: {pending: 'cancelled'}}).populate('user').exec( function(err, order){

console.log(1);



console.log(2);

coin_one_name = order.coin_one_name;
coin_two_name = 'bitcoin';
user = order['user'];

if (order.side == 'bid'){

change = order.quantity_left * order.price;

User.findByIdAndUpdate(user).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, user){

console.log('fucking yolo');
console.log(change);

console.log(user[coin_two_name]);

user[coin_two_name].update({$inc: {available_balance: change, in_orders_non_margin: -1 * change}}).exec();


console.log("order cancelled");
res.end("done");


});


}
else {


console.log('what the fuck');

User.findByIdAndUpdate(user).populate(coin_one_name + ' ' + coin_two_name).exec(function(err, user){

console.log('fucking yolo');
//console.log(change);

//console.log(user[coin_two_name]);

user[coin_one_name].update({$inc: {available_balance: order.quantity_left, in_orders_non_margin: -1 * order.quantity_left}}).exec();


console.log("order cancelled");
res.end("done");


});


}








// console.log("order cancelled");
// res.end("done");
});


});



app.post('/exercise_option', function(req,res){

//console.log(req.body.order_id);
// $set: {pending: 'exercised'}



console.log('here');
Order.findByIdAndUpdate(req.body.order_id, { $set: {pending: 'exercised'}}).populate('opposing_orders user opposing_users').exec( function(err, order){

if (order.call_put == 'CALL')
    call = true;
else
    call = false;

//make sure person has the right to exercise the option
if (order.side == 'bid'){


//see if user has enough money


if (call){
//update buyers money
console.log('ugh');
total = order.quantity - order.quantity_left;
total_cost = total * order.price;

Coin.findOne(order.user['bitcoin']).exec(function(err, coin){

available_balance = coin.available_balance;

if (total_cost <= available_balance){

User.findOne({email: req.session.user.email}).populate(order.coin_one_name + ' bitcoin').exec(function(err, user){


user[order.coin_two_name].update({$inc: {balance: -1 * total * order.strike, available_balance: -1 * total * order.strike}}).exec();
user[order.coin_one_name].update({$inc: {balance: total, available_balance: total}}).exec();


});

$.each(order.opposing_users, function(key, val){

opposing_quantity = order.opposing_quantities[key];
opposing_gain = opposing_quantity * order.strike;

User.findById(val).populate(order.coin_one_name + ' bitcoin').exec(function(err, user){

user[order.coin_one_name].update({$inc: {in_positions: -1 * opposing_quantity }}).exec();
user[order.coin_two_name].update({$inc: {balance: opposing_gain, available_balance: opposing_gain}}).exec();

res.end('done');


});




});




}else res.end('Not enough balance');

});
}
else{


//update buyers money
console.log('ugh');
total = order.quantity - order.quantity_left;
total_cost = total * order.strike;

Coin.findOne(order.user[coin_one_name]).exec(function(err, coin){

available_balance = coin.available_balance;

if (total_cost <= available_balance){

User.findOne({email: req.session.user.email}).populate(order.coin_one_name + ' bitcoin').exec(function(err, user){


user[order.coin_two_name].update({$inc: {balance: total * order.strike, available_balance: total * order.strike}}).exec();
user[order.coin_one_name].update({$inc: {balance: -1 * total, available_balance: -1 * total}}).exec();


});

$.each(order.opposing_users, function(key, val){

opposing_quantity = order.opposing_quantities[key];
opposing_loss = opposing_quantity * order.strike;

User.findById(val).populate(order.coin_one_name + ' bitcoin').exec(function(err, user){

user[order.coin_one_name].update({$inc: {balance: opposing_quantity, available_balance: opposing_quantity }}).exec();
user[order.coin_two_name].update({$inc: {in_positions:-1 * opposing_loss}}).exec();

res.end('done');


});




});




}else res.end('Not enough balance');

});





}







}

});


});


// Withdrawal.findOne({hash: 'b0bRy79-AUqXts3KqRJIBheyQxuQ2dldeOj4SWVCqh6f26QiFzUI3fnqCcKhBTco'}).populate('coin').exec(function(err, yolo){

//     console.log(yolo);
// });
app.get('/withdraw/confirm/:hash', function(req,res){
hash = req.params.hash;

activated = req.session.activated;
user = req.session.user;

if (activated == undefined){
    activated = false;
    user = null;
}




console.log('the fucki');

Withdrawal.findOneAndUpdate({$and:[{hash: hash}, {pending: true}]}, {$set: {pending: false}}).populate('user coin').exec(function (err, withdrawal) {
if (withdrawal != null){
res.render('withdraw_confirm.html', {activated: activated, user: JSON.stringify(user)});

Coin.findByIdAndUpdate(withdrawal.coin._id, {$inc:{balance: -1 * (withdrawal.amount), pending_withdrawals: -1 * (withdrawal.amount - withdrawal.fee)}} , function(err, coin){

console.log("updated coin");

});

console.log(withdrawal);
console.log('the number ' + withdrawal.coin.coin_number);

index = withdrawal.coin.coin_number -1;
send_amount = withdrawal.amount - withdrawal.fee;
console.log('send amount ' + send_amount);
all_clients[index].sendToAddress(withdrawal.receiving_address, withdrawal.amount - withdrawal.fee, function(err, txout){

Withdrawal.findOneAndUpdate({hash:hash }, {$set: {txid: txout}}, function(err, result){

console.log("withdraw updated");

});


console.log('sent trans ' + txout);

});




}

});



});




app.get('/deposit', function(req,res){
if (req.session.activated ){

User.findOne({email:req.session.user.email}).populate('deposits deposits.coin')
.exec(function (err, populated) {
console.log('popular ' + populated.deposits);

res.render('tab_template.html', {data: JSON.stringify(populated.deposits)});

});

}

});


app.post('/withdraw', function(req,res){
console.log(req.body.amount);
console.log(req.body.address);
console.log(req.body.password);
console.log(req.session.user.email);
console.log(req.body.coin_name);
amount = req.body.amount;
address = req.body.address;
coin_name = req.body.coin_name;
coin_ticker = req.body.coin_ticker;


User.findOne({$and:[{email: req.session.user.email}, {password: req.body.password}]}).populate(req.body.coin_name).exec(function(err, populated){
//console.log(populated);
if (populated == null)
    res.end("Incorrect password. Please try again!");
else{
console.log('in else');
available_balance = populated[req.body.coin_name].available_balance;
fee = populated[req.body.coin_name].withdraw_fee;

console.log(available_balance);
console.log(amount);
left = available_balance - amount;

if (left >= 0){
console.log('yolo ' + populated[coin_name]);
Coin.findByIdAndUpdate(populated[coin_name],{$inc:{available_balance: -1 * (amount), pending_withdrawals: amount - fee }}, function(err, coin){
console.log('part 1 ');
require('crypto').randomBytes(48, function(ex, buf) {
console.log('part 2 ');
    token = buf.toString('base64').replace(/\//g,'_').replace(/\+/g,'-');

    withdrawal = new Withdrawal({
        time: new Date().getTime(),
        amount: amount,
        fee: fee,
        receiving_address: address,
        hash: token,
        user: populated,
        coin_name: req.body.coin_name,
        coin_ticker: coin.code,
        coin: coin
    });

id = populated._id;

User.findByIdAndUpdate(id,{$push: {withdrawals: withdrawal}}, function(err, user){
console.log(user);

console.log('shit has saved');

});

confirm_url = prefix + 'withdraw/confirm/' + token;

sendgrid.send({
  to:       req.session.user.email,
  from:     'info@GenesisBlock.io',
  subject:  'Confirm Withdrawal',
  text:     confirm_url,
  html: confirm_url
}, function(err, json) {
  if (err) { return console.error(err); }
  console.log(json);
  res.end("done"); 


}); 


    withdrawal.save(function(err){
        console.log('withdrawal saved');
    });

    res.end("withdraw");




});
});






}


}


});




});






if ( ip.address() == '192.168.1.56')
setInterval(function(){


for (var i=0; i<3; i++){
(function(i){
all_clients[i].getBlockCount(function(err, blockcount) {
//console.log("begin first");
coin_type = all_clients[i]['rpc']['opts']['user'];
coin_type = coin_type.substr(0, coin_type.indexOf('coin'));
coin_name = coin_type + 'coin';

/*
console.log(coin_name);
console.log('block count ' + blockcount);
console.log("end first");*/


all_clients[i].getBlockHash(blockcount-2000, function(err, blockhash) {

all_clients[i].listSinceBlock(blockhash, 1, function(err, transactions) {


if (transactions != null && transactions != undefined){
coin_type = all_clients[i]['rpc']['opts']['user'];
coin_type = coin_type.substr(0, coin_type.indexOf('coin'));
coin_name = coin_type + 'coin';



/*
console.log(coin_name);
console.log('block count ' + blockcount);
console.log(blockhash);
console.log(transactions);
*/

//console.log(transactions);

$.each(transactions['transactions'], function(key,val){
transaction = val;
txid = transaction['txid'];
address = transaction['address'];
amount = transaction['amount'];
confirmations = transaction['confirmations'];
//console.log('number of confirmations ' + confirmations);
//process_transaction(txid, address_array, sent_address, amount);
if ( transaction['category'] == 'receive'){

//console.log("the amount " + amount);
//console.log('here ' + address);

(function(txid, address, amount, confirmations, coin_name){
Coin.findOne({deposit_address: address}).populate('user').exec(function(err, coin){

//console.log(coin);

if (coin!= null){
//console.log("in here");
Deposit.findOne({txid: txid}, function(err, deposit){


if (deposit == null){

//console.log('the address ' + address + ' the amount ' + amount);

Coin.findOneAndUpdate({deposit_address: address}, {$inc: {"pending_deposits": amount}}, function(err, coin){

//console.log('updated coin ' + coin);

coin_type = coin.coin_name.substr(0, coin.coin_name.indexOf('coin'));

    var deposit = new Deposit({
        time:  new Date().getTime(),
        coin_name: coin_type + 'coin',
        amount: amount,
        deposit_address: address,
        txid: txid,
        coin: coin,
        coin_ticker: coin.code
    });

id = coin.user;
//console.log('daid' + id);
User.findByIdAndUpdate(id,{$push: {deposits: deposit}}, function(err, user){
//console.log(user);

//console.log('shit has saved');

});

io.sockets.emit('deposit', {deposit: deposit});
console.log('emit shit');

   // console.log(deposit);

    coin.deposits.push(deposit);
    coin.save(function(err){
        //console.log('coin updated');
    });

    deposit.save(function(err){
        //console.log('saved');

    });


});



}

else{

Coin.findOne({coin_name: coin_name}, function(err, coin){

min_confirmations = coin['confirmation'];
//console.log('min confirmations ' + min_confirmations);
//console.log('my confirmations ' + confirmations);



if (confirmations > min_confirmations){

if (txid == '917cd84b5943035bd39753e62ad4fee0ea2d265f99f97625fbc40f77d4dcb901'){
    //console.log(txid);
    //console.log(confirmations);
}

Deposit.findOneAndUpdate({$and: [{pending: true}, {txid: txid}]},{$set: {pending: false}} ,function(err, deposit){



//console.log("status changed" + txid + deposit);
if (deposit != null){

io.sockets.emit('deposit', {deposit: deposit});
console.log('emit shit');
//console.log('ahgod ' + deposit);
console.log(deposit.amount);
//console.log('deposit ' + deposit);

Coin.findByIdAndUpdate(deposit.coin, {$inc:{pending_deposits: -1 * deposit.amount, balance: deposit.amount, available_balance: deposit.amount}},function(err, coin){
//console.log('status changed coin' + coin);


});

}



});


}
//else console.log('nonono')

});

}


});
}

});
}(txid, address, amount, confirmations, coin_name));


}




});


}
});

}); 

});
}(i));

}
},8000);
else
setInterval(function(){


for (var i=0; i<9; i++){
(function(i){
all_clients[i].getBlockCount(function(err, blockcount) {
//console.log("begin first");
coin_type = all_clients[i]['rpc']['opts']['user'];
coin_type = coin_type.substr(0, coin_type.indexOf('coin'));
coin_name = coin_type + 'coin';

/*
console.log(coin_name);
console.log('block count ' + blockcount);
console.log("end first");*/


all_clients[i].getBlockHash(blockcount-2000, function(err, blockhash) {

all_clients[i].listSinceBlock(blockhash, 1, function(err, transactions) {


if (transactions != null && transactions != undefined){
coin_type = all_clients[i]['rpc']['opts']['user'];
coin_type = coin_type.substr(0, coin_type.indexOf('coin'));
coin_name = coin_type + 'coin';



/*
console.log(coin_name);
console.log('block count ' + blockcount);
console.log(blockhash);
console.log(transactions);
*/

//console.log(transactions);

$.each(transactions['transactions'], function(key,val){
transaction = val;
txid = transaction['txid'];
address = transaction['address'];
amount = transaction['amount'];
confirmations = transaction['confirmations'];
//console.log('number of confirmations ' + confirmations);
//process_transaction(txid, address_array, sent_address, amount);
if ( transaction['category'] == 'receive'){

//console.log("the amount " + amount);
//console.log('here ' + address);

(function(txid, address, amount, confirmations, coin_name){
Coin.findOne({deposit_address: address}).populate('user').exec(function(err, coin){

//console.log(coin);

if (coin!= null){
//console.log("in here");
Deposit.findOne({txid: txid}, function(err, deposit){


if (deposit == null){

//console.log('the address ' + address + ' the amount ' + amount);

Coin.findOneAndUpdate({deposit_address: address}, {$inc: {"pending_deposits": amount}}, function(err, coin){

//console.log('updated coin ' + coin);

coin_type = coin.coin_name.substr(0, coin.coin_name.indexOf('coin'));

    var deposit = new Deposit({
        time:  new Date().getTime(),
        coin_name: coin_type + 'coin',
        amount: amount,
        deposit_address: address,
        txid: txid,
        coin: coin,
        coin_ticker: coin.code
    });

id = coin.user;
//console.log('daid' + id);
User.findByIdAndUpdate(id,{$push: {deposits: deposit}}, function(err, user){
//console.log(user);

//console.log('shit has saved');

});

io.sockets.emit('deposit', {deposit: deposit});
console.log('emit shit');

   // console.log(deposit);

    coin.deposits.push(deposit);
    coin.save(function(err){
        //console.log('coin updated');
    });

    deposit.save(function(err){
        //console.log('saved');

    });


});



}

else{

Coin.findOne({coin_name: coin_name}, function(err, coin){

min_confirmations = coin['confirmation'];
//console.log('min confirmations ' + min_confirmations);
//console.log('my confirmations ' + confirmations);



if (confirmations > min_confirmations){

if (txid == '917cd84b5943035bd39753e62ad4fee0ea2d265f99f97625fbc40f77d4dcb901'){
    //console.log(txid);
    //console.log(confirmations);
}

Deposit.findOneAndUpdate({$and: [{pending: true}, {txid: txid}]},{$set: {pending: false}} ,function(err, deposit){



//console.log("status changed" + txid + deposit);
if (deposit != null){

io.sockets.emit('deposit', {deposit: deposit});
console.log('emit shit');
//console.log('ahgod ' + deposit);
console.log(deposit.amount);
//console.log('deposit ' + deposit);

Coin.findByIdAndUpdate(deposit.coin, {$inc:{pending_deposits: -1 * deposit.amount, balance: deposit.amount, available_balance: deposit.amount}},function(err, coin){
//console.log('status changed coin' + coin);


});

}



});


}
//else console.log('nonono')

});

}


});
}

});
}(txid, address, amount, confirmations, coin_name));


}




});


}
});

}); 

});
}(i));

}
},24000);






// setInterval(function(){


// bitcoin_client.getBlockCount(function(err, blockcount) {

// bitcoin_client.getBlockHash(blockcount-2000, function(err, blockhash) {

// bitcoin_client.listSinceBlock(blockhash, 1, function(err, transactions) {


// if (transactions != null && transactions != undefined){


// $.each(transactions['transactions'], function(key,val){
// transaction = val;
// txid = transaction['txid'];
// address = transaction['address'];
// amount = transaction['amount'];
// confirmations = transaction['confirmations'];
// //process_transaction(txid, address_array, sent_address, amount);
// if ( transaction['category'] == 'receive'){
// coin_name = 'dogecoin';
// //console.log("the amount " + amount);
// (function(txid, address, amount, confirmations, coin_name){
// //Coin.findOne({deposit_address: address}).populate('user').exec(function(err, coin){

// //if (coin!= null){

// Deposit.findOne({txid: txid}, function(err, deposit){


// if (deposit == null){

// //console.log('the address ' + address + ' the amount ' + amount);

// User.findOneAndUpdate({deposit_address: address}, {$inc: {pending_deposits: amount}}, function(err, user){

// if (user != null){
//     var deposit = new Deposit({
//         time:  new Date().getTime(),
//         amount: amount,
//         deposit_address: address,
//         txid: txid,
//     });

//     console.log(deposit);

//     user.deposits.push(deposit);
//     user.save(function(err){
//         //console.log('coin updated');
//     });

//     deposit.save(function(err){
//         //console.log('saved');

//     });
// }

// });



// }

// else{

// User.findOne({deposit_address: address}, function(err, user){

// min_confirmations = 1;

// if (confirmations > min_confirmations){

// Deposit.findOneAndUpdate({$and: [{pending: true}, {txid: txid}]},{$set: {pending: false}} , function(err, deposit){

// console.log("status changed" + deposit);
// if (deposit != null){
// console.log(deposit.amount);
// console.log('deposit ' + deposit);

// User.findOneAndUpdate({deposit_address: address}, {$inc:{pending_deposits: -1 * deposit.amount, balance: deposit.amount, available_balance: deposit.amount}},function(err, user){
// console.log('status changed user' + user);


// });

// }

// });


// }
// else console.log('nonono')

// });

// }


// });
// //}

// //});
// }(txid, address, amount, confirmations, coin_name));


// }




// });


// }
// });

// }); 

// });



// },8080);

//update deposits that have been confirmed




server.listen(app.get('port'));

}
