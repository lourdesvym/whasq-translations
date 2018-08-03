const messages = {

    // Login
    'Email': 'E-mail',
    'Login': 'Conectarse',
    'Password': 'Contraseña',
    'Provided by your administrator': 'Proporcionado por el administrador',
    'Remember me': 'Recordarme',
    'no-identification-info': 'Si no tienes tu nombre de usuario, contacta el administrador',
    'bad-credentials': 'La informacion no es correcta. Por favor inténtalo nuevamente.', 
    'not-enough-rights': 'No tienes los derechos suficientes para connectarte.', 
    'user-not-found': 'No se ha encontrado al usuario.',

    // General
    'more-info': ' más información',
    'from': 'Desde',
    'to': 'Al',
    'real-time': 'en tiempo real',
    'update': 'Modificar',
    'delete': 'Borrar',
    'previous': 'Anterior',
    'next': 'Siguiente',
    'send': 'Enviar',
    'export-all': 'Exportar todo',
    'yes': 'Si',
    'no': 'No',
    'open': 'Abierto',
    'fullname': 'Nombre y apellido',
    'job-position': 'Puesto de trabajo',
    'assistance':'¿Necesitas ayuda? Contáctanos.',

    // Menu
    'activity': 'Actividad',
    'actives-users': 'Usuarios activos ',
    'registered-users': 'Usuarios registrados',
    'whasqs-answers': 'Whasqs & Respuestas',
    'skills': 'Talentos',
    'time-savings': 'Ganar tiempo',
    'whasqers': 'Whasqers',
    'podium': 'Podio',
    'search': 'Búsqueda',
    'manage': 'Gestión',
    'skills-categories': 'Talentos & Categorías',
    'whasqs': 'Whasqs',
    'whasqs-reports': 'Whasqs señalados',
    'answers-reports': 'Respuestas señaladas',
    'users': 'Usuarios',
    'admin': 'Administrador',
    'targets': 'Objetivos & Gamificación',
    'notifications': 'Notifications', /* TODO */
  
    // Activity
    'eve-computed-kpi': 'indicador calculado el J-1',
    'no-data-for-selected-period': 'No hay datos disponibles para el período seleccionado',
    'no-data-available': 'No hay datos disponibles',

    // ActivityActiveUsers
    'actives-title': 'Usuarios Activos',
    'actives-kpi-title': 'Activos',
    'actives-kpi-help-title': 'Activos',
    'actives-kpi-help-message': 'Este indicador representa el numero de usuarios  que se conectaron al menos una vez en el mes "{month}".',
    'actives-dda-kpi-title': 'Activos DCA',
    'actives-dda-kpi-help-title': 'Activos DCA',
    'actives-dda-kpi-help-message': 'Este indicador representa el numero de usuarios  que han estado conectados desde el comienzo de la actividad.',
    'actives-target-kpi-title': 'Activos - Objetivos',
    'actives-target-kpi-help-title': 'Activos - Objetivos',
    'actives-target-kpi-help-message': 'Este indicador representa la proporción entre el número de usuarios que iniciaron sesión al menos una vez en el mes "{month}" y el objetivo definido. ',
   'actives-evolution-title': 'Evolución de los activos',
    'actives-evolution-help-title': 'Evolución de los activos',
    'actives-evolution-help-message': 'Este indicador representa el numero de usuarios activos.',
    'actives-dda-evolution-title': 'Evolución de los activos DCA',
    'actives-dda-evolution-help-title': 'Evolución de los activos DCA',
    'actives-dda-evolution-help-message': 'Este indicador representa el numero de usuarios activos acumulados desde la creación de la store.',
    'actives-notregistered-evolution-title': 'Evolución de los activos - registro',
    'actives-notregistered-evolution-help-title': 'Evolución de los activos - registro',
    'actives-notregistered-evolution-help-message':'Este indicador representa el número de usuarios activos al restar los usuarios registrados.',
    
    // ActivityRegisteredUsers
    'registered-title': 'Usuarios registrados - {month}',
    'registered-kpi-title': 'Registrados',
    'registered-kpi-help-title': 'Registrados',
    'registered-kpi-help-message': 'Este indicador representa el numero de usuarios que se registraron en el mes "{month}".',
    'registered-inactives-kpi-title': 'Porcentaje de registrados no activos',
    'registered-inactives-kpi-help-title': 'Porcentaje de registrados no activos',
    'registered-inactives-kpi-help-message': 'Este indicador representa la relación entre el número de usuarios que se registraron en el mes "{mes}" sin iniciar sesión y el numero total de usuarios registrados en el mes.',
    'registered-inactives-evolution-title': 'Evolución del numero de registrados',
    'registered-inactives-evolution-help-title': 'Evolución del numero de registrados ',
    'registered-inactives-evolution-help-message': 'Este indicador representa el numero de usuarios registrados.',
  
    // ActivityWhasqs
    'whasqs-answers-title': 'Whasqs & Respuestas - {month}',
    'whasqs-answers-kpi-title': 'Numero de Whasqs y respuestas',
    'whasqs-answers-kpi-help-title': 'Número de Whasqs y repuestas',
    'whasqs-answers-kpi-help-message': 'Este indicador representa el número de whasq publicados más el numero de respuestas publicadas en el mes"{month}".',
    'whasqs-by-whasqer-kpi-title': 'Numero de Whasqs / Autor del whasqs',
    'whasqs-by-whasqer-kpi-help-title': 'Numero de Whasqs / Autor del whasqs',
    'whasqs-by-whasqer-kpi-help-message': 'Este indicador representa el numero de whasq publicados en el mes "{month}" creados por el autor del whasq.',
    'answers-kpi-title': 'Numero de respuestas',
    'answers-kpi-help-title': 'Numero de respuestas',
    'answers-kpi-help-message': 'Este indicador representa el numero de respuestas publicadas en el mes"{month}".',
    'answers-by-creator-kpi-title': 'Número de respuestas / Autor de las respuestas',
    'answers-by-creator-kpi-help-title': 'Numero de respuestas / Autor de las respuestas',
    'answers-by-creator-kpi-help-message': 'Este indicador representa el numero de respuestas durante el mes de "{month}" por el autor de las respuestas.',
    'whasqs-with-contribution-kpi-title': 'Porcentaje de Whasqs con interacciones  ',
    'whasqs-with-contribution-kpi-help-title': 'Porcentaje de Whasqs con interacciones',
    'whasqs-with-contribution-kpi-help-message': 'Este indicador representa el porcentaje de whasqs que recibieron respuestas en el mes "{month}". ',
    'whasqs-with-contribution-dda-kpi-title': 'Porcentaje de Whasqs con interacciones DCA',
    'whasqs-with-contribution-dda-kpi-help-title': 'Porcentaje de Whasqs con interacciones DCA',
    'whasqs-with-contribution-dda-kpi-help-message': 'Este indicador representa el porcentaje de whasqs que han recibido respuestas.',
    'whasqs-resolved-part-kpi-title': 'Porcentaje de Whasqs resueltos',
    'whasqs-resolved-part-kpi-help-title': 'Porcentaje de Whasqs resueltos',
    'whasqs-resolved-part-kpi-help-message': 'Este indicador representa el porcentaje de whasq que han sido resueltos en el mes"{month}".',
    'whasqs-resolved-part-dda-kpi-title': 'Porcentaje de Whasqs resueltos DCA',
    'whasqs-resolved-part-dda-kpi-help-title': 'Porcentaje de Whasqs resueltos DCA',
    'whasqs-resolved-part-dda-kpi-help-message': 'Este indicador representa el porcentaje de whasq  resueltos.',
    'whasqs-evolution-title': 'Evolución del número de whasqs',
    'whasqs-evolution-help-title': 'Evolución del número de whasqs',
    'whasqs-evolution-help-message': 'Este indicador representa el número acumulado de whasqs.',
    'answers-evolution-title': ' Evolución del número de whasqs',
    'answers-evolution-help-title': 'Evolución del número de respuestas',
    'answers-evolution-help-message': 'Este indicador representa el número acumulado de respuestas.',
  
    // ActivitySkills
    'skills-title': 'Talentos',
    'skills-dda-kpi-title': 'Cantidad total de talentos identificados DCA',
    'skills-dda-kpi-help-title': 'Cantidad total de talentos identificados DCA',
    'skills-dda-kpi-help-message': 'Este indicador representa el numero de talentos que han sido identificados por los whasqers desde el comienzo de la actividad.',
    'skills-part-kpi-title': ' Porcentaje de talentos únicos identificados',
    'skills-part-kpi-help-title': 'Porcentaje de talentos únicos identificados',
    'skills-part-kpi-help-message': 'Este indicador representa la relación entre el número de talentos únicos que han sido identificados por los whasqers desde el comienzo de la actividad y el número de talentos que existen.',
    'skills-evolution-title': 'Evolución del número de talentos identificados en los whasqs',
    'skills-evolution-help-title': 'Evolución del número de talentos identificados en los whasqs',
    'skills-evolution-help-message': 'Este indicador representa el numero de talentos identificados en los whasqs.',
    'most-used-cats-whasqs-kpi-title': 'Top 5 de las categorías más utilizadas en los whasqs',
    'most-used-cats-whasqs-kpi-help-title': 'Top 5 de las categorías más utilizadas en los whasqs',
    'most-used-cats-whasqs-kpi-help-message-1': 'En esta tabla encontraras  las 5 categorías que contienen los talentos más utilizados en los whasqs.', 
    'most-used-cats-whasqs-kpi-help-message-2': 'Los puntos de colores representan el número de talentos usados en los whasqs en cada categoría correspondiente.',
    'most-used-skills-whasqs-kpi-title': 'Top 5 de los talentos más utilizados en los whasqs',
    'most-used-skills-whasqs-kpi-help-title': 'Top 5 de los talentos más utilizados en los whasqs',
    'most-used-skills-whasqs-kpi-help-message-1': 'En esta tabla encontraras los 5 talentos más utilizados en los whasqs.',
    'most-used-skills-whasqs-kpi-help-message-2': 'Los puntos de colores representan el número de veces que cada talento ha sido utilizado en un whasq.',
    'most-used-whasqers-kpi-title': 'Top 5 de los  talentos  más identificados por los whasqers',
    'most-used-whasqers-kpi-help-title': 'Top 5 de los talentos más identificados por los whasqers',
    'most-used-whasqers-kpi-help-message-1': 'En esta tabla encontraras los 5 talentos más identificados por los whasqers.',
    'most-used-whasqers-kpi-help-message-2': 'Los puntos de colores representan el número de veces que cada talento ha sido identificado por los whasqers.',
    'less-used-whasqers-kpi-title': 'Top 5 de los talentos menos identificados por los whasqers',
    'less-used-whasqers-kpi-help-title': 'Top 5 de los talentos menos identificados por los whasqers',
    'less-used-whasqers-kpi-help-message-1': 'En esta tabla encontraras los 5 talentos menos identificados en los whasqs.',
    'less-used-whasqers-kpi-help-message-2': 'Los puntos de colores representan  el número de veces que cada talento ha sido identificado por los whasqers.',
  
    // TimeSavings
    'time-savings-title': 'Ganar tiempo - {month}',
    'minutes-earned-kpi-title': 'Minutos ganados en el mes',
    'minutes-earned-kpi-help-title': 'Minutos ganados en el mes',
    'minutes-earned-kpi-help-message': 'Este indicador representa el número minutos ganados en el mes"{month}".',
    'minutes-earned-dda-kpi-title': 'Minutos ganados DCA',
    'minutes-earned-dda-kpi-help-title': 'Minutos ganados  DCA',
    'minutes-earned-dda-kpi-help-message': 'Este indicador representa el número de minutos ganados desde el comienzo de la actividad.',
  
    // Podium
    'podium-title': 'Podio',
    'whasqers-of-month': 'Whasqers del mes de',
    'no-podium-for-selected-month': 'No hay podio disponible para el mes seleccionado',
  
    // Card-user
    'answers-label': 'RESPUESTAS',
    'solutions-label': 'SOLUCIONES',
    'see-profile': 'Ver el perfil',
  
    // Search
    'search-title': 'Buscar',
    'search-by-name-placeholder': 'Buscar por el apellido...',
    'no-result-select-criteria': 'No hay resultados. Por favor, introduzca al menos un criterio.',
  
    // CategoriesSearchBlock
    'dynamic-search-title': 'Búsqueda dinámica',
  
    // SkillsCategories
    'skills-categories-title': 'Talentos & Categorías',
    'update-cat-for-lang': 'Modificación de la categoría para el idioma  {lang}',
    'update-skill-for-cat-and-lang-fr': 'Modificación del talento para la categoría "{cat}" y el idioma FR',
    'add-cat-for-lang-fr': 'Agregar categoría para el idioma FR',
    'add-skill-for-cat-and-lang-fr': 'Agregar talento para la categoría "{cat}" y el idioma FR',
    'delete-cat-confirm-message': 'Estas seguro de quieres borrar esta categoria?',
    'delete-skill-confirm-message': 'Estas seguro que quieres borrar este talento?',
    'choose-lang': 'Elegir el idioma',
    'add-lang': 'Agregar un idioma',
    'add-cat': 'Agregar una categoría',
  
    // InfoMessage
    'cat-deleted': 'La categoría "{cat}" ha sido borrada.',
    'error-deleting-cat': 'Se produjo un problema al borrar la categoría "{cat}".',
    'skill-deleted': 'El talento "{skill}" ha sido borrado.',
    'error-deleting-skill': 'Se produjo un problema al borrar el talento "{skill}".',
  
    // SkillCategoriesModal
    'already-existing-cat': 'Ya existe(n) la(s) categoría(s)',
    'already-existing-skill': 'Ya existe(n) los talento(s)',
    'no-existing-cat': 'No existe esta categoría ',
    'no-existing-skill': 'Este talento no existe ',
  
    // CreateLanguageModal
    'add-new-lang': ' Agregar un nuevo idioma',
    'already-implemented-langs': 'Idiomas ya implantados',
  
    // WhasqsList 
    'whasqs-title': 'Whasqs',
    'block-whasq-confirm-message': '¿Estas seguro que quieres bloquear este whasq ?',
    'unblock-whasq-confirm-message': '¿Estas seguro que quieres desbloquear este whasq?',
    'ban-user-confirm-message': '¿Estas seguro que quieres prohibir este usuario ?',
    'unban-user-confirm-message': '¿Esta seguro que quieres levantar la prohibición a este usuario ?',
    'remove-whasq-confirm-message': '¿Estas seguro que quieres borrar este whasq ?',
    'add-whasq': 'Agregar un Whasq',
    'whasqs-list': 'Lista de Whasqs',
    'whasqs-column-id': 'ID',
    'whasqs-column-creation': 'Creación',
    'whasqs-column-update': 'Actualizar',
    'whasqs-column-title': 'Titulo',
    'whasqs-column-status': 'Estado',
    'whasqs-column-urgent': 'Urgente',
    'whasqs-column-answers': 'Respuestas',
    'whasqs-column-read': 'Leídos',
    'whasqs-column-creator': 'Autor',
    'whasqs-column-skills': 'Talentos',
    'whasqs-column-actions': 'Acciones',
    'whasq-resolved-by': 'Resuelto por ',
    'whasq-resolved-at': 'el',
    'whasqs-action-save-updates': 'Guardar las modificaciones',
    'whasqs-action-edit-whasq': 'Modificar el whasq',
    'whasqs-action-unblock-whasq': 'Desbloquear el whasq',
    'whasqs-action-block-whasq': 'Bloquear el whasq',
    'whasqs-action-see-whasq-channel': 'Ver la conversación del whasq',
    'whasqs-action-unban-user': 'Retirar la prohibición al usuario',
    'whasqs-action-ban-user': 'Prohibir el usuario',
    'whasqs-action-remove-whasq': 'Borrar el whasq',
  
    // WhasqChannelModal
    'whasq-channel-title': 'Conversación del whasq "{whasq-title}"',
    'usefull-answer': 'likes',
    'champion-answer': 'campeón(a)',
  
    // AddWhasqModal 
    'add-whasq-title': 'Agregar un nuevo whasq',
    'add-whasq-item-title': 'Titulo',
    'add-whasq-item-message': 'Mensaje',
    'add-whasq-item-exchange': 'Cambio',
    'add-whasq-item-optionnal': 'Opción',
    'add-whasq-item-channel': 'Canal',
    'add-whasq-item-first-skill': 'Primer talento',
    'add-whasq-item-second-skill': 'Segundo talento',
    'add-whasq-item-third-skill': 'Tercer talento',
    'add-whasq-item-notify-around': '¿Notificar a mi alrededor?',
    'add-whasq-item-urgent': '¿Urgente ?',
    'add-whasq-item-send-everyone': '¿Enviar a todos?',
  
    // WhasqsReports
    'whasqs-reports-title': 'Whasqs señalados',
    'whasqs-reports-unblock-whasq-confirm-message': '¿Estas seguro que quieres desbloquear este whasq?',
    'whasqs-reports-unban-user-confirm-message': '¿Estas seguro que quieres levantar la prohibición a este usuario ?',
    'whasqs-reports-ban-user-confirm-message': '¿Estas seguro que quieres prohibir a este usuario?',
    'whasqs-reports-remove-whasq-confirm-message': '¿Estas segura que quieres borrar este whasq ?',
    'whasqs-reports-list': 'Lista de Whasq señalados',
    'whasqs-reports-column-id': 'ID',
    'whasqs-reports-column-creation-date': 'Fecha de creación',
    'whasqs-reports-column-last-update': 'Ultima actualización',
    'whasqs-reports-column-title': 'Titulo',
    'whasqs-reports-column-status': 'Estado',
    'whasqs-reports-column-urgent': 'Urgente',
    'whasqs-reports-column-answers': 'Respuestas',
    'whasqs-reports-column-creator': 'Autor',
    'whasqs-reports-column-reported-by': 'Señalado por',
    'whasqs-reports-column-actions': 'Acciones',
    'whasq-reports-resolved-by': 'Resuelto por',
    'whasq-reports-resolved-at': 'el',
    'whasqs-reports-action-save-updates': 'Guardar las modificaciones',
    'whasqs-reports-action-edit-whasq': 'Modificar el whasq',
    'whasqs-reports-action-unblock-whasq': 'Desbloquear el whasq',
    'whasqs-reports-action-see-whasq-channel': 'Ver la conversación del whasq',
    'whasqs-reports-action-unban-user': 'Retirar la prohibición al usuario',
    'whasqs-reports-action-ban-user': 'Prohibir al usuario',
    'whasqs-reports-action-remove-whasq': 'Borrar el whasq',
  
    // AnswersReports 
    'answers-reports-title': 'Respuestas señaladas',
    'answers-reports-unblock-answer-confirm-message': '¿Estas seguro que quieres desbloquear a esta persona?',
    'answers-reports-unban-user-confirm-message': '¿Estas seguro que quieres retirar la prohibición a este usuario?',
    'answers-reports-ban-user-confirm-message': '¿Estas seguro que quieres prohibir este usuario?',
    'answers-reports-remove-answer-confirm-message': '¿Estas seguro que quieres borrar esta respuesta?',
    'answers-reports-list': 'Lista de respuesta señaladas ',
    'answers-reports-column-id': 'ID',
    'answers-reports-column-creation': 'Fecha de creación ',
    'answers-reports-column-last-update': 'Ultima actualización',
    'answers-reports-column-message': 'Mensaje',
    'answers-reports-column-usefull-count': 'Número de likes',
    'answers-reports-column-champion': 'Campeón ?',
    'answers-reports-column-creator': 'Autor',
    'answers-reports-column-reported-by': 'Señalado por',
    'answers-reports-column-actions': 'Acciones',
    'answers-reports-action-save-updates': 'Guardar las modificaciones',
    'answers-reports-action-edit-answer': 'Modificar la ',
    'answers-reports-action-unblock-answer': 'Desbloquear la respuesta',
    'answers-reports-action-see-whasq-channel': 'Ver la conversación del whasq',
    'answers-reports-action-unban-user': 'Retirar la prohibición del usuario',
    'answers-reports-action-ban-user': 'Prohibir el usuario',
    'answers-reports-action-remove-answer': 'Borrar la respuesta',
  
    // Users
    'users-title': 'Usuarios',
    'users-ban-confirm-message': '¿Estas seguro que quieres prohibir este usuario ?',
    'users-unban-confirm-message': '¿Estas seguro que quieres retirar la prohibición a este usuario?',
    'users-archive-confirm-message': '¿Estas seguro que quieres archivar este usuario ?',
    'users-import-csv': 'Importar CSV',
    'users-list': 'Lista de Whasqers',
    'users-column-id': 'ID',
    'users-column-register-date': 'Fecha de inscripción',
    'users-column-last-connection': 'Ultima conexión',
    'users-column-avatar': 'Avatar',
    'users-column-fullname': 'Nombre y apellido',
    'users-column-title': 'Titulo',
    'users-column-email': 'E-mail',
    'users-column-actions': 'Acciones',
    'users-action-see-profile': 'Ver el perfil',
    'users-action-unban-user': 'Retirar la prohibición del usuario',
    'users-action-ban-user': 'Prohibir el usuario',
    'users-action-archive-user': 'Archivar un usuario',
    'users-import-starting': 'El importe de los contactos ha comenzado',
  
    // ImportUsersModal
    'users-import-title': 'Importar contactos',
    'import-users-file-limit': 'Solo los archivos CSV  de una talla inferior a 1Mo son aceptados',
    'import-users-error': 'Se produjo un error al momento de importar los contactos. Por favor inténtelo de nuevo.', 
    'import-users-btn': 'Importar los contactos',
    'import-users-expected-format': 'Format attendu', /* TODO */
    'import-users-fullname': 'Nom complet', /* TODO */
    'import-users-email': 'Email', /* TODO */
    'import-users-job-position': 'Poste', /* TODO */
    'import-users-phone': 'Téléphone', /* TODO */

    // Targets
    'targets-title': 'Objectivos & Gamificación',
    'targets-update-message': 'El objetivo"{target}" ha sido actualizado',
    'targets-geoloc-perimeter-updated': 'El perímetro de localización ha sido actualizado',
    'targets-points-atribution-updated': 'la atribución de puntos  ha sido actualizada',
    'targets-target': 'Objetivos',
    'targets-trimester': '3 meses',
    'targets-bimester': '6 meses',
    'targets-year': '12 meses',
    'targets-active-users': 'usuarios activos',
    'targets-geoloc-perimeter': 'Perímetro de localización',
    'targets-perimeter': 'Perímetro',
    'targets-gamification': 'Gamificación',
    'targets-approved-answer': 'Respuesta aceptada',
    'targets-usefull-answer': 'Respuesta likes',
    'targets-recommended-skill': 'Talento recomendado',
    'targets-points': 'puntos',
    
    // Header
    'header-profile': 'Perfil',
    'header-logout': 'Desconectarse',
    'french': 'Francés',
    'english': 'Ingles',
    'spanish': 'Español',
    'italien': 'Italiano',
  
    // Sidebar
    'sidebar-navigation': 'Navegación',
  
    // Profile ¿
    'profile': 'Perfil',
    'profile-title': 'Perfil usuario',
    'profile-ban-user-confirm-message': '¿Estas seguro que quieres bloquear este usuario?',
    'profile-edit-skill-confirm-message': 'Cuidado, si modificas este talento todos los usuarios serán afectados. ¿Estas seguro que quieres continuar?',
    'profile-remove-skill-confirm-message':'¿Estas seguro que quieres retirar este talento a este usuario?',
    'profile-archive-user-confirm-message': '¿Estas seguro que quieres archivar este usuario ?',
    'whasqer-profile': 'Perfil del Whasqer',
    'profile-account-creation': 'Crear cuenta',
    'profile-last-connection': 'Ultima conexión',
    'profile-last-update': 'última actualización',
    'profile-whasqs-column': 'WHASQS',
    'profile-answers-column': 'RESPUESTAS',
    'profile-solutions-column': 'SOLUCIONES',
    'profile-block-button': 'Bloquear',
    'profile-archive-button': 'Archivar',
    'profile-user-archived': 'Este usuario esta archivado',
    'profile-skills-subtitle': 'Sus talentos',
    'profile-no-listed-skill': 'Este talento no esta en la lista',
  
    // AddUserSkillModal
    'add-skill-for-user': 'Agregar un talento a{fullname}',
    'already-existing-skills-for-user': 'Talento(s) ya presente(s) para el usuario',
    'available-skills-for-user': 'Talento(s) disponible(s) del usuario',
  
    // SuperAdminStores
    'store-selection': 'Elegir la store',
    'store-choice-validation': 'Aceptar la elección de la store',
  
    // StoreLogoUpload
    'choose-company-logo': 'Elegir el logo de nuestra empresa',
    'drop-file-here-or-click': 'Deja tu archivo aquí o dale clic para seleccionar el archivo que quieres importar',
    'company-logo-size-limit': 'Solo las imágenes de un 1Mo son aceptadas',
    'company-logo-square-required': 'La imagen debe tener un formato cuadrado.', 
    'error-importing-company-logo': 'Se produjo un error al importar. Inténtalo de nuevo.',
    'import-company-logo': 'Importar el logo',

    // Notifications
    'notifications-title': 'Notifications', /* TODO */
    'notifications-list': 'Liste de notifications', /* TODO */
    'notifications-column-id': 'Id', /* TODO */
    'notifications-column-type': 'Type', /* TODO */
    'notifications-column-data': 'Données', /* TODO */
    'notifications-column-owner': 'Propriétaire', /* TODO */
    'notifications-column-shared': 'Partagé ?', /* TODO */
    'notifications-column-creation': 'Date de création', /* TODO */
    'notifications-column-message': 'Message', /* TODO */
    'notifications-no-data': 'Vous n\'avez actuellement aucune notification', /* TODO */
}

export default messages