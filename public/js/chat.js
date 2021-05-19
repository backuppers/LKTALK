const socket = io();

const delivery = (event) => {
  event.preventDefault();
  if (!message.value) return;
  socket.emit('message', message.value);
  message.value = '';
}

const cardTemplate = info => {
  return `
    <div class='card-panel scale-transition scale-out'>
      <div class='timestamp pink white-text'>
        ${ new Date().getHours() }:${ new Date().getMinutes() }
      </div>
      <span class='profile'>
        <i class='material-icons pink-text small'> account_circle </i>
        <span class='username'>
          ${ info.username }
          </span>
      </span>
      <div>
        ${ info.message }
      </div>
    </div>
  `;
}
const noticeTemplate = info => {
  return `
    <div class='card scale-transition scale-out'>
      <div class='center-align'>
        ${ info.message }
      </div>
    </div>
  `;
}
const sideMemberTelmpate = info => {
  return `
    <li>
      <a href='#'>
        ${ info.username }
      </a>
    </li>
  `;
}
const floatMemberTemplate = info => {
  return `
    <li>
      <a class='btn-floating pink tooltipped' data-position='left' data-tooltip='${ info.username }' href='#'>
        <i class='material-icons'>person</i>
      </a>
    </li>
  `;
}

const printMessage = (content) => {
  const card = $(content);
  $(viewer).append(card);

  const scroll_bottom = list.scrollHeight;
  $(list).animate({
    scrollTop: scroll_bottom
  }, 300);

  setTimeout(() => {
    card.removeClass('scale-out');
  }, 100);
}

const refreshMembers = members => {
  $(float_members).html('');
  $(side_members).html('');
  $(members_count).html(members.length);
  $('.btn-floating')[0].dataset.tooltip = `${ members.length }명 접속중`;
  members.map( elem => {
    const info = { username: elem };
    
    let member = sideMemberTelmpate(info);
    $(side_members).append($(member));
    
    member = floatMemberTemplate(info);
    $(float_members).append($(member));
  })
  $(floater).floatingActionButton({ hoverEnabled: false });
  $('.tooltipped').tooltip();
  $('.btn-floating').addClass('pulse');
  setTimeout( pulseend => $('.btn-floating').removeClass('pulse'), 3000);
}

$(deliver).submit(delivery);

socket.on('someone has connected', info => {
  const content = noticeTemplate(info);
  printMessage(content);
  refreshMembers(info.members);
})

socket.on('someone has disconnected', info => {
  const content = noticeTemplate(info);
  printMessage(content);
  refreshMembers(info.members);
})

socket.on('message', info => {
  const content = cardTemplate(info);
  printMessage(content);
});

socket.on('disconnect', reason => {
  alert('서버가 종료되었습니다.');
  location.href ='/login';
})

