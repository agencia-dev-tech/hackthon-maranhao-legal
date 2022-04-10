const isWindow =  typeof window !== "undefined";

const userAgent = isWindow ? window?.navigator?.userAgent?.toLowerCase() : "";
const platform =  isWindow ? window?.navigator?.platform : [];

function isIOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(platform)
  // iPad on iOS 13 detection
  || (userAgent?.includes("Mac") && "ontouchend" in document)
}


export function isAndroid() {
  return userAgent?.indexOf('android') !== -1;
};

export function getWhatsAppBaseUrl () {
  
  if (isAndroid() || isIOS()) {
    // use this link for android devices
    return `whatsapp://send`;
  }
  return `https://wa.me/`;

};

export function generateLinkWhasApp(text) {
  return `${getWhatsAppBaseUrl()}?text=${encodeURIComponent(text)}`;
}