$( document ).ready(function() {

if (document.URL.indexOf('localhost') != -1 )
  prefix = 'http://localhost:8080/';
else
  prefix = 'http://genesisblock.io/';


//begin noty

//adjust navbar for mobile

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
$('.navbar-fixed-top').attr('class', 'navbar navbar-default navbar-static-top');
$('#top_area').css('margin-top', '0px');
$('.navbar-static-top').css('margin-bottom', '0px');

}





$.noty.defaults = {
    layout: 'bottomRight',
    theme: 'defaultTheme',
    type: 'success',
    text: '', // can be html or string
    dismissQueue: true, // If you want to use queue feature set this true
    template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
    animation: {
        open: {height: 'toggle'},
        close: {height: 'toggle'},
        easing: 'swing',
        speed: 500 // opening & closing animation speed
    },
    timeout: false, // delay for closing event. Set false for sticky notifications
    force: false, // adds notification to the beginning of queue when set to true
    modal: false,
    maxVisible: 5, // you can set max visible notification for dismissQueue true option,
    killer: false, // for close all notifications before show
    closeWith: ['click'], // ['click', 'button', 'hover']
    timeout: 10000,
    callback: {
        onShow: function() {},
        afterShow: function() {},
        onClose: function() {},
        afterClose: function() {}
    },
    buttons: false // an array of buttons
};

// deposit = new Object();

// deposit.amount = 3;
// deposit.coin_name = 'dogecoin';
// deposit.confirmation = 1;

// var n = noty({text: deposit.amount + ' ' + first_letter_upper(deposit.coin_name) + 's pending deposit! - Awaiting ' + deposit.confirmation + ' confirmations'});


//end noty

var socket = io.connect(prefix);

socket.on('deposit', function (data) {
    
deposit = data.deposit;

//alert(JSON.stringify(data));

    if (deposit.pending){

      //alert(deposit.pending);

      pending_deposits = $('[coin_name="'+ deposit.coin_name +'"][fund_property="pending_deposits"]').html();
      //alert('1 ' + pending_deposits);
      pending_deposits = parseFloat(pending_deposits);
      console.log('2 ' + pending_deposits);
      pending_deposits += deposit.amount;
      console.log('3 ' + pending_deposits);
      $('[coin_name="'+ deposit.coin_name +'"][fund_property="pending_deposits"]').html(pending_deposits.toFixed(5));

      notification = deposit.amount + ' ' + first_letter_upper(deposit.coin_name) + 's pending deposit! - Awaiting confirmations';

      //alert(string);


      var n = noty({text: notification});

    }
    else{

      pending_deposits = $('[coin_name="'+ deposit.coin_name +'"][fund_property="pending_deposits"]').html();
      //alert('1 ' + pending_deposits);
      pending_deposits = parseFloat(pending_deposits);
      console.log('2 ' + pending_deposits);
      pending_deposits -= deposit.amount;
      console.log('3 ' + pending_deposits);
      $('[coin_name="'+ deposit.coin_name +'"][fund_property="pending_deposits"]').html(pending_deposits.toFixed(5));


      previous_balance = parseFloat($('[coin_name="'+ deposit.coin_name +'"][fund_property="balance"]').html());
      previous_available_balance = parseFloat($('[coin_name="'+ deposit.coin_name +'"][fund_property="available_balance"]').html())

      current_balance = previous_balance + deposit.amount;
      current_available_balance = previous_available_balance + deposit.amount;

      $('[coin_name="'+ deposit.coin_name +'"][fund_property="balance"]').html(current_balance.toFixed(5));
      $('[coin_name="'+ deposit.coin_name +'"][fund_property="available_balance"]').html(current_available_balance.toFixed(5));

      notification = deposit.amount + ' ' + first_letter_upper(deposit.coin_name) + 's succesfully deposited!';

      noty({text: notification});

    }


});


if (  document.URL.indexOf('withdraw/confirm') != -1 || document.URL.indexOf('options') != -1 || document.URL.indexOf('altmarket') != -1 ||document.URL.indexOf('optmarket') != -1 ||  document.URL.indexOf('contract') != -1 ||  document.URL.indexOf('contract') != -1 || document.URL.indexOf('faq') != -1 || document.URL.indexOf('trading') != -1 ||  document.URL.indexOf('trading') != -1 ||  document.URL.indexOf('voting') != -1 || document.URL.indexOf('fees') != -1 || document.URL.indexOf('about') != -1 || document.URL.indexOf('support') != -1 || document.URL == prefix){


if (activated){
  $('#right_bar').empty();
string = '<li class="dropdown">\
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Logged in as  ' + user.full_name + '<b class="caret"></b></a>\
          <ul class="dropdown-menu">\
            <li><a href="' + prefix + 'balances#taba1">Profile</a></li>\
            <li><a href="' + prefix + 'balances#taba">Balances</a></li>\
            <li><a href="' + prefix + 'balances#tabd">Deposits</a></li>\
            <li><a href="' + prefix + 'balances#tabe">Withdrawals</a></li>\
            <li><a href="' + prefix + 'balances#tabf">Orders</a></li>\
            <li><a href="' + prefix + 'balances#tabg">Trade History</a></li>\
            <li><a href="' + prefix + 'balances#tabh">Exercise Options</a></li>\
            <li><a class="logout_click">Logout</a></li>\
          </ul>\
        </li>';

$('#right_bar').append(string);

}
}


//alert(document.URL);

if (document.URL == prefix){ 



string = '<div class="index_col col-md-6 col-lg-6 col-sm-6 col-xs-6">\
<div class="index_col_container">\
<h2 class="bottom_col">Live Trades </h2>\
    <table class="table table-bordered live_trades"  style="margin-bottom:50px">\
        <thead>\
          <tr>\
            <th>Time </th>\
            <th>Trade Pair</th>\
            <th>Amount</th>\
            <th>Price</th>\
          </tr>\
        </thead><tbody>';

$.each(orderdata, function(key,val){

time = format_time(val.time);

substring = '<tr id="tab_row" style="margin-bottom: 30px">\
        <td class="index_td">' + time + '</td>\
        <td class="index_td">' + val.coin_ticker_one.toUpperCase() + '/BTC</td>\
        <td class="index_td">' + val.quantity.toPrecision(5) + '</td>\
        <td class="index_td">' + val.price.toPrecision(5) + '</td>\
</tr>';

string += substring;

});

      
string += '</tbody></table>\
</div>\
</div>\
<div class="index_col_container">\
<div class="index_col col-md-6 col-lg-6 col-sm-6 col-xs-6">\
<h2 class="bottom_col">Live OrderBook </h2>\
<div class="index_col col-md-6 col-lg-6 col-sm-6 col-xs-6">\
    <table class="table table-bordered live_trades"  style="margin-bottom:50px">\
        <thead >\
          <tr>\
            <th style="border-right: 1px solid #eee" >Most Recent Bids</th>\
            <th style="border-right: 1px solid #eee"></th>\
            <th></th>\
          </tr>\
        </thead><tbody>';


$.each(bids, function(key,val){

substring = '<tr id="tab_row" style="margin-bottom: 30px">\
        <td class="index_td" >' + val.coin_one_ticker.toUpperCase() + '/BTC</td>\
        <td class="index_td" >' + val.quantity.toPrecision(5) + '</td>\
        <td class="index_td">' + val.price.toPrecision(5) + '</td>\
</tr>';

string += substring;


});


string += '</tbody></table></div>\
<div class="index_col col-md-6 col-lg-6 col-sm-6 col-xs-6">\
    <table class="table table-bordered live_trades"  style="margin-bottom:50px">\
        <thead >\
          <tr>\
            <th style="border-right: 1px solid #eee">Most Recent Asks</th>\
            <th style="border-right: 1px solid #eee"></th>\
            <th></th>\
          </tr>\
        </thead><tbody>';


$.each(asks, function(key,val){

substring = '<tr id="tab_row" style="margin-bottom: 30px">\
        <td class="index_td" >' + val.coin_one_ticker.toUpperCase() + '/BTC</td>\
        <td class="index_td" >' + val.quantity.toPrecision(5) + '</td>\
        <td class="index_td">' + val.price.toPrecision(5) + '</td>\
</tr>';

string += substring;


});



string += '</tbody></table></div>\
</div>';


middle_area = '<div class="index_col col-md-3 col-lg-3 col-sm-3 col-xs-3"><img style="height:50px" class="index_icon" src=\"' + prefix + '/img/trade_icon.png' +  '\">\
  <h3 class=\"desc\">Fast Trading </h3>\
  <h5 class=\"col-md-12 desc\"> Trade in real-time and process orders in milliseconds.</h5>\
  </div>\
  <div class=\"index_col col-md-3 col-lg-3 col-sm-3 col-xs-3\"><img style=\"height:80px; margin-top: 12px\" class=\"index_icon\"  src=\"' + prefix + '/img/low_fees.png' +  '\">\
  <h3 class=\"desc\" style=\"margin-top: 10px\">No fees </h3>\
  <h5 class=\"col-md-12 desc\"> We are currently not taking any trading fees! </h5>\
  </div>\
  <div class=\"index_col col-md-3 col-lg-3 col-sm-3 col-xs-3\"><img style=\"height:60px; margin-top: 25px\" class=\"index_icon\" src=\"' + prefix + '/img/lock_icon.png' +  '\">\
  <h3 class=\"desc\">Security </h3>\
  <h5 class=\"col-md-12 desc\"> GenesisBlock has been built with bitcoin security principles in mind. We also use cold storage.</h5>\
  </div>\
  <div class=\"index_col col-md-3 col-lg-3 col-sm-3 col-xs-3\"><img style=\"height:50px; margin-top:39px\" class=\"index_icon\" src=\"' + prefix + '/img/support_icon.png' +  '\">\
  <h3 class=\"desc\">Great Support</h3>\
  <h5 class=\"col-md-12 desc\"> We handle support queries throughout the day, get help when you need it.</h5>\
  </div>';

  //alert(middle_area);
$('#middle_area').append(middle_area);
$('#bottom_area').append(string);







}


if (document.URL.indexOf('options') != -1){

string = generate_options_table(false);
$('#trading_table').append(string);

add_options_table_handlers();

     $("a.options_page_href").on("click",function(){
         ticker = $(this).attr("ticker");
         window.open(prefix + 'optmarket/' + ticker ,'_blank');
     });

$.ajax({
  url: "/append_options",
  type: "POST",
  data: '',
  dataType: "html"
}).done(function(data){


console.log(JSON.stringify(data));

//alert(data.coins);
data = $.parseJSON(data);
console.log(JSON.stringify(data));
console.log(data.coins);


activated = data.activated;
user = data.user;
coin_data = data.coin_data;
coins = data.coins;


//alert(coin_data);

string2 = generate_options_table(true);
$('#trading_table').append(string2);

add_options_table_handlers();


     $("a.options_page_href2").on("click",function(){
         ticker = $(this).attr("ticker");
         window.open(prefix + 'optmarket/' + ticker ,'_blank');
     });

//alert(data);


});




}


if (document.URL.indexOf('coin_trading') != -1){

string = generate_trading_table();
$('#trading_table').append(string);


     $("a.contract_page_href").on("click",function(){
         ticker = $(this).attr("ticker");
         window.open(prefix + 'altmarket/' + ticker + '/btc' ,'_blank');
     });

}



if (document.URL.indexOf('trading') != -1 &&  document.URL.indexOf('coin_trading') == -1){

string = generate_options_table();
$('#options_table').append(string);



     $("a.contract_page_href").on("click",function(){
         short_symbol = $(this).attr("short_symbol");
         window.open(prefix + 'market/' + short_symbol ,'_blank');
     });

        /*
      $('option').on('change',function (e) {
alert("yolo");

      e.preventDefault();

      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });

  });
      */


      $('.select_expiration').change(function() {
        val = $(this).val();
        $('.select_expiration').val(val);
    $('html, body').animate({
        scrollTop: $('[group=' + val + ']').offset().top - 170
    }, 1000);


});


}

if (document.URL.indexOf('contract') != -1 ){

$('#contract_header').append(contract.full_symbol);

string = generate_contract_table();
//alert(string);
$('#contract_table').append(string);




}


function format_time(time){

      expiration_time = parseInt(time.toString().substring(0, time.toString().length - 3));
    
    expiration_time = moment.unix(expiration_time).toArray();
    expiration_time = moment.utc(expiration_time);
    expiration_time = expiration_time.toString();
    index = expiration_time.indexOf('+');
    expiration_time = expiration_time.substr(0, index);

    return expiration_time;

}

/*
if (ending == 'taba'){
  //alert($("[href='#your_funds_tab']").attr('href'));
$("[href='#your_funds_tab']").click();
}
if (ending == 'tabb'){
  //alert('hi');
$("[href='#add_funds_tab']").click();
}
if (ending == 'tabc'){

$("[href='#withdraw_funds_tab']").click();
}
if (ending == 'tabd'){

$("[href='#your_deposits_tab']").click();
}
if (ending == 'tabe'){

$("[href='#your_withdrawals_tab']").click();
}
*/




$('#register_button').click(function(){

name = $('#name').val();
email = $('#email').val();
password = $('#password').val();
confirm_password = $('#confirm_password').val();



if ($('#terms_checkbox').is(":checked") == false)
  alert("Please make sure you read our terms of service, and check box");
else if (name.length == 0 || email.length == 0 || password.length == 0 || confirm_password.length == 0)
  alert('Please make sure you filled out all values in the form');

else if ($.trim(password) != $.trim(confirm_password))
  alert('Please make sure you confirmed the right password');

else {


$.ajax({
  url: "/register",
  type: "POST",
  data: { full_name: name, email: email, password: password, confirm_password: confirm_password },
  dataType: "html"
}).done(function(data){

if (data == '1')
alert("Account registered, but not activated yet. Please search for activation email in your inbox / spam folder");
else if (data == '2')
alert("Account already registered");
else
alert('Your activation link has been sent to: ' + email );


});

}



});



$('#login_button').click(function(){


email = $('#email').val();
password = $('#password').val();

if ( email.length == 0 || password.length == 0 )
  alert('Please make sure you filled out all values in the form');

else {


$.ajax({
  url: "/login",
  type: "POST",
  data: { email: email, password: password},
  dataType: "html"
}).done(function(data){

if (data == 'correct'){
  //alert("yolo");
localStorage.setItem('email', email);
//alert(localStorage.getItem('email'));

//alert(data);
window.location = prefix;
}
else alert(data);

});

}



});





$('#forgot_button').click(function(){


email = $('#email').val();

if ( email.length == 0 )
  alert('Please make sure you filled out your email address!');
else {


$.ajax({
  url: "/forgot",
  type: "POST",
  data: { email: email},
  dataType: "html"
}).done(function(data){

if (data == 'incorrect')
  alert("Account with email address does not exist");
else if (data == 'unactivated')
  alert("User has not been activated yet. Please check email for activation link");
else{
  alert("Email reminder sent");

}

});

}



});


$('.logout_click').click(function(){

$.ajax({
  url: "/logout",
  type: "POST",
  data: '',
  dataType: "html"
}).done(function(data){

  window.location = prefix;

});




});











$('#copy').click(function(){

deposit_address = $('#deposit_address').html();
alert(deposit_address);

});


//connect to socket

  if (document.URL.indexOf('org') != -1)
      root = window.location.host;
  else 
      root = 'http://localhost:8080';


  var socket = io.connect(root);


  socket.on('fuck', function(fuck){
    //alert('wtf');
    //$('#bet_table').append(JSON.stringify(fuck));
  });

  socket.on('news', function(fuck){
    //alert('wtf');
    //$('#bet_table').append(JSON.stringify(fuck));
  });


  if (document.URL.indexOf('withdraw') != -1 && document.URL.indexOf('withdrawal') == -1){

    coin_info = data;
    code = coin_info.code;
    balance = coin_info.balance;
    code_upper = code.toUpperCase();
    withdraw_fee = coin_info.withdraw_fee;
    coin_name = coin_info.coin_name;


string = '<div class="tab_header">\
Withdraw ' + code_upper + 
'</div>\
<div class="tab_description"><div class="box"><span>\
<span id="deposit_address">Once submitted, all requests MUST be confirmed via email. \
Please only contact support if you have not received the confirmation email.</span></span>\
</div></div>\
<div id="withdraw_available_balance">\
Your current available ' + code_upper + ' balance: ' + balance + 
'</div>\
<div class="tab_header_modified" >\
Amount to Withdraw\
</div>\
<div id="error_message">\
</div>\
<input type="number" name="amount" id="withdraw_amount" value="0" required="required" class="error">\
</input> ' + code_upper + 
'<div class="tab_header_modified">\
Withdraw fee\
</div>\
<div class="tab_description">\
' + withdraw_fee + ' ' + code_upper + 
'</div>\
<div class="tab_header_modified">\
Net Withdraw amount\
</div>\
<div class="tab_description" id="net_withdraw_amount">\
0.000000 ' + code_upper + 
'</div>\
<div class="tab_header_modified" >\
' + code_upper + ' Withdrawal Address\
</div>\
<input type="text" id="withdrawal_address" style="width: 300px" required="required" class="error">\
</input>\
<div class="tab_header_modified" >\
Confirm Password\
</div>\
<input type="password" name="amount" id="withdraw_password" required="required" class="error">\
</input>\
<div class="tab_description">\
Please ensure all details are correct before submitting. Every request must be confirmed by email \
before it will be processed, most withdrawals are processed within 10 minutes of email confirmation. For \
security reasons, larger withdrawals can take longer as they may require manual verification. \
</div>\
<button type="button" class="btn btn-primary" id="withdraw_button" style="margin-top: 30px; margin-bottom: 100px">Withdraw</button>';
//alert(string);

//$('#below_tab_wrapper').empty();
$('#below_tab_wrapper').append(string);




//alert('here');
  //   $('#withdraw_amount').on('change', function () {
  //     withdraw_amount = $('#withdraw_amount').val();
  //     withdraw_fee = .0001;
  //     //alert('test');
  //     //alert($('#withdraw_amount').val());
  //     //alert($('#error_message').html());
  //     if (withdraw_amount > data.bitcoin.available_balance){
  //     if ($('#error_message').html().length < 3)
  //     $('#error_message').append('Withdraw amount must be equal to or less than your available balance.');
  //     }
  //     else if (withdraw_amount - withdraw_fee <=0){
  //     if ($('#error_message').html().length < 3)
  //     $('#error_message').append('Your net withdraw amount is less than or equal to 0. Please enter a greater amount.');
  //     if ($('#error_message').html().substr(0,3) == 'Wit'){
  //       $('#error_message').empty();
  //       $('#error_message').append('Your net withdraw amount is less than or equal to 0. Please enter a greater amount.');
  //     }


  //     }    
  //     else  {
  //     $('#error_message').empty();
  //     $('#net_withdraw_amount').html(withdraw_amount - 1)

  //     }
  // });


    // $('#withdraw_button').click(function(){
    //     //alert('yo');
    //     amount = $('#withdraw_amount').val();
    //     address = $('#withdrawal_address').val();
    //     password = $('#withdraw_password').val();

    //     if ($('#error_message').html().length > 3)
    //     $("html, body").animate({ scrollTop: 0 }, "slow");

    //     else{

    //     email = localStorage.getItem('email');
    //     //alert(email);
    //     $.ajax({
    //       url: "/withdraw",
    //       type: "POST",
    //       data: {amount: amount, address: address, password: password, email: email, coin_name: coin_name},
    //       dataType: "html"
    //     }).done(function(data){
    //                 //alert(data);
    //       if (data == "withdraw"){


    //       string = '<div class="box_green"><span><span id="deposit_address">\
    //       <span style="font-weight: bold">Success!</span><br>\
    //       Your withdrawal request has now been added, please confirm by email and we will then process it.</span></span></div>\
    //       </div>';

    //       $('.box').before(string);        

    //       $("html, body").animate({ scrollTop: 0 }, "slow");


    //       }

    //       else
    //       alert(data);

    //     });


    //     }

    //     //alert('here');
    // });



  
  }


  if (document.URL.indexOf('deposit') != -1){

    $('#deposits_li').attr('class', 'active');

    deposits = data;
    deposit_count = deposits.length;

//alert(deposits);

    string = '<div class="tab_header">\
Coin Deposits\
</div>\
<div class="tab_description">\
Below is a list of deposits that you have made. Click the expander icon on the left of each row to reveal more details \
about the deposit.<br><br>\
To make a new deposit, please visit the Balances page and select the Deposit option under the actions menu for \
the coin.\
<br><br>\
Displaying deposits 1 - ' + deposits.length + ' of ' + deposits.length +
'</div>\
<table class="table" id="tab_table">\
<tbody id="balance_tbody"><tr class="active">\
 <td></td>  <td class="active">TIME</td>\
   <td class="active">COIN</td>  <td class="active">AMOUNT</td>\
     <td class="active">DEPOSIT ADDRESS</td> <td class="active">STATUS</td></tr>';



$.each(deposits, function(key,val){
ticker_upper = val.coin_ticker.toUpperCase();
var status;
if (val.pending == false)
  status = 'CONFIRMED';
else
  status = 'PENDING';

    
    time = parseInt(val.time.toString().substring(0, val.time.toString().length - 3));
    
    array = moment.unix(time).toArray();
    var hi = moment.utc(array);
        //alert(hi);
    hi = hi.toString();
    index = hi.indexOf('GM');
    hi = hi.substr(0, index);
    deposit_time = hi;


substring = '<tr id="tab_row">\
 <td class="expander unclicked" id="' + val.txid + '"> </td><td class="tab_td">' + deposit_time + '</td>\
         <td class="tab_td">' + ticker_upper + '</td>        <td class="tab_td">' + val.amount + '</td>\
         <td class="tab_td">' + val.deposit_address + '</td> <td class="tab_td">' + status + '</td>\
</tr>';
string += substring;

});

string += '</tbody></table>'; 

$('#below_tab_wrapper').append(string);


$('.expander').click(function(){



class_name = $(this).attr('class');

if (class_name == 'expander unclicked'){
$(this).attr('class', 'expander clicked');
id = $(this).attr('id');
string = '<tr class="active">\
 <td colspan="6" class="left_td"><span class="inner_td">Transaction Id: ' + id + '</span></td>\
</tr>';

$(this).parent().after(string);
}
else{
$(this).attr('class', 'expander unclicked');
$(this).parent().next().remove();

//$(this).parent().after().remove();
}

});




  }





//withdrawals
/*
  if (document.URL.indexOf('withdraw') != -1 && document.URL.indexOf('withdrawal') == -1){

    coin_info = data;
    code = coin_info.code;
    balance = coin_info.balance;
    code_upper = code.toUpperCase();
    withdraw_fee = coin_info.withdraw_fee;
    coin_name = coin_info.coin_name;


string = '<div class="tab_header">\
Withdraw ' + code_upper + 
'</div>\
<div class="tab_description"><div class="box"><span>\
<span id="deposit_address">Once submitted, all requests MUST be confirmed via email. \
Please only contact support if you have not received the confirmation email.</span></span>\
</div></div>\
<div id="withdraw_available_balance">\
Your current available ' + code_upper + ' balance: ' + balance + 
'</div>\
<div class="tab_header_modified" >\
Amount to Withdraw\
</div>\
<div id="error_message">\
</div>\
<input type="number" name="amount" id="withdraw_amount" value="0" required="required" class="error">\
</input> ' + code_upper + 
'<div class="tab_header_modified">\
Withdraw fee\
</div>\
<div class="tab_description">\
' + withdraw_fee + ' ' + code_upper + 
'</div>\
<div class="tab_header_modified">\
Net Withdraw amount\
</div>\
<div class="tab_description" id="net_withdraw_amount">\
0.000000 ' + code_upper + 
'</div>\
<div class="tab_header_modified" >\
' + code_upper + ' Withdrawal Address\
</div>\
<input type="text" id="withdrawal_address" style="width: 300px" required="required" class="error">\
</input>\
<div class="tab_header_modified" >\
Confirm Password\
</div>\
<input type="password" name="amount" id="withdraw_password" required="required" class="error">\
</input>\
<div class="tab_description">\
Please ensure all details are correct before submitting. Every request must be confirmed by email \
before it will be processed, most withdrawals are processed within 10 minutes of email confirmation. For \
security reasons, larger withdrawals can take longer as they may require manual verification. \
</div>\
<button type="button" class="btn btn-primary" id="withdraw_button" style="margin-top: 30px; margin-bottom: 100px">Withdraw</button>';
//alert(string);

//$('#below_tab_wrapper').empty();
$('#below_tab_wrapper').append(string);




//alert('here');
    $('#withdraw_amount').on('change', function () {
      withdraw_amount = $('#withdraw_amount').val();
      //alert('test');
      //alert($('#withdraw_amount').val());
      //alert($('#error_message').html());
      if (withdraw_amount > balance){
      if ($('#error_message').html().length < 3)
      $('#error_message').append('Withdraw amount must be equal to or less than your available balance.');
      }
      else if (withdraw_amount - withdraw_fee <=0){
      if ($('#error_message').html().length < 3)
      $('#error_message').append('Your net withdraw amount is less than or equal to 0. Please enter a greater amount.');
      if ($('#error_message').html().substr(0,3) == 'Wit'){
        $('#error_message').empty();
        $('#error_message').append('Your net withdraw amount is less than or equal to 0. Please enter a greater amount.');
      }


      }    
      else  {
      $('#error_message').empty();
      $('#net_withdraw_amount').html(withdraw_amount - 1)

      }
  });


    $('#withdraw_button').click(function(){
        amount = $('#withdraw_amount').val();
        address = $('#withdrawal_address').val();
        password = $('#withdraw_password').val();

        if ($('#error_message').html().length > 3)
        $("html, body").animate({ scrollTop: 0 }, "slow");

        else{

        email = localStorage.getItem('email');
        //alert(email);
        $.ajax({
          url: "/withdraw",
          type: "POST",
          data: {amount: amount, address: address, password: password, email: email, coin_name: coin_name},
          dataType: "html"
        }).done(function(data){
                    //alert(data);
          if (data == "withdraw"){


          string = '<div class="box_green"><span><span id="deposit_address">\
          <span style="font-weight: bold">Success!</span><br>\
          Your withdrawal request has now been added, please confirm by email and we will then process it.</span></span></div>\
          </div>';

          $('.box').before(string);        

          $("html, body").animate({ scrollTop: 0 }, "slow");


          }

          else
          alert(data);

        });


        }

        //alert('here');
    });



  
  } */


function generate_withdrawals(){



    withdrawals = data.withdrawals;
    //alert(withdrawals);
    withdrawals_count = withdrawals.length;

//alert(deposits);

    string = '<div class="tab_description">\
Below is a list of withdrawals that you have made. \
Click the expander icon on the left of each row to reveal more details about the withdrawal. <br><br>\
To make a new withdrawal, please visit the Balances page and select the Withdraw option under the actions menu for the coin. \
<br><br>\
Displaying deposits 1 - ' + withdrawals.length + ' of ' + withdrawals.length +
'</div>\
<table class="table table-bordered">\
        <thead>\
          <tr>\
            <th></th>\
            <th>TIME</th>\
            <th>COIN</th>\
            <th>AMOUNT</th>\
            <th>FEE</th>\
            <th>RECEIVING ADDRESS</th>\
            <th>STATUS</th>\
          </tr>\
        </thead><tbody>';


$.each(withdrawals, function(key,val){

var status;
if (val.pending == false)
  status = 'SUCCESSFUL';
else
  status = 'UNCONFIRMED';

    
    time = parseInt(val.time.toString().substring(0, val.time.toString().length - 3));
    
    array = moment.unix(time).toArray();
    var hi = moment.utc(array);
        //alert(hi);
    hi = hi.toString();
    index = hi.indexOf('GM');
    hi = hi.substr(0, index);
    withdrawal_time = hi;


if (val.txid == undefined)
  val.txid = 'Transaction is still unconfirmed. To confirm transaction, please check your email.';


substring = '<tr id="tab_row">\
 <td class="expander unclicked" id="' + val.txid + '"> </td><td class="tab_td">' + withdrawal_time + '</td>\
         <td class="tab_td">' + val.coin_ticker.toUpperCase() + '</td>        <td class="tab_td">' + val.amount + '</td>\
          <td class="tab_td">' + val.fee + '</td> <td class="tab_td">' + val.receiving_address + '</td> <td class="tab_td">' + status + '</td>\
</tr>';
string += substring;

});

string += '</tbody></table>'; 

return string;

$('.expander').click(function(){



class_name = $(this).attr('class');

if (class_name == 'expander unclicked'){
$(this).attr('class', 'expander clicked');
id = $(this).attr('id');
string = '<tr class="active">\
 <td  class="left_td"><span class="inner_td">Transaction Id: ' + id + '</span></td>\
</tr>';

$(this).parent().after(string);
}
else{
$(this).attr('class', 'expander unclicked');
$(this).parent().next().remove();

//$(this).parent().after().remove();
}

});




}




  if (document.URL.indexOf('withdrawal') != -1){

    $('#withdrawals_li').attr('class', 'active');

    withdrawals = data;
    //alert(withdrawals);
    withdrawals_count = withdrawals.length;

//alert(deposits);


    string = '<div class="tab_header">\
Coin Withdrawals\
</div>\
<div class="tab_description">\
Below is a list of withdrawals that you have made. \
Click the expander icon on the left of each row to reveal more details about the withdrawal. <br><br>\
To make a new withdrawal, please visit the Balances page and select the Withdraw option under the actions menu for the coin. \
<br><br>\
Displaying deposits 1 - ' + withdrawals.length + ' of ' + withdrawals.length +
'</div>\
<table class="table" id="tab_table">\
<tbody id="balance_tbody"><tr class="active">\
 <td></td>  <td class="active">TIME</td>\
   <td class="active">COIN</td>  <td class="active">AMOUNT</td>\
     <td class="active">FEE</td>    <td class="active">RECEIVING ADDRESS </td> <td class="active">STATUS</td></tr>';

//alert(string);

$.each(withdrawals, function(key,val){


});

$.each(withdrawals, function(key,val){
if (val.coin_ticker != undefined)
ticker_upper = val.coin_ticker.toUpperCase();
else ticker_upper = 'DOGE';
var status;
if (val.pending == false)
  status = 'SUCCESSFUL';
else
  status = 'UNCONFIRMED';

    
    time = parseInt(val.time.toString().substring(0, val.time.toString().length - 3));
    
    array = moment.unix(time).toArray();
    var hi = moment.utc(array);
        //alert(hi);
    hi = hi.toString();
    index = hi.indexOf('GM');
    hi = hi.substr(0, index);
    withdrawal_time = hi;


if (val.txid == undefined)
  val.txid = 'Transaction is still unconfirmed. To confirm transaction, please check your email.';


substring = '<tr id="tab_row">\
 <td class="expander unclicked" id="' + val.txid + '"> </td><td class="tab_td">' + withdrawal_time + '</td>\
         <td class="tab_td">' + ticker_upper + '</td>        <td class="tab_td">' + val.amount + '</td>\
          <td class="tab_td">' + val.fee + '</td> <td class="tab_td">' + val.receiving_address + '</td> <td class="tab_td">' + status + '</td>\
</tr>';
string += substring;

});

string += '</tbody></table>'; 

$('#below_tab_wrapper').append(string);


$('.expander').click(function(){



class_name = $(this).attr('class');

if (class_name == 'expander unclicked'){
$(this).attr('class', 'expander clicked');
id = $(this).attr('id');
string = '<tr class="active">\
 <td class="left_td"><span class="inner_td">Transaction Id: ' + id + '</span></td>\
</tr>';

$(this).parent().after(string);
}
else{
$(this).attr('class', 'expander unclicked');
$(this).parent().next().remove();

//$(this).parent().after().remove();
}

});




  }




// function generate_options_table(){



// selection = '';

// expiration_array = new Array(1404259200000, 1404950400000, 1407628800000, 1410307200000, 1412899200000, 1418169600000, 1425945600000, 1436486400000);



// $.each(expiration_array, function(key,val){
// expiration_group = key + 1;
// expiration_time = format_time(val);
//     sub = '<option value="'+ expiration_group + '">' + expiration_time +'</option>';
//     selection += sub;
// });

// //$('.select_expiration').html(selection);

// //alert(deposits);
// string ='';
// //<select class="form-control select_expiration" style="width:300px" >' + selection + '</select>
//     table_top = '<table class="table table-bordered"  style="margin-bottom:50px">\
//         <thead>\
//           <tr>\
//             <th>Option Name</th>\
//             <th>Type</th>\
//             <th>Bid</th>\
//             <th>Ask</th>\
//             <th>Extrinsic <br> Bid / Ask</th>\
//             <th>IV <br> Bid / Ask</th>\
//             <th>Volume</th>\
//             <th>Open Interest</th>\
//             <th>Strike</th>\
//             <th>Expiration</th>\
//           </tr>\
//         </thead><tbody>';

// //string += table_top;

// //alert(string);
// //alert(JSON.stringify(contracts));

// $.each(contracts, function(key,val){


// if (val.bid == null){
// bid = 'n/a';
// intrinsic_bid = 'n/a'
// extrinsic_bid = 'n/a';

// }
// else{
// bid = val.bid;
// intrinsic_bid = val.intrinsic_bid;
// extrinsic_bid = val.extrinsic_bid;



// }


// if (val.ask == null){
// ask = 'n/a';
// intrinsic_ask = 'n/a';
// extrinsic_ask = 'n/a';
// }
// else{
// ask = val.ask;
// intrinsic_ask  = val.intrinsic_ask;
// extrinsic_ask = val.extrinsic_ask;
// }

// volume = 0;
// open_interest = 0;
// strike_price = val.strike_price;




// expiration_time = format_time(val.expiration_time);

// substring = '';


// if (key%10 == 0){
// group = (key/10) + 1;
// console.log(key);
// console.log(selection);
// substring = '';

// if (key!=0)
// substring += '<span style="text-align: left; margin-left: 0px !important">Select by expiration time:</span> <br> <select class="form-control select_expiration" style="width:300px" >' + selection + '</select>';

// substring += table_top + '<tr id="tab_row" style="margin-bottom: 30px" group="' + group + '">\
//         <td class="tab_td_order"><a class="contract_page_href" short_symbol="' + val.short_symbol + '">' + val.short_symbol + '</td>\
//         <td class="tab_td_order">' + val.option_type.toUpperCase() + '</td>\
//         <td class="tab_td_order">' + bid + '</td>\
//         <td class="tab_td_order">' + ask + '</td>\
//         <td class="tab_td_order">' + extrinsic_bid + '<br>' + extrinsic_ask + '</td>\
//         <td class="tab_td_order">' + intrinsic_bid + '<br>' + intrinsic_ask + '</td>\
//         <td class="tab_td_order">' + volume + '</td>\
//         <td class="tab_td_order">' + open_interest  + '</td>\
//         <td class="tab_td_order">' + strike_price + '</td>\
//         <td class="tab_td_order">' + expiration_time + '</td>\
// </tr>';
// //alert(substring);
// }
// else{
// substring = '<tr id="tab_row">\
//         <td class="tab_td_order"><a class="contract_page_href" short_symbol="' + val.short_symbol + '">' + val.short_symbol + '</td>\
//         <td class="tab_td_order">' + val.option_type.toUpperCase() + '</td>\
//         <td class="tab_td_order">' + bid + '</td>\
//         <td class="tab_td_order">' + ask + '</td>\
//         <td class="tab_td_order">' + extrinsic_bid + '<br>' + extrinsic_ask + '</td>\
//         <td class="tab_td_order">' + intrinsic_bid + '<br>' + intrinsic_ask + '</td>\
//         <td class="tab_td_order">' + volume + '</td>\
//         <td class="tab_td_order">' + open_interest  + '</td>\
//         <td class="tab_td_order">' + strike_price + '</td>\
//         <td class="tab_td_order">' + expiration_time + '</td>\
// </tr>';  

// }
// string += substring; 







// //}

// });

// string += '</tbody></table>'; 



// return string;



// }



function generate_contract_table(){


start_time = format_time(contract.start_time);
end_time = format_time(contract.expiration_time);
max_price_change = contract.max_price_change * 100; //percent

    string = '<table class="table table-bordered contract_table"><tbody><tr class="contract_row">\
        <td class="td_contract_left">Full Symbol</td>\
        <td class="td_contract">' + contract.full_symbol + '</td>\
        </tr>\
        <tr class="contract_row">\
        <td class="td_contract_left">Short Symbol</td>\
        <td class="td_contract">' + contract.short_symbol + '</td>\
        </tr>\
        <tr class="contract_row">\
        <td class="td_contract_left">Type</td>\
        <td class="td_contract">Call option on the Bitcoin - US dollar exchange rate.</td>\
        </tr>\
        <tr class="contract_row">\
        <td class="td_contract_left">Tick Size (R)</td>\
        <td class="td_contract">$.01</td>\
        </tr>\
        <tr class="contract_row">\
        <td class="td_contract_left">Tick value (W)</td>\
        <td class="td_contract">$10</td>\
        </tr>\
        <tr class="contract_row">\
        <td class="td_contract_left">Fees</td>\
        <td class="td_contract">No trading fees! Subject to change in future.</td>\
        </tr>\
        <tr class="contract_row">\
        <td class="td_contract_left">Trading starts</td>\
        <td class="td_contract">' + start_time + '</td>\
        </tr>\
        <tr class="contract_row">\
        <td class="td_contract_left">Settlement date</td>\
        <td class="td_contract">' + end_time+ '</td>\
        </tr>\
        <tr class="contract_row">\
        <td class="td_contract_left">Strike price</td>\
        <td class="td_contract">' + contract.strike_price + ' USD</td>\
        </tr>\
        <tr class="contract_row">\
        <td class="td_contract_left">Max price change during one trading session</td>\
        <td class="td_contract">±' + max_price_change + '%  relative to the close price of the last trading session. Subject to change.' + '</td>\
        </tr>\
        <tr class="contract_row">\
        <td class="td_contract_left">Variation Margin</td>\
        <td class="td_contract">VM = -(PriceClose - PriceOpen) * W/R, where PriceClose and PriceOpen are calculated in BTC as 1/Price_in_USD</td>\
        </tr>\
</tr></tbody></table>'; 
//alert(string);
return string;



}






function generate_profile(){

string = '<h4>Change Password </h4><br> You can change your password using the form below. Only enter a new password if you wish to change it.<br>\
<br><div style="max-width:500px"><table class="table table-bordered">\
        <tbody>\
          <tr>\
            <td class="col-md-3" style="background: #eee">Password</td>\
            <td><input style="width: 100%" id="change_pass" type="password"></td></tr>\
                      <tr>\
            <td style="background: #eee" > Confirm Password</td>\
            <td><input style="width: 100%" id="confirm_change_pass"  type="password"></td></tr>\
            </tbody></table><button type="button" class="btn btn-default" id="change_password">Change Password</button></div>';

return string;


}





function generate_orders(){

    $('#orders_li').attr('class', 'active');

    orders = data.orders;
    //alert(withdrawals);
    order_count = orders.length;

//alert(deposits);



//second part
string = '<div class="tab_description">\
Below is a list of orders that you have made. \
Any completed orders will show up under trade history. <br><br>\
Displaying currency trading orders 1 - ' + orders.length + ' of ' + orders.length +
'</div>\
<table class="table table-bordered">\
        <thead>\
          <tr>\
            <th>ORDER ID</th>\
            <th>TYPE</th>\
            <th>MARKET</th>\
            <th>TIME</th>\
            <th>PRICE</th>\
            <th>AMOUNT</th>\
            <th>TOTAL</th>\
            <th>FEE</th>\
            <th>NET TOTAL</th>\
            <th></th>\
          </tr>\
        </thead><tbody>';


$.each(orders, function(key,val){

/*"time" : 1400544396647, "coin_one_ticker" : "doge", "coin_two_ticker" : "btc", "side" : "ask", "price" : 150, "quantity" : 1, "quantity_left" : 1, 
"user" : ObjectId("5377ff1015a0a90000000001"), "_id" : ObjectId("537a9c8cec45c0b264000001"), "pending" : "pending"
*/

if (val.pending == 'pending' && val.swap == true){



/*"time" : 1400544396647, "coin_one_ticker" : "doge", "coin_two_ticker" : "btc", "side" : "ask", "price" : 150, "quantity" : 1, "quantity_left" : 1, 
"user" : ObjectId("5377ff1015a0a90000000001"), "_id" : ObjectId("537a9c8cec45c0b264000001"), "pending" : "pending"
*/
if (val.type == 'ask')
  type = 'SELL';
else
  type = 'BUY';


    
    time = parseInt(val.time.toString().substring(0, val.time.toString().length - 3));
    
    array = moment.unix(time).toArray();
    var hi = moment.utc(array);
        //alert(hi);
    hi = hi.toString();
    index = hi.indexOf('GM');
    hi = hi.substr(0, index);
    order_time = hi;



substring = '<tr id="tab_row">\
        <td class="tab_td_order">' + val._id + '</td>\
        <td class="tab_td_order">' + type + '</td>\
        <td class="tab_td_order">' + val.coin_one_ticker.toUpperCase() + '/' + val.coin_two_ticker.toUpperCase() + '</td>\
        <td class="tab_td_order">' + order_time + '</td>\
        <td class="tab_td_order">' + val.price + '</td>\
        <td class="tab_td_order">' + (val.quantity - val.quantity_left) + '</td>\
        <td class="tab_td_order">' + (val.quantity - val.quantity_left)  * val.price + '</td>\
        <td class="tab_td_order">' + '0.00' + '</td>\
        <td class="tab_td_order">' + (val.quantity - val.quantity_left)  * val.price + '</td>\
        <td class="tab_td_order">\
        <a class="cancel_alt_order" href="#" order_id="' + val._id + '">\
        <img src="' + prefix + 'img/delete.png"   alt="Cancel"  class="2x" width="16" style="margin-left: 14px"><br>  Cancel </a>\
        </td>\
</tr>';
string += substring;


}

});

string += '</tbody></table><br><br>'; 




    string += 'Displaying derivatives orders 1 - ' + orders.length + ' of ' + orders.length + '<table class="table table-bordered">\
        <thead>\
          <tr>\
            <th>ORDER ID</th>\
            <th>CALL / PUT</th>\
            <th>TYPE</th>\
            <th>OPTION NAME</th>\
            <th>TIME</th>\
            <th>PRICE</th>\
            <th>AMOUNT</th>\
            <th>TOTAL</th>\
            <th>FEE</th>\
            <th>NET TOTAL</th>\
            <th></th>\
          </tr>\
        </thead><tbody>';


//alert(string);


$.each(orders, function(key,val){

/*"time" : 1400544396647, "coin_one_ticker" : "doge", "coin_two_ticker" : "btc", "side" : "ask", "price" : 150, "quantity" : 1, "quantity_left" : 1, 
"user" : ObjectId("5377ff1015a0a90000000001"), "_id" : ObjectId("537a9c8cec45c0b264000001"), "pending" : "pending"
*/

if (val.pending == 'pending' && val.swap == false){

//if ( (val.pending == 'pending' || val.pending == 'complete') && val.quantity_left != 0){

  console.log(val);
if (val.side == 'ask')
  type = 'SELL';
else
  type = 'BUY';




    
    time = parseInt(val.time.toString().substring(0, val.time.toString().length - 3));
    
    array = moment.unix(time).toArray();
    var hi = moment.utc(array);
        //alert(hi);
    hi = hi.toString();
    index = hi.indexOf('GM');
    hi = hi.substr(0, index);
    order_time = hi;

console.log(val._id);
console.log(val);
substring = '<tr id="tab_row">\
        <td class="tab_td_order">' + val._id + '</td>\
        <td class="tab_td_order">' + val.call_put + '</td>\
        <td class="tab_td_order">' + type + '</td>\
        <td class="tab_td_order">' + val.coin_one_ticker.toUpperCase() + '/' + 'BTC' + '/' + val.strike + '/<br>' + val.expiration_time  +'</td>\
        <td class="tab_td_order">' + order_time + '</td>\
        <td class="tab_td_order">' + val.price  + '</td>\
        <td class="tab_td_order">' + (val.quantity_left).toPrecision(5)  + '</td>\
        <td class="tab_td_order">' + ((val.quantity_left) * val.price  ).toPrecision(5) + '</td>\
        <td class="tab_td_order">0.0000000</td>\
        <td class="tab_td_order">' + ((val.quantity_left) * val.price  ).toPrecision(5)  + '</td>\
        <td class="tab_td_order">\
        <a class="cancel_order" href="#" order_id="' + val._id + '">\
        <img src="' + prefix + 'img/delete.png"  alt="Cancel" class="2x" width="16" style="margin-left: 14px"><br>  Cancel </a>\
        </td>\
</tr>';
string += substring;

}

});

string += '</tbody></table><br><br>'; 





// alert('here');
// console.log('here 2');


// console.log('here 2');



return string;


}


function generate_trade_history(){


    orders = data.orders;
    console.log('AHA ' + JSON.stringify(orders));
    //alert(withdrawals);
    order_count = orders.length;

//alert(deposits);
length = 0;
$.each(orders, function(key,val){
if (val.pending == 'complete')
  length ++;
else if (val.pending == 'pending' && (val.quantity != val.quantity_left))
  length++;

});


    string = '<div class="tab_description">\
Below is a list of completed currency trading orders that you have made. \
Any pending orders will show up under \'Your Orders\'. <br><br>\
Displaying orders 1 - ' + length + ' of ' + length +
'</div>\
<table class="table table-bordered">\
        <thead>\
          <tr>\
            <th>ORDER ID</th>\
            <th>TYPE</th>\
            <th>MARKET</th>\
            <th>TIME</th>\
            <th>PRICE</th>\
            <th>AMOUNT</th>\
            <th>TOTAL</th>\
            <th>FEE</th>\
            <th>NET TOTAL</th>\
          </tr>\
        </thead><tbody>';


//alert(string);


$.each(orders, function(key,val){
  console.log(JSON.stringify(val));

/*"time" : 1400544396647, "coin_one_ticker" : "doge", "coin_two_ticker" : "btc", "side" : "ask", "price" : 150, "quantity" : 1, "quantity_left" : 1, 
"user" : ObjectId("5377ff1015a0a90000000001"), "_id" : ObjectId("537a9c8cec45c0b264000001"), "pending" : "pending"
*/
  //console.log('ah ' + JSON.stringify(val));
if (val.swap == true){
if ( val.pending == 'complete'){

  //console.log('ah ' + JSON.stringify(val));
if (val.side == 'ask')
  type = 'SELL';
else
  type = 'BUY';


    
    time = parseInt(val.time.toString().substring(0, val.time.toString().length - 3));
    
    array = moment.unix(time).toArray();
    var hi = moment.utc(array);
        //alert(hi);
    hi = hi.toString();
    index = hi.indexOf('GM');
    hi = hi.substr(0, index);
    order_time = hi;

substring = '<tr id="tab_row">\
        <td class="tab_td_order">' + val._id + '</td>\
        <td class="tab_td_order">' + type + '</td>\
        <td class="tab_td_order">' + val.coin_one_ticker.toUpperCase() + '/' + val.coin_two_ticker.toUpperCase() + '</td>\
        <td class="tab_td_order">' + order_time + '</td>\
        <td class="tab_td_order">' + val.price + '</td>\
        <td class="tab_td_order">' + val.quantity + '</td>\
        <td class="tab_td_order">' + val.quantity * val.price + '</td>\
        <td class="tab_td_order">' + '0.00' + '</td>\
        <td class="tab_td_order">' + val.quantity * val.price  + '</td>\
</tr>';
string += substring;

}
}

});

string += '</tbody></table>'; 







// second part


    string += '<br><br><br><div class="tab_description">\
Below is a list of completed derivatives orders that you have made. \
Any pending orders will show up under \'Your Orders\'. <br><br>\
Displaying orders 1 - ' + length + ' of ' + length +
'</div>\
<table class="table table-bordered">\
        <thead>\
          <tr>\
            <th>ORDER ID</th>\
            <th>PUT / CALL</th>\
            <th>TYPE</th>\
            <th>OPTION NAME</th>\
            <th>TIME</th>\
            <th>PRICE</th>\
            <th>AMOUNT</th>\
            <th>TOTAL</th>\
            <th>FEE</th>\
            <th>NET TOTAL</th>\
            <th>STATUS</th>\
          </tr>\
        </thead><tbody>';


//alert(string);


$.each(orders, function(key,val){
  console.log(JSON.stringify(val));

/*"time" : 1400544396647, "coin_one_ticker" : "doge", "coin_two_ticker" : "btc", "side" : "ask", "price" : 150, "quantity" : 1, "quantity_left" : 1, 
"user" : ObjectId("5377ff1015a0a90000000001"), "_id" : ObjectId("537a9c8cec45c0b264000001"), "pending" : "pending"
*/
  //console.log('ah ' + JSON.stringify(val));
if (val.swap == false){
if ( val.pending == 'complete' || (val.pending == 'pending' && (val.quantity != val.quantity_left)) || val.pending == 'exercised' || val.pending == 'expired' || (val.pending == 'cancelled' && val.quantity != val.quantity_left)){

  //console.log('ah ' + JSON.stringify(val));
if (val.side == 'ask')
  type = 'SELL';
else
  type = 'BUY';

var status;



    
    time = parseInt(val.time.toString().substring(0, val.time.toString().length - 3));
    
    array = moment.unix(time).toArray();
    var hi = moment.utc(array);
        //alert(hi);
    hi = hi.toString();
    index = hi.indexOf('GM');
    hi = hi.substr(0, index);
    order_time = hi;

//console.log(val._id);
processed = val.quantity - val.quantity_left;
//var status = '';


if (val.pending == 'pending' || val.pending == 'cancelled')
status = 'NOT EXERCISED YET';
else if (val.pending == 'expired')
status = 'EXPIRED';
else status = 'EXERCISED';


if ( (val.quantity == val.quantity_original )  && val.swap == false ){
substring = '<tr id="tab_row">\
        <td class="tab_td_order">' + val._id + '</td>\
        <td class="tab_td_order">' + val.call_put + '</td>\
        <td class="tab_td_order">' + type + '</td>\
        <td class="tab_td_order">' + val.coin_one_ticker.toUpperCase() + '/' + 'BTC/' + val.call_put + '/<br>' + val.expiration_time + '</td>\
        <td class="tab_td_order">' + order_time + '</td>\
        <td class="tab_td_order">' + (val.price).toPrecision(5)  + '</td>\
        <td class="tab_td_order">' + (val.quantity - val.quantity_left).toPrecision(5)   + '</td>\
        <td class="tab_td_order">' + (val.price * (val.quantity - val.quantity_left)).toPrecision(5)  + '</td>\
        <td class="tab_td_order">0.0000</td>\
        <td class="tab_td_order">' + (val.price * (val.quantity - val.quantity_left)).toPrecision(5) + '</td>\
        <td class="tab_td_order">' + status + '</td>\
</tr>';
string += substring;
}
else{

exercised_amount = val.quantity_original - val.quantity;
unexercised_amount = parseFloat(val.quantity) - parseFloat(val.quantity_left);

substring = '<tr id="tab_row">\
        <td class="tab_td_order">' + val._id + '</td>\
        <td class="tab_td_order">' + val.call_put + '</td>\
        <td class="tab_td_order">' + type + '</td>\
        <td class="tab_td_order">' + val.coin_one_ticker.toUpperCase() + '/' + 'BTC/' + val.call_put + '/<br>' + val.expiration_time + '</td>\
        <td class="tab_td_order">' + order_time + '</td>\
        <td class="tab_td_order">' + (val.price).toPrecision(5)  + '</td>\
        <td class="tab_td_order">' + val.quantity.toPrecision(5)   + '</td>\
        <td class="tab_td_order">' + (val.price * val.quantity).toPrecision(5)  + '</td>\
        <td class="tab_td_order">0.0000</td>\
        <td class="tab_td_order">' + (val.price * val.quantity).toPrecision(5) + '</td>\
        <td class="tab_td_order">' + status + '</td>\
        <td class="tab_td_order">EXERCISED 1</td>\
</tr>\
<tr id="tab_row">\
        <td class="tab_td_order">' + val._id + '</td>\
        <td class="tab_td_order">' + val.call_put + '</td>\
        <td class="tab_td_order">' + type + '</td>\
        <td class="tab_td_order">' + val.coin_one_ticker.toUpperCase() + '/' + 'BTC/' + val.call_put + '/<br>' + val.expiration_time + '</td>\
        <td class="tab_td_order">' + order_time + '</td>\
        <td class="tab_td_order">' + (val.price).toPrecision(5)  + '</td>\
        <td class="tab_td_order">' + val.quantity.toPrecision(5)   + '</td>\
        <td class="tab_td_order">' + (val.price * val.quantity).toPrecision(5)  + '</td>\
        <td class="tab_td_order">0.0000</td>\
        <td class="tab_td_order">' + (val.price * val.quantity).toPrecision(5) + '</td>\
        <td class="tab_td_order">' + status + '</td>\
        <td class="tab_td_order">NOT EXERCISED YET 1 </td>\
</tr>';





string += substring;

}


}
}

});

string += '</tbody></table>'; 







return string;






}



function generate_exercise_options(){


    orders = data.orders;
    //alert(withdrawals);
    order_count = orders.length;

//alert(deposits);
length = 0;
$.each(orders, function(key,val){
if (val.pending == 'completed')
  length ++;
else if (val.pending == 'pending' && (val.quantity != val.quantity_left))
  length++;

});



    string = '<div class="tab_description">\
Below is a list of options that you can exercise. \
Displaying options 1 - ' + length + ' of ' + length +
'</div>\
<table class="table">\
        <thead>\
          <tr>\
            <th>ORDER ID</th>\
            <th>PUT / CALL</th>\
            <th>TYPE</th>\
            <th>OPTION NAME</th>\
            <th>TIME</th>\
            <th>PRICE</th>\
            <th>AMOUNT</th>\
            <th>TOTAL</th>\
            <th>FEE</th>\
            <th>NET TOTAL</th>\
            <th></th>\
          </tr>\
        </thead><tbody>';


//alert(string);


$.each(orders, function(key,val){
  console.log(JSON.stringify(val));

/*"time" : 1400544396647, "coin_one_ticker" : "doge", "coin_two_ticker" : "btc", "side" : "ask", "price" : 150, "quantity" : 1, "quantity_left" : 1, 
"user" : ObjectId("5377ff1015a0a90000000001"), "_id" : ObjectId("537a9c8cec45c0b264000001"), "pending" : "pending"
*/
  //console.log('ah ' + JSON.stringify(val));
if (val.swap == false && val.side == 'bid' && (val.pending == 'complete' || (val.pending == 'cancelled' && val.quantity != val.quantity_left) || (val.pending == 'pending' && (val.quantity != val.quantity_left))) ){

  //console.log('ah ' + JSON.stringify(val));
if (val.side == 'ask')
  type = 'SELL';
else
  type = 'BUY';


    
    time = parseInt(val.time.toString().substring(0, val.time.toString().length - 3));
    
    array = moment.unix(time).toArray();
    var hi = moment.utc(array);
        //alert(hi);
    hi = hi.toString();
    index = hi.indexOf('GM');
    hi = hi.substr(0, index);
    order_time = hi;

//console.log(val._id);
processed = val.quantity - val.quantity_left;

substring = '<tr id="tab_row">\
        <td class="tab_td_order">' + val._id + '</td>\
        <td class="tab_td_order">' + val.call_put + '</td>\
        <td class="tab_td_order">' + type + '</td>\
        <td class="tab_td_order">' + val.coin_one_ticker.toUpperCase() + '/' + 'BTC/' + val.call_put + '/<br>' + val.expiration_time + '</td>\
        <td class="tab_td_order">' + order_time + '</td>\
        <td class="tab_td_order">' + (val.price).toPrecision(5)  + '</td>\
        <td class="tab_td_order">' + (val.quantity - val.quantity_left).toPrecision(5)   + '</td>\
        <td class="tab_td_order">' + (val.price * (val.quantity - val.quantity_left)).toPrecision(5)  + '</td>\
        <td class="tab_td_order">0.0000</td>\
        <td class="tab_td_order">' + (val.price * (val.quantity - val.quantity_left)).toPrecision(5) + '</td>\
        <td class="tab_td_order"><a class="exercise_option" href="#" order_id="' + val._id + '">        <img src="' + prefix + 'img/check.png" alt="Exercise" class="2x" width="16" style="margin-left: 20px"><br>  Exercise </a></td>\
</tr>';
string += substring;

}

});

string += '</tbody></table>'; 





return string;






}




  if (document.URL.indexOf('orders') != -1){

    $('#orders_li').attr('class', 'active');

    orders = data;
    //alert(withdrawals);
    order_count = orders.length;

//alert(deposits);


    string = '<div class="tab_header">\
Open Orders\
</div>\
<div class="tab_description">\
Below is a list of orders that you have made. \
Any completed orders will show up under trade history. <br><br>\
Displaying orders 1 - ' + orders.length + ' of ' + orders.length +
'</div>\
<table class="table" id="tab_table">\
<tbody id="balance_tbody"><tr class="active"> <td span="1">ORDER ID</td>\
   <td span="1">TYPE</td>  <td span="1">MARKET</td>\
     <td span="1">TIME</td>    <td class="col-md-1">PRICE</td> <td class="col-md-1">AMOUNT</td>\
     <td class="col-md-1">TOTAL</td><td class="col-md-1">FEE</td><td class="col-md-1">NET TOTAL</td class="col-md-1"><td class="col-md-1"> </td></tr>';

//alert(string);


$.each(orders, function(key,val){

/*"time" : 1400544396647, "coin_one_ticker" : "doge", "coin_two_ticker" : "btc", "side" : "ask", "price" : 150, "quantity" : 1, "quantity_left" : 1, 
"user" : ObjectId("5377ff1015a0a90000000001"), "_id" : ObjectId("537a9c8cec45c0b264000001"), "pending" : "pending"
*/
if (val.side == 'ask')
  type = 'SELL';
else
  type = 'BUY';


    
    time = parseInt(val.time.toString().substring(0, val.time.toString().length - 3));
    
    array = moment.unix(time).toArray();
    var hi = moment.utc(array);
        //alert(hi);
    hi = hi.toString();
    index = hi.indexOf('GM');
    hi = hi.substr(0, index);
    order_time = hi;



substring = '<tr id="tab_row">\
        <td class="tab_td_order">' + val._id + '</td>\
        <td class="tab_td_order">' + type + '</td>\
        <td class="tab_td_order">' + val.coin_one_ticker.toUpperCase() + '/' + val.coin_two_ticker.toUpperCase() + '</td>\
        <td class="tab_td_order">' + order_time + '</td>\
        <td class="tab_td_order">' + val.price + '</td>\
        <td class="tab_td_order">' + val.quantity + '</td>\
        <td class="tab_td_order">' + val.quantity * val.price + '</td>\
        <td class="tab_td_order">' + '.015' + '</td>\
        <td class="tab_td_order">' + val.quantity * val.price * .015 + '</td>\
        <td class="tab_td_order">\
        <a class="cancel_order" href="#" order_id="' + val._id + '">\
        <img src="https://www.GenesisBlock.com/assets/images/icons/delete.png"  alt="Cancel" class="2x" width="16"><br>  Cancel </a>\
        </td>\
</tr>';
string += substring;

});

string += '</tbody></table>'; 

$('#below_tab_wrapper').append(string);




add_cancel_order_handler();









  }





  if (document.URL.indexOf('options') != -1){


    $.each(expiration_array, function(key,val){
    expiration_group = key + 1;
    expiration_time = format_time(val);
    sub = '<option value="'+ expiration_group + '">' + expiration_time +'</option>';
    selection += sub;
    });






  }





  if (document.URL.indexOf('altmarket') != -1){


    coin_one_ticker_upper = coin_one_ticker.toUpperCase();
    coin_two_ticker_upper = coin_two_ticker.toUpperCase();

    coin_one_name_modified = coin_one_name.substr(0,1).toUpperCase() + coin_one_name.substr(1,coin_one_name.length);
    coin_two_name_modified = coin_two_name.substr(0,1).toUpperCase() + coin_two_name.substr(1,coin_two_name.length);

    coin_one_ticker_modified = coin_one_ticker.substr(0,1).toUpperCase() + coin_one_ticker.substr(1,coin_one_ticker.length);
    coin_two_ticker_modified = coin_two_ticker.substr(0,1).toUpperCase() + coin_two_ticker.substr(1,coin_two_ticker.length);

    last_price = last_price.toPrecision(9);
    low_price = low_price.toPrecision(9);
    high_price = high_price.toPrecision(9);
    volume = volume.toPrecision(9);

    coin_one_balance = coin_one_balance.toPrecision(9);
    coin_two_balance = coin_two_balance.toPrecision(9);

    min_order = 1;
    order_fee = 0;



    if ( pending_asks == null){
      pending_asks = new Array();
      obj = new Object();
      obj.price = 0;
      obj.quantity_left = 0;
      pending_asks.push(obj);
    }

    if (pending_bids == null){
      pending_bids = new Array();
      obj = new Object();
      obj.price = 0;
      obj.quantity_left = 0;
      pending_bids.push(obj);
    }




    string = '<div id="top_header">\
    <div id="left_header">\
    <div id="trade_pair_header">' 
    + coin_one_ticker_upper + '/' + coin_two_ticker_upper +
    '</div>'
    + coin_one_name_modified + '/' + coin_two_name_modified + 
    '</div>\
    <div id="right_header">\
    <div class="stat">\
    <span class="title">LAST PRICE</span>\
    <br>\
    <strong>\
    <span id="span_last_price" class="">' + last_price + '</span>\
    </strong>\
    </div>\
    <div class="stat">\
    <span class="title">24 HR HIGH</span>\
    <br>\
    <strong>\
    <span id="span_24_high" class="">' + high_price + '</span>\
    </strong>\
    </div>\
    <div class="stat">\
    <span class="title">24 HR LOW</span>\
    <br>\
    <strong>\
    <span id="span_24_low" class="">' + low_price + '</span>\
    </strong>\
    </div>\
    <div class="stat unbordered">\
    <span class="title">24 HR VOLUME</span>\
    <br>\
    <strong>\
    <span id="span_24_low" class="">' + volume + ' ' + coin_two_ticker_upper + '</span>\
    </strong>\
    </div>\
    </div>\
    </div>\
    <div style="clear:right;"></div>\
    <div id="chartdiv" style="width:85%; height:600px; margin-top: 60px"></div>\
    <div id="buy_sell">\
    <div id="col1">\
    <h3>Buy ' + coin_one_ticker_modified + '</h3>\
    <div id="error_message"></div>';

    if (activated)
    string += '<div class="success box">Your ' + coin_two_ticker_upper + ' balance is <strong><a href="asdf" id="coin_two_balance" class="exchange_balance">' + coin_two_balance + '</a></strong>.</div>';
    
    string += '<div class="box options">\
                <span class="label_style">Amount:</span> <input type="number" id="bid_quantity" name="amount" value="0.00000000" class="required"> ' + coin_one_ticker_upper + '<br>\
                <span class="label_style">Price Per ' + coin_one_ticker_upper + ':</span> <input type="number" id="bid_price" name="price" value="' + pending_asks[0].price.toPrecision(9) + '" class="required"> ' + coin_two_ticker_upper + '<br>\
                <span class="label_style">Total:</span> <span class="total" id="buy_total">' + pending_asks[0].price.toPrecision(9) + '</span> <br>\
                <span class="label_style">Trading Fee:</span> <span class="fee" id="buy_fee">0.00000000</span> BTC (' + (10 * order_fee).toPrecision(2) +  '%)<br>\
                <span class="label_style">Net Total:</span> <span class="netTotalBuy" >' + pending_asks[0].price.toPrecision(9) + '</span> ' + coin_two_ticker_upper + 
                '           <input type="hidden" name="buyNetTotal" id="buy_net_total" value="' + pending_asks[0].price.toPrecision(9) + '" class="required">\
    </div>\
    <button type="button" class="btn btn-primary" id="buy_order">Submit Buy Order</button>\
    <h3>Sell Orders </h3>\
    <div class="scroll_table">\
    <table class="table" id="sell_table">\
    <tbody>\
    <tr>\
                  <th>PRICE (' + coin_two_ticker_upper + ')</th>\
                  <th>' + coin_one_ticker_upper + '</th>\
                  <th>' + coin_two_ticker_upper + '</th>\
                </tr>';


    $.each(pending_asks, function(key,val){
    substring = '<tr price="0.00000103">\
    <td >' + val.price.toPrecision(9) + '</td>\
    <td >' + val.quantity_left.toPrecision(9) + '</td>\
    <td >' + (val.price * val.quantity_left).toPrecision(9) + '</td></tr>';
    string += substring;
    });


//alert(string);


    string += '</tbody>\
    </table>\
    </div>\
    </div>\
    <div id="col2">\
    <h3>Sell ' + coin_one_ticker_modified + '</h3>\
            <div id="error_message_sell"></div>';

    if (activated)
    string += '<div class="fail box">Your ' + coin_one_ticker_upper +' balance is <strong><a id="coin_one_balance" href="asdf" class="exchange_balance">' + coin_one_balance + '</a></strong>.</div>';
    
    string += '<div class="box options">\
                <span class="label_style">Amount:</span> <input type="number" id="ask_quantity" name="amount" value="0.00000000" class="required"> ' + coin_one_ticker_upper + '<br>\
                <span class="label_style">Price Per ' + coin_one_ticker_upper + ':</span> <input type="number" id="ask_price" name="price" value="' + pending_bids[0].price.toPrecision(9) + '" class="required"> ' + coin_two_ticker_upper + '<br>\
                <span class="label_style">Total:</span> <span class="total" id="buy_total">' + pending_bids[0].price.toPrecision(9) + '</span> <br>\
                <span class="label_style">Trading Fee:</span> <span class="fee" id="buy_fee">0.00000000</span> BTC (' + (10 * order_fee).toPrecision(2) +  '%)<br>\
                <span class="label_style">Net Total:</span> <span class="netTotalSell" >' + pending_bids[0].price.toPrecision(9) + '</span> ' + coin_two_ticker_upper + 
                '           <input type="hidden" name="buyNetTotal" id="buy_net_total" value="' + pending_bids[0].price.toPrecision(9) + '" class="required">\
              </div>\
    <button type="button" class="btn btn-primary" id="ask_submit">Submit Sell Order</button>\
    <h3>Buy Orders </h3>\
    <div class="scroll_table">\
    <table class="table" id="sell_table">\
    <tbody>\
    <tr>\
                  <th>PRICE (' + coin_two_ticker_upper + ')</th>\
                  <th>' + coin_one_ticker_upper + '</th>\
                  <th>' + coin_two_ticker_upper + '</th>\
                </tr>';

    $.each(pending_bids, function(key,val){
    substring = '<tr price="0.00000103">\
    <td >' + val.price.toPrecision(9) + '</td>\
    <td >' + val.quantity_left.toPrecision(9) + '</td>\
    <td >' + (val.price * val.quantity_left).toPrecision(9) + '</td></tr>';
    string += substring;
    });


    string += '</tbody>\
    </table>\
    </div>\
    </div>\
    </div>';




$('.inner_content').append(string);



add_price_handlers();

add_order_handlers();



  }




if (document.URL.indexOf('optmarket') != -1 && document.URL.indexOf('altmarket') == -1 ){



    coin_one_ticker_upper = coin_one_ticker.toUpperCase();
    coin_two_ticker_upper = coin_two_ticker.toUpperCase();

    coin_one_name_modified = coin_one_name.substr(0,1).toUpperCase() + coin_one_name.substr(1,coin_one_name.length);
    coin_two_name_modified = coin_two_name.substr(0,1).toUpperCase() + coin_two_name.substr(1,coin_two_name.length);

    coin_one_ticker_modified = coin_one_ticker.substr(0,1).toUpperCase() + coin_one_ticker.substr(1,coin_one_ticker.length);
    coin_two_ticker_modified = coin_two_ticker.substr(0,1).toUpperCase() + coin_two_ticker.substr(1,coin_two_ticker.length);

    last_price = last_price.toPrecision(9);
    low_price = low_price.toPrecision(9);
    high_price = high_price.toPrecision(9);
    volume = volume.toPrecision(9);
    strike = strike.toFixed(9);

    coin_one_balance = coin_one_balance.toPrecision(9);
    coin_two_balance = coin_two_balance.toPrecision(9);

    if (kind == 'CALL'){
      right = 'buy';
      inverse_right = 'sell';
      ticker_flagged = coin_one_ticker_upper;
      amount_flagged = coin_one_balance;
    }
    else{
      right = 'sell';
      inverse_right = 'buy';
      ticker_flagged = coin_two_ticker_upper;
      amount_flagged = coin_two_balance;
    }

    min_order = 1;
    order_fee = 0;



    if ( pending_asks == null){
      pending_asks = new Array();
      obj = new Object();
      obj.price = 0;
      obj.quantity_left = 0;
      pending_asks.push(obj);
    }

    if (pending_bids == null){
      pending_bids = new Array();
      obj = new Object();
      obj.price = 0;
      obj.quantity_left = 0;
      pending_bids.push(obj);
    }





    string = '<div id="top_header">\
    <div id="left_header" style= "margin-bottom: 10px">\
    <div id="trade_pair_header">' 
    + coin_one_ticker_upper + '/' + coin_two_ticker_upper + '/' + kind + '/<br>' + strike + 
    '</div>'
    + coin_one_name_modified + '/' + coin_two_name_modified + ' ' + kind + ' option' + ' with strike price of ' + strike + '<br> and expiration on ' + format_time(expiration) + 
    '</div>\
    <div id="right_header">\
    <div class="stat">\
    <span class="title">LAST PRICE</span>\
    <br>\
    <strong>\
    <span id="span_last_price" class="">' + last_price + '</span>\
    </strong>\
    </div>\
    <div class="stat">\
    <span class="title">24 HR HIGH</span>\
    <br>\
    <strong>\
    <span id="span_24_high" class="">' + high_price + '</span>\
    </strong>\
    </div>\
    <div class="stat">\
    <span class="title">24 HR LOW</span>\
    <br>\
    <strong>\
    <span id="span_24_low" class="">' + low_price + '</span>\
    </strong>\
    </div>\
    <div class="stat unbordered">\
    <span class="title">24 HR VOLUME</span>\
    <br>\
    <strong>\
    <span id="span_24_low" class="">' + volume + ' ' + coin_two_ticker_upper + '</span>\
    </strong>\
    </div>\
    </div>\
    </div>\
    <div style="clear:right;"></div>\
    <div id="chartdiv" style="width:85%; height:600px; margin-top: 60px"></div>\
    <div id="buy_sell">\
    <div id="col1">\
    <h3>Buy Option </h3>\
    <div id="error_message"></div>';

    if (activated)
    string += '<div class="success box">Your ' + coin_two_ticker_upper + ' balance is <strong><a href="asdf" id="coin_two_balance" class="exchange_balance">' + coin_two_balance + '</a></strong>.</div>';
    
    string += '<div class="box options">\
                <span class="label_style">Amount:</span> <input type="number" id="bid_quantity" name="amount" value="0.00000000" class="required"> options*<br>\
                <span class="label_style">Price Per option:</span> <input type="number" id="bid_price" name="price" value="' + pending_asks[0].price.toPrecision(9) + '" class="required"> ' + coin_two_ticker_upper + '<br>\
                <span class="label_style">Total:</span> <span class="total" id="buy_total">' + pending_asks[0].price.toPrecision(9) + '</span> <br>\
                <span class="label_style">Margin Requirement:</span> <span class="margin" id="margin">0.00000000</span> <br>\
                <span class="label_style">Trading Fee:</span> <span class="fee" id="buy_fee">0.00000000</span> BTC (' + (10 * order_fee).toPrecision(2) +  '%)<br>\
                <span class="label_style">Net Total:</span> <span class="netTotalBuy" >' + pending_asks[0].price.toPrecision(9) + '</span> ' + coin_two_ticker_upper + 
                '           <input type="hidden" name="buyNetTotal" id="buy_net_total" value="' + pending_asks[0].price.toPrecision(9) + '" class="required">\
    </div>\
     <div style="height: 50px"> *Right to ' + right + ' specified amount of ' +  coin_one_name_modified + 's for ' + strike + ' BTC each before expiration</div><button type="button" class="btn btn-primary" id="buy_order">Submit Buy Order</button>\
    <h3>Sell Orders </h3>\
    <div class="scroll_table">\
    <table class="table" id="sell_table">\
    <tbody>\
    <tr>\
                  <th>PRICE (' + coin_two_ticker_upper + ')</th>\
                  <th>' + coin_one_ticker_upper + '</th>\
                  <th>' + coin_two_ticker_upper + '</th>\
                </tr>';


    $.each(pending_asks, function(key,val){
    substring = '<tr price="0.00000103">\
    <td >' + val.price.toPrecision(9) + '</td>\
    <td >' + val.quantity_left.toPrecision(9) + '</td>\
    <td >' + (val.price * val.quantity_left).toPrecision(9) + '</td></tr>';
    string += substring;
    });


//alert(string);


    string += '</tbody>\
    </table>\
    </div>\
    </div>\
    <div id="col2">\
    <h3>Sell Option</h3>\
            <div id="error_message_sell"></div>';

    if (activated)
    string += '<div class="fail box">Your ' + ticker_flagged +' balance is <strong><a href="asdf"  id="coin_one_balance" class="exchange_balance">' + amount_flagged + '</a></strong>.</div>';
    
    string += '<div class="box options">\
                <span class="label_style">Amount:</span> <input type="number" id="ask_quantity" name="amount" value="0.00000000" class="required"> options*<br>\
                <span class="label_style">Price Per option:</span> <input type="number" id="ask_price" name="price" value="' + pending_bids[0].price.toPrecision(9) + '" class="required"> ' + coin_two_ticker_upper + '<br>\
                <span class="label_style">Total:</span> <span class="total" id="sell_total">' + pending_bids[0].price.toPrecision(9) + '</span> <br>\
                <span class="label_style">Margin Requirement:</span> <span class="margin_requirement" id="margin_requirement">0.00000000</span>  ' + ticker_flagged + '<br>\
                <span class="label_style">Trading Fee:</span> <span class="fee" id="buy_fee">0.00000000</span> BTC (' + (10 * order_fee).toPrecision(2) +  '%)<br>\
                <span class="label_style">Net Total:</span> <span class="netTotalSell" >' + pending_bids[0].price.toPrecision(9) + '</span> ' + coin_two_ticker_upper + 
                '           <input type="hidden" name="buyNetTotal" id="buy_net_total" value="' + pending_bids[0].price.toPrecision(9) + '" class="required">\
              </div>\
    <div style="height: 50px"> *You may be forced to ' + inverse_right + ' specified amount of ' +  coin_one_name_modified + 's for ' + strike + ' BTC each before expiration</div>\
    <button type="button" class="btn btn-primary" id="ask_submit">Submit Sell Order</button>\
    <h3>Buy Orders </h3>\
    <div class="scroll_table">\
    <table class="table" id="sell_table">\
    <tbody>\
    <tr>\
                  <th>PRICE (' + coin_two_ticker_upper + ')</th>\
                  <th>' + coin_one_ticker_upper + '</th>\
                  <th>' + coin_two_ticker_upper + '</th>\
                </tr>';

    $.each(pending_bids, function(key,val){
    substring = '<tr price="0.00000103">\
    <td >' + val.price.toPrecision(9) + '</td>\
    <td >' + val.quantity_left.toPrecision(9) + '</td>\
    <td >' + (val.price * val.quantity_left).toPrecision(9) + '</td></tr>';
    string += substring;
    });


    string += '</tbody>\
    </table>\
    </div>\
    </div>\
    </div>';




$('.inner_content').append(string);



add_options_price_handlers();

add_order_options_handlers();





  }



  if (document.URL.indexOf('market') != -1 && document.URL.indexOf('altmarket') == -1 && document.URL.indexOf('optmarket') == -1 ){


  $('#right_bar').empty();
string = '<li class="dropdown">\
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Logged in as  ' + user.full_name + '<b class="caret"></b></a>\
          <ul class="dropdown-menu">\
            <li><a href="profile">Profile</a></li>\
            <li><a href="' + prefix + 'balances#taba">Balances</a></li>\
            <li><a href="' + prefix + 'balances#tabd">Deposits</a></li>\
            <li><a href="' + prefix + 'balances#tabe">Withdrawals</a></li>\
            <li><a href="' + prefix + 'balances#tabf">Orders</a></li>\
            <li><a href="' + prefix + 'balances#tabg">Trade History</a></li>\
            <li><a href="logout">Logout</a></li>\
          </ul>\
        </li>';

$('#right_bar').append(string);



    expiration_time = parseInt(contract.expiration_time.toString().substring(0, contract.expiration_time.toString().length - 3));
    
    expiration_time = moment.unix(expiration_time).toArray();
    expiration_time = moment.utc(expiration_time);
    expiration_time = expiration_time.toString();
    index = expiration_time.indexOf('+');
    expiration_time = expiration_time.substr(0, index);
    //alert(expiration_time);





    last_price = last_price.toPrecision(9);
    low_price = low_price.toPrecision(9);
    high_price = high_price.toPrecision(9);
    volume = volume.toPrecision(9);



    min_order = 1;
    order_fee = .015;



    if ( pending_asks == null){
      pending_asks = new Array();
      obj = new Object();
      obj.price = 5;
      obj.quantity_left = 3;
      pending_asks.push(obj);
    }

    if (pending_bids == null){
      pending_bids = new Array();
      obj = new Object();
      obj.price = 5;
      obj.quantity_left = 3;
      pending_bids.push(obj);
    }


console.log(pending_asks[0].price);

    string = '<div id="top_header">\
    <div id="left_header">\
    <div id="trade_pair_header"><a class="contract_href">' + contract.short_symbol + '</a></div>' + 
    contract.full_symbol + '<br> <a class="contract_info_href">Contract Info</a></div>\
    <div id="right_header">\
    <div class="stat">\
    <span class="title">LAST PRICE</span>\
    <br>\
    <strong>\
    <span id="span_last_price" class="">' + last_price + '</span>\
    </strong>\
    </div>\
    <div class="stat">\
    <span class="title">24 HR HIGH</span>\
    <br>\
    <strong>\
    <span id="span_24_high" class="">' + high_price + '</span>\
    </strong>\
    </div>\
    <div class="stat">\
    <span class="title">24 HR LOW</span>\
    <br>\
    <strong>\
    <span id="span_24_low" class="">' + low_price + '</span>\
    </strong>\
    </div>\
    <div class="stat unbordered">\
    <span class="title">24 HR VOLUME</span>\
    <br>\
    <strong>\
    <span id="span_24_low" class="">' + volume + ' BTC</span>\
    </strong>\
    </div>\
    </div>\
    </div>\
    <div style="clear:right;"></div>\
    <div id="chartdiv" style="width:85%; height:600px; margin-top: 60px"></div>\
    <div id="buy_sell">\
    <div id="col1">\
    <h3>Buy ' + contract.short_symbol + '</h3>\
        <div id="error_message"></div>\
    <div class="success box">Your available BTC balance is <strong><a href="asdf" class="exchange_balance">' + available_balance + '</a></strong>.</div>\
    <div class="box options">\
                <span class="label_style">Amount:</span> <input type="number" id="bid_quantity" name="amount" value="' + new Number(0).toFixed(9) + '" class="required"> ' + contract.short_symbol + '<br>\
                <span class="label_style">Price Per ' + contract.short_symbol + ':</span> <input type="number" id="bid_price" name="price" value="' + (pending_asks[0].price + .000000001).toFixed(9) + '" class="required"> BTC<br>\
                <span class="label_style">Current Bitcoin Price:</span> <span type="number" class="current_btc_price">' + '$' + last_bitstamp + '</span> <br>\
                <span class="label_style">Strike Price:</span> <span type="number" id="strike_price">' + '$' + contract.strike_price + '</span> <br>\
                <span class="label_style">Expiration time:</span> <span type="number" id="expiration">' + expiration_time+ '</span> <br>\
                <span class="label_style">Margin Requirement:</span> <span type="number" class="margin" id="buy_margin">' + new Number(0).toFixed(9) + '</span> <br>\
                <span class="label_style">Total:</span> <span class="total" id="buy_total">' + pending_asks[0].price.toFixed(9) + '</span> <br>\
                <span class="label_style">Trading Fee:</span> <span class="fee" id="buy_fee">0.00000000</span> BTC (' + (0).toFixed(2) +  '%)<br>\
                <span class="label_style">Net Total:</span> <span class="netTotalBuy" >' + pending_asks[0].price.toFixed(9) + '</span> BTC\
                          <input type="hidden" name="buyNetTotal" id="buy_net_total" value="' + pending_asks[0].price.toFixed(9) + '" class="required">\
    </div>\
    <button type="button" class="btn btn-primary" id="buy_order">Submit Buy Order</button>\
    <h3>Sell Orders </h3>\
    <div class="scroll_table">\
    <table class="table" id="sell_table" style="width: 100% !important">\
    <tbody>\
    <tr>\
                  <th>PRICE (BTC)</th>\
                  <th>Quantity</th>\
                  <th>Total Cost in BTC</th>\
                </tr>';

                //alert(string);

    $.each(pending_asks, function(key,val){
    substring = '<tr price="0.00000103">\
    <td >' + (val.price + .000000001).toFixed(9)+ '</td>\
    <td >' + val.quantity_left.toFixed(9)  + '</td>\
    <td >' + (val.price * val.quantity_left).toFixed(9)  + '</td></tr>';
    string += substring;
    });


//alert(string);


    string += '</tbody>\
    </table>\
    </div>\
    </div>\
    <div id="col2">\
    <h3>Sell ' + contract.short_symbol  + '</h3>\
    <div id="error_message_sell"></div>\
<div class="fail box">Your available BTC balance is <strong><a href="asdf" class="exchange_balance">' + available_balance + '</a></strong>.</div>\
    <div class="box options">\
                <span class="label_style">Amount:</span> <input type="number" id="ask_quantity" name="amount" value="0.00000000" class="required"> ' + contract.short_symbol + '<br>\
                <span class="label_style">Price Per ' + contract.short_symbol + ':</span> <input type="number" id="ask_price" name="price" value="' + pending_bids[0].price.toFixed(9) + '" class="required"> BTC<br>\
                <span class="label_style">Current Bitcoin Price:</span> <span type="number" class="current_btc_price">' + '$' + last_bitstamp + '</span> <br>\
                <span class="label_style">Strike Price:</span> <span type="number" id="strike_price">' + '$' + contract.strike_price + '</span> <br>\
                <span class="label_style">Expiration time:</span> <span type="number" id="expiration">' + expiration_time+ '</span> <br>\
                <span class="label_style">Margin Requirement:</span> <span type="number"  class="margin" id="sell_margin">' + new Number(0).toFixed(9)  + '</span> <br>\
                <span class="label_style">Total:</span> <span class="total" id="sell_total">' + pending_bids[0].price.toFixed(9) + '</span> <br>\
                <span class="label_style">Trading Fee:</span> <span class="fee" id="sell_fee">0.00000000</span> BTC (' + (0).toFixed(2) +  '%)<br>\
                <span class="label_style">Net Total:</span> <span class="netTotalSell" >' + pending_bids[0].price.toFixed(9)  + '</span> BTC\
                          <input type="hidden" name="buyNetTotal" id="buy_net_total" value="' + pending_bids[0].price.toFixed(9)  + '" class="required">\
              </div>\
    <button type="button" class="btn btn-primary" id="ask_submit">Submit Sell Order</button>\
    <h3>Buy Orders </h3>\
    <div class="scroll_table">\
    <table class="table" id="sell_table" style="width: 100% !important">\
    <tbody>\
    <tr>\
                  <th>PRICE (BTC)</th>\
                  <th>Quantity</th>\
                  <th>Total Offer in BTC</th>\
                </tr>';

    $.each(pending_bids, function(key,val){
    substring = '<tr price="0.00000103">\
    <td >' + val.price.toFixed(9)  + '</td>\
    <td >' + val.quantity_left.toFixed(9)  + '</td>\
    <td >' + (val.price * val.quantity_left).toFixed(9)  + '</td></tr>';
    string += substring;
    });


    string += '</tbody>\
    </table>\
    </div>\
    </div>\
    </div>';




$('.inner_content').append(string);


    margin = .4;
    bitcoin_price = 570;

    $('#bid_quantity').on('change', function () {
      bid_quantity = $('#bid_quantity').val();
      bid_price = $('#bid_price').val();
      //margin calculation tbd
      current_price = $('.current_btc_price').html();
      current_price = current_price.substr(1, current_price.length);
      current_price = parseFloat(current_price);

      buy_margin = margin * (bid_quantity * 10 / current_price);

      $('#buy_total').html( (bid_quantity * bid_price).toFixed(9) );
      $('#buy_fee').html( (0).toFixed(9) );
      $('.netTotalBuy').html( (bid_quantity * bid_price * 1).toFixed(9) );
      $('#buy_margin').html(buy_margin.toFixed(9) );

      //alert('test');
      //alert($('#withdraw_amount').val());
      //alert($('#error_message').html());
      withdraw_fee = .01;

      //total calculation
      total = bid_quantity * bid_price;
      net_total = total * 1.0015;
      net_total = total;


      if (net_total > available_balance){
      if ($('#error_message').html().length < 3)
      $('#error_message').append('Net total must be less than or equal to your available balance.');
      }
      else if (net_total + buy_margin > available_balance){
      if ($('#error_message').html().length < 3)
      $('#error_message').append('Net total + margin requirement must be less than or equal to your available balance.');

      }
      else{
         if ($('#error_message').html().substr(0,3) == 'Net')
            $('#error_message').empty();
      }

  }); 


    $('#bid_price').on('change', function () {
      bid_quantity = $('#bid_quantity').val();
      bid_price = $('#bid_price').val();
      //margin calculation tbd
      buy_margin = $('#buy_margin').html();
      buy_margin = buy_margin.substr(1, buy_margin.length);
      buy_margin = parseFloat(buy_margin);

      $('#buy_total').html( (bid_quantity * bid_price).toFixed(9) );
      $('#buy_fee').html( (0).toFixed(9) );
      $('.netTotalBuy').html( (bid_quantity * bid_price * 1).toFixed(9) );

      //alert('test');
      //alert($('#withdraw_amount').val());
      //alert($('#error_message').html());
      withdraw_fee = .01;

      //total calculation
      total = bid_quantity * bid_price;
      net_total = total * 1.0015;
      net_total = total;


      if (net_total > available_balance){
      if ($('#error_message').html().length < 3)
      $('#error_message').append('Net total must be less than or equal to your available balance.');
      }
      else if (net_total + buy_margin > available_balance){
      if ($('#error_message').html().length < 3)
      $('#error_message').append('Net total + margin requirement must be less than or equal to your available balance.');

      }
      else{
         if ($('#error_message').html().substr(0,3) == 'Net')
            $('#error_message').empty();
      }

  }); 







    $('#ask_quantity').on('change', function () {
      ask_quantity = $('#ask_quantity').val();
      ask_price = $('#ask_price').val();
      //margin calculation tbd
      current_price = $('.current_btc_price').html();
      current_price = current_price.substr(1, current_price.length);
      current_price = parseFloat(current_price);

      strike_price = contract.strike_price;
      if (current_price < strike_price)
      sell_margin = margin * (ask_quantity * 10 / current_price);
      else{
      in_the_money = 10/ (current_price - strike_price) * ask_quantity;
      fourty_percent_change = .4 * (ask_quantity * 10 / current_price);
      sell_margin = in_the_money + fourty_percent_change;

      }

      $('#sell_total').html( (ask_quantity * ask_price).toFixed(9) );
      $('#sell_fee').html( (0).toFixed(9) );
      $('.netTotalSell').html( (ask_quantity * ask_price * 1).toFixed(9) );
      $('#sell_margin').html(sell_margin.toFixed(9) );

      //alert('test');
      //alert($('#withdraw_amount').val());
      //alert($('#error_message').html());
      withdraw_fee = .01;

      fees = ask_quantity * ask_price * .0015;
      fees = 0;

      //total calculation
      total = ask_quantity * ask_price;
      net_total = total * 1.0015;
      net_total = total * 1;

      if (sell_margin + fees > available_balance){
      if ($('#error_message_sell').html().length < 3)
      $('#error_message_sell').append('Margin requirement + trading fee must be less than or equal to your available balance.');

      }
      else{
         if ($('#error_message_sell').html().substr(0,3) == 'Mar')
            $('#error_message_sell').empty();
      }

  }); 


    $('#ask_price').on('change', function () {
      ask_quantity = $('#ask_quantity').val();
      ask_price = $('#ask_price').val();
      //margin calculation tbd

      $('#sell_total').html( (ask_quantity * ask_price).toFixed(9) );
      $('#sell_fee').html( (0).toFixed(9) );
      $('.netTotalSell').html( (ask_quantity * ask_price * 1).toFixed(9) );
      sell_margin = $('#sell_margin').html();
      sell_margin = sell_margin.substr(1, sell_margin.length);
      sell_margin = parseFloat(sell_margin);


      current_price = $('.current_btc_price').html();
      current_price = current_price.substr(1, current_price.length);
      current_price = parseFloat(current_price);
      //alert(current_price);

      strike_price = contract.strike_price;
      if (current_price < strike_price)
      sell_margin = margin * (ask_quantity * 10 / current_price);
      else{
      in_the_money = 10/ (current_price - strike_price) * ask_quantity;
      fourty_percent_change = .4 * (ask_quantity * 10 / current_price);
      sell_margin = in_the_money + fourty_percent_change;

      }


      //alert('test');
      //alert($('#withdraw_amount').val());
      //alert($('#error_message').html());
      withdraw_fee = .01;

      fees = ask_quantity * ask_price * .0015;
      fees = 0;

      //total calculation
      total = ask_quantity * ask_price;
      net_total = total * 1.0015;
      net_total = total;

      if (sell_margin + fees > available_balance){
      if ($('#error_message_sell').html().length < 3)
      $('#error_message_sell').append('Margin requirement + trading fee must be less than or equal to your available balance.');

      }
      else{
         if ($('#error_message_sell').html().substr(0,3) == 'Mar')
            $('#error_message_sell').empty();
      }

  }); 







    $('#buy_order').click(function(){

        if ($('#error_message').html().length > 3)
        $("html, body").animate({ scrollTop: 0 }, "slow");

      bid_quantity = $('#bid_quantity').val();
      bid_price = $('#bid_price').val();
      buy_margin = $('#buy_margin').html();
      //alert(buy_amount);
      //alert(coin_ticker_one);

      $.ajax({
        url: "/buy_order",
        type: "POST",
        data: {maintenance_margin: buy_margin, bid_quantity: bid_quantity, bid_price: bid_price, short_symbol: contract.short_symbol, _csrf: csrf },
        dataType: "html"
      }).done(function(data){

        alert('Order submitted!');

      });

    });



    $('#ask_submit').click(function(){
      ask_quantity = $('#ask_quantity').val();
      ask_price = $('#ask_price').val();
      sell_margin = parseFloat($('#sell_margin').html());


      //alert(ask_quantity);
      //alert(ask_price);
      //alert(buy_amount);

      $.ajax({
        url: "/ask",
        type: "POST",
        data: {maintenance_margin: sell_margin, ask_quantity: ask_quantity, ask_price: ask_price, short_symbol: contract.short_symbol, _csrf: csrf },
        dataType: "html"
      }).done(function(data){

        alert('Order submitted!');

      });

    });



     $("a.contract_href").on("click",function(){
         window.open(prefix + 'contract/' + contract.short_symbol ,'_blank');
     });

     $("a.contract_info_href").on("click",function(){
         window.open(prefix + 'contract/' + contract.short_symbol ,'_blank');
     });





  }


function first_letter_upper(string){
  first_letter = string.substr(0,1).toUpperCase();
  rest = string.substr(1);
  result = first_letter + rest;
  return result;

}

function generate_deposits(){

      //$('#deposits_li').attr('class', 'active');

    deposits = data.deposits;
    deposit_count = deposits.length;

//alert(deposits);

    string = '<div class="tab_description">\
Below is a list of deposits that you have made. Click the expander icon on the left of each row to reveal more details \
about the deposit.<br><br>\
To make a new deposit, please visit the Balances page and select the Deposit option under the actions menu for \
the coin.\
<br><br>\
Displaying deposits 1 - ' + deposits.length + ' of ' + deposits.length +
'</div>\
<table class="table table-bordered">\
        <thead>\
          <tr>\
            <th></th>\
            <th>TIME</th>\
            <th>COIN</th>\
            <th>AMOUNT</th>\
            <th>DEPOSIT ADDRESS</th>\
            <th>STATUS</th>\
          </tr>\
        </thead><tbody>';

$.each(deposits, function(key,val){
//ticker_upper = val.coin_ticker.toUpperCase();
var status;
if (val.pending == false)
  status = 'CONFIRMED';
else
  status = 'PENDING';

    
    time = parseInt(val.time.toString().substring(0, val.time.toString().length - 3));
    
    //change later 'wtf is this lol'
    array = moment.unix(time).toArray();
    var hi = moment.utc(array);
        //alert(hi);
    hi = hi.toString();
    index = hi.indexOf('GM');
    hi = hi.substr(0, index);
    deposit_time = hi;
    //end change later


  substring = '<tr id="tab_row">\
   <td class="expander unclicked" id="' + val.txid + '"> </td><td class="tab_td">' + deposit_time + '</td>\
           <td class="tab_td">' + val.coin_ticker.toUpperCase() +  '</td>        <td class="tab_td">' + val.amount + '</td>\
           <td class="tab_td">' + val.deposit_address + '</td> <td class="tab_td">' + status + '</td>\
  </tr>';
  string += substring;

  });

  string += '</tbody></table>'; 

  //$('#below_tab_wrapper').append(string);





  return string;

}

  if (document.URL.indexOf('balances') != -1){
    
    $('#balances_li').attr('class', 'active');
    

    array = new Array();
    array.push(data.bitcoin);
    array.push(data.dogecoin);
    array.push(data.litecoin);

  if (document.URL.indexOf('localhost') == -1 ){
    array.push(data.x11coin);
    array.push(data.darkcoin);
    array.push(data.ppcoin);
    array.push(data.vericoin);
    array.push(data.blackcoin);
    array.push(data.namecoin);



  }



    array.sort(function(a,b){return a.coin_number - b.coin_number});



a_string = ' *Net in orders denotes how much your balance will change by if all your orders are processed.<br><br>';

$.each(array, function(key,val){

a_string += '<div class="table-responsive"><table class="table table-bordered">\
        <thead>\
          <tr>\
            <th>CURRENCY</th>\
            <th>CODE</th>\
            <th>BALANCE</th>\
            <th>IN POSITIONS</th>\
            <th>IN ORDERS</th>\
            <th>NET IN ORDERS * </th>\
            <th>AVAILABLE</th>\
            <th>PENDING <br>DEPOSITS</th>\
            <th>PENDING <br>WITHDRAWALS</th>\
          </tr>\
        </thead>\
        <tbody>\
          <tr>\
            <td>' + first_letter_upper(val.coin_name) + '</td>\
            <td>' + val.code.toUpperCase() + '</td>\
            <td fund_property="balance" coin_name="' + val.coin_name + '">'+ val.balance.toPrecision(6) + '</td>\
            <td>'+ val.in_positions.toPrecision(6)  + '</td>\
            <td>'+ val.in_orders.toPrecision(6)  + '</td>\
            <td>'+ val.in_orders_non_margin.toPrecision(6)  + '</td>\
            <td fund_property="available_balance"  coin_name="' + val.coin_name + '">'+ val.available_balance.toPrecision(6)  + '</td>\
            <td fund_property="pending_deposits"  coin_name="' + val.coin_name + '">'+ val.pending_deposits.toPrecision(6)  + '</td>\
            <td fund_property="pending_withdrawals"  coin_name="' + val.coin_name + '">'+ val.pending_withdrawals.toPrecision(6)  + '</td>\
          </tr>\
        </tbody>\
      </table></div>'

});


yolo ='<table class="table" id="tab_table">\
  <tbody id="balance_tbody">\
  <tr class="active">\
  <td class="active">CURRENCY</td>\
  <td class="active">AMOUNT</td>\
  <td class="active">IN POSITIONS <br> (margin)</td>\
  <td class="active">IN ORDERS<br> (margin)</td>\
  <td class="active">IN ORDERS<br> (offer for options)</td>\
  <td class="active">REQUIRED<br>MARGIN</td>\
  <td class="active">AVAILABLE</td>\
  <td class="active">PENDING <br>DEPOSITS</td>\
  <td class="active">PENDING <br>WITHDRAWALS</td>\
  <td class="active"></td>\
  </tr>\
<tr id="tab_row">\
        <td class="tab_td">BITCOIN</td>\
        <td class="tab_td">' + data.balance + '</td>\
        <td class="tab_td">' + data.in_positions + ' </td>\
        <td class="tab_td">' + data.in_orders + ' </td>\
        <td class="tab_td">' + data.in_orders_non_margin + ' </td>\
        <td class="tab_td">' + data.maintenance_margin + ' </td>\
        <td class="tab_td">' + data.available_balance + ' </td>\
        <td class="tab_td">' + data.pending_deposits + ' </td>\
        <td class="tab_td">' + data.pending_withdrawals + ' </td>\
  </tr></tbody></table><br> *Denotes how much your balance will go down by if all your orders are processed.';






b_string = 'Select coin: <br> <br><select id="select_deposit" class="form-control" style="width:100px">';

$.each(array, function(key,val){

b_string += '<option value="'+ val.coin_name + '">' + first_letter_upper(val.coin_name) +'</option>';

});

b_string += '</select><div id="address_info">To add bitcoins, send to this address: <span style="font-weight: bold">' + data.bitcoin.deposit_address + '</span></div>\
<br> * May take up to 30 seconds to detect deposit, and 5 to 20 minutes to confirm deposit (depending on coin)';




c_string_ending = '<div id="withdraw_info"> <div id="tab_content">\
<div class="tab_description"><div class="box"><span>\
<span id="deposit_address">Once submitted, all requests MUST be confirmed via email. \
Please only contact support if you have not received the confirmation email.</span></span>\
</div></div>\
<div id="withdraw_available_balance">\
Your current available BTC balance: ' + data.bitcoin.available_balance + '</div>\
<div class="tab_header_modified" >\
Amount to Withdraw\
</div>\
<div id="error_message">\
</div>\
<input type="number" name="amount" id="withdraw_amount" value="0" required="required" class="error">\
</input> BTC <div class="tab_header_modified">\
Withdraw fee\
</div>\
<div class="tab_description">\
' + data.bitcoin.withdraw_fee + 'BTC </div>\
<div class="tab_header_modified">\
Net Withdraw amount\
</div>\
<div class="tab_description" id="net_withdraw_amount">\
0.000000  BTC</div>\
<div class="tab_header_modified" >\
BTC Withdrawal Address\
</div>\
<input type="text" id="withdrawal_address" style="width: 300px" required="required" class="error">\
</input>\
<div class="tab_header_modified" >\
Confirm Password\
</div>\
<input type="password" name="amount" id="withdraw_password" required="required" class="error">\
</input>\
<div class="tab_description">\
Please ensure all details are correct before submitting. Every request must be confirmed by email \
before it will be processed, most withdrawals are processed within 10 minutes of email confirmation. For \
security reasons, larger withdrawals can take longer as they may require manual verification. \
</div>\
<button type="button" class="btn btn-primary" id="withdraw_button" style="margin-top: 30px; margin-bottom: 100px">Withdraw</button></div></div>';



c_string = 'Select coin to withdraw: <br> <br><select id="select_withdraw" class="form-control" style="width:100px">';

$.each(array, function(key,val){

c_string += '<option value="'+ val.coin_name + '">' + first_letter_upper(val.coin_name) +'</option>';

});

c_string += '</select>';
c_string += c_string_ending;

//c_string = 'yolo';
//alert(c_string);




d_string = generate_deposits();

//a_string = 'yolo';

/*
alert('hi');
url = document.URL;
ending = url.substr(url.indexOf('?') + 1, url.length);
alert(ending); */
//$('#' + ending).attr('class', 'active');
//$('#' + ending + '_tab').attr('class', 'tab-pane active');

/*
your_funds = '';
add_funds = '';
withdraw_funds = '';
your_deposits = '';
your_withdrawals = '';



if (ending == 'your_funds')
your_funds = 'active';
if (ending == 'add_funds')
add_funds = 'active';
if (ending == 'withdraw_funds')
withdraw_funds = 'active';*/

/*
if (ending == 'your_depoists')
your_deposits = 'active';
if (ending == 'your_withdrawals')
your_withdrawals = 'active';
*/
e_string = generate_withdrawals();
f_string = generate_orders();
g_string = generate_trade_history();
h_string = generate_exercise_options();
a1_string = generate_profile();



string = '<ul class="nav nav-pills nav-stacked " id="nav_pills" style="margin-top: 30px">\
  <li class="" id="your_funds"><a href="#your_profile_tab" data-toggle="pill" class="top_href" >Your Profile</a></li>\
  <li class="" id="your_funds"><a href="#your_funds_tab" data-toggle="pill" class="top_href" >Your Funds</a></li>\
  <li class="" id="add_funds"><a href="#add_funds_tab" data-toggle="pill" class="top_href">Add Funds</a></li>\
  <li class="" id="withdraw_funds"><a href="#withdraw_funds_tab" data-toggle="tab" class="top_href">Withdraw Funds</a></li>\
  <li class="" id="your_deposits"><a href="#your_deposits_tab" data-toggle="tab" class="top_href">Your Deposits</a></li>\
  <li class="" id="your_withdrawals"><a href="#your_withdrawals_tab" data-toggle="tab" class="top_href">Your Withdrawals</a></li>\
  <li class="" id="your_orders"><a href="#your_orders_tab" data-toggle="tab" class="top_href">Your Orders</a></li>\
  <li class="" id="your_trades"><a href="#your_trade_history_tab" data-toggle="tab" class="top_href">Your Trade History</a></li>\
  <li class="" id="your_options"><a href="#your_exercise_options_tab" data-toggle="tab" class="top_href">Exercise Options</a></li>\
</ul>\
<div class="tab-content">\
        <div class="tab-pane tab_add" id="your_profile_tab">\
             <h3>Your Profile</h3><br>' + a1_string + '</div>\
        <div class="tab-pane tab_add" id="your_funds_tab">\
             <h3>Your Funds</h3><br>' + a_string + '</div>\
        <div class="tab-pane tab_add" id="add_funds_tab">\
             <h3>Add Funds</h3><br>' + b_string + '</div>\
        <div class="tab-pane tab_add" id="withdraw_funds_tab">\
             <h3>Withdraw Funds</h3>' + c_string + '</div>\
        <div class="tab-pane tab_add" id="your_deposits_tab">\
             <h3>Your Deposits</h3>' + d_string + '</div>\
        <div class="tab-pane tab_add" id="your_withdrawals_tab">\
             <h3>Your Withdrawals</h3>' + e_string + '</div>\
        <div class="tab-pane tab_add" id="your_orders_tab">\
             <h3>Your Orders</h3>' + f_string + '</div>\
        <div class="tab-pane tab_add" id="your_trade_history_tab">\
             <h3>Your Trade History</h3>' + g_string + '</div>\
        <div class="tab-pane tab_add" id="your_exercise_options_tab">\
             <h3>Exercise Options</h3>' + h_string + '</div>\
</div>';


$('#balances').prepend(string); 

add_withdraw_shit();


  $('#right_bar').empty();
string = '<li class="dropdown">\
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Logged in as  ' + data.full_name + '<b class="caret"></b></a>\
          <ul class="dropdown-menu">\
            <li><a   style="cursor:pointer;" id="profile_a">Profile</a></li>\
            <li><a   style="cursor:pointer;" id="balances_a">Balances</a></li>\
            <li><a   style="cursor:pointer;" id="deposits_a">Deposits</a></li>\
            <li><a  style="cursor:pointer;" id="withdrawals_a">Withdrawals</a></li>\
            <li><a  style="cursor:pointer;" id="orders_a">Orders</a></li>\
            <li><a  style="cursor:pointer;" id="trade_history_a">Trade History</a></li>\
            <li><a  style="cursor:pointer;" id="exercise_options_a">Exercise Options</a></li>\
            <li><a class="logout_click">Logout</a></li>\
          </ul>\
        </li>';

$('#right_bar').append(string);

$('.logout_click').click(function(){

$.ajax({
  url: "/logout",
  type: "POST",
  data: '',
  dataType: "html"
}).done(function(data){

  window.location = prefix;

});




});



$('#balances_a').click(function(event){
    $("[href='#your_funds_tab']").click();
  }             
);

$('#deposits_a').click(function(event){
    $("[href='#your_deposits_tab']").click();
  }             
);

$('#withdrawals_a').click(function(event){
    $("[href='#your_withdrawals_tab']").click();
  }             
);

$('#orders_a').click(function(event){
    $("[href='#your_orders_tab']").click();
  }             
);

$('#trade_history_a').click(function(event){
    $("[href='#your_trade_history_tab']").click();
  }             
);

$('#trade_history_a').click(function(event){
    $("[href='#your_trade_history_tab']").click();
  }             
);

$('#exercise_options_a').click(function(event){
    $("[href='#your_exercise_options_tab']").click();
  }             
);
$('#profile_a').click(function(event){
    $("[href='#your_profile_tab']").click();
  }             
);


url = document.URL;
ending = url.substr(url.indexOf('#') + 1, url.length);


if (ending == 'taba1' || ending == prefix + 'balances'){
  //alert($("[href='#your_funds_tab']").attr('href'));
$("[href='#your_profile_tab']").click();
}
else if (ending == 'taba'){
  //alert('hi');
$("[href='#your_funds_tab']").click();
}
else if (ending == 'tabb'){
  //alert('hi');
$("[href='#add_funds_tab']").click();
}
else if (ending == 'tabc'){

$("[href='#withdraw_funds_tab']").click();
}
else if (ending == 'tabd'){

$("[href='#your_deposits_tab']").click();
}
else if (ending == 'tabe'){

$("[href='#your_withdrawals_tab']").click();
}
else if (ending == 'tabf'){

$("[href='#your_orders_tab']").click();
}
else if (ending == 'tabg'){

$("[href='#your_trade_history_tab']").click();
}
else if (ending == 'tabh'){

$("[href='#your_exercise_options_tab']").click();
}
else{
  $("[href='#your_funds_tab']").click();
}


$('#select_deposit').change(function() {
        val = $(this).val();
          $.ajax({
          url: "/select_deposit",
          type: "POST",
          data: {coin: val},
          dataType: "html"
        }).done(function(data){

          string = 'To add ' + val + 's, send to this address: <span style="font-weight: bold">' + data + '</span>';
          $('#address_info').empty();

          $('#address_info').append(string);

        });
});


$('#select_withdraw').change(function() {


        val = $(this).val();
          $.ajax({
          url: "/select_withdraw",
          type: "POST",
          data: {coin: val},
          dataType: "html"
        }).done(function(data){

    data = $.parseJSON(data);

string = '<div id="tab_content">\
<div class="tab_description"><div class="box"><span>\
<span id="deposit_address">Once submitted, all requests MUST be confirmed via email. \
Please only contact support if you have not received the confirmation email.</span></span>\
</div></div>\
<div id="withdraw_available_balance">\
Your current available ' + data.code.toUpperCase() + ' balance: ' + data.available_balance + '</div>\
<div class="tab_header_modified" >\
Amount to Withdraw\
</div>\
<div id="error_message">\
</div>\
<input type="number" name="amount" id="withdraw_amount" value="0" required="required" class="error">\
</input> ' + data.code.toUpperCase() + '<div class="tab_header_modified">\
Withdraw fee\
</div>\
<div class="tab_description">\
' + data.withdraw_fee + ' '+ data.code.toUpperCase() + '</div>\
<div class="tab_header_modified">\
Net Withdraw amount\
</div>\
<div class="tab_description" id="net_withdraw_amount">\
0.000000  ' + data.code.toUpperCase() + '</div>\
<div class="tab_header_modified" >\
' + data.code.toUpperCase() + ' Withdrawal Address\
</div>\
<input type="text" id="withdrawal_address" style="width: 300px" required="required" class="error">\
</input>\
<div class="tab_header_modified" >\
Confirm Password\
</div>\
<input type="password" name="amount" id="withdraw_password" required="required" class="error">\
</input>\
<div class="tab_description">\
Please ensure all details are correct before submitting. Every request must be confirmed by email \
before it will be processed, most withdrawals are processed within 10 minutes of email confirmation. For \
security reasons, larger withdrawals can take longer as they may require manual verification. \
</div>\
<button type="button" class="btn btn-primary" id="withdraw_button" style="margin-top: 30px; margin-bottom: 100px">Withdraw</button></div>';

$('#withdraw_info').empty();
$('#withdraw_info').append(string);
add_withdraw_shit();


    // $('#withdraw_button').click(function(){
    //     console.log('yo');
    //     amount = $('#withdraw_amount').val();
    //     address = $('#withdrawal_address').val();
    //     password = $('#withdraw_password').val();
    //     coin_name = $('#select_withdraw').val();

    //     if ($('#error_message').html().length > 3)
    //     $("html, body").animate({ scrollTop: 0 }, "slow");

    //     else{


    //     email = localStorage.getItem('email');
    //     console.log('yolo');
    //     //alert(email);
    //     $.ajax({
    //       url: "/withdraw",
    //       type: "POST",
    //       data: {amount: amount, address: address, password: password, coin_name: coin_name},
    //       dataType: "html"
    //     }).done(function(data){
    //       console.log(data);
    //                 //alert(data);
    //       if (data == "withdraw"){


    //       string = '<div class="box_green"><span><span id="deposit_address">\
    //       <span style="font-weight: bold">Success!</span><br>\
    //       Your withdrawal request has now been added, please confirm by email and we will then process it.</span></span></div>\
    //       </div>';

    //       $('.box').before(string);        

    //       $("html, body").animate({ scrollTop: 0 }, "slow");


    //       }

    //       else
    //       alert(data);

    //     });


    //     }

    //     //alert('here');
    // });



});
});
//$('#' + ending).attr('class', 'active');
//$('#' + ending + '_tab').attr('class', 'tab-pane active');


//alert('here');

function add_withdraw_shit(){
    $('#withdraw_amount').on('change', function () {
      console.log('yolo');
      withdraw_amount = $('#withdraw_amount').val();
      coin = $('#select_withdraw').val();
      console.log(coin);
      //alert('test');
      //alert($('#withdraw_amount').val());
      //alert($('#error_message').html());
      withdraw_fee = data[coin].withdraw_fee;

      if (withdraw_amount > data[coin].available_balance){
      if ($('#error_message').html().length < 3)
      $('#error_message').append('Withdraw amount must be equal to or less than your available balance.');
      }
      else if (withdraw_amount - withdraw_fee <=0){
      if ($('#error_message').html().length < 3)
      $('#error_message').append('Your net withdraw amount is less than or equal to 0. Please enter a greater amount.');
      if ($('#error_message').html().substr(0,3) == 'Wit'){
        $('#error_message').empty();
        $('#error_message').append('Your net withdraw amount is less than or equal to 0. Please enter a greater amount.');
      }


      }    
      else  {
      $('#error_message').empty();
      $('#net_withdraw_amount').html(withdraw_amount - withdraw_fee)

      }
  });


    $('#withdraw_button').click(function(){
        amount = $('#withdraw_amount').val();
        address = $('#withdrawal_address').val();
        password = $('#withdraw_password').val();
        coin_name = $('#select_withdraw').val();

        if ($('#error_message').html().length > 3)
        $("html, body").animate({ scrollTop: 0 }, "slow");

        else{

        email = localStorage.getItem('email');
        //alert(email);
        $.ajax({
          url: "/withdraw",
          type: "POST",
          data:  {amount: amount, address: address, password: password, coin_name: coin_name},
          dataType: "html"
        }).done(function(data){
                    //alert(data);
          if (data == "withdraw"){


          string = '<div class="box_green"><span><span id="deposit_address">\
          <span style="font-weight: bold">Success!</span><br>\
          Your withdrawal request has now been added, please confirm by email and we will then process it.</span></span></div>\
          </div>';

          $('.box').before(string);        

          $("html, body").animate({ scrollTop: 0 }, "slow");


          }

          else
          alert(data);

        });


        }

        //alert('here');
    });
}




  $('.expander').click(function(){



  class_name = $(this).attr('class');

  if (class_name == 'expander unclicked'){
  $(this).attr('class', 'expander clicked');
  id = $(this).attr('id');
  string = '<tr class="active">\
   <td colspan="10" class="left_td"><span class="inner_td">Transaction Id: ' + id + '</span></td>\
  </tr>';

  $(this).parent().after(string);
  }
  else{
  $(this).attr('class', 'expander unclicked');
  $(this).parent().next().remove();

  //$(this).parent().after().remove();
  }

  });



//alert(string);

//$('#below_tab_wrapper').empty();
//$('#below_tab_wrapper').append(string);



$('.deposit_dropdown').click(function(){
//alert('test');

var id = $(this).attr('id');
id = id.substr(8, id.length);
//alert(id);

string = '  <tr id=\"tab_row\">\r\n  <td class=\"tab_td\">dogecoin<\/td>\r\n  <td class=\"tab_td\">doge<\/td>\r\n  <td class=\"tab_td\">0.00000000<\/td>\r\n  <td class=\"tab_td\">0.00000000<\/td>\r\n  <td class=\"tab_td\">0.00000000<\/td>\r\n  <td class=\"tab_td\">0.00000000<\/td>\r\n  <td class=\"tab_td\">\r\n\r\n\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n          <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Actions <b class=\"caret\"><\/b><\/a>\r\n\r\n      \r\n          <ul class=\"dropdown-menu\">\r\n            <li><a href=\"#asdf\" id=\"deposit_dropdown\">Deposit<\/a><\/li>\r\n            <li><a href=\"\">Withdraw<\/a><\/li>\r\n            <li><a href=\"#\">View Deposits<\/a><\/li>\r\n            <li><a href=\"#\">View Withdrawals<\/a><\/li>\r\n            <li><a href=\"#\">View Orders<\/a><\/li>\r\n            <li><a href=\"#\">View Trades<\/a><\/li>\r\n          <\/ul>\r\n        <\/li>  \r\n        <\/ul>\r\n\r\n  <\/td>\r\n\r\n  <\/tr>\r\n';
//$('#balance_tbody').append(string);

$.ajax({
  url: "/get_address",
  type: "POST",
  data: {coin_name: id},
  dataType: "html"
}).done(function(data){

data = JSON.parse(data);

string = '<div class="tab_header">\
Deposit ' + data.code + 
'</div>\
<div class="tab_description">\
Your current available ' + data.code + ' balance: <span id="deposited_amount">' + data.balance + '</span>\
</div>\
<div class="tab_header">\
Your Deposit Address\
</div>\
<div class="tab_description">\
<div class="box"> <span> <span id="deposit_address">' + data.deposit_address + 
'</span></span></div>\
</div>\
<div class="bottom_tab_description">\
You may also use previously generated deposit addresses. <br><br>\
Deposits are confirmed and will be available to use after \
<span style="font-weight: bold">' + data.confirmation + '</span> confirmations. Once our system has picked up\
 the transaction it will show in the deposits listing as pending, this may take a few \
minutes from when the transaction has been broadcast to the network.\
</div>';

$('#below_tab_wrapper').empty();
$('#below_tab_wrapper').append(string);



});



});



$('.withdraw_dropdown').click(function(){



var id = $(this).attr('id');
id = id.substr(9, id.length);
test = prefix + 'withdraw/' + id;
window.location = test;
});

$('.cancel_order').click(function(){

order_id = $(this).attr('order_id');
//alert($(this).parent().parent().attr('id'));

      //$(this).parent().parent().remove();
      

      $.ajax({
        url: "/cancel_order",
        type: "POST",
        data: {order_id: order_id, _csrf: csrf},
        dataType: "html"
      }).done(function(data){

        $('a[order_id=\'' + order_id + '\']').parent().parent().remove();
        //alert('Order Cancelled');

      });

    });



$('.exercise_option').click(function(){

order_id = $(this).attr('order_id');
//alert($(this).parent().parent().attr('id'));

      //$(this).parent().parent().remove();
      

      $.ajax({
        url: "/exercise_option",
        type: "POST",
        data: {order_id: order_id, _csrf: csrf},
        dataType: "html"
      }).done(function(data){

        if (data == 'done')
        $('a[order_id=\'' + order_id + '\']').parent().parent().remove();
        else alert('Not enough balance');
        //alert('Order Cancelled');

      });

    });


$('#change_password').click(function(){


password = $('#change_pass').val();
confirm = $('#confirm_change_pass').val();
email = localStorage.getItem('email');

//alert(email);

if ( password != confirm)
  alert('Please make sure that the passwords are the same!');

else {


$.ajax({
  url: "/change_password",
  type: "POST",
  data: {email: email, password: password, _csrf: csrf},
  dataType: "html"
}).done(function(data){

alert('Password changed!');

});

}



});


 add_cancel_alt_order_handler();

  }









});