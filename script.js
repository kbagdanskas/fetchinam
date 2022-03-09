fetch("https://gravel-few-bowler.glitch.me/notices")
  .then((res) => res.json())
  .then((data) => {
    displayNotices(data);
  });

function displayNotices(notice) {
  notice.forEach((item) => {
    boardDown.innerHTML += `    
    <div class="boardFirst">    
    <time datetime="${new Date(Number(item.timestamp)).toLocaleDateString(
      "lt"
    )}">${new Date(Number(item.timestamp)).toLocaleString("LT")}</time>
    <div class="board">
      <div class="insideBoard">
      #${item.id}<span id="username" style="color: ${getRandomColor()};"> ${
      item.first_name
    } ${item.last_name}</span>
        
      </div>
      <div class="boardContent">
        ${item.content}
      </div>
    </div>
    </div>
  `;
  });
}

function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

fetch("https://gravel-few-bowler.glitch.me/expenses")
  .then((res) => res.json())
  .then((data) => {
    displayExpenses(data);
  });

function displayExpenses(expense) {
  expense.forEach((item) => {
    tbodyEx.innerHTML += `
    <tbody>
      <tr>
        <td>${item.id}</td>
        <td>${item.type}</td>
        <td>${item.amount}</td>
        <td>${item.isPaidStatus}</td>
        <td>${item.email}</td>
        <td>${item.date}</td>
      </tr>
    </tbody>
  </table>
    `;
  });
}
