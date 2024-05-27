
function classNadador() {
    const idade = parseInt(prompt("Qual é a idade do nadador?"), 10);

    
    let categoria;

    
    if (idade >= 5 && idade <= 7) {
        categoria = "Infantil A";
    } else if (idade >= 8 && idade <= 10) {
        categoria = "Infantil B";
    } else if (idade >= 11 && idade <= 13) {
        categoria = "Juvenil A";
    } else if (idade >= 14 && idade <= 17) {
        categoria = "Juvenil B";
    } else if (idade >= 18) {
        categoria = "Adulto";
    } else {
        categoria = "Idade não permitida para classificação";
    }

    alert(`O nadador de ${idade} anos pertence à categoria: ${categoria}`);
}

classNadador();