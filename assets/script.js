const items =[
    {
        id: 0,
        nome: "camiseta",
        img:"img/camiseta.jpg",
        quantidade: 0
    },   
    {
        id: 1,
        nome: "shorts",
        img:"img/shorts.jpg",
        quantidade: 0
    },   
    {
        id: 2,
        nome: "sapato",
        img:"img/sapato.jpg",
        quantidade: 0
    } ,  
   ]    
   inicializarLoja = () =>{
       var containerProdutos = document.getElementById("produtos");
       items.map((val) =>{
           containerProdutos.innerHTML += `
           <div class= "produto-single">
               <img src= "`+val.img+`"/>
               <p> `+val.nome+`</p>
               <a key="`+val.id+`" href="#"> Adicionar ao carrinho! </a>
           </div>

           `
           
       })
   }

   inicializarLoja();

   atualizarCarinho= () => {
    var containerCarrinho = document.getElementById("carrinho");
    containerCarrinho.innerHTML = ""
    items.map((val) =>{
        if(val.quantidade > 0){
        containerCarrinho.innerHTML += `
        
        <p>`+val.nome+` | quatidade: `+val.quantidade+`</p>
        <hr>

        `;
    }
        
    })

   }

       var links = document.getElementsByTagName("a");

       for (var i = 0; i < links.length; i++){
           links[i].addEventListener("click",function(){
               let key = this.getAttribute('key');
               items[key].quantidade++;
               atualizarCarinho();
               return false;
           })
       }


