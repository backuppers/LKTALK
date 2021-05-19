$(floater).floatingActionButton({
  hoverEnabled: false
})

const messageCardStamp = (information) => {
  const content = `
    <div class='card-panel hoverable scale-transition scale-out'>
      <span class='profile'>
        <i class='material-icons pink-text small'> account_circle </i>
        <span class='username'> ${ information.name } </span>
        <span class='timestamp'> ${ new Date().getHours() + ':' + new Date().getMinutes() } </span>
      </span>
      <div>
        ${ information.message }
      </div>
    </div>
  `
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

const delivery = (event) => {
  event.preventDefault();
  console.log('test');
  const information = {
    name: 'admin',
    message: 'lorem ipsum .............'
  }
  messageCardStamp(information);
}

$(deliver).submit(delivery);

// const socket = io();