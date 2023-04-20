  
  // NAVBAR

  function openNav() {
    //document.getElementById("mySidebar").style.width = "35%";
    document.getElementById("mySidebar").style.display = "block";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
  }   


  // PRODUCTOS

   
  function inicioProductos(){
      document.getElementById("cuadrado-1").style.display = "block"; 
      document.getElementById('link-std').style.display = 'block';
      document.getElementById('texto-link-std').style.display = 'none';  
      document.getElementById("link-standard-naturales").style.display = "none";  
      document.getElementById("link-standard-tecnicos").style.display = "none";  
      document.getElementById("productos_standard_1").style.display = "none";    
      document.getElementById("productos_standard_2").style.display = "none";  
      document.getElementById("cuadrado-2").style.display = "block"; 
      document.getElementById('link-gind').style.display = 'block';
      document.getElementById('texto-link-gind').style.display = 'none';  
      document.getElementById("link-garantia-naturales").style.display = "none";  
      document.getElementById("link-garantia-tecnicos").style.display = "none";  
      document.getElementById("productos_garantia_1").style.display = "none";  
      document.getElementById("productos_garantia_2").style.display = "none";
      
  }

  function moverLinkStd() {
      document.getElementById('link-std').style.display = 'none';
      document.getElementById('texto-link-std').style.display = 'block';                    
  }

  function mostrarSubtitulosStandard() {
      document.getElementById('link-standard-naturales').style.display = 'block';
      document.getElementById("link-standard-naturales").style.animation = "fade_in_show 1.1s";
      document.getElementById('link-standard-tecnicos').style.display = 'block'; 
      document.getElementById('link-standard-tecnicos').style.display = 'fade_in_show 1.1s'; 
  }

  function moverLinkGInd() {
      document.getElementById('link-gind').style.display = 'none';
      document.getElementById('texto-link-gind').style.display = 'block';                    
  }

  function mostrarSubtitulosGarantia() {
    document.getElementById("link-garantia-naturales").style.display = "block";  
    document.getElementById("link-garantia-naturales").style.animation = "fade_in_show 1.1s";
    document.getElementById("link-garantia-tecnicos").style.display = "block";  
    document.getElementById("link-garantia-tecnicos").style.animation = "fade_in_show 1.1s";
  }


  function mostrarStandardNaturales(){
      document.getElementById("productos_standard_1").style.display = "block";
      document.getElementById("card-tapon1").style.animation = "fade_in_show 1.1s";
      document.getElementById("productos_standard_2").style.display = "none";
      document.getElementById("productos_garantia_1").style.display = "none";  
      document.getElementById("productos_garantia_2").style.display = "none";          
      document.getElementById("cuadrado-1").style.display = "none";   
      document.getElementById("cuadrado-2").style.display = "none";     
  }

  function mostrarStandardTecnicos(){
      document.getElementById("productos_standard_1").style.display = "none";        
      document.getElementById("productos_standard_2").style.display = "block";
      document.getElementById("card-tapon2").style.animation = "fade_in_show 0.9s";
      document.getElementById("card-tapon3").style.animation = "fade_in_show 1.0s";
      document.getElementById("card-tapon4").style.animation = "fade_in_show 1.1s";
      document.getElementById("card-tapon6").style.animation = "fade_in_show 1.2s";
      document.getElementById("productos_garantia_1").style.display = "none";  
      document.getElementById("productos_garantia_2").style.display = "none";          
      document.getElementById("cuadrado-1").style.display = "none";   
      document.getElementById("cuadrado-2").style.display = "none";     
  }

  function mostrarGarantiaNaturales(){
      document.getElementById("productos_garantia_1").style.display = "block";
      document.getElementById("card-tapon5").style.animation = "fade_in_show 1.1s";
      document.getElementById("productos_standard_1").style.display = "none";
      document.getElementById("productos_standard_2").style.display = "none";  
      document.getElementById("productos_garantia_2").style.display = "none";          
      document.getElementById("cuadrado-1").style.display = "none";   
      document.getElementById("cuadrado-2").style.display = "none";     
  }

  function mostrarGarantiaTecnicos(){
      document.getElementById("productos_garantia_2").style.display = "block";
      document.getElementById("card-tapon7").style.animation = "fade_in_show 1.1s";
      document.getElementById("productos_standard_1").style.display = "none";
      document.getElementById("productos_standard_2").style.display = "none";  
      document.getElementById("productos_garantia_1").style.display = "none";          
      document.getElementById("cuadrado-1").style.display = "none";   
      document.getElementById("cuadrado-2").style.display = "none";     
  }    