var localStorageFactory = function(){
	var storage = {
		save:function(clave, valor){
			if(typeof(Storage) !== "undefined") {
			    localStorage.setItem(clave, JSON.stringify(valor));
			} else {
			    // Sorry! No Web Storage support..
			}
		},
		get: function(clave){
			if(typeof(Storage) !== "undefined") {
			    return JSON.parse(localStorage.getItem(clave));
			} else {
			    null;
			}
		}
	};
	return storage;
};