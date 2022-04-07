
const URL = "http://localhost:3000/api/users";



function fetchData() {
    fetch(URL)
    .then(response => {
        console.log(response);
       if (!response.ok) {
           throw Error("Error! =)")
       }
       return response.json();

    })
    .then(data => {
        console.log(data);
        const html = data.map(posts => {
        return `

        <body style ="text-align: center">
        <div>
        <table>
        <tr>
          <th>Id</th>
          <th>First name</th>
          <th>Last name</th>
        </tr>
        <tr>
          <td>${posts._id}</td>
          <td>${posts.firstname}</td>
          <td>${posts.lastname}</td> <br>
          <button id="post-btn" onclick=deleteUser('${posts._id}')>Delete user!</button>
        </tr>
      </table>
      </div>
      </body>



      <form id="myform" onsubmit="updateUser(fname, lname)">
      <label for="fname">First name:</label><br>
      <input type="text" id="fname" name="fname" ><br>
      <label for="lname">Last name:</label><br>
      <input type="text" id="lname" name="lname" ><br><br>
      <input type="submit" value="Update user!">
    </form> 
    <p>-------------------------------------------------------------------</p>

        `;
        

        })
        .join("");
        console.log(html);
        document.querySelector('#app')
        .insertAdjacentHTML("afterbegin", html);
    })
    .catch(err => {
        console.log(err);
    });
}

fetchData();


async function updateUser(fname, lname) {
  try {
    let response = await fetch(`http://localhost:3000/api/users/${item.id}`, {
        method: "PATCH",
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json",
        },
    });
} catch (err) {
}
}


function createUser(data) {

}


function deleteUser(data) {

  fetch("http://localhost:3000/api/users/" + data, {
    method: 'DELETE',
  })
  .then(res => {
    return res.json()
  }) 
  .then(data => console.log(data))
  window.location.href = "app.html";
}
