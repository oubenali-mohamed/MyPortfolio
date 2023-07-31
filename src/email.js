(function(){
    const publicKey = import.meta.env.VITE_PUBLIC_KEY
    emailjs.init(publicKey);
  })();