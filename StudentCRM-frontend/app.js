document.addEventListener('DOMContentLoaded', () => {
  loadTable(); 
});

async function loadTable() {
  const stdTable = document.getElementById("tblStudent");

  let tableHeader = `
      <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Age</th>
      </tr>`;

  try {
      const response = await fetch("http://localhost:8080/student/all");
      const data = await response.json();

      const tableRows = data.map(student => `
          <tr>
              <td>${student.id}</td>
              <td>${student.name}</td>
              <td>${student.address}</td>
              <td>${student.age}</td>
          </tr>
      `).join('');

      stdTable.innerHTML = tableHeader + tableRows;
  } catch (error) {
      console.error("Error loading table data:", error);
  }
}

async function addStudent() {
  const name = document.getElementById("studentName").value;
  const address = document.getElementById("studentAddress").value;
  const age = document.getElementById("studentAge").value;

  if (name && address && age && age>0) {
      const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, address, age })
      };

      try {
          const response = await fetch("http://localhost:8080/student", requestOptions);
          if (response.ok) {
             await loadTable();  
          } else {
              console.error("Failed to add student:", response.statusText);
          }
      } catch (error) {
          console.error("Error adding student:", error);
      }
  }
}
