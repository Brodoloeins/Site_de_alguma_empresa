const typewriter = document.getElementById('typewriter')

function type(writer){
    
    const text = writer.innerHTML.split('');
    typewriter.innerHTML = "";
    text.forEach((word, index) => {
        setTimeout(() => typewriter.innerHTML += word, 155 * index)
    })

}

type(typewriter)