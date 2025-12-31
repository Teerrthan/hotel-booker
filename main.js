function bookHotel() {
    var price = document.getElementById("hotel").value;
    var checkIn = new Date(document.getElementById("check-in-date").value);
    var checkOut = new Date(document.getElementById("check-out-date").value);
    var roomNumber = document.getElementById("room-number").value;
    var days = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
    if (days < 0 || isNaN(days)) {
        alert("Please select valid dates");
    } else {
        var totalPrice = price * days * roomNumber;
    document.getElementById("result").innerHTML = `Booking Successful! <br> Total Days: ${days} <br> Rooms: ${roomNumber} <br> Total Amount: $${totalPrice}`;
    }
    
}