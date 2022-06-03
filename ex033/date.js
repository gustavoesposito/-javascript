 //Date

 //const data1= new Date();
 //se voce ão definir nada nos parametros , ira trazer informaçoes da data atual

 //const data2= new Date ('March 06 2019 9:30 ')
 //definido
 //tudo aqui voce pode ver no mozzila.com

 //const data3 = new Date(2019,03,06,9,30)
 //ele própio cfia a data para voce 
 //Ano, mes, dia, hora , minuto

 const data1= new Date();
 data1.setFullYear(2013)

 const data2 = new Date('August 16 2004 4:30')
 data2.toTimeString() //gmt local
 data2.toISOString()//banco de dados
data2.toDateString()//convertendo para String