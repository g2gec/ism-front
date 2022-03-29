const handleNotification = (titulo = "", mensaje = "", icono = "") => {
      // Se crea la variable notificacion sin iniciarla
      var notificacion;

      // Se verifica el soporte de notificaciones en el navegador
      if (!("Notification" in window)) {
          alert("Notificaciones no soportadas");

      }else if(Notification.permission === "granted"){
          // Envía la notificación cuando esta autorizado en el navegador
          notificacion = new Notification(titulo,{body: mensaje, icon: icono});

      }else if(Notification.permission !== "denied"){
          // Solicita el permiso cuando este esta en default, para recibir las notificaciones
          Notification.requestPermission(function(permission){
              if(permission === "granted"){
                  notificacion = new Notification(titulo,{body: mensaje, icon: icono});
              }
          });
      }
  }

  module.exports = {
    handleNotification
  }