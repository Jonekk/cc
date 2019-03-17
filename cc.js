function val_to_string(val)
{
	if (val >= 1000) {
    str = "million";
    val = val / 1000;
  }
  if (val >= 1000) {
    str = "billion";
    val = val / 1000;
  }
  if (val >= 1000) {
    str = "trillion";
    val = val / 1000;
  }
  return val.toFixed(3) + " " + str;
}

function string_to_val(str)
{
  var number_val;
  var number_mult;
  var str_val;
  
	if(str.search("million") != -1)
  {
    ret = str.search("million");
    number_val= parseFloat(str.substring(0,ret-1));
    number_mult = 1000000;
  }
	if(str.search("billion") != -1)
  {
    ret = str.search("billion");
    number_val= parseFloat(str.substring(0,ret-1));
    number_mult = 1000000000;
  }
	if(str.search("trillion") != -1)
  {
    ret = str.search("trillion");
    number_val= parseFloat(str.substring(0,ret-1));
    number_mult = 1000000000000;
  }
  return number_val.toFixed(3) * number_mult;
}

function showAlert2()
{
  var price;
  var cps_mult;
  var price_mult;
  var watch = ["productPrice0", "productPrice1", "productPrice2", "productPrice3", "productPrice4", "productPrice5", "productPrice6", "productPrice7", "productPrice8", , "productPrice9", "productPrice10", "productPrice11"];
  for(var i=0; i<watch.length; i++)
  {
    element = document.getElementById(watch[i]);
    
    price_mult = 1;
  	price = element.textContent;
    if(price.search("billion") != -1)
    {
      ret = price.search("billion");
      price = price.substring(0,ret-1);
      price_mult = 1000000000;
    }
    if(price.search("million") != -1)
    {
      ret = price.search("million");
      price = price.substring(0,ret-1);
      price_mult = 1000000;
    }
    else
    {      
      if(price.search(":") != -1)
      {
        ret = price.search(":");
        price = price.substring(0,ret-1);
      }
    }
  	cookies_text = document.getElementById("cookies").textContent;
  	ret = cookies_text.search("per second");
    if (cookies_text.search("million") != -1) {
      cps_mult = 1000000;
    } else {
      cps_mult = 1;
    }
    cps = cookies_text.substring(ret+12);
    time = parseFloat(price_mult)/parseFloat(cps_mult)*parseFloat(price)/parseFloat(cps);
  	//alert(parseInt(price) + " / "+ parseInt(cps) + " = " + time);
  
    if (price_mult == 1000000) {
    	price = price + " million ";
    }
    if (price_mult == 1000000000) {
    	price = price + " billion ";
    }
  	element.textContent = price + " :(" + parseFloat(time).toFixed(0) + " s.)";
  }
}

function showAlert()
{
  var items = 20
  for(var i=0; i<items; i++) {
    var product_label;
    var product_name_label;
    var product_price_label;
    var product_name;
    var product_price;
    var product_cps;
    product_label = "product" + i;
    product_name_label = "productName" + i;
    product_price_label = "productPrice" + i
    
    product_name = document.getElementById(product_name_label).textContent;
    alert(product_name)
    product_price = Game.Objects[product_name].bulkPrice;
    alert(product_price)
    product_cps = Game.Objects[product_name].basePrice;
    
    element = document.getElementById(product_label);
    element_text = element.textContent;
    element.textContent = element_text + " " + product_cps
  }
}

function calcMagic()
{
	cookies_text = document.getElementById("cookies").textContent;
  ret = cookies_text.search("per second");
  if (cookies_text.search("million") != -1) {
    cps_mult = 1000;
  } else {
    cps_mult = 1;
  }
  cps = cookies_text.substring(ret+12);
  cpsfloat = parseFloat(cps);
  cpsfloat = cpsfloat * cps_mult;
  req_cookies = cpsfloat * 30 * 60 * 100 / 15;
  alert(val_to_string(req_cookies))
  //document.getElementById("cookies").textContent = cookies_text + " (" + req_cookies + ")";
}

function testfun()
{
  shimmers = document.getElementById("shimmers")
  var div=document.createElement("div");
  div.className = "shimmer"
  shimmers.appendChild(div)
  
}

$(window).bind("load", function() {
  // Handler for golden cookies
  $('#shimmers').on('DOMNodeInserted', 'div', function () {
    var player = document.createElement('audio');
    player.src = 'http://www.orangefreesounds.com/wp-content/uploads/2017/10/Twin-bell-alarm-clock-ringing-short.mp3?_=1';
    player.preload = 'auto';
    player.play();
  });

  // Handler for effectiveness calc
  var input=document.createElement("input");
  input.type="button";
  input.value="Time";
  input.onclick = showAlert;
  input.setAttribute("style", "font-size:18px;position:absolute;top:120px;right:500px;");
  document.body.appendChild(input); 

  //handler for magic
  var calc_magic=document.createElement("input");
  calc_magic.type="button";
  calc_magic.value="Magic";
  calc_magic.onclick = calcMagic;
  calc_magic.setAttribute("style", "font-size:18px;position:absolute;top:120px;left:700px;");
  document.body.appendChild(calc_magic); 

  // Handler for alarm trigger
  var test=document.createElement("input");
  test.type="button";
  test.value="test";
  test.onclick = testfun;
  test.setAttribute("style", "font-size:18px;position:absolute;top:120px;left:800px;");
  document.body.appendChild(test);
});



