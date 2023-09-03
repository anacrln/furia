function renderProducts(products) {
  const productList = document.getElementById('product-list')

  // Loop através dos produtos e cria um elemento HTML para cada um.
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product'); // Adicione uma classe para estilização CSS, se necessário.

    // Crie elementos para exibir informações do produto.
    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Preço: $${product.price.toFixed(2)}`;

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    // Anexe os elementos filhos à div do produto.
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productDescription);
    productDiv.appendChild(productImage);

    // Anexe a div do produto à lista de produtos.
    productList.appendChild(productDiv);
  });
}

window.addEventListener('load', () => {
  fetch('./assets/data/products.json')
    .then(response => response.json())
    .then(products => {
      renderProducts(products);
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));
});



<script>
  $('#product-list').slick({
    dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
  {
    breakpoint: 1024,
  settings: {
    slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
          }
        },
  {
    breakpoint: 600,
  settings: {
    slidesToShow: 2,
  slidesToScroll: 2
          }
        },
  {
    breakpoint: 480,
  settings: {
    slidesToShow: 1,
  slidesToScroll: 1
          }
        }

  ]
    });

</script>



<div class="product">
          <img class="prodImg" src="./assets/img/product/camisetaGatoFuria.jpg" alt="Camisa Gato Furia">
          <h2 class="prodName">Camisa Gato Furia</h2>
          <p>Preço: $99999.99</p>
          <p></p>
        </div>
        <div class="product">
          <img class="prodImg" src="./assets/img/product/camisaFuria2.jpg" alt="Camisa Furia">
          <h2 class="prodName">Camisa Furia</h2>
          <p>Preço: $99999.99</p>
          <p></p>
        </div>
        <div class="product">
          <img class="prodImg" src="./assets/img/product/calcaFuria.jpg" alt="Calça Furia">
          <h2 class="prodName">Calça Furia</h2>
          <p>Preço: $99999.99</p>
          <p></p>
        </div>
        <div class="product">
          <img class="prodImg" src="./assets/img/product/boneFuria.jpg" alt="Bone Furia">
          <h2 class="prodName">Bone Furia</h2>
          <p>Preço: $99999.99</p>
          <p></p>
        </div>