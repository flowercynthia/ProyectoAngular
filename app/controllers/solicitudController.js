var solicitudController = function($scope,localStorageFactory){
	/*$scope.solicitud = {
		fecha: "",
		afiliado : {
			nombre:"",
			direccion :"",
			telefono:"",
			noSucursales: 0,
			correo : "",
			horariosAtencion : ""
		},
		estado : ""
	};*/

	this.solicitudes = localStorageFactory.get('solicitudes');

	if(this.solicitudes == null)
		this.solicitudes = [];

	this.addSolicitud = function(sol)
	{
		sol.fecha = new Date();
		sol.estado= 'pendiente';
		this.solicitudes.push(sol);
		localStorageFactory.save('solicitudes',this.solicitudes);
		$scope.solicitud = {};
	};
};