class BrowserNotifications {

    static notify(message) {
        // check if Notification is enabled in this browser
        if(!('Notification' in window)) {
            // Notifications do not work in this browser
            console.log('Notifications do not work in this browser');
            return;
        }

        // see if permissions are granted
        if(window.Notification.permission === 'granted') {
            var notification = new Notification(message);
            console.log('Notification created', message);
            return;
        }

        // if not ask for permissions
        if(Notification.permission !== 'denied') {
            Notification.requestPermission(function(permission){
                // if user accepts create notification
                if(permission === 'granted') {
                    var notification = new Notification(message);
                    console.log('Notification created, after grant', message);
                    return;
                }
                else {
                    // User denied Notifications
                    console.log('User denied Notifications', message);
                }
            });
        }
        else {
            // Notifications have been denied
            console.log('Notifications have been denied', message);
        }

        // denied 
    }
}

export default BrowserNotifications;