// JSONP evita bloqueos CORS habituales entre un frontend estático y Apps Script.
const API={
 call(action,params={}){
  const url=window.APP_CONFIG.API_URL;
  if(!url||url.includes('PEGAR_URL'))return Promise.reject(new Error('Configurá la URL de Apps Script en js/config.js.'));
  return new Promise((resolve,reject)=>{
   const cb='cb_'+Date.now()+'_'+Math.random().toString(36).slice(2),script=document.createElement('script'),query=new URLSearchParams({...params,action,callback:cb});
   const timer=setTimeout(()=>{cleanup();reject(new Error('Tiempo de espera agotado. Revisá la URL y la implementación.'));},20000);
   function cleanup(){clearTimeout(timer);delete window[cb];script.remove()}
   window[cb]=data=>{cleanup();if(!data.ok)reject(new Error(data.error||'Error de API'));else resolve(data.data)};
   script.onerror=()=>{cleanup();reject(new Error('No se pudo conectar con Apps Script.'))};script.src=url+'?'+query.toString();document.body.appendChild(script);
  });
 },
 login:dni=>API.call('login',{dni}),myScores:token=>API.call('myScores',{token}),submitScores:(token,scores)=>API.call('submitScores',{token,scores:JSON.stringify(scores)}),
 adminRows:(token,search)=>API.call('adminRows',{token,search}),adminSaveScores:(token,dni,scores)=>API.call('adminSaveScores',{token,dni,scores:JSON.stringify(scores)}),adminDeleteScores:(token,dni)=>API.call('adminDeleteScores',{token,dni}),adminDeleteYear:(token,dni,year)=>API.call('adminDeleteYear',{token,dni,year}),
 adminUsers:(token,search)=>API.call('adminUsers',{token,search}),adminSetUserAccess:(token,dni,access)=>API.call('adminSetUserAccess',{token,dni,access})
};
