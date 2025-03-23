function addRow() {
    const time = document.getElementById("timeInput").value;
    const activity = document.getElementById("activityInput").value;
    const places = document.getElementById("placesInput").value;

    // Make sure none of the fields are empty
    if (time === "" || activity === "" || places === "") {
      alert("Please fill all fields");
      return;
    }

    if (places < 0) {
      alert("Available places cannot be negative");
      return;
    }

    const table = document.getElementById("gymTable");
    const newRow = table.insertRow(-1); // Add new row at end

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = time;
    cell2.textContent = activity;
    cell3.textContent = places;

    // Clear inputs
    document.getElementById("timeInput").value = "";
    document.getElementById("activityInput").value = "";
    document.getElementById("placesInput").value = "";

  }

// Dropdown, user chooses from certain activities
//No negative numbers for places

