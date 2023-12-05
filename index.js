function randomImg() {
  var quotes = [
    {
      text: "MENTAL BREAKDOWN JOVANI <br><hr> Quieres un cambio drástico en tu apariencia ya que te quieres sentir en control.",
      img:  "images/1.jpg"
    },
    {
      text: "INVINCIBLE JOVANI <br> <hr> Hoy nada ni nadie te para. El miedo? en la gabeta.",
      img:  "images/2.jpg",
    },
{
      text: "PAYASO JOVANI<br> <hr>  Constantemente te cogen de pendejo.🤡",
      img:  "images/3.jpg",
    },
{
      text: "GOTH JOVANI<br> <hr> Nadie te entiende. 🎵bcuz tonight will be the night that I will fall for you.🖤 ",
      img:  "images/4.jpg",
    },
{
      text: "CONFIDENT JOVANI <br> <hr>  Hoy estás asicalao y los likes de Insta te lo confirman. Tu crush te va a escribir.😏",
      img:  "images/5.jpg",
    },

    {
      text: "DEPRE JOVANI <br> <hr>  Nada te sale bien. Te van a botar del trabajo y tu jevo te va a dejar.",
      img:  "images/6.jpg"
    },
  ];
  
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML =
    '<img src="' + quote.img + '">' + '<p class="hi">' + quote.text + '</p>' ;
}