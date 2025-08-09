function showCharges() {
  const pickup = document.getElementById("pickup").value;
  const drop = document.getElementById("drop").value;

  if (!pickup || !drop) {
    alert("Please enter both pickup and drop locations.");
    return;
  }

  // Example: Charges based on fixed rates
  const distance = Math.floor(Math.random() * 10) + 1; // Simulating distance in KM
  document.getElementById("bikeCharge").innerText = (distance * 10).toFixed(2);
  document.getElementById("autoCharge").innerText = (distance * 15).toFixed(2);
  document.getElementById("carCharge").innerText = (distance * 20).toFixed(2);

  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}

function confirmRide() {
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");
}

let selectedRide = null;

function selectRide(element) {
  // Remove highlight from all ride cards
  document.querySelectorAll('.ride-card').forEach(card => {
    card.style.border = "2px solid transparent";
    card.style.background = "#f8f9fa";
  });

  // Highlight selected card
  element.style.border = "2px solid #f2ececff";
  element.style.background = "#0b0b0bff";

  // Save selection
  selectedRide = element.getAttribute("data-ride");
}

function confirmRide() {
  if (!selectedRide) {
    alert("Please select a ride before confirming.");
    return;
  }

  // Continue with existing functionality
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");

  // Optional: Show which ride was chosen
  alert(`You selected: ${selectedRide}`);
}
