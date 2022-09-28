const socket = io();
// Cliente
const soketUsuario = {};
soketUsuario.integrante = document
  .getElementById("idAlias")
  .textContent.toString()
  .split("::")[0];
soketUsuario.alias = document
  .getElementById("idAlias")
  .textContent.toString()
  .split("::")[1];

let idio = "";

socket.on("idsocket", (data) => {
  soketUsuario.idio = data;
});//recvir del servidor


socket.emit("soketUsuario", soketUsuario);//enviar al servidor

socket.on("agregarUsuario", (soketUsuario) => {
  const idUsuario = document
    .getElementById("idAlias")
    .textContent.toString()
    .split("::")[0];

  if (idUsuario !== soketUsuario.integrante) {
    const div = document.querySelector("._1-FMR _15WYQ focusable-list-item mesajeUsuario");

    div.insertAdjacentHTML("beforeend", agregarUusuario(soketUsuario));
  }
});

socket.on("mensajedeusuario", (soketUsuario) => {
   const idUsuario = document
     .getElementById("idAlias")
     .textContent.toString()
     .split("::")[0];
 
   if (idUsuario !== soketUsuario.integrante) {
     const div = document.querySelector("._1-FMR _15WYQ focusable-list-item mesajeUsuario");
 
     div.insertAdjacentHTML("beforeend", mensageCliente());
   }
 });

function mensageCliente(){
   const text=document.getElementsByClassName('selectable-text copyable-text')[2].textContent.toString().trim()

   const msg = `
   
   <div
   tabindex="-1"
   class="_1-FMR message-out focusable-list-item"
   data-id="true"
 >
   <span></span>
   

   <div
     data-testid="msg-container"
     class="_1-lf9 _3mSPV _18q-J"
   >
     <span
       data-testid="tail-out"
       data-icon="tail-out"
       class="_1kh65"
       ><svg
         viewBox="0 0 8 13"
         width="8"
         height="13"
         class=""
       >
         <path
           opacity=".13"
           d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
         ></path>
         <path
           fill="currentColor"
           d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
         ></path></svg
     ></span>

     <div class="ItfyB _3nbHh">
       <span aria-label="Tú:"></span>
       <div class="_22Msk">
         <div
           class="copyable-text"
           data-pre-plain-text="[4:26 p. m., 21/9/2022] Jocs: "
         >
           <div class="_1Gy50">
             <span
               dir="ltr"
               class="i0jNr selectable-text copyable-text"
               ><span
                 >${text}</span
               ></span
             ><span class="_20bHr _2ui2p"></span>
           </div>
         </div>
         <div class="_1beEj">
           <div
             class="gq1t1y46 lak21jic e4p1bexh cr2cog7z le5p0ye3 _1WSmF"
             data-testid="msg-meta"
           >
             <span class="l7jjieqr fewfhwl7" dir="auto"
               > Yo:4:26 p.&nbsp;m.</span
             >
             <div class="do8e0lj9 l7jjieqr k6y3xtnu">
               <span
                 data-testid="msg-dblcheck"
                 aria-label=" Leído "
                 data-icon="msg-dblcheck"
                 class="_3l4_3"
                 ><svg
                   viewBox="0 0 16 15"
                   width="16"
                   height="15"
                   class=""
                 >
                   <path
                     fill="currentColor"
                     d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                   ></path></svg
               ></span>
             </div>
           </div>
         </div>
       </div>

       
       <span></span>





<span></span>

       <div class="_39T_J"></div>
     </div>
     
   </div>
 </div>

   
   `
   return msg
}
function agregarUusuario(soketUsuario) {
  const codigoHtml = `

   <div
data-testid="cell-frame-container"
class="_2nY6U vq6sj _3C4Vf" id ="usuario_acceso_${soketUsuario.alias}"
>
<div class="_2EU3r">
<div class="HONz8">
<div
class="_3GlyB"
style="height: 49px; width: 49px"
>
<img
src="../../public/img/invitado.png"
alt=""
draggable="false"
class="_8hzr9 M0JmA i0jNr"
style="visibility: visible"
/>
</div>
</div>
</div>
<div class="_3OvU8">
<div
role="gridcell"
aria-colindex="2"
class="_3vPI2"
>

<div class="zoWT4">
<span
dir="auto"
title="24545"
class="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr i0jNr"
>${soketUsuario.alias}</span
>
</div>
<div class="_1i_wG">${soketUsuario.hora}</div>
</div>
<div class="_37FrU">
<div class="_1qB8f">
<span
class="Hy9nV"
title="‪https://m.facebook.com/story.php?story_fbid=pfbid0d7T6h4psPA9dqNtfZLvmwNYrrz4E5xXUm7BTAWV3ABpGFSjUyVi71v8sNeHMkYqFl&amp;id=41267802635&amp;sfnsn=scwspwa‬"
data-testid="last-msg-status"
><span dir="auto" class="l7jjieqr i0jNr"
>online</span>
<span
dir="ltr"
class="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr i0jNr"
></span
></span
>
</div>
<div
role="gridcell"
aria-colindex="1"
class="_1i_wG"
>
<span
><div
class="_1pJ9J"
style="
transform: scaleX(1) scaleY(1);
opacity: 1;
"
>
<span
class="l7jjieqr cfzgl7ar ei5e7seu h0viaqh7 tpmajp1w c0uhu3dl riy2oczp dsh4tgtl sy6s5v3r gz7w46tb lyutrhe2 qfejxiq4 fewfhwl7 ovhn1urg ap18qm3b ikwl5qvt j90th5db aumms1qt"
aria-label="1 mensaje no leído"
></span
>
</div></span
><span></span><span></span>
</div>
</div>
</div>
</div> `;

  return codigoHtml;
}
