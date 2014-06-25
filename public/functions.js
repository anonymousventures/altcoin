
function add_price_handlers(){
      console.log('here ' + coin_two_balance);
   $('#bid_quantity').on('change', function () {
      bid_quantity = $('#bid_quantity').val();
      bid_price = $('#bid_price').val();


      $('#buy_total').html( (bid_quantity * bid_price).toFixed(9) );
      $('#buy_fee').html( (0).toFixed(9) );
      $('.netTotalBuy').html( (bid_quantity * bid_price * 1).toFixed(9) );

      total = bid_quantity * bid_price;

      if (total > coin_two_balance){
            console.log('inside here');
      if ($('#error_message').html().length < 3)
      $('#error_message').append('Net total must be less than or equal to your available balance.');
      }
      else{
         if ($('#error_message').html().substr(0,3) == 'Net')
            $('#error_message').empty();
      }

  }); 


    $('#bid_price').on('change', function () {

      bid_quantity = $('#bid_quantity').val();
      bid_price = $('#bid_price').val();


      $('#buy_total').html( (bid_quantity * bid_price).toFixed(9) );
      $('#buy_fee').html( (0).toFixed(9) );
      $('.netTotalBuy').html( (bid_quantity * bid_price * 1).toFixed(9) );

      total = bid_quantity * bid_price;

      if (total > coin_two_balance){
            console.log('inside here');
      if ($('#error_message').html().length < 3)
      $('#error_message').append('Net total must be less than or equal to your available balance.');
      }
      else{
         if ($('#error_message').html().substr(0,3) == 'Net')
            $('#error_message').empty();
      }


  }); 







    $('#ask_quantity').on('change', function () {

      ask_quantity = $('#ask_quantity').val();
      ask_price = $('#ask_price').val();


      $('#sell_total').html( (ask_quantity * ask_price).toFixed(9) );
      $('#sell_fee').html( (0).toFixed(9) );
      $('.netTotalSell').html( (ask_quantity * ask_price * 1).toFixed(9) );

      total = ask_quantity * ask_price;

      if (total > coin_one_balance){
            console.log('inside here');
      if ($('#error_message_sell').html().length < 3)
      $('#error_message_sell').append('Net total must be less than or equal to your available balance.');
      }
      else{
         if ($('#error_message_sell').html().substr(0,3) == 'Net')
            $('#error_message_sell').empty();
      }


  }); 


    $('#ask_price').on('change', function () {



      ask_quantity = $('#ask_quantity').val();
      ask_price = $('#ask_price').val();


      $('#sell_total').html( (ask_quantity * ask_price).toFixed(9) );
      $('#sell_fee').html( (0).toFixed(9) );
      $('.netTotalSell').html( (ask_quantity * ask_price * 1).toFixed(9) );

      total = ask_quantity * ask_price;

      if (total > coin_one_balance){
            console.log('inside here');
      if ($('#error_message_sell').html().length < 3)
      $('#error_message_sell').append('Net total must be less than or equal to your available balance.');
      }
      else{
         if ($('#error_message_sell').html().substr(0,3) == 'Net')
            $('#error_message_sell').empty();
      }

  }); 

}





function add_order_handlers(){

    $('#buy_order').click(function(){
      bid_quantity = $('#bid_quantity').val();
      bid_price = $('#bid_price').val();
      coin_ticker_one = coin_one_ticker;
      coin_ticker_two = coin_two_ticker;
      coin_name_one = coin_one_name;
      coin_name_two = coin_two_name;
      //alert(buy_amount);

      //alert(coin_ticker_one);

      if (bid_quantity * bid_price <= 0)
            alert('Total must be greater than 0!');
      else
      $.ajax({
        url: "/buy_swap",
        type: "POST",
        data: {bid_quantity: bid_quantity, bid_price: bid_price, coin_ticker_one: coin_ticker_one, coin_ticker_two: coin_ticker_two, coin_name_one: coin_name_one, coin_name_two: coin_name_two , _csrf: csrf },
        dataType: "html"
      }).done(function(data){

        alert(data);

      });

    });




    $('#ask_submit').click(function(){
      ask_quantity = $('#ask_quantity').val();
      ask_price = $('#ask_price').val();
      coin_ticker_one = coin_one_ticker;
      coin_ticker_two = coin_two_ticker;
      coin_name_one = coin_one_name;
      coin_name_two = coin_two_name;
      //alert(buy_amount);


      if (ask_quantity * ask_price <= 0)
            alert('Total must be greater than or equal to zero!');
      else
      $.ajax({
        url: "/ask_swap",
        type: "POST",
        data: {ask_quantity: ask_quantity, ask_price: ask_price, coin_ticker_one: coin_ticker_one, coin_ticker_two: coin_ticker_two, coin_name_one: coin_name_one, coin_name_two: coin_name_two , _csrf: csrf },
        dataType: "html"
      }).done(function(data){

        alert(data);

      });

    });


}




function add_cancel_alt_order_handler(){
console.log('added');


$('.cancel_alt_order').click(function(){
console.log('fucking');
order_id = $(this).attr('order_id');
      $.ajax({
        url: "/cancel_alt_order",
        type: "POST",
        data: {order_id: order_id, _csrf: csrf},
        dataType: "html"
      }).done(function(data){

        $('a[order_id=\'' + order_id + '\']').parent().parent().remove();


      });

    });


}



function add_cancel_order_handler(){
console.log('added');


$('.cancel_alt_order').click(function(){
console.log('fucking');
order_id = $(this).attr('order_id');
      $.ajax({
        url: "/cancel_order",
        type: "POST",
        data: {order_id: order_id, _csrf: csrf},
        dataType: "html"
      }).done(function(data){

        $('a[order_id=\'' + order_id + '\']').parent().parent().remove();


      });

    });


}




function generate_trading_table(){



//$('.select_expiration').html(selection);

//alert(deposits);
string = '<table class="table table-bordered"  style="margin-bottom:50px">\
        <thead>\
          <tr>\
            <th>Market</th>\
            <th>Last Trading<br> Price</th>\
            <th>Bid</th>\
            <th>Ask</th>\
            <th>Volume</th>\
            <th>24 hour low</th>\
            <th>24 hour high</th>\
          </tr>\
        </thead><tbody>';

//string += table_top;

//alert(string);
//alert(JSON.stringify(contracts));

$.each(coin_data, function(key,val){


substring = '<tr id="tab_row" style="margin-bottom: 30px">\
        <td class="tab_td_order"><a class="contract_page_href" ticker="' + val.coin_one_ticker + '">' + val.coin_one_ticker + '/' + val.coin_two_ticker + '</td>\
        <td class="tab_td_order">' + val.last + '</td>\
        <td class="tab_td_order">' + val.bid + '</td>\
        <td class="tab_td_order">' + val.ask + '</td>\
        <td class="tab_td_order">' + val.volume + '</td>\
        <td class="tab_td_order">' + val.low + '</td>\
        <td class="tab_td_order">' + val.high + '</td>\
</tr>';
//alert(substring);


string += substring; 


});




//}


string += '</tbody></table>'; 



return string;



}






function generate_options_table(flag){


console.log(coin_data);

//$('.select_expiration').html(selection);

//alert(deposits);
table_header = '<table class="table table-bordered"  style="margin-bottom:50px">\
        <thead>\
          <tr>\
            <th>Market</th>\
            <th>Last Trading<br> Price</th>\
            <th>Bid</th>\
            <th>Ask</th>\
            <th>Volume</th>\
            <th>24 hour low</th>\
            <th>24 hour high</th>\
            <th>Strike Price</th>\
            <th>Expiration</th>\
          </tr>\
        </thead><tbody>';




string = '<table class="table table-bordered"  style="margin-bottom:50px">\
        <thead>\
          <tr>\
            <th>Market</th>\
            <th>Last Trading<br> Price</th>\
            <th>Bid</th>\
            <th>Ask</th>\
            <th>Volume</th>\
            <th>24 hour low</th>\
            <th>24 hour high</th>\
            <th>Strike Price</th>\
            <th>Expiration</th>\
          </tr>\
        </thead><tbody>';


expiration_times = new Array(1404259200000, 1404950400000, 1407628800000, 1418169600000);


coin_selection = '';

coins = new Array("dogecoin", "litecoin");

$.each(coins, function(key,val){

    sub = '<option coin_name="'+ val + '">' + val +'</option>';
    coin_selection += sub;

});


expiration_selection = '';


$.each(expiration_times, function(key,val){
expiration_time = format_time(val);
    sub = '<option expiration_time="'+ val + '">' + expiration_time +'</option>';
    expiration_selection += sub;
});


selection_string = '<span style="text-align: left; margin-left: 0px !important">Select coin:</span>\
 <br> <select class="form-control select_coin" style="width:300px" >' + coin_selection + '</select><br>\
 <span style="text-align: left; margin-left: 0px !important">Select by expiration time:</span>\
 <br> <select class="form-control select_expiration" style="width:300px" >' + expiration_selection + '</select><br>';


string = '';

// string += '<span style="text-align: left; margin-left: 0px !important">Select by expiration time:</span>\
//  <br> <select class="form-control select_expiration" style="width:300px" >' + selection + '</select>';


//string += table_top;

//alert(string);
//alert(JSON.stringify(contracts));

$.each(coin_data, function(key,val){


href_ticker = val.coin_one_ticker + '/btc/' + val.call_put + '/' + val.strike.toFixed(9) + '/' + val.expiration;
href_title = val.coin_one_ticker.toUpperCase() + '/BTC/' + val.call_put + '/<br>' + val.strike.toFixed(9) + '/<br>' + val.expiration;
if (flag)
  flag_result = 'options_page_href2';
else
  flag_result = 'options_page_href';


if (key%6 == 0){

console.log('in here' + key);


table_header = '<table class="table table-bordered"  style="margin-bottom:50px">\
        <thead key="' + key + '" coin_name_anchor="' + val.coin_one_name  +'" expiration_time_anchor="' + val.expiration +'">\
          <tr>\
            <th>Market</th>\
            <th>Last Trading<br> Price</th>\
            <th>Bid</th>\
            <th>Ask</th>\
            <th>Volume</th>\
            <th>24 hour low</th>\
            <th>24 hour high</th>\
            <th>Strike Price</th>\
            <th>Expiration</th>\
          </tr>\
        </thead><tbody>';

selection_string = '<span key="' + key + '" style="text-align: left; margin-left: 0px !important">Select coin:</span>\
 <br> <select class="form-control select_coin" style="width:300px" >' + coin_selection + '</select><br>\
 <span style="text-align: left; margin-left: 0px !important">Select by expiration time:</span>\
 <br> <select class="form-control select_expiration" style="width:300px" >' + expiration_selection + '</select><br>';

substring = selection_string;
substring += table_header;

substring +='<tr id="tab_row" style="margin-bottom: 30px">\
        <td class="tab_td_order"><a class="' + flag_result + '" ticker="' + href_ticker + '">' + href_title + '</td>\
        <td class="tab_td_order">' + val.last + '</td>\
        <td class="tab_td_order">' + val.bid + '</td>\
        <td class="tab_td_order">' + val.ask + '</td>\
        <td class="tab_td_order">' + val.volume + '</td>\
        <td class="tab_td_order">' + val.low + '</td>\
        <td class="tab_td_order">' + val.high + '</td>\
        <td class="tab_td_order">' + val.strike.toFixed(9) + '</td>\
        <td class="tab_td_order">' + format_time(val.expiration)  + '</td>\
</tr>';

console.log(substring);


}



else if (key%6 == 5)
substring = '<tr id="tab_row" style="margin-bottom: 30px">\
        <td class="tab_td_order"><a class="' + flag_result + '" ticker="' + href_ticker + '">' + href_title + '</td>\
        <td class="tab_td_order">' + val.last + '</td>\
        <td class="tab_td_order">' + val.bid + '</td>\
        <td class="tab_td_order">' + val.ask + '</td>\
        <td class="tab_td_order">' + val.volume + '</td>\
        <td class="tab_td_order">' + val.low + '</td>\
        <td class="tab_td_order">' + val.high + '</td>\
        <td class="tab_td_order">' + val.strike.toFixed(9) + '</td>\
        <td class="tab_td_order">' + format_time(val.expiration)  + '</td>\
</tr></tbody></table>';

else  
substring = '<tr id="tab_row" style="margin-bottom: 30px">\
        <td class="tab_td_order"><a class="' + flag_result + '" ticker="' + href_ticker + '">' + href_title + '</td>\
        <td class="tab_td_order">' + val.last + '</td>\
        <td class="tab_td_order">' + val.bid + '</td>\
        <td class="tab_td_order">' + val.ask + '</td>\
        <td class="tab_td_order">' + val.volume + '</td>\
        <td class="tab_td_order">' + val.low + '</td>\
        <td class="tab_td_order">' + val.high + '</td>\
        <td class="tab_td_order">' + val.strike.toFixed(9) + '</td>\
        <td class="tab_td_order">' + format_time(val.expiration) + '</td>\
</tr>';
//alert(substring);


string += substring; 


});




//}


//string += '</tbody></table>'; 



return string;



}




function add_options_price_handlers(){




      console.log('here ' + coin_two_balance);
   $('#bid_quantity').on('change', function () {
      bid_quantity = $('#bid_quantity').val();
      bid_price = $('#bid_price').val();


      $('#buy_total').html( (bid_quantity * bid_price).toFixed(9) );
      $('#buy_fee').html( (0).toFixed(9) );
      $('.netTotalBuy').html( (bid_quantity * bid_price * 1).toFixed(9) );

      total = bid_quantity * bid_price;

      if (total > coin_two_balance){
            console.log('inside here');
      if ($('#error_message').html().length < 3)
      $('#error_message').append('Net total must be less than or equal to your available balance.');
      }
      else{
         if ($('#error_message').html().substr(0,3) == 'Net')
            $('#error_message').empty();
      }

  }); 


    $('#bid_price').on('change', function () {

      bid_quantity = $('#bid_quantity').val();
      bid_price = $('#bid_price').val();


      $('#buy_total').html( (bid_quantity * bid_price).toFixed(9) );
      $('#buy_fee').html( (0).toFixed(9) );
      $('.netTotalBuy').html( (bid_quantity * bid_price * 1).toFixed(9) );

      total = bid_quantity * bid_price;

      if (total > coin_two_balance){
            console.log('inside here');
      if ($('#error_message').html().length < 3)
      $('#error_message').append('Net total must be less than or equal to your available balance.');
      }
      else{
         if ($('#error_message').html().substr(0,3) == 'Net')
            $('#error_message').empty();
      }


  }); 







    $('#ask_quantity').on('change', function () {

      ask_quantity = parseFloat($('#ask_quantity').val());
      ask_price =  parseFloat($('#ask_price').val());
      var flagged_balance;

      if (kind == 'CALL'){
        margin_requirement = (ask_quantity * 1).toFixed(9);
        flagged_balance = coin_one_balance;

      }
      else{
        margin_requirement = (ask_quantity * strike).toFixed(9);
        flagged_balance = coin_two_balance;
      }


      $('#sell_total').html( (ask_quantity * ask_price).toFixed(9) );
      $('#sell_fee').html( (0).toFixed(9) );
      $('.netTotalSell').html( (ask_quantity * ask_price * 1).toFixed(9) );
      $('#margin_requirement').html( margin_requirement );

      margin = ask_quantity;

      total =  margin;


      if (total > flagged_balance){
            console.log('inside here');
      if ($('#error_message_sell').html().length < 3)
      $('#error_message_sell').append('Margin must be less than or equal to your available balance.');
      }
      else{
         if ($('#error_message_sell').html().substr(0,3) == 'Mar')
            $('#error_message_sell').empty();
      }


  }); 


    $('#ask_price').on('change', function () {


      ask_quantity =  parseFloat($('#ask_quantity').val());
      ask_price =  parseFloat($('#ask_price').val());
      var flagged_balance;

      if (kind == 'CALL'){
        margin_requirement = (ask_quantity * 1).toFixed(9);
        flagged_balance = coin_one_balance;

      }
      else{
        margin_requirement = (ask_quantity * strike).toFixed(9);
        flagged_balance = coin_two_balance;
      }


      $('#sell_total').html( (ask_quantity * ask_price).toFixed(9) );
      $('#sell_fee').html( (0).toFixed(9) );
      $('.netTotalSell').html( (ask_quantity * ask_price * 1).toFixed(9) );
      $('#margin_requirement').html( margin_requirement);

      margin = ask_quantity;

      total = margin;

      if (total > flagged_balance){
            console.log('inside here');
      if ($('#error_message_sell').html().length < 3)
      $('#error_message_sell').append('Margin must be less than or equal to your available balance.');
      }
      else{
         if ($('#error_message_sell').html().substr(0,3) == 'Mar')
            $('#error_message_sell').empty();
      }

  }); 

}




function add_order_options_handlers(){

    $('#buy_order').click(function(){
      bid_quantity = $('#bid_quantity').val();
      bid_price = $('#bid_price').val();
      coin_ticker_one = coin_one_ticker;
      coin_ticker_two = coin_two_ticker;
      coin_name_one = coin_one_name;
      coin_name_two = coin_two_name;


      //alert(buy_amount);

      //alert(coin_ticker_one);

      if (bid_quantity * bid_price <= 0)
            alert('Total must be greater than 0!');
      else
      $.ajax({
        url: "/buy_option",
        type: "POST",
        data: {expiration: expiration, strike: strike, call_put: kind,  bid_quantity: bid_quantity, bid_price: bid_price, coin_ticker_one: coin_ticker_one, coin_ticker_two: coin_ticker_two, coin_name_one: coin_name_one, coin_name_two: coin_name_two , _csrf: csrf },
        dataType: "html"
      }).done(function(data){

        alert(data);

      });

    });




    $('#ask_submit').click(function(){

      //alert('yolo');
      ask_quantity = $('#ask_quantity').val();
      ask_price = $('#ask_price').val();
      coin_ticker_one = coin_one_ticker;
      coin_ticker_two = coin_two_ticker;
      coin_name_one = coin_one_name;
      coin_name_two = coin_two_name;
      margin = ask_quantity;
      //alert(buy_amount);


      if (ask_quantity * ask_price <= 0)
            alert('Total must be greater than or equal to zero!');
      else
      $.ajax({
        url: "/sell_option",
        type: "POST",
        data: {expiration: expiration, strike: strike, call_put: kind, margin: margin, ask_quantity: ask_quantity, ask_price: ask_price, coin_ticker_one: coin_ticker_one, coin_ticker_two: coin_ticker_two, coin_name_one: coin_name_one, coin_name_two: coin_name_two , _csrf: csrf },
        dataType: "html"
      }).done(function(data){

        alert(data);

      });

    });


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



function add_options_table_handlers(){




    $('.select_coin').change(function() {
        coin_name = $(this).val();
        $('.select_coin').val(coin_name);
        //expiration_time = $('.select_expiration').attr('expiration_time');
        expiration_time = $('option:selected', $('.select_expiration')).attr('expiration_time');
        $('.select_expiration').find('option[expiration_time="' + expiration_time  +'"]').attr("selected",true);

    $('html, body').animate({
        scrollTop: $('[coin_name_anchor="' + coin_name + '"][expiration_time_anchor="' + expiration_time + '"]').offset().top - 200
    }, 1000);


    });

        $('.select_expiration').change(function() {
        coin_name = $('.select_coin').val();
        $('.select_coin').val(coin_name);
        //expiration_time = $('.select_expiration').attr('expiration_time');
        expiration_time = $('option:selected', $(this)).attr('expiration_time');
        $('.select_expiration').find('option[expiration_time="' + expiration_time  +'"]').attr("selected",true);

    $('html, body').animate({
        scrollTop: $('[coin_name_anchor="' + coin_name + '"][expiration_time_anchor="' + expiration_time + '"]').offset().top - 200
    }, 1000);


    });


}








