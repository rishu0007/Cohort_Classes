import { atom, selector } from "recoil";
import axios from 'axios'

// export const networkAtom = atom({
//     key: "newtorkAtom",
//     default: 104
// });

// export const jobsAtom = atom({
//     key: "jobsAtom",
//     default: 0
// });

// export const notificatonAtom = atom({
//     key: "notificationAtom",
//     default: 12
// });

// export const messagingAtom = atom({
//     key: "messagingAtom",
//     default: 0
// });

// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: ({get}) => {
//         const networkNotificationCount = get(networkAtom)
//         const jobsNotificationCount = get(jobsAtom)
//         const notificationCount = get(notificatonAtom)
//         const messageNotificationCount = get(messagingAtom)
//         return networkNotificationCount + jobsNotificationCount + notificationCount + messageNotificationCount;
//     }
// })

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkSelector",
        get: async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.jobs + allNotifications.messaging + allNotifications.network +
        allNotifications.notifications
    }
})