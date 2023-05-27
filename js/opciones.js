(async ( )=>{//funcion autocombocada
	const {value:pais} =await Swal.fire({
		title:'Bienvenida Agos!!!!!',
	   // text:
	   // html:
	   icon: 'success',
	   // confirmButtonText:
		footer:'Esta es infomacion importante',
	   // width:
	   // padding:
	   // background:
	   // grow:
	   // backdrop:
		//timer: '5000',
		//timerProgressBar:true,
	   // toast:
		position: 'center', 
		allowOutsideClick:true, 
		allowEscapeKey:false,
		allowEnterKey:false,
		stopKeydownPropagation: false,
   
		input: 'select',
		inputPlaceholder: 'Ingrese su Pais',
		inputValue:' ',
		inputOptions: {
		   Mexico:'Mexico',
		   España:'España',
		   Argentina:'Argentina'
		},
	   
	     customClass:{
 // 	container:
	    	popup: 'popup-container',
	   // 	header:
	   // 	title:
	   // 	closeButton:
	   // 	icon:
	   // 	image:
	   // 	content:
	   // 	input:
	   // 	actions:
	   // 	confirmButton:
	   // 	cancelButton:
	   // 	footer:	
   
	   },
	  
	    showConfirmButton: 'true',
	    confirmButtonColor: '#3E60E9',
	    confirmButtonAriaLabel: 'Seleccionar',
   
	    showCancelButton:'true',
	    cancelButtonText:'true',
	   // cancelButtonColor:
	    cancelButtonAriaLabel:'Cancelar',
	   
	    buttonsStyling: 'true',	  
		showCloseButton: 'true',
	    closeButtonAriaLabel:'true',
   
   
	    imageUrl:' img/4.png',
	    imageWidth: '200px',
	   // imageHeight:
	    imageAlt: 'imagen de camara'
   });
   if(pais){// si el pais existe
	Swal.fire({
		title: `Seleccionaste ${pais}`// creamos un mensaje con el pais que selecciono
	});
   }
})();


