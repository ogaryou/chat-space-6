$(function(){ 
  function buildHTML(message){
     var html =
      `<div class="message" data-message-id=${message.id}>
         <div class="up-message">
           <div class="up-message__user-name">
             ${message.user_name}
           </div>
           <div class="up-message__date">
             ${message.date}
           </div>
         </div>
         <div class="return-message">
              <p class="return-message__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
       return html;
      };
$('.js-form').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
 .done(function(data){
  var html = buildHTML(data);
  $('.messages').append(html);
  $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');   
  $('.messages').val('')
 })
 .fail(function(){
  alert('error');
})