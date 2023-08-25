
// Codigo Filtrar precio, Limpiar

// document.addEventListener("DOMContentLoaded", function() {
//   const catID = localStorage.getItem("catID");
//   let sortOrder = '';


//   if (catID) {
//     const url = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`;
//     fetch(url)
//       .then(response => response.json())
//       .then(resultado => mostrarHTML(resultado))
//       .catch(error => console.error('Ocurrió un error:', error));
//   }

//   function mostrarHTML(data) {
//     const productosContainer = document.querySelector('.product-list');
    
//     const minPrice = parseFloat(document.querySelector('#rangeFilterPriceMin').value);
//     const maxPrice = parseFloat(document.querySelector('#rangeFilterPriceMax').value);


//     if (sortOrder === 'asc') {
//       data.products.sort((a, b) => a.name.localeCompare(b.name));
//     } else if (sortOrder === 'desc') {
//       data.products.sort((a, b) => b.name.localeCompare(a.name));
//     }

   
    
//     let htmlContent = '';

//     data.products.forEach(product => {
//       const productPrice = parseFloat(product.cost);

//       if ((isNaN(minPrice) || productPrice >= minPrice) &&
//           (isNaN(maxPrice) || productPrice <= maxPrice)) {
//         htmlContent += `
//           <div class="list-group-item list-group-item-action">
//             <div class="row">
//               <div class="col-3">
//                 <img src="${product.image}" alt="product image" class="img-thumbnail">
//               </div>
//               <div class="col">
//                 <div class="d-flex w-100 justify-content-between">
//                   <div class="mb-1">
//                     <h4>${product.name} - ${product.currency} ${product.cost}</h4>
//                     <p>${product.description}</p>
//                   </div>
//                   <small class="text-muted">${product.soldCount} artículos</small>
//                 </div>
//               </div>
//             </div>
//           </div>
//         `;
//       }
//     });

//     productosContainer.innerHTML = htmlContent;
//   }

//   // Agregar evento a los botones de ordenamiento
//   document.querySelector('#sortAsc').addEventListener('click', () => {
//     sortOrder = 'asc';
//     cargarProductos(catID);
//   });

//   document.querySelector('#sortDesc').addEventListener('click', () => {
//     sortOrder = 'desc';
//     cargarProductos(catID);
//   });


//   // Agregar evento al botón de filtro de precio
//   document.querySelector('#rangeFilterPrice').addEventListener('click', () => {
//     const catID = localStorage.getItem("catID");
//     cargarProductos(catID);
//   });

//   // Agregar evento al botón de limpiar
//   document.querySelector('#clearRangeFilter').addEventListener('click', () => {
//     document.querySelector('#rangeFilterPriceMin').value = '';
//     document.querySelector('#rangeFilterPriceMax').value = '';
//     const catID = localStorage.getItem("catID");
//     cargarProductos(catID);
//   });

//   // Función para cargar productos
//   function cargarProductos(catID) {
//     if (catID) {
//       const url = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`;
//       fetch(url)
//         .then(response => response.json())
//         .then(resultado => mostrarHTML(resultado))
//         .catch(error => console.error('Ocurrió un error:', error));
//     }
//   }
// });


// Codigo Buscar por Relevancia

// document.addEventListener("DOMContentLoaded", function() {
//   const catID = localStorage.getItem("catID");
//   let sortOrder = '';


//   if (catID) {
//     const url = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`;
//     fetch(url)
//       .then(response => response.json())
//       .then(resultado => mostrarHTML(resultado))
//       .catch(error => console.error('Ocurrió un error:', error));
//   }

//   function mostrarHTML(data) {
//     const productosContainer = document.querySelector('.product-list');
    
//     const minPrice = parseFloat(document.querySelector('#rangeFilterPriceMin').value);
//     const maxPrice = parseFloat(document.querySelector('#rangeFilterPriceMax').value);


//     if (sortOrder === 'asc') {
//       data.products.sort((a, b) => a.name.localeCompare(b.name));
//     } else if (sortOrder === 'desc') {
//       data.products.sort((a, b) => b.name.localeCompare(a.name));
//     } else if (sortOrder === 'soldCount') {
//       data.products.sort((a, b) => b.soldCount - a.soldCount);
//     }

   
    
//     let htmlContent = '';

//     data.products.forEach(product => {
//       const productPrice = parseFloat(product.cost);

//       if ((isNaN(minPrice) || productPrice >= minPrice) &&
//           (isNaN(maxPrice) || productPrice <= maxPrice)) {
//         htmlContent += `
//           <div class="list-group-item list-group-item-action">
//             <div class="row">
//               <div class="col-3">
//                 <img src="${product.image}" alt="product image" class="img-thumbnail">
//               </div>
//               <div class="col">
//                 <div class="d-flex w-100 justify-content-between">
//                   <div class="mb-1">
//                     <h4>${product.name} - ${product.currency} ${product.cost}</h4>
//                     <p>${product.description}</p>
//                   </div>
//                   <small class="text-muted">${product.soldCount} artículos</small>
//                 </div>
//               </div>
//             </div>
//           </div>
//         `;
//       }
//     });

//     productosContainer.innerHTML = htmlContent;
//   }

//   // Agregar evento a los botones de ordenamiento
//   document.querySelector('#sortAsc').addEventListener('click', () => {
//     sortOrder = 'asc';
//     cargarProductos(catID);
//   });

//   document.querySelector('#sortDesc').addEventListener('click', () => {
//     sortOrder = 'desc';
//     cargarProductos(catID);
//   });

//   document.querySelector('#sortByCount').addEventListener('click', () => {
//     sortOrder = 'soldCount'; // Ordenar por cantidad de ventas
//     cargarProductos(catID);
//   });

//   // Agregar evento al botón de filtro de precio
//   document.querySelector('#rangeFilterPrice').addEventListener('click', () => {
//     const catID = localStorage.getItem("catID");
//     cargarProductos(catID);
//   });

//   // Agregar evento al botón de limpiar
//   document.querySelector('#clearRangeFilter').addEventListener('click', () => {
//     document.querySelector('#rangeFilterPriceMin').value = '';
//     document.querySelector('#rangeFilterPriceMax').value = '';
//     const catID = localStorage.getItem("catID");
//     cargarProductos(catID);
//   });

//   // Función para cargar productos
//   function cargarProductos(catID) {
//     if (catID) {
//       const url = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`;
//       fetch(url)
//         .then(response => response.json())
//         .then(resultado => mostrarHTML(resultado))
//         .catch(error => console.error('Ocurrió un error:', error));
//     }
//   }
// });


// Codigo Buscar productos 


document.addEventListener("DOMContentLoaded", function() {
  const catID = localStorage.getItem("catID");
  let sortOrder = '';
  let searchData = [];

  if (catID) {
    const url = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`;
    fetch(url)
      .then(response => response.json())
      .then(resultado => {
        searchData = resultado.products;
        mostrarHTML(searchData);
      })
      .catch(error => console.error('Ocurrió un error:', error));
  }

  function mostrarHTML(data) {
    const productosContainer = document.querySelector('.product-list');
    const minPrice = parseFloat(document.querySelector('#rangeFilterPriceMin').value);
    const maxPrice = parseFloat(document.querySelector('#rangeFilterPriceMax').value);
    const searchInput = document.querySelector('#searchInput').value.trim().toLowerCase();

    if (sortOrder === 'asc') {
      data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'desc') {
      data.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOrder === 'soldCount') {
      data.sort((a, b) => b.soldCount - a.soldCount);
    }

    let filteredData = data.filter(product => {
      const productPrice = parseFloat(product.cost);

      return ((isNaN(minPrice) || productPrice >= minPrice) &&
              (isNaN(maxPrice) || productPrice <= maxPrice) &&
              (product.name.toLowerCase().includes(searchInput) || product.description.toLowerCase().includes(searchInput)));
    });

    let htmlContent = '';

    filteredData.forEach(product => {
      htmlContent += `
        <div class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col-3">
              <img src="${product.image}" alt="product image" class="img-thumbnail">
            </div>
            <div class="col">
              <div class="d-flex w-100 justify-content-between">
                <div class="mb-1">
                  <h4>${product.name} - ${product.currency} ${product.cost}</h4>
                  <p>${product.description}</p>
                </div>
                <small class="text-muted">${product.soldCount} artículos</small>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    productosContainer.innerHTML = htmlContent;
  }

  document.querySelector('#sortAsc').addEventListener('click', () => {
    sortOrder = 'asc';
    cargarProductos(catID);
  });

  document.querySelector('#sortDesc').addEventListener('click', () => {
    sortOrder = 'desc';
    cargarProductos(catID);
  });

  document.querySelector('#sortByCount').addEventListener('click', () => {
    sortOrder = 'soldCount';
    cargarProductos(catID);
  });

  document.querySelector('#rangeFilterPrice').addEventListener('click', () => {
    cargarProductos(catID);
  });

  document.querySelector('#clearRangeFilter').addEventListener('click', () => { // Limpiamos todos los campos 
    document.querySelector('#rangeFilterPriceMin').value = '';
    document.querySelector('#rangeFilterPriceMax').value = '';
    document.querySelector('#searchInput').value = '';
    sortOrder = '';
    cargarProductos(catID);
  });

  document.querySelector('#searchInput').addEventListener('input', () => {
    mostrarHTML(searchData);
  });

  function cargarProductos(catID) {
    if (catID) {
      const url = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`;
      fetch(url)
        .then(response => response.json())
        .then(resultado => {
          searchData = resultado.products;
          mostrarHTML(searchData);
        })
        .catch(error => console.error('Ocurrió un error:', error));
    }
  }
});
