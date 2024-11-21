import initializeFirebase from "./firebaseConfig.js";
import admin from 'firebase-admin';


initializeFirebase();
const sendFCMNotification = async (fcmToken, title, message) => {
  const messagePayload = {
    token: fcmToken,
    notification: {
      title,
      body: message,
    },
  };

  try {
    const response = await admin.messaging().send(messagePayload);
    console.log('Notification sent successfully:', response);
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};

export default sendFCMNotification;