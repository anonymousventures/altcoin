
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




