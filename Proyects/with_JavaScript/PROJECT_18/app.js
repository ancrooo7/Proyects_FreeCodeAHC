paragraph = [
    `Turritopsis nutricula es una especie de hidrozoo hidroideo de la familia Oceanidae con un ciclo de vida en el que se revierte a pólipo después de llegar a su maduración sexual. Es uno de los casos conocidos de metazoo capaz de revertir su edad adulta a una edad sexualmente inmadura de forma individual. Otros animales biológicamente inmortales incluyen la medusa Laodicea undulata y Aurelia sp., así como la medusa del mismo género Turritopsis dohrnii.​ Es capaz de realizarlo a través de un proceso celular de transdiferenciación. Teóricamente, este ciclo puede repetirse indefinidamente, presentándose como biológicamente inmortal`,
    `Conium maculatum es una planta herbácea bianual que puede alcanzar un tamaño de 1,5-2,5 m de altura. Posee un tallo hueco y estriado, manchado de color purpúreo en la base y muy ramoso en la parte superior; las hojas son tripinnadas, blandas, fétidas, verdinegras, triangulares y divididas en foliolos ovados o lanceolados. Las hojas inferiores son pecioladas y más grandes que las superiores, llegando a medir 60 cm de longitud. Las flores son pequeñas, de color blanco y surgen en umbelas de unos 10 a 15 cm de diámetro. El fruto es un pequeño aquenio redondo u ovalado, de color verde claro. Las semillas son pequeñas de color negruzco. La planta entera desprende un olor nauseabundo al romperla o restregarla.`,
    `Platón participó activamente en la enseñanza de la Academia y escribió sus obras, siempre en forma de diálogo, sobre los más diversos temas, tales como filosofía política, ética, psicología, antropología filosófica, epistemología, gnoseología, metafísica, cosmogonía, cosmología, filosofía del lenguaje y filosofía de la educación. A diferencia de sus contemporáneos, se cree todo el trabajo de Platón ha sobrevivido intacto.`,
    `Fedón o Sobre el alma, es un diálogo platónico que se ambienta en las últimas horas de vida de Sócrates, antes de ser ejecutado. Platón utiliza este cuadro para exponer sus ideas de madurez, la teoría de las formas, la teoría de la reminiscencia y la teoría de la metempsicosis, como elementos de una discusión sobre la inmortalidad del alma.`,
    `Dota 2 es un videojuego perteneciente al género de Arena de batalla en línea ARTS («estrategia de acción en tiempo real»), también conocido como MOBA, lanzado el 9 de julio del año 2013. El juego fue desarrollado por la empresa Valve Corporation. El título fue anunciado oficialmente el 13 de octubre de 2010, en un artículo en el sitio web Game Informer;posteriormente, entró en su etapa Beta a principios del 2011, y finalmente se lanzó al público en general a través de Steam el 9 de julio de 2013 para Microsoft Windows, y el 18 de julio de 2013 para OS X y Linux.`,
    `Laravel tiene como objetivo ser un framework que permita el uso de una sintaxis elegante y expresiva para crear código de forma sencilla y permitiendo multitud de funcionalidades. Intenta aprovechar lo mejor de otros frameworks y aprovechar las características de las últimas versiones de PHP.`,
    `La gravedad de un agujero negro, o «curvatura del espacio-tiempo», provoca una singularidad envuelta por una superficie cerrada, llamada horizonte de sucesos. Esto es previsto por las ecuaciones del campo de Einstein. El horizonte de sucesos separa la región del agujero negro del resto del universo, y a partir de él ninguna partícula puede salir, incluidos los fotones. Dicha curvatura es estudiada por la relatividad general, la que predijo la existencia de los agujeros negros y fue su primer indicio.`,
    `A finales de los años 70, dos agentes del FBI se reúnen con asesinos y violadores encarcelados para desarrollar perfiles psicológicos de criminales, pero sus jefes temen que se están involucrando demasiado con sus entrevistados.`,
    `En matemáticas, un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1.​ Por el contrario, los números compuestos son los números naturales que tienen algún divisor natural aparte de sí mismos y del 1, y, por lo tanto, pueden factorizarse. El número 1, por convenio, no se considera ni primo ni compuesto.`
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * paragraph.length);

    if(isNaN(value) || value<0 || value>9){
        result.innerHTML = `<p class="result">${paragraph[random]}</p>`;
    }
    else {
        let tempText = paragraph.slice(0, value);
        tempText = tempText.map(item => {
            return `<p class="result">${item}</p>`
        }).join('');
        result.innerHTML = tempText;
    }
});