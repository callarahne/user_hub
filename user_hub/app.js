const BASE_URL = 'https://jsonplace-univclone.herokuapp.com';

function fetchUsers() {
    return fetch(`${ BASE_URL }/users`).then(function (response) {
        return response.json();
      // call json on the response, and return the result
    }).catch(function (error) {
        console.error(error);
      // use console.error to log out any error
    });
  }

  fetchUsers().then(function (data) {
    console.log(data);
  });

  [
    {
      id: 1, 
      name: "Leanne Graham", 
      username: "Bret", 
      email: "Sincere@april.biz", 
      address: {
        
      }, 
      
    },
    {
      id: 2, 
      name: "Ervin Howell", 
      username: "Antonette", 
      email: "Shanna@melissa.tv", 
      address: {
        
      }, 
    
    },
    
  ]

  function renderUser(user) {
    return $(`
<div class="user-card">
  <header>
    <h2>${user.name}</h2>
  </header>
  <section class="company-info">
    <p><b>Contact:</b>${user.email}</p>
    <p><b>Works for:</b>${user.company.name}</p>
    <p><b>Company creed:</b> "${user.company.catchPhrase}, which will ${user.company.bs}!"</p>
  </section>
  <footer>
    <button class="load-posts">POSTS BY ${user.username}</button>
    <button class="load-albums">ALBUMS BY ${user.username}</button>
  </footer>
</div>
`).data('user', user);
}

function renderUserList(userList) {
    $('#user-list').empty();
    userList.forEach((user) => $('#user-list').append(renderUser(user)));
// at the bottom of your code
fetchUsers().then(function (data) {
    renderUserList(data);
  });
}

function bootstrap() {
    fetchUsers().then(renderUserList);
    // move the line about fetchUsers into here
  }
  
  bootstrap();

  $('#user-list').on('click', '.user-card .load-posts', function () {
    const user = $(this).closest('.user-card').data('user');
    fetchUsers().then(function(data) {
        renderUserPosts(data);
    })
    // load posts for this user
    // render posts for this user
  });
  
  $('#user-list').on('click', '.user-card .load-albums', function () {
      const user = $(this).closest('.user-card').data('user');
      fetchUsers().then(function(data) {
          renderUserAlbums(data);
      })
    // load albums for this user
    // render albums for this user
  });

  /* get an album list, or an array of albums */
function fetchUserAlbumList(userId) {
  return fetchData(`${ BASE_URL }/users/${ userId }/albums?_expand=user&_embed=photos`);
  // }).catch(function (error); {
  //   console.error(error);
  }

fetchUserAlbumList(1).then(function (albumList) {
  console.log(albumList);
});

/* render a single album */
function renderAlbum(album) {
  <div class="album-card">
  <header>
    <h3>quidem molestiae enim, by Bret </h3>
  </header>
  <section class="photo-list">
    <div class="photo-card"></div>
    <div class="photo-card"></div>
    <div class="photo-card"></div>
    {/* <!-- ... --> */}
  </section>
</div>

}

/* render a single photo */
function renderPhoto(photo){
//   <div class="photo-card">
//   <a href="https://via.placeholder.com/600/92c952" target="_blank">
//     <img src="https://via.placeholder.com/150/92c952">
//     <figure>accusamus beatae ad facilis cum similique qui sunt</figure>
//   </a>
// </div>);

}

/* render an array of albums */
function renderAlbumList(albumList) {
  
}

function fetchData(url) {
  return fetch(url).then(function (res) {
    return res.json();
  }).catch(function (error) {
    console.error(error);
  })
}