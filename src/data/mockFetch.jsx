const instrumentos = [
  {id: 1, name: "Guitarra Eléctrica Epiphone 335", stock: 20, precio: 800000, description: "Guitarra utilizada en el Jazz, con diapasón de ébano y micrófonos dobles", category: "guitarra", imgUrl: 'https://static.wixstatic.com/media/b98594_0523eb17c04f4247ad03d3fa71234b9e.jpg/v1/fill/w_560,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b98594_0523eb17c04f4247ad03d3fa71234b9e.jpg'},
  {id: 2, name: "Guitarra Clásica de Luthier", stock: 5, precio: 950000, description: "Guitarra Clásica, Luthier Yacopi, con madera Pino de Abeto Alemán y aros de Algarrobo", category: "guitarra", imgUrl: 'https://veerkamponline.com/cdn/shop/products/7000430.jpg?v=1663785856'},
  {id: 3, name: "Guitarra Eléctrica Gibson Les Paul", stock: 14, precio: 1200000, description: "Guitarra legendaria utilizada por Slash y Jimmy Page, entre otros", category: "guitarra", imgUrl: 'https://therockstore.com.ar/wp-content/uploads/2021/10/1621276881339.jpg'},
  {id: 4, name: "Conga LP", stock: 5, precio: 100000, description: "Conga LP, made in Germany, parche Remo, sonido agudo", category: "percusion", imgUrl: 'https://www.heavenimagenes.com/heavencommerce/b23e72e1-40ba-4adb-9dc3-7ee3d3a63b35/images/v2/LATIN%20PERCUSSION/1410221225336095_01_medium.jpg'},
  {id: 5, name: "Redoblante Pearl", stock: 7, precio: 300000, description: "Redoblante Pearl, made in USA, sonido vibrante, con parche Remo", category: "percusion", imgUrl: 'https://www.heavenimagenes.com/heavencommerce/3c566556-ab46-4238-9c3a-3568f6af6c1b/images/v2/PEARL/10659_medium.jpg'},
  {id: 6, name: "Clarinete Bufet Crampton", stock: 3, precio: 900000, description: "Clarinete en Sib, sonido único de la famosa marca parisina", category: "vientos",imgUrl: 'https://boutiquedevientos.com.ar/wp-content/uploads/2022/07/BC1160L-2-0P-clarinete-divine-sib-buffet-crampon-towsa.jpg'},
  {id: 7, name: "Saxofón Tenor Parquer", stock: 9, precio: 400000, description: "Saxofón Tenor de estudio, ideal para iniciarse en el instrumento", category: "vientos", imgUrl: 'https://solomusica.com.ar/sm2020/8612-home_default/saxo-tenor-ocean-ots190.jpg'},
  {id: 8, name: "Trompeta Stagg", stock: 3, precio: 1000000, description: "Trompeta marca Stagg, made in Germany, con sordina y estuche rígido", category: "vientos", imgUrl: 'https://boutiquedevientos.com.ar/wp-content/uploads/2021/11/BE110-1-0-trompeta-new-standar-110-sib-besson-towsa.jpg'},
  {id: 9, name: "Flauta traversa Yamaha", stock: 4, precio: 950000, description: "Flauta traversa Yamaha, para nivel profesional, con zapatillado nuevo", category: "vientos", imgUrl: 'https://bairesrocks.vteximg.com.br/arquivos/ids/213690/783432-MLA42373477374_062020-F.jpg?v=637313854199830000'},
  {id: 10, name: "Armónica Cromática Hohner", stock: 1, precio: 700000, description: "Armónica cromática Hohner, dos octavas, recomendada para uso profesional", category: "vientos", imgUrl: 'https://mla-s1-p.mlstatic.com/927672-MLA42317201980_062020-F.jpg'}]

export const mFetch = (iid) => new Promise ((res, rej) => {
    setTimeout(() => {
      res(iid ? instrumentos.find(instrumento => instrumento.id === parseInt(iid)) : instrumentos)
    }, 1000)
})