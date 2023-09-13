const instrumentos = [
  {id: 1, name: "Guitarra Eléctrica Epiphone 335", stock: 20, precio: 800000, description: "Guitarra utilizada en el Jazz, con diapasón de ébano y micrófonos dobles", category: "guitarra"},
  {id: 2, name: "Guitarra Clásica de Luthier", stock: 5, precio: 950000, description: "Guitarra Clásica, Luthier Yacopi, con madera Pino de Abeto Alemán y aros de Algarrobo", category: "guitarra"},
  {id: 3, name: "Guitarra Eléctrica Gibson Les Paul", stock: 14, precio: 1200000, description: "Guitarra legendaria utilizada por Slash y Jimmy Page, entre otros", category: "guitarra"},
  {id: 4, name: "Conga LP", stock: 5, precio: 100000, description: "Conga LP, made in Germany, parche Remo, sonido agudo", category: "percusion"},
  {id: 5, name: "Redoblante", stock: 7, precio: 300000, description: "Redoblante Pearl, made in USA, sonido vibrante, con parche Remo", category: "percusion"},
  {id: 6, name: "Clarinete Bufet Crampton", stock: 3, precio: 900000, description: "Clarinete en Sib, sonido único de la famosa marca parisina", category: "vientos"},
  {id: 7, name: "Saxofón Tenor Parquer", stock: 9, precio: 400000, description: "Saxofón Tenor de estudio, ideal para iniciarse en el instrumento", category: "vientos"},
  {id: 8, name: "Trompeta Stagg", stock: 3, precio: 1000000, description: "Trompeta marca Stagg, made in Germany, con sordina y estuche rígido", category: "vientos"},
  {id: 9, name: "Flauta traversa Yamaha", stock: 4, precio: 950000, description: "Flauta traversa Yamaha, para nivel profesional, con zapatillado nuevo", category: "vientos"},
  {id: 10, name: "Armónica Cromática Hohner", stock: 1, precio: 700000, description: "Armónica cromática Hohner, dos octavas, recomendada para uso profesional", category: "vientos"}]

export const mFetch = () => new Promise ((res, rej) => {
  const condition = true
  if (condition){
    setTimeout(() => {
      res(instrumentos)
    }, 1000);
    } else {
    
    }
    })



export const mFetchOne = (iid) => new Promise ((res, rej) => {
    setTimeout(() => {
            res(iid ? instrumentos.find(instrumento => instrumento.id === iid) : instrumentos)
        }, 1000);
})