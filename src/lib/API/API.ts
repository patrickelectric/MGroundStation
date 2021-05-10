export interface Notify {
    title?: string,
    body: string,
    icon?: string,
}

export function notify(notification: Notify) {
    notification.title = notification.title || "Companion"
    notification.icon = notification.icon || "img/icons/android-chrome-maskable-192x192.png"
    new Notification(notification.title, { body: notification.body, icon: notification.icon })
}
