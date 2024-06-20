window.addEventListener('keydown', function (e) {
  document.querySelector('#insert').innerHTML = `
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  `;
	// ${e.key === ' ' ? 'space' : e.key} this is to check space key when it pressed then the e.key gives empty
});
