import { atom } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 100,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationsAtom = atom({
  key: "notificationAtom",
  default: 13,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 10,
});
