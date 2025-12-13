import type { IEmailConfirmation } from "~/types/IEmailConfirmation";
import type { IEmailMessage } from "~/types/IEmailMessage";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_3vexa7i";
const TEMPLATE_MESSAGE_ID = "template_message";
const TEMPLATE_CONFIRMATION_ID = "template_confirmation";
const PUBLIC_KEY = "2V1Svme8xyPiol8YX";

export const useEmail = () => {
  const loading = ref(false);
  const error = ref<string | null>(null);

  const sendMessageEmail = async (payload: IEmailMessage) => {
    loading.value = true;
    error.value = null;

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_MESSAGE_ID, payload, PUBLIC_KEY);
    } catch (err: any) {
      console.log("Fail.. ", err?.text || err);
      error.value = err?.text || "Något gick fel";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const sendConfirmationEmail = async (payload: IEmailConfirmation) => {
    loading.value = true;
    error.value = null;
    
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_CONFIRMATION_ID, payload, PUBLIC_KEY);
    } catch (err: any) {
      console.log("Fail.. ", err?.text || err);
      error.value = err?.text || "Något gick fel";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    error,
    sendMessageEmail,
    sendConfirmationEmail,
  };
};
