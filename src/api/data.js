// eslint-disable-next-line no-unused-vars
let heroes = [
  {
    id:1,
    titulo:' "El túnel" (1948)',
    autor:'Ernesto Sabato',
    editorial:'Seix Barral',
    segmento:'Novela existencial',
    sinopsis:'Un hombre obsesionado con una mujer comete un crimen y reflexiona sobre la alienación y la soledad',
    img:'https://palabrasylogos.odiseus.org/files/2013/06/EL-TUNEL-PORTADA.jpg'
  },
  {
    id:2,
    titulo:'"Las viudas de los jueves" (2005)',
    autor:'Claudia Piñeiro',
    editorial:'Alfaguara',
    segmento:' Novela contemporánea',
    sinopsis:' En un barrio cerrado de las afueras de Buenos Aires, un grupo de amigos se enfrenta a la crisis económica y social de Argentina en la década de 2001, revelando secretos y tensiones ocultas.',
    img:'https://imagessl6.casadellibro.com/a/l/s5/16/9788420471716.webp'
  },
  {
    id:3,
    titulo:'"El secreto de sus ojos" (2005)',
    autor:'Eduardo Sacheri',
    editorial:'Alfaguara',
    segmento:' Novela negra',
    sinopsis:'Un thriller que entrelaza una historia de amor y crimen, con una trama detectivesca y giros inesperados.',
    img:'https://covers.alibrate.com/b/5a0cf5f6bac1cbf7023c0ffc/94ba293c-8a50-4aed-9a1f-84d85eb526e2/share'
  },
  {
    id:4,
    titulo:'"Las cosas que perdimos en el fuego" (2016)',
    autor:' Mariana Enriquez',
    editorial:'Anagrama',
    segmento:'Cuentos contemporáneos',
    sinopsis:'Un conjunto de cuentos que abordan temas sociales y políticos contemporáneos en Argentina, explorando la violencia, la desigualdad y la resistencia.',
    img:'https://blogs.upm.es/nosolotecnica/wp-content/uploads/sites/142/2023/07/Mariana-enriquez-700_1100.jpg'
  },
  {
    id:5,
    titulo:'"Kryptonita" (2011)',
    autor:'Leonardo Oyola',
    editorial:'Edhasa',
    segmento:' Novela de superhéroes',
    sinopsis:'Una historia ambientada en el conurbano argentino donde un grupo de amigos enfrenta situaciones surrealistas con un toque de superpoderes.',
    img:'https://lasclasesdeliteratura.files.wordpress.com/2018/03/krypto.jpg'
  },
  {
    id:6,
    titulo:'"Zama" (1956)',
    autor:'Antonio Di Benedetto',
    editorial:'Seix Barral',
    segmento:'Novela histórica',
    sinopsis:'Situada en la época colonial, sigue la vida de Diego de Zama, un funcionario español que espera ser transferido mientras enfrenta la soledad y la decadencia.',
    img:'https://m.media-amazon.com/images/I/31l-ieU4R1L._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id:7,
    titulo:'"El viento que arrasa" (2012)',
    autor:'Selva Almada',
    editorial:'Literatura Random House',
    segmento:'Novela contemporánea',
    sinopsis:'En esta novela, una predicadora evangélica llega a un pequeño pueblo en el norte de Argentina. Con su llegada, se desata una serie de eventos que revelan secretos del pasado.',
    img:'https://imagessl3.casadellibro.com/a/l/t0/73/9788439739173.jpg'
  },
  {
    id:8,
    titulo:'"El Aleph" (1949)',
    autor:'Jorge Luis Borges',
    editorial:'Emecé Editores',
    segmento:'Cuentos clásicos',
    sinopsis:' Una colección de cuentos que exploran la metafísica, la identidad y la complejidad del universo.',
    img:'https://images.cdn1.buscalibre.com/fit-in/360x360/78/8f/788f1c87e9e3cbfd648353112dcbbbbf.jpg'
  },
  {
    id:9,
    titulo:'"El río sin orillas" (2018)',
    autor:'Juan José Saer',
    editorial:'Seix Barral',
    segmento:'Novela contemporánea',
    sinopsis:' La historia sigue a un grupo de personajes en una travesía fluvial que sirve como metáfora de la vida y la búsqueda de significado.',
    img:'https://4.bp.blogspot.com/-95NuTkJeby4/XKEsE_DLRpI/AAAAAAAANgk/-W6rPSG3PVQQZM29D2HuaMDcxZvQ6NukACLcBGAs/s1600/el-rio-sin-orillas-juan-jose-saer-alianza-1-edicion-D_NQ_NP_337625-MLA25481012613_042017-F.jpg'
  },
  {
    id:10,
    titulo:'"Cien años de soledad" (1967)',
    autor:'Gabriel García Márquez (argentino naturalizado)',
    editorial:' Sudamericana',
    segmento:' Novela clásica',
    sinopsis:'Una obra maestra que narra la historia de la familia Buendía en el pueblo ficticio de Macondo, explorando temas como el amor, la soledad y la búsqueda de identidad.',
    img:'https://images.cdn2.buscalibre.com/fit-in/360x360/52/6b/526bb938f7613f31e3e42272df5463e1.jpg'
  },
  
]

export const getHeroes = () => heroes;

export const getHeroe = id => heroes.find(
  heroe => heroe.id.toString()=== id
)

export const deleteHeroe = async(id) => heroes = heroes.filter(
  heroe => heroe.id !== id
)