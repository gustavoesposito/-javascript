const materiais=[
'Alumínio',
'Latão',
'Prata',
'Ouro'
]

console.log(materiais.map(material=>material.length))

materiais.sort();
materiais.push(3)