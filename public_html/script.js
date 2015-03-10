/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    /*$("#ocultar").click(function(){
       $("p").hide();
    });
    $("#mostrar").click(function(){
       $("p").show();
    });*/
    /*$("#ocultar").click(function(){
       $("p").toggle();
    });*/
    /*$("#gris").click(function(){
       $("p").css('background-color', 'gray');
    });
    $("#rojo").click(function(){
       $("p").css('background-color', 'red');
    });
    $("#verde").click(function(){
       $("p").css('background-color', 'green');
    });    
    $("#box").mouseenter(function(){
       $(this).css('background-color', 'red');
    });
    $("#box").mouseleave(function(){
       $(this).css('background-color', 'green');
    });
    $("#desvanecer").click(function(){
       $("p").fadeToggle(5000);
    });
    $("#cambiar").click(function(){
       $("table tr").toggleClass('verde amarillo');
    });*/
    
    $("#colombia").mouseover(function(){
       $("#imagen").attr("src", "https://www.google.com.co/maps/vt/data=U4aSnIyhBFNIJ3A8fCzUmaVIwyWq6RtIfB4QKiGq_w,1dzG0sa70TSPMpHoF6a_aYfqgGILhvQ6CER9gbw75uHhlBm1yvK6FwE1cwyU8rnRffeulVK8gCzj7AmFb5fTPqabjJThxXWQmdNmdhs-a2LXrW8C0eR8fI7TcXN47BV252YaTwnBqjlXhyN0UqgvWyXVjXrhI2aVRLuZc4_wu28yxuhDeqd0UfRf9fLBb1abc99P3bmVODQdfUCPXA");
       $("#parrafo").text("Colombia, oficialmente República de Colombia, es una república unitaria de América situada en la región noroccidental de América del Sur. Está constituida en un estado social y democrático de derecho cuya forma de gobierno es presidencialista.");
    });
    
    $("#canada").mouseover(function(){
       $("#imagen").attr("src", "https://www.google.com.co/maps/vt/data=U4aSnIyhBFNIJ3A8fCzUmaVIwyWq6RtIfB4QKiGq_w,9A59qdGZ6N88qIrWeUEt_AKs4ySN8FTN_uufmDpD_pN5ieEJqXkq_Gy9wU5wbnMYgnHtItl-xO3FvbJfm8bPz8TSfPy3yCQS7CGwB4JxsuOw_6tyfnLHhpv9V2w2HIEkm8cGeOKi9RORIjA-cNwMhoZyClm7t5-ZWKJ25RdjEROUFS6FOlcK1KYjWK06gOXpjoXUj2lcAx1vszks");
       $("#parrafo").text("Canadá es un país soberano de Norteamérica, cuya forma de gobierno es la monarquía parlamentaria federal. Su territorio está organizado en diez provincias y tres territorios. Su capital es la ciudad de Ottawa y la ciudad más poblada es Toronto.");
    });
    
    $("#australia").mouseover(function(){
       $("#imagen").attr("src", "https://www.google.com.co/maps/vt/data=U4aSnIyhBFNIJ3A8fCzUmaVIwyWq6RtIfB4QKiGq_w,yJkbSBOikQo9AI-bcDD1wHqtU7e_cc10jx_wtkjKuZEx3pIx2NOrqwjz2px_uUNm7LyXdCvJtzkwEVC5V-TxWtsw2yFaZmAGUPRazJJd-bJnbxcseHH8mjzRcI3nm9KzjMitU-UcZkijXdluQxu_AJCXPU-0GClTcE-DAPtFSa80Y2SyCblshezqBTIKsPifGbYVe8AU0IDdlzXggw");
       $("#parrafo").text("La Mancomunidad de Australia, de manera abreviada Australia es un país soberano de Oceanía, cuya forma de gobierno es la monarquía constitucional federal parlamentaria.");
    });
    
    $("#espania").mouseover(function(){
       $("#imagen").attr("src", "https://www.google.com.co/maps/vt/data=U4aSnIyhBFNIJ3A8fCzUmaVIwyWq6RtIfB4QKiGq_w,t847wSN-5dhHSzYjADG_0NVIfzrunYaZZIaXaY3Wp3VBytua8pxe5ar3gco8SVVb0U2BoPZL-ZEyCmAl24EtXRqWe4afDabkmBPm4J1DT402HHquLsZXR4FNGj08LgXT9yWJ8vGmJfZFM4tBgohKWA1I3IJNVxACP6fcUzaSGNXmwwdBPjBGoMqSLs_uRL7ov7Vx3ghXWNj8YsQh");
       $("#parrafo").text("España, también denominado Reino de España, es un país soberano, miembro de la Unión Europea, constituido en Estado social y democrático de derecho y cuya forma de gobierno es la monarquía parlamentaria.");
    });
});

